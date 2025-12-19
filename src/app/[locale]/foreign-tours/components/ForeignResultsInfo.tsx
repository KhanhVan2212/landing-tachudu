import React from "react";
import { Globe } from "lucide-react";

interface Continent {
  id: string;
  label: string;
}

interface AsiaRegion {
  id: string;
  label: string;
}

interface ForeignResultsInfoProps {
  activeContinent: string;
  activeSubRegion: string | null;
  continents: Continent[];
  asiaRegions: AsiaRegion[];
  totalCount: number;
  searchQuery: string;
}

const ForeignResultsInfo = ({
  activeContinent,
  activeSubRegion,
  continents,
  asiaRegions,
  totalCount,
  searchQuery,
}: ForeignResultsInfoProps) => {
  return (
    <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-orange-100 p-2 text-orange-600">
          <Globe size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {activeSubRegion
              ? asiaRegions.find((r) => r.id === activeSubRegion)?.label
              : continents.find((c) => c.id === activeContinent)?.label}
          </h2>
          <p className="text-sm text-gray-500">
            Tìm thấy{" "}
            <span className="font-bold text-orange-600">{totalCount}</span> tour
            phù hợp {searchQuery && `cho "${searchQuery}"`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForeignResultsInfo;
