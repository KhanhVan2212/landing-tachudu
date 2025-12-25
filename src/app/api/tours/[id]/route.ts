// app/api/tours/[id]/route.ts
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
    const tour = await payload.findByID({
      collection: "tours",
      id: id,
    });

    if (!tour) {
      return NextResponse.json(
        { success: false, error: "Tour not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, doc: tour });
  } catch (error) {
    console.error("Error fetching tour:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch tour" },
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

    const cleanData: any = {};

    // Các field cơ bản
    if (body.title !== undefined) cleanData.title = body.title;
    if (body.slug !== undefined) cleanData.slug = body.slug;
    if (body.category !== undefined) cleanData.category = body.category;
    if (body.type !== undefined) cleanData.type = body.type;
    if (body.location !== undefined) cleanData.location = body.location;
    if (body.description !== undefined) cleanData.description = body.description;
    if (body.price !== undefined) cleanData.price = body.price;
    if (body.originalPrice !== undefined) cleanData.originalPrice = body.originalPrice;
    if (body.discount !== undefined) cleanData.discount = body.discount;
    if (body.duration !== undefined) cleanData.duration = body.duration;
    if (body.timeLeft !== undefined) cleanData.timeLeft = body.timeLeft;
    if (body.rating !== undefined) cleanData.rating = body.rating;
    if (body.reviews !== undefined) cleanData.reviews = body.reviews;
    if (body.featured !== undefined) cleanData.featured = body.featured;
    if (body.status !== undefined) cleanData.status = body.status;
    if (body.departureDate !== undefined) cleanData.departureDate = body.departureDate;
    if (body.maxGuests !== undefined) cleanData.maxGuests = body.maxGuests;

    // Tour trong nước
    if (body.region !== undefined) cleanData.region = body.region;

    // Tour nước ngoài - cho phép null (xóa nếu cần)
    if (body.continent !== undefined) cleanData.continent = body.continent || null;
    if (body.subRegion !== undefined) cleanData.subRegion = body.subRegion || null;

    // Xử lý hình ảnh
    if (body.imageUrl !== undefined) cleanData.imageUrl = body.imageUrl;
    if (body.image && typeof body.image === "string" && body.image.length === 24) {
      cleanData.image = body.image;
    }

    // Xử lý arrays
    if (Array.isArray(body.highlights)) {
      cleanData.highlights = body.highlights.filter(
        (h: any) => h?.highlight && h.highlight.trim()
      );
    }
    if (Array.isArray(body.itinerary)) {
      cleanData.itinerary = body.itinerary.filter(
        (item: any) =>
          item?.day?.trim() && item?.title?.trim() && item?.desc?.trim()
      );
    }
    if (Array.isArray(body.included)) {
      cleanData.included = body.included.filter(
        (s: any) => s?.service && s.service.trim()
      );
    }
    if (Array.isArray(body.excluded)) {
      cleanData.excluded = body.excluded.filter(
        (s: any) => s?.service && s.service.trim()
      );
    }

    console.log("Updating tour with cleaned data:", JSON.stringify(cleanData, null, 2));

    const tour = await payload.update({
      collection: "tours",
      id: id,
      data: cleanData,
    });

    return NextResponse.json({ success: true, doc: tour });
  } catch (error: any) {
    console.error("Error updating tour:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to update tour",
      },
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
      collection: "tours",
      id: id,
    });

    return NextResponse.json({
      success: true,
      message: "Tour deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting tour:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to delete tour",
      },
      { status: 500 }
    );
  }
}