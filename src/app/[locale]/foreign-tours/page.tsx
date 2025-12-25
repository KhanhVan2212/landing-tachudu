"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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

interface Tour {
  id: string;
  title: string;
  slug: string;
  category: string;
  continent?: string;
  subRegion?: string;
  type: string;
  location: string;
  image: any;
  imageUrl?: string;
  description: string;
  price: string;
  originalPrice: string;
  discount?: string;
  duration?: string;
  timeLeft?: string;
  rating: number;
  reviews: number;
  featured: boolean;
  status: string;
}

const ForeignToursPage = () => {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeContinent, setActiveContinent] = useState("ALL");
  const [activeSubRegion, setActiveSubRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch tours from API
  useEffect(() => {
    fetchForeignTours();
  }, []);

  const fetchForeignTours = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/tours?limit=100&status=active");
      const data = await response.json();

      if (data.success) {
        // Lọc chỉ lấy tour nước ngoài (có continent không null)
        const foreignTours = data.docs.filter(
          (tour: Tour) => tour.continent !== null && tour.continent !== undefined
        );
        setTours(foreignTours);
      }
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
    setLoading(false);
  };

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
  const filteredDeals = tours.filter((deal) => {
    // Must be a tour
    if (deal.category !== "Tour du lịch") return false;

    // Apply Continent Filter
    if (activeContinent !== "ALL") {
      if (deal.continent !== activeContinent) return false;
    }

    // Apply Sub-region Filter (Only for Asia)
    if (activeContinent === "ASIA" && activeSubRegion) {
      if (deal.subRegion !== activeSubRegion) return false;
    }

    // Apply Search Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        deal.title.toLowerCase().includes(query) ||
        deal.location?.toLowerCase().includes(query) ||
        deal.description?.toLowerCase().includes(query)
      );
    }

    return true;
  });

  const totalPages = Math.ceil(filteredDeals.length / ITEMS_PER_PAGE);
  const currentDeals = filteredDeals.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Helper function to get image URL
  const getImageUrl = (tour: Tour) => {
    if (tour.imageUrl) return tour.imageUrl;
    if (typeof tour.image === "string") return tour.image;
    if (typeof tour.image === "object" && tour.image?.url) return tour.image.url;
    return "/placeholder.jpg";
  };

  // Convert tours to Deal format for ForeignTourList
  const dealsFormatted = currentDeals.map((tour) => ({
    id: tour.slug || tour.id,
    title: tour.title,
    location: tour.location,
    image: getImageUrl(tour),
    price: tour.price,
    originalPrice: tour.originalPrice,
    discount: tour.discount || "-0%",
    duration: tour.duration || "",
    timeLeft: tour.timeLeft || "",
    rating: tour.rating,
    reviews: tour.reviews,
    type: tour.type,
    category: tour.category,
  })) as any; // Type assertion to match Deal interface

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
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-orange-600 border-t-transparent"></div>
              <p className="text-gray-600">Đang tải tours...</p>
            </div>
          </div>
        ) : (
          <>
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
              currentDeals={dealsFormatted}
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

export default ForeignToursPage;