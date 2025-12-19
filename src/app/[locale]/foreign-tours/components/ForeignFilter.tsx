import React from "react";
import { Search } from "lucide-react";

interface Continent {
  id: string;
  label: string;
}

interface AsiaRegion {
  id: string;
  label: string;
}

interface ForeignFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeContinent: string;
  setActiveContinent: (continent: string) => void;
  activeSubRegion: string | null;
  setActiveSubRegion: (region: string | null) => void;
  continents: Continent[];
  asiaRegions: AsiaRegion[];
}

const ForeignFilter = ({
  searchQuery,
  setSearchQuery,
  activeContinent,
  setActiveContinent,
  activeSubRegion,
  setActiveSubRegion,
  continents,
  asiaRegions,
}: ForeignFilterProps) => {
  return (
    <>
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
            {continents.map((continent) => (
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
            {asiaRegions.map((region) => (
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
    </>
  );
};

export default ForeignFilter;
