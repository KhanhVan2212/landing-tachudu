import React from "react";
import { Search } from "lucide-react";

interface Region {
  id: string;
  label: string;
}

interface DomesticFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  regions: Region[];
}

const DomesticFilter = ({
  searchQuery,
  setSearchQuery,
  activeFilter,
  setActiveFilter,
  regions,
}: DomesticFilterProps) => {
  return (
    <div className="mb-12 rounded-xl border border-gray-100 bg-white p-4 shadow-xl">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Tìm kiếm tour, địa điểm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        {/* Region Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveFilter(region.id)}
              className={`rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
                activeFilter === region.id
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "bg-gray-50 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomesticFilter;
