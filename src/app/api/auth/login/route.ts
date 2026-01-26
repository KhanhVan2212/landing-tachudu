import { NextRequest, NextResponse } from "next/server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "../../../../../payload.config";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const config = await configPromise;
    const payload = await getPayloadHMR({ config });
    const body = await request.json();

    const validation = loginSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: validation.error.errors },
        { status: 400 },
      );
    }

    const { email, password } = validation.data;

    const result = await payload.login({
      collection: "users",
      data: {
        email,
        password,
      },
    });

    return NextResponse.json({
      success: true,
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Login failed",
      },
      { status: 401 },
    );
  }
}
