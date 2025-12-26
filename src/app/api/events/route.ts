// src/app/api/events/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "../../../../payload.config";

export async function GET(req: NextRequest) {
  try {
    const payload = await getPayload({ config });
    const { searchParams } = new URL(req.url);

    const featured = searchParams.get("featured");
    const highlight = searchParams.get("highlight");
    const limit = parseInt(searchParams.get("limit") || "100");

    const query: any = {
      status: { equals: "published" },
    };

    if (featured === "true") {
      query.featured = { equals: true };
    }

    if (highlight === "true") {
      query.highlight = { equals: true };
    }

    const result = await payload.find({
      collection: "events",
      where: query,
      limit,
      sort: "-order,-createdAt",
      depth: 2,
    });

    // Transform data
    const docs = result.docs.map((doc: any) => {
      let coverImageUrl = "";
      if (doc.coverImage) {
        if (typeof doc.coverImage === "object") {
          coverImageUrl = doc.coverImage.cloudinaryUrl || doc.coverImage.url || "";
        } else {
          coverImageUrl = doc.coverImage;
        }
      }

      const galleryUrls = doc.gallery?.map((g: any) => {
        if (g.image) {
          if (typeof g.image === "object") {
            return {
              url: g.image.cloudinaryUrl || g.image.url || "",
              caption: g.caption || "",
            };
          }
        }
        return null;
      }).filter(Boolean) || [];

      return {
        id: doc.id,
        title: doc.title,
        slug: doc.slug,
        date: doc.date,
        excerpt: doc.excerpt,
        cover: coverImageUrl,
        content: doc.content,
        gallery: galleryUrls,
        featured: doc.featured,
        highlight: doc.highlight,
        category: doc.category,
        order: doc.order,
        status: doc.status,
      };
    });

    return NextResponse.json({
      success: true,
      docs,
      totalDocs: result.totalDocs,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

// THÊM POST METHOD
export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config });
    const body = await req.json();

    const event = await payload.create({
      collection: "events",
      data: body,
    });

    return NextResponse.json({ success: true, doc: event });
  } catch (error: any) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create event" },
      { status: 500 }
    );
  }
}