import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Include phone in schema
const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid! (>= 2 chars)"),
  email: z.string().email({ message: "Email is invalid!" }),
  phone: z.string().min(8, "Phone number is invalid!"),
  message: z.string().min(5, "Message is too short! (>= 5 chars)"),
  // Honeypot field - should be empty
  confirm_email: z.string().optional(),
});

// Simple in-memory rate limit store
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = EmailSchema.safeParse(body);

    if (!parsed.success) {
      const details = parsed.error.issues.map((i) => ({
        path: i.path.join("."),
        message: i.message,
      }));
      return Response.json(
        { error: "Validation failed", details },
        { status: 400 },
      );
    }

    // 1. Honeypot Check
    // If confirm_email has a value, it's likely a bot.
    // Return success to fool the bot, but don't send anything.
    if (parsed.data.confirm_email) {
      console.log("Honeypot hit! Spam blocked.");
      return Response.json({ ok: true });
    }

    // 2. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const lastRequestTime = rateLimitMap.get(ip);

    if (lastRequestTime && now - lastRequestTime < RATE_LIMIT_WINDOW) {
      const remainingTime = Math.ceil(
        (RATE_LIMIT_WINDOW - (now - lastRequestTime)) / 1000 / 60,
      );
      return Response.json(
        {
          error: `Bạn đã gửi tin nhắn quá nhanh. Vui lòng thử lại sau ${remainingTime} phút.`,
        },
        { status: 429 },
      );
    }

    // Update rate limit timestamp
    rateLimitMap.set(ip, now);

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;
    const from = process.env.CONTACT_EMAIL_FROM ?? "onboarding@resend.dev";

    if (!apiKey)
      return Response.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 },
      );
    if (!to)
      return Response.json(
        { error: "Missing CONTACT_EMAIL_TO" },
        { status: 500 },
      );

    const resend = new Resend(apiKey);
    const { fullName, email, phone, message } = parsed.data;

    const { render } = await import("@react-email/render");
    const html = await render(
      <EmailTemplate
        fullName={fullName}
        email={email}
        phone={phone}
        message={message}
      />
    );

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Liên hệ mới từ khách hàng: ${fullName} - ${phone}`,
      replyTo: email,
      html: html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ ok: true, id: data?.id ?? null });
  } catch (err: any) {
    console.error("Internal error:", err);
    return Response.json(
      { error: err?.message || "Internal error" },
      { status: 500 },
    );
  }
}
