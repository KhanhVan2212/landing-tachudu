"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MapPin, Star, Clock, ArrowRight } from "lucide-react";

interface Tour {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  image: {
    url: string;
    alt?: string;
  } | string;
  imageUrl?: string;
  price: string;
  originalPrice: string;
  discount?: string;
  duration?: string;
  rating: number;
  reviews: number;
  status: string;
}

const FeaturedTours = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedTours();
  }, []);

  const fetchFeaturedTours = async () => {
    try {
      const response = await fetch(
        "/api/tours?featured=true&category=Tour du lịch&limit=4&status=active"
      );
      const data = await response.json();

      if (data.success) {
        setTours(data.docs);
      }
    } catch (error) {
      console.error("Error fetching featured tours:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="bg-white pb-24 pt-[100px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">Đang tải...</div>
        </div>
      </section>
    );
  }

  if (tours.length === 0) {
    return null;
  }

  return (
    <section className="bg-white pb-24 pt-[100px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row md:items-end">
          <div className="text-left">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              Điểm đến hấp dẫn
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Tour Mới - Deal Hời
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-gray-500">
              Khám phá những điểm đến được yêu thích nhất với chi phí tối ưu.
            </p>
          </div>
          <Link
            href="/foreign-tours"
            className="group flex items-center font-semibold text-orange-600 transition-colors hover:text-orange-700"
          >
            Xem tất cả
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Link href={`/deals/${tour.slug || tour.id}`}>
                  <Image
                    src={
                      tour.imageUrl ||
                      (typeof tour.image === "string"
                        ? tour.image
                        : tour.image?.url || "/placeholder.jpg")
                    }
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                {/* Badge */}
                {tour.discount && (
                  <div className="absolute left-4 top-4 rounded-lg bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    {tour.discount}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Location & Rating */}
                <div className="mb-2 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1 text-orange-600">
                    <MapPin size={14} />
                    <span className="max-w-[120px] truncate font-medium">
                      {tour.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span>{tour.rating?.toFixed(1) || "4.5"}</span>
                    <span className="text-gray-400">({tour.reviews || 0})</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">
                  <Link href={`/deals/${tour.slug || tour.id}`}>
                    {tour.title}
                  </Link>
                </h3>

                {/* Duration */}
                <div className="mb-4 flex items-center gap-2 text-xs text-gray-500">
                  <Clock size={14} />
                  <span>{tour.duration || "3 ngày 2 đêm"}</span>
                </div>

                {/* Price Section - Push to bottom */}
                <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 line-through">
                      {tour.originalPrice}
                    </span>
                    <span className="text-lg font-bold text-red-600">
                      {tour.price}
                    </span>
                  </div>
                  <Link
                    href={`/deals/${tour.slug || tour.id}`}
                    className="rounded-lg bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-600 hover:text-white"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;