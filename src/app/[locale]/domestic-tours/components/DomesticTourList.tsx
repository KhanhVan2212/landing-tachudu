import React from "react";
import Link from "next/link";
import {
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { Deal } from "@/data/dealsData";
import Image from "next/image";

interface DomesticTourListProps {
  currentDeals: Deal[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const DomesticTourList = ({
  currentDeals,
  totalPages,
  currentPage,
  onPageChange,
}: DomesticTourListProps) => {
  if (currentDeals.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-32 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
          <MapPin size={32} />
        </div>
        <p className="text-xl font-medium text-gray-500">
          Chưa có tour nào cho khu vực này.
        </p>
        <p className="mt-2 text-gray-400">
          Vui lòng xem lại từ khóa hoặc chọn khu vực khác.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {currentDeals.map((deal) => (
          <Link href={`/deals/${deal.id}`} key={deal.id}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute left-4 top-4 z-10 animate-pulse rounded-lg bg-red-600 px-3 py-1 font-bold text-white shadow-lg">
                  {deal.discount}
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Image
                  src={deal.image}
                  alt={deal.title}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-orange-600 backdrop-blur-sm">
                    Xem chi tiết <ArrowRight size={12} className="ml-1" />
                  </span>
                </div>
              </div>
              <div className="flex flex-grow flex-col p-6">
                <div className="mb-3 flex items-start justify-between">
                  {/* <span className="rounded border border-orange-100 bg-orange-50 px-2 py-1 text-xs font-bold uppercase text-orange-600">
                    {deal.type}
                  </span> */}
                  <span className="flex items-center text-xs font-medium text-gray-500">
                    <Clock size={14} className="mr-1 text-orange-500" />{" "}
                    {deal.duration}
                  </span>
                </div>
                <h3 className="mb-3 line-clamp-2 h-14 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">
                  {deal.title}
                </h3>
                <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-sm text-gray-400 line-through decoration-red-400">
                      {deal.originalPrice}
                    </p>
                    <p className="text-2xl font-bold text-red-600">
                      {deal.price}
                    </p>
                  </div>
                  <button className="rounded-full bg-orange-50 p-2 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center space-x-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`rounded-full border p-3 transition-colors ${
              currentPage === 1
                ? "cursor-not-allowed border-gray-200 text-gray-300"
                : "border-gray-300 text-gray-700 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`h-12 w-12 rounded-full font-medium transition-all ${
                currentPage === page
                  ? "scale-110 transform bg-orange-600 text-white shadow-lg shadow-orange-600/30"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`rounded-full border p-3 transition-colors ${
              currentPage === totalPages
                ? "cursor-not-allowed border-gray-200 text-gray-300"
                : "border-gray-300 text-gray-700 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default DomesticTourList;
