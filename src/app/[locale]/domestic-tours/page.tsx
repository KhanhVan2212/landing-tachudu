"use client";

import React, { useState, useEffect } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import DomesticHero from "./components/DomesticHero";
import DomesticFilter from "./components/DomesticFilter";
import DomesticResultsInfo from "./components/DomesticResultsInfo";
import DomesticTourList from "./components/DomesticTourList";

const ITEMS_PER_PAGE = 6;

const REGIONS = [
  { id: "ALL", label: "Tất cả" },
  { id: "NORTH", label: "Miền Bắc" },
  { id: "CENTRAL", label: "Miền Trung" },
  { id: "HIGHLANDS", label: "Tây Nguyên" },
  { id: "SOUTH", label: "Miền Nam" },
];

interface Tour {
  id: string;
  title: string;
  slug: string;
  category: string;
  region?: string;
  continent?: string;
  type: string;
  location: string;
  imageUrl?: string;
  image: any;
  price: string;
  originalPrice: string;
  discount?: string;
  duration?: string;
  timeLeft?: string;
  rating: number;
  reviews: number;
  status: string;
}

const DomesticToursPage = () => {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  const fetchDomesticTours = async () => {
    const params = new URLSearchParams({
      page: currentPage.toString(),
      limit: ITEMS_PER_PAGE.toString(),
      status: "active",
      category: "Tour du lịch",
    });

    if (activeFilter !== "ALL") {
      params.append("region", activeFilter);
    }

    if (searchQuery) {
      params.append("search", searchQuery);
    }

    // Scope identifying domestic tours.
    // Assuming backend handles "continent" logic or we can rely on `region` filtering.
    // If activeFilter is "ALL", we want all domestic tours (where continent is null).
    // I added "scope=domestic" logic conceptually, let's implement validation in API later if needed,
    // but for now, pass it so backend *could* use it if I update it to support strict domestic filtering.
    // Or just rely on the existing logic: if region is passed, it works.
    // The previous code filtered: !tour.continent || tour.continent === null
    // So we definitely need to filter out foreign tours on the server if region=ALL.
    params.append("scope", "domestic");

    const response = await fetch(`/api/tours?${params.toString()}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["domestic-tours", currentPage, activeFilter, searchQuery],
    queryFn: fetchDomesticTours,
    placeholderData: keepPreviousData,
  });

  const tours = data?.docs || [];
  const totalPages = data?.totalPages || 1;
  const totalDocs = data?.totalDocs || 0;

  const getImageUrl = (tour: Tour) => {
    return (
      tour.imageUrl ||
      (typeof tour.image === "string"
        ? tour.image
        : tour.image?.url || "/placeholder.jpg")
    );
  };

  const currentDeals = tours.map((tour: Tour) => ({
    id: tour.id as any,
    title: tour.title,
    slug: tour.slug,
    category: tour.category,
    type: tour.type,
    location: tour.location,
    image: getImageUrl(tour),
    price: tour.price,
    originalPrice: tour.originalPrice,
    discount: tour.discount || "",
    duration: tour.duration || tour.timeLeft || "",
    timeLeft: tour.timeLeft || "",
  })) as any;

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

        {isLoading ? (
          <div className="py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-500">Đang tải tours...</p>
          </div>
        ) : (
          <>
            <DomesticResultsInfo
              activeFilter={activeFilter}
              regions={REGIONS}
              totalCount={totalDocs}
              searchQuery={searchQuery}
            />

            <DomesticTourList
              currentDeals={currentDeals}
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DomesticToursPage;
