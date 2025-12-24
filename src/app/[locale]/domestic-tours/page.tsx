"use client";
import React, { useState, useEffect } from "react";
import { dealsData } from "@/data/dealsData";
import DomesticHero from "./components/DomesticHero";
import DomesticFilter from "./components/DomesticFilter";
import DomesticResultsInfo from "./components/DomesticResultsInfo";
import DomesticTourList from "./components/DomesticTourList";

const ITEMS_PER_PAGE = 6;

const REGIONS = [
  { id: "ALL", label: "Tất cả" },
  { id: "North", label: "Miền Bắc" },
  { id: "Central", label: "Miền Trung" },
  { id: "South", label: "Miền Nam" },
  { id: "Highlands", label: "Tây Nguyên" },
];

import { useSearchParams } from "next/navigation";

const DomesticToursPage = () => {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  // Filter logic
  const filteredDeals = dealsData.filter((deal) => {
    // Must be a tour
    if (deal.category !== "Tour du lịch") return false;

    // Must be domestic (exclude International)
    // Also excluding explicit foreign regions just in case
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
    if (deal.region && foreignRegions.includes(deal.region)) return false;

    // Apply region filter
    if (activeFilter !== "ALL" && deal.region !== activeFilter) return false;

    // Apply search filter
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
      <DomesticHero />

      <div className="relative z-20 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <DomesticFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          regions={REGIONS}
        />

        <DomesticResultsInfo
          activeFilter={activeFilter}
          regions={REGIONS}
          totalCount={filteredDeals.length}
          searchQuery={searchQuery}
        />

        <DomesticTourList
          currentDeals={currentDeals}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default DomesticToursPage;
