// src/app/api/events/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "../../../../../payload.config";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config });

    let doc = null;

    // Try to find by ID first
    try {
      doc = await payload.findByID({
        collection: "events",
        id: id,
        depth: 2,
      });
    } catch (idError: any) {
      // If ID lookup fails, try to find by slug
      console.log(`ID lookup failed for ${id}, trying slug...`);

      try {
        const result = await payload.find({
          collection: "events",
          where: {
            slug: { equals: id },
          },
          limit: 1,
          depth: 2,
        });

        if (result.docs && result.docs.length > 0) {
          doc = result.docs[0];
        }
      } catch (slugError) {
        console.error("Slug lookup also failed:", slugError);
      }
    }

    if (!doc) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404 }
      );
    }

    // Check if published
    if (doc.status !== "published") {
      return NextResponse.json(
        { success: false, error: "Event not published" },
        { status: 404 }
      );
    }

    // Transform cover image
    let coverImageUrl = "";
    if (doc.coverImage) {
      if (typeof doc.coverImage === "object") {
        coverImageUrl = doc.coverImage.cloudinaryUrl || doc.coverImage.url || "";
      } else {
        coverImageUrl = doc.coverImage;
      }
    }

    // Transform gallery
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

    const eventData = {
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
      status: doc.status,
    };

    return NextResponse.json({
      success: true,
      doc: eventData,
    });
  } catch (error: any) {
    console.error("Error fetching event:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch event" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config });

    await payload.delete({
      collection: "events",
      id: id,
    });

    return NextResponse.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to delete" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config });
    const body = await req.json();

    const event = await payload.update({
      collection: "events",
      id: id,
      data: body,
    });

    return NextResponse.json({ success: true, doc: event });
  } catch (error: any) {
    console.error("Error updating event:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update" },
      { status: 500 }
    );
  }
}