// app/api/tours/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "../../../../payload.config";

export async function GET(req: NextRequest) {
  try {
    const payload = await getPayload({ config });
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const status = searchParams.get("status") || "active";
    const slug = searchParams.get("slug");
    const region = searchParams.get("region");
    const continent = searchParams.get("continent");
    const subRegion = searchParams.get("subRegion");

    const where: any = { status: { equals: status } };

    if (category) where.category = { equals: category };
    if (featured === "true") where.featured = { equals: true };
    if (slug) where.slug = { equals: slug };

    // Filter cho tour trong nước
    if (region && region !== "ALL") {
      where.region = { equals: region };
    }

    // Filter cho tour nước ngoài
    if (continent) {
      where.continent = { equals: continent };

      // Nếu có subRegion (cho Châu Á)
      if (subRegion) {
        where.subRegion = { equals: subRegion };
      }
    }

    const tours = await payload.find({
      collection: "tours",
      where,
      page,
      limit,
      sort: "-createdAt",
    });

    return NextResponse.json({ success: true, ...tours });
  } catch (error) {
    console.error("Error fetching tours:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch tours" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config });
    const body = await req.json();

    const cleanData: any = {
      title: body.title,
      slug: body.slug,
      category: body.category,
      type: body.type,
      location: body.location,
      description: body.description,
      price: body.price,
      originalPrice: body.originalPrice,
      rating: body.rating || 4.5,
      reviews: body.reviews || 0,
      featured: body.featured || false,
      status: body.status || "active",

      // Tour trong nước
      region: body.region || "ALL",

      // Tour nước ngoài - có thể null nếu không chọn
      continent: body.continent || null,
      subRegion: body.subRegion || null,
    };

    // Các field optional
    if (body.discount) cleanData.discount = body.discount;
    if (body.duration) cleanData.duration = body.duration;
    if (body.timeLeft) cleanData.timeLeft = body.timeLeft;
    if (body.departureDate) cleanData.departureDate = body.departureDate;
    if (body.maxGuests) cleanData.maxGuests = body.maxGuests;

    // Xử lý hình ảnh
    if (body.imageUrl) {
      cleanData.imageUrl = body.imageUrl;
    } else if (body.image && typeof body.image === "string" && body.image.length === 24) {
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

    console.log("Creating tour with cleaned data:", JSON.stringify(cleanData, null, 2));

    const tour = await payload.create({
      collection: "tours",
      data: cleanData,
    });

    return NextResponse.json({ success: true, doc: tour });
  } catch (error: any) {
    console.error("Error creating tour:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to create tour",
      },
      { status: 500 }
    );
  }
}