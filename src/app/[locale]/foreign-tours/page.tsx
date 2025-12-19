"use client";
import React, { useState, useEffect } from "react";
import { dealsData } from "@/data/dealsData";
import ForeignHero from "./components/ForeignHero";
import ForeignFilter from "./components/ForeignFilter";
import ForeignResultsInfo from "./components/ForeignResultsInfo";
import ForeignTourList from "./components/ForeignTourList";

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
      <ForeignHero />

      <div className="relative z-20 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <ForeignFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeContinent={activeContinent}
          setActiveContinent={setActiveContinent}
          activeSubRegion={activeSubRegion}
          setActiveSubRegion={setActiveSubRegion}
          continents={CONTINENTS}
          asiaRegions={ASIA_REGIONS}
        />

        <ForeignResultsInfo
          activeContinent={activeContinent}
          activeSubRegion={activeSubRegion}
          continents={CONTINENTS}
          asiaRegions={ASIA_REGIONS}
          totalCount={filteredDeals.length}
          searchQuery={searchQuery}
        />

        <ForeignTourList
          currentDeals={currentDeals}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ForeignToursPage;
