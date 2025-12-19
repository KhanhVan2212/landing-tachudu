import React, { useState, useEffect } from "react";
import { Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { dealsData } from "@/data/dealsData";

interface DealsListProps {
  category: string;
}

const ITEMS_PER_PAGE = 6;

const DealsList: React.FC<DealsListProps> = ({ category }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const filteredDeals = dealsData.filter((deal) => deal.category === category);
  const totalPages = Math.ceil(filteredDeals.length / ITEMS_PER_PAGE);
  const currentDeals = filteredDeals.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="animate-fade-in mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Ưu đãi {category}
            </h2>
            <span className="ml-4 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              {filteredDeals.length} kết quả
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Trang {currentPage} trên {totalPages}
          </p>
        </div>
      </div>

      {currentDeals.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {currentDeals.map((deal) => (
              <Link href={`/deals/${deal.id}`} key={deal.id}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute left-4 top-4 z-10 rounded-md bg-red-600 px-3 py-1 font-bold text-white shadow-md">
                      {deal.discount}
                    </div>
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-6">
                    <div className="mb-2 flex items-start justify-between">
                      <span className="rounded bg-blue-50 px-2 py-1 text-xs font-bold uppercase text-blue-600">
                        {deal.type}
                      </span>
                      <span className="flex items-center text-xs font-medium text-red-500">
                        <Clock size={12} className="mr-1" /> {deal.timeLeft}
                      </span>
                    </div>
                    <h3 className="mb-3 line-clamp-2 h-14 text-xl font-bold text-gray-900">
                      {deal.title}
                    </h3>
                    <div className="mt-auto flex items-end justify-between pt-4">
                      <div>
                        <p className="text-sm text-gray-400 line-through decoration-red-400">
                          {deal.originalPrice}
                        </p>
                        <p className="text-2xl font-bold text-orange-600">
                          {deal.price}
                        </p>
                      </div>
                      <button className="rounded-full bg-orange-100 p-2 text-orange-600 transition-colors hover:bg-orange-600 hover:text-white">
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
            <div className="mt-12 flex items-center justify-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`rounded-full border p-2 ${
                  currentPage === 1
                    ? "cursor-not-allowed border-gray-200 text-gray-300"
                    : "border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`h-10 w-10 rounded-full font-medium transition-all ${
                      currentPage === page
                        ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30"
                        : "border border-gray-200 bg-white text-gray-700 hover:bg-orange-50"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`rounded-full border p-2 ${
                  currentPage === totalPages
                    ? "cursor-not-allowed border-gray-200 text-gray-300"
                    : "border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-xl bg-gray-50 py-20 text-center">
          <p className="text-lg text-gray-500">
            Hiện chưa có ưu đãi nào cho danh mục này.
          </p>
        </div>
      )}
    </section>
  );
};

export default DealsList;
