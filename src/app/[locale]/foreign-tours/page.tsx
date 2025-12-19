"use client";
import React, { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import {
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Search,
  Globe,
} from "lucide-react";
import { dealsData } from "@/data/dealsData";

const ITEMS_PER_PAGE = 6;

// Continent Filters
const CONTINENTS = [
  { id: "ALL", label: "Tất cả" },
  { id: "ASIA", label: "Châu Á" },
  { id: "EUROPE", label: "Châu Âu" },
  { id: "AUSTRALIA", label: "Châu Úc" },
  { id: "AMERICAS", label: "Châu Mỹ" },
];

// Sub-regions for Asia
const ASIA_REGIONS = [
  { id: "Southeast Asia", label: "Đông Nam Á" },
  { id: "China", label: "Trung Quốc" },
  { id: "Northeast Asia", label: "Đông Bắc Á" },
  { id: "Middle East", label: "Trung Đông" },
];

const ForeignToursPage = () => {
  const [activeContinent, setActiveContinent] = useState("ALL");
  const [activeSubRegion, setActiveSubRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset sub-region when continent changes
  useEffect(() => {
    if (activeContinent !== "ASIA") {
      setActiveSubRegion(null);
    }
    setCurrentPage(1);
  }, [activeContinent]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeSubRegion, searchQuery]);

  // Filter logic
  const filteredDeals = dealsData.filter((deal) => {
    // Must be a tour
    if (deal.category !== "Tour du lịch") return false;

    // Must NOT be domestic (simple check: if region is one of the foreign keys)
    const foreignRegions = [
      "Southeast Asia",
      "China",
      "Northeast Asia",
      "Middle East",
      "Europe",
      "Australia",
      "Americas",
      "International",
    ];
    if (!deal.region || !foreignRegions.includes(deal.region)) return false;

    // Apply Continent Filter
    if (activeContinent !== "ALL") {
      if (activeContinent === "EUROPE" && deal.region !== "Europe")
        return false;
      if (activeContinent === "AUSTRALIA" && deal.region !== "Australia")
        return false;
      if (activeContinent === "AMERICAS" && deal.region !== "Americas")
        return false;

      if (activeContinent === "ASIA") {
        const asiaRegions = [
          "Southeast Asia",
          "China",
          "Northeast Asia",
          "Middle East",
        ];
        // Special case: 'International' might be generic, but let's assume specific regions for now or include it
        if (
          !asiaRegions.includes(deal.region) &&
          deal.region !== "International"
        )
          return false;
      }
    }

    // Apply Sub-region Filter (Only for Asia currently)
    if (activeContinent === "ASIA" && activeSubRegion) {
      if (deal.region !== activeSubRegion) return false;
    }

    // Apply Search Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        deal.title.toLowerCase().includes(query) ||
        deal.location?.toLowerCase().includes(query)
      );
    }

    return true;
  });

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
    <div className="min-h-screen bg-white pb-20">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-orange-600 py-16 text-center text-white pt-[200px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold uppercase tracking-wide drop-shadow-md md:text-4xl">
            Du Lịch Nước Ngoài
          </h1>
          <p className="mx-auto mt-4 max-w-2xl px-4 sm:text-lg font-medium text-orange-50 drop-shadow">
            Khám phá 5 châu, trải nghiệm văn hóa và kỳ quan thế giới
          </p>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Search and Main Filter Bar */}
        <div className="mb-8 rounded-xl border border-gray-100 bg-white p-4 shadow-xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Tìm kiếm tour, quốc gia..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>

            {/* Continent Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {CONTINENTS.map((continent) => (
                <button
                  key={continent.id}
                  onClick={() => setActiveContinent(continent.id)}
                  className={`rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
                    activeContinent === continent.id
                      ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                      : "bg-gray-50 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {continent.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-region Filter (Asia Only) */}
        {activeContinent === "ASIA" && (
          <div className="animate-fade-in-down mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {ASIA_REGIONS.map((region) => (
                <button
                  key={region.id}
                  onClick={() =>
                    setActiveSubRegion(
                      activeSubRegion === region.id ? null : region.id,
                    )
                  }
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                    activeSubRegion === region.id
                      ? "border-orange-200 bg-orange-100 text-orange-700"
                      : "border-gray-200 bg-white text-gray-500 hover:border-orange-200 hover:text-orange-600"
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Info */}
        <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-orange-100 p-2 text-orange-600">
              <Globe size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {activeSubRegion
                  ? ASIA_REGIONS.find((r) => r.id === activeSubRegion)?.label
                  : CONTINENTS.find((c) => c.id === activeContinent)?.label}
              </h2>
              <p className="text-sm text-gray-500">
                Tìm thấy{" "}
                <span className="font-bold text-orange-600">
                  {filteredDeals.length}
                </span>{" "}
                tour phù hợp {searchQuery && `cho "${searchQuery}"`}
              </p>
            </div>
          </div>
        </div>

        {/* Tour Grid */}
        {currentDeals.length > 0 ? (
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
                      <img
                        src={deal.image}
                        alt={deal.title}
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
                        <span className="rounded border border-orange-100 bg-orange-50 px-2 py-1 text-xs font-bold uppercase text-orange-600">
                          {deal.type}
                        </span>
                        <span className="flex items-center text-xs font-medium text-gray-500">
                          <Clock size={14} className="mr-1 text-orange-500" />{" "}
                          {deal.timeLeft}
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
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`rounded-full border p-3 transition-colors ${
                    currentPage === 1
                      ? "cursor-not-allowed border-gray-200 text-gray-300"
                      : "border-gray-300 text-gray-700 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`h-12 w-12 rounded-full font-medium transition-all ${
                        currentPage === page
                          ? "scale-110 transform bg-orange-600 text-white shadow-lg shadow-orange-600/30"
                          : "border border-gray-200 bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
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
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-32 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
              <Globe size={32} />
            </div>
            <p className="text-xl font-medium text-gray-500">
              Chưa có tour nào cho khu vực này.
            </p>
            <p className="mt-2 text-gray-400">
              Vui lòng thử tìm kiếm khác hoặc quay lại sau.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForeignToursPage;
