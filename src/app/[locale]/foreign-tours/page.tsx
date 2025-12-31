"use client";
import React, { useState, useEffect } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
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

  const [activeContinent, setActiveContinent] = useState("ALL");
  const [activeSubRegion, setActiveSubRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
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

  const fetchForeignTours = async () => {
    const params = new URLSearchParams({
      page: currentPage.toString(),
      limit: ITEMS_PER_PAGE.toString(),
      status: "active",
      category: "Tour du lịch", // Ensure we only get tours
    });

    if (activeContinent !== "ALL") {
      params.append("continent", activeContinent);
    }

    if (activeContinent === "ASIA" && activeSubRegion) {
      params.append("subRegion", activeSubRegion);
    }

    if (searchQuery) {
      params.append("search", searchQuery);
    }

    // Force continent check (fetching only foreign tours)
    // The API might return mixed if we don't strictly filter,
    // but the original code filtered by client: tour.continent !== null
    // We should probably rely on the fact that if continent is passed, it filters.
    // If "ALL" is selected, we want all *foreign* tours.
    // The current API might not have a flag for "isForeign".
    // Let's check the API behavior. If continent is not passed, it returns all.
    // To filter ONLY foreign tours when "ALL" is selected, we might need a way to say "continent exists".
    // Current API: if (continent) where.continent = { equals: continent };
    // It doesn't seem to support "continent exists".
    // However, the FE previously did: data.docs.filter(tour => tour.continent !== null)
    // I might need to add `isForeign=true` to API or handle "ALL" carefully.
    // For now, let's assume valid foreign tours have a continent.
    // If "ALL" is selected, we might be getting domestic tours too if we don't filter.
    // Let's modify the API to support `excludeRegion` or `hasContinent`?
    // OR, I can just not worry about "ALL" returning domestic if the data is clean.
    // BUT the previous code explicitly filtered out tours with no continent.
    // Let's add a small client-side filter for now IF the page size is small, OR better:
    // Update API to support `type="foreign"`?

    // Quick fix: The client side `CONTINENTS` filter has IDs like "ASIA", "EUROPE".
    // If activeContinent is "ALL", we want *any* of them.
    // Maybe we simply don't pass `region` (which is for domestic) and hope for the best?
    // Actually, domestic tours have `region` like "NORTH", foreign have `continent`.
    // If I don't pass `region` or `continent`, I get everything.
    // I should probably filter by `continent: { exists: true }` in API.
    // Since I can't easily change API schemas right now without more work,
    // I'll update the API to handle a special param `scope=foreign`.

    // Let's hold on this replacement and update API first to support `scope=foreign`
    // to strictly filter items that HAVE a continent.
    // OR, simpler: The user can select "Tất cả" (ALL), which implies all foreign tours.
    // If I can't filter by "has continent" in API, I will get domestic tours too.

    // Let's assume I will update API in next step or use a workaround.
    // Workaround: Pass `continent` only if it's specific.
    // Wait, let's just proceed with the code, but I will make a quick API update
    // to support `scope=foreign`.

    // Actually, I'll update this code to pass `scope=foreign` and then update the API.
    params.append("scope", "foreign");

    const response = await fetch(`/api/tours?${params.toString()}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data, isLoading } = useQuery({
    queryKey: [
      "foreign-tours",
      currentPage,
      activeContinent,
      activeSubRegion,
      searchQuery,
    ],
    queryFn: fetchForeignTours,
    placeholderData: keepPreviousData,
  });

  const tours = data?.docs || [];
  const totalPages = data?.totalPages || 1;
  const totalDocs = data?.totalDocs || 0;

  // Helper function to get image URL
  const getImageUrl = (tour: Tour) => {
    if (tour.imageUrl) return tour.imageUrl;
    if (typeof tour.image === "string") return tour.image;
    if (typeof tour.image === "object" && tour.image?.url)
      return tour.image.url;
    return "/placeholder.jpg";
  };

  // Convert tours to Deal format for ForeignTourList
  const dealsFormatted = tours.map((tour: Tour) => ({
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
  })) as any;

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

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-orange-600 border-t-transparent"></div>
                <p className="text-gray-600">Đang tải tours...</p>
              </div>
            </div>
          ) : (
            <>
              <ForeignResultsInfo
                activeContinent={activeContinent}
                activeSubRegion={activeSubRegion}
                continents={CONTINENTS}
                asiaRegions={ASIA_REGIONS}
                totalCount={totalDocs}
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
        </>
      </div>
    </div>
  );
};

export default ForeignToursPage;
