"use client";

import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import {
  MapPin,
  Clock,
  Calendar,
  Star,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface TourItinerary {
  day: string;
  title: string;
  desc: string;
}

interface Tour {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: string;
  location: string;
  image: {
    url: string;
    alt?: string;
  } | string;
  imageUrl?: string;
  gallery?: Array<{ image: { url: string } }>;
  description: string;
  price: string;
  originalPrice: string;
  discount?: string;
  duration?: string;
  timeLeft?: string;
  rating: number;
  reviews: number;
  highlights?: Array<{ highlight: string }>;
  itinerary?: Array<TourItinerary>;
  included?: Array<{ service: string }>;
  excluded?: Array<{ service: string }>;
  status: string;
}

const DealDetail = () => {
  const params = useParams();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      fetchTourDetail(params.id as string);
    }
    window.scrollTo(0, 0);
  }, [params]);

  const fetchTourDetail = async (id: string) => {
    try {
      // Try to fetch by slug first, then by ID
      let response = await fetch(`/api/tours?slug=${id}&limit=1`);
      let data = await response.json();

      if (!data.success || data.docs.length === 0) {
        // Try by ID
        response = await fetch(`/api/tours/${id}`);
        data = await response.json();
      }

      if (data.success) {
        setTour(data.doc || data.docs[0]);
      }
    } catch (error) {
      console.error("Error fetching tour:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 pb-20 pt-32">
        <div className="text-xl text-gray-600">Đang tải...</div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 pb-20 pt-32">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Không tìm thấy tour
        </h2>
        <Link
          href="/deals"
          className="flex items-center text-orange-600 hover:underline"
        >
          <ArrowLeft className="mr-2" /> Quay lại danh sách
        </Link>
      </div>
    );
  }

  const imageUrl =
    tour.imageUrl ||
    (typeof tour.image === "string" ? tour.image : tour.image?.url || "/placeholder.jpg");

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-20">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-600">
              Trang chủ
            </Link>
            <span className="mx-2">/</span>
            <Link href="/deals" className="hover:text-orange-600">
              Ưu đãi
            </Link>
            <span className="mx-2">/</span>
            <span className="max-w-xs truncate font-medium text-gray-900">
              {tour.title}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <NextImage src={imageUrl} alt={tour.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 p-6 text-white md:p-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="mb-3 inline-block rounded bg-orange-600 px-3 py-1 text-sm font-bold uppercase text-white">
                  {tour.category}
                </span>
                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                  {tour.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200 md:text-base">
                  {tour.location && (
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-orange-400" />
                      {tour.location}
                    </div>
                  )}
                  {tour.timeLeft && (
                    <div className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-orange-400" />
                      {tour.timeLeft}
                    </div>
                  )}
                  <div className="flex items-center">
                    <Star className="mr-2 h-5 w-5 fill-current text-yellow-400" />
                    {tour.rating?.toFixed(1) || "4.5"} ({tour.reviews || 0} đánh giá)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Highlights */}
            {tour.highlights && tour.highlights.length > 0 && (
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Điểm nổi bật
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {tour.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-gray-600">{item.highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Giới thiệu
              </h3>
              <p className="mb-6 whitespace-pre-line leading-relaxed text-gray-600">
                {tour.description}
              </p>
              <div className="flex items-start gap-4 rounded-xl border border-orange-100 bg-orange-50 p-6">
                <ShieldCheck className="h-8 w-8 flex-shrink-0 text-orange-600" />
                <div>
                  <h4 className="font-bold text-gray-900">Cam kết chất lượng</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    TACHUDU cam kết hoàn tiền 100% nếu dịch vụ không đúng như mô tả.
                    Hỗ trợ khách hàng 24/7 trong suốt chuyến đi.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Included */}
            {tour.included && tour.included.length > 0 && (
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Dịch vụ bao gồm
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {tour.included.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-gray-600">{item.service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Lịch trình dự kiến
                </h3>
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px before:bg-gray-200">
                  {tour.itinerary.map((day, idx) => (
                    <div key={idx} className="relative pl-12">
                      <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-orange-100 shadow-sm">
                        <Calendar className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-orange-600">
                          {day.day}
                        </span>
                        <h4 className="mb-2 mt-1 text-lg font-bold text-gray-900">
                          {day.title}
                        </h4>
                        <p className="text-gray-600">{day.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-lg">
              <div className="mb-6">
                <p className="mb-1 text-sm text-gray-500 line-through">
                  Giá gốc: {tour.originalPrice}
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-orange-600">
                    {tour.price}
                  </span>
                  {tour.discount && (
                    <span className="mb-1 rounded bg-red-50 px-2 py-0.5 text-sm font-bold text-red-500">
                      {tour.discount}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="mb-1 text-sm text-gray-500">Loại tour</p>
                  <p className="font-bold text-gray-900">{tour.type}</p>
                </div>
                {tour.duration && (
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <p className="mb-1 text-sm text-gray-500">Thời gian</p>
                    <p className="font-bold text-gray-900">{tour.duration}</p>
                  </div>
                )}
                {tour.timeLeft && (
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <p className="mb-1 text-sm text-gray-500">Thời gian còn lại</p>
                    <p className="font-bold text-red-500">{tour.timeLeft}</p>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="mb-4 block w-full rounded-xl bg-orange-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-orange-600/30 transition-all hover:bg-orange-700"
              >
                Đặt ngay
              </Link>
              <Link href="/contact">
                <button className="w-full rounded-xl border-2 border-orange-600 bg-white py-3 font-bold text-orange-600 transition-colors hover:bg-orange-50">
                  Tư vấn miễn phí
                </button>
              </Link>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h4 className="mb-4 text-center font-bold text-gray-900">
                  Liên hệ hỗ trợ
                </h4>
                <div className="flex justify-center gap-4">
                  <Link
                    href="tel:02439351122"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-gray-500">Hotline</span>
                  </Link>
                  <Link
                    href="mailto:tachuduvn@gmail.com"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-gray-500">Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetail;