"use client";

import React, { useState, useEffect } from "react";
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

  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchTours();
  }, [activeFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      let url = "/api/tours?limit=100&status=active&category=Tour du lịch";

      if (activeFilter !== "ALL") {
        url += `&region=${activeFilter}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        // LỌC CHỈ LẤY TOUR TRONG NƯỚC (không có continent hoặc continent = null)
        const domesticTours = data.docs.filter(
          (tour: Tour) => !tour.continent || tour.continent === null
        );
        setTours(domesticTours);
      }
    } catch (error) {
      console.error("Error fetching tours:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTours = tours.filter((tour) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      tour.title.toLowerCase().includes(query) ||
      tour.location.toLowerCase().includes(query)
    );
  });

  const getImageUrl = (tour: Tour) => {
    return (
      tour.imageUrl ||
      (typeof tour.image === "string" ? tour.image : tour.image?.url || "/placeholder.jpg")
    );
  };

  const currentDeals = filteredTours
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
    .map((tour) => ({
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
      timeLeft: tour.timeLeft || "",
    })) as any;

  const totalPages = Math.ceil(filteredTours.length / ITEMS_PER_PAGE);

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

        {loading ? (
          <div className="py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-500">Đang tải tours...</p>
          </div>
        ) : (
          <>
            <DomesticResultsInfo
              activeFilter={activeFilter}
              regions={REGIONS}
              totalCount={filteredTours.length}
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