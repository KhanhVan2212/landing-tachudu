"use client";

import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import { dealsData, Deal } from "@/data/dealsData";
import {
  MapPin,
  Clock,
  Calendar,
  Star,
  CheckCircle,
  ArrowLeft,
  Share2,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const DealDetail = () => {
  const params = useParams();
  const [deal, setDeal] = useState<Deal | null>(null);

  useEffect(() => {
    if (params?.id) {
      const foundDeal = dealsData.find((d) => d.id === Number(params.id));
      if (foundDeal) {
        setDeal(foundDeal);
      }
    }
    window.scrollTo(0, 0);
  }, [params]);

  if (!deal) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 pb-20 pt-32">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Không tìm thấy ưu đãi
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
              {deal.title}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <NextImage
          src={deal.image}
          alt={deal.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 p-6 text-white md:p-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="mb-3 inline-block rounded bg-orange-600 px-3 py-1 text-sm font-bold uppercase text-white">
                  {deal.category}
                </span>
                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                  {deal.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200 md:text-base">
                  {deal.location && (
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-orange-400" />
                      {deal.location}
                    </div>
                  )}
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-orange-400" />
                    {deal.timeLeft}
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-2 h-5 w-5 fill-current text-yellow-400" />
                    {deal.rating?.toFixed(1)} ({deal.reviews} đánh giá)
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
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Điểm nổi bật
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {deal.highlights?.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Giới thiệu
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                {deal.description}
              </p>
              <div className="flex items-start gap-4 rounded-xl border border-orange-100 bg-orange-50 p-6">
                <ShieldCheck className="h-8 w-8 flex-shrink-0 text-orange-600" />
                <div>
                  <h4 className="font-bold text-gray-900">
                    Cam kết chất lượng
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    TACHUDU cam kết hoàn tiền 100% nếu dịch vụ không đúng như mô
                    tả. Hỗ trợ khách hàng 24/7 trong suốt chuyến đi.
                  </p>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            {deal.itinerary && deal.itinerary.length > 0 && (
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Lịch trình dự kiến
                </h3>
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px before:bg-gray-200">
                  {deal.itinerary.map((day, idx) => (
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
                  Giá gốc: {deal.originalPrice}
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-orange-600">
                    {deal.price}
                  </span>
                  <span className="mb-1 rounded bg-red-50 px-2 py-0.5 text-sm font-bold text-red-500">
                    {deal.discount}
                  </span>
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="mb-1 text-sm text-gray-500">Loại ưu đãi</p>
                  <p className="font-bold text-gray-900">{deal.type}</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="mb-1 text-sm text-gray-500">
                    Thời gian còn lại
                  </p>
                  <p className="font-bold text-red-500">{deal.timeLeft}</p>
                </div>
              </div>

              <button className="mb-4 w-full rounded-xl bg-orange-600 py-4 text-lg font-bold text-white shadow-lg shadow-orange-600/30 transition-all hover:bg-orange-700">
                Đặt ngay
              </button>
              <button className="w-full rounded-xl border-2 border-orange-600 bg-white py-3 font-bold text-orange-600 transition-colors hover:bg-orange-50">
                Tư vấn miễn phí
              </button>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h4 className="mb-4 text-center font-bold text-gray-900">
                  Liên hệ hỗ trợ
                </h4>
                <div className="flex justify-center gap-4">
                  <Link
                    href="#"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-gray-500">Hotline</span>
                  </Link>
                  <Link
                    href="#"
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
