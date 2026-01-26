import { NextRequest, NextResponse } from "next/server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "../../../../../payload.config";
import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
});

export async function POST(request: NextRequest) {
  try {
    const registrationSecret = request.headers.get("x-registration-secret");

    // Require a secret key for registration to prevent public spam
    // If ENV is not set, we might default to blocking or allowing (secure by default: block)
    if (
      process.env.REGISTRATION_SECRET &&
      registrationSecret !== process.env.REGISTRATION_SECRET
    ) {
      return NextResponse.json(
        { success: false, error: "Unauthorized registration attempt" },
        { status: 403 },
      );
    }

    const body = await request.json();
    const validation = registerSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: validation.error.errors },
        { status: 400 },
      );
    }

    const { email, password, name } = validation.data;

    const config = await configPromise;
    const payload = await getPayloadHMR({ config });

    // Kiểm tra số lượng users
    const existingUsers = await payload.find({
      collection: "users",
      limit: 1,
    });

    const isFirstUser = existingUsers.totalDocs === 0;

    // Tạo user mới
    const user = await payload.create({
      collection: "users",
      data: {
        email,
        password,
        name,
        role: isFirstUser ? "admin" : "user",
      },
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Registration failed",
      },
      { status: 400 },
    );
  }
}
