import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "../../../../../payload.config";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise });
    const data = await payload.findGlobal({
      slug: "company-info",
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching company info:", error);
    return NextResponse.json(
      { error: "Failed to fetch company info" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise });
    const body = await req.json();

    const data = await payload.updateGlobal({
      slug: "company-info",
      data: body,
    });

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error updating company info:", error);
    return NextResponse.json(
      {
        error: "Failed to update company info",
        details: error?.message || "Unknown error",
      },
      { status: 500 },
    );
  }
}
