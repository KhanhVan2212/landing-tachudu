import React from "react";
import { MapPin } from "lucide-react";

interface Region {
  id: string;
  label: string;
}

interface DomesticResultsInfoProps {
  activeFilter: string;
  regions: Region[];
  totalCount: number;
  searchQuery: string;
}

const DomesticResultsInfo = ({
  activeFilter,
  regions,
  totalCount,
  searchQuery,
}: DomesticResultsInfoProps) => {
  return (
    <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-orange-100 p-2 text-orange-600">
          <MapPin size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {activeFilter === "ALL"
              ? "Tất cả miền"
              : regions.find((r) => r.id === activeFilter)?.label}
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

export default DomesticResultsInfo;
