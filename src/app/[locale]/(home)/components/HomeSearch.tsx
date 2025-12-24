"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "@/i18n/navigation";

const DOMESTIC_KEYWORDS = [
  "viet nam",
  "việt nam",
  "ha noi",
  "hà nội",
  "ho chi minh",
  "hồ chí minh",
  "sai gon",
  "sài gòn",
  "da nang",
  "đà nẵng",
  "phu quoc",
  "phú quốc",
  "nha trang",
  "da lat",
  "đà lạt",
  "sa pa",
  "sapa",
  "ha long",
  "hạ long",
  "hue",
  "huế",
  "hoi an",
  "hội an",
  "quang binh",
  "quảng bình",
  "quang ninh",
  "quảng ninh",
  "ninh binh",
  "ninh bình",
  "hai phong",
  "hải phòng",
  "vung tau",
  "vũng tàu",
  "phan thiet",
  "phan thiết",
  "mui ne",
  "mũi né",
  "con dao",
  "côn đảo",
  "quy nhon",
  "quy nhơn",
  "buon ma thuot",
  "buôn ma thuột",
  "can tho",
  "cần thơ",
  "tay nguyen",
  "tây nguyên",
  "mien tay",
  "miền tây",
  "mien bac",
  "miền bắc",
  "mien trung",
  "miền trung",
];

const INTERNATIONAL_KEYWORDS = [
  "thai lan",
  "thái lan",
  "thailand",
  "singapore",
  "sing",
  "malaysia",
  "indo",
  "indonesia",
  "bali",
  "nhat ban",
  "nhật bản",
  "japan",
  "han quoc",
  "hàn quốc",
  "korea",
  "trung quoc",
  "trung quốc",
  "china",
  "dai loan",
  "đài loan",
  "taiwan",
  "hong kong",
  "chau au",
  "châu âu",
  "europe",
  "phap",
  "pháp",
  "france",
  "duc",
  "đức",
  "germany",
  "y",
  "ý",
  "italy",
  "thuy si",
  "thụy sĩ",
  "switzerland",
  "anh",
  "uk",
  "london",
  "my",
  "mỹ",
  "america",
  "usa",
  "uc",
  "úc",
  "australia",
  "canada",
  "dubai",
  "uae",
  "an do",
  "ấn độ",
  "india",
  "tho nhi ky",
  "thổ nhĩ kỳ",
  "turkey",
  "nga",
  "russia",
  "nam phi",
  "south africa",
  "ai cap",
  "ai cập",
  "egypt",
];

const HomeSearch = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;

    const lowerQuery = query.toLowerCase().trim();

    // Check for international keywords first
    const isInternational = INTERNATIONAL_KEYWORDS.some((keyword) =>
      lowerQuery.includes(keyword),
    );

    // Check for domestic keywords
    const isDomestic = DOMESTIC_KEYWORDS.some((keyword) =>
      lowerQuery.includes(keyword),
    );

    // Determine route
    let route = "/domestic-tours"; // Default to domestic

    if (isInternational) {
      route = "/foreign-tours";
    } else if (isDomestic) {
      route = "/domestic-tours";
    }

    router.push(`${route}?search=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="absolute bottom-0 left-1/2 z-20 w-[90%] max-w-3xl -translate-x-1/2 translate-y-1/2 transform rounded-2xl bg-white p-4 shadow-xl sm:w-full">
      <div className="flex items-center gap-4">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition-all focus-within:border-transparent focus-within:ring-2 focus-within:ring-orange-500">
          <Search className="text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm tour, địa điểm..."
            className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          onClick={handleSearch}
          className="hidden rounded-xl bg-orange-600 px-8 py-3 font-semibold text-white transition-all hover:bg-orange-700 hover:shadow-orange-500/30 sm:block"
        >
          Tìm kiếm
        </button>
        <button
          onClick={handleSearch}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-white shadow-lg transition-all hover:bg-orange-700 sm:hidden"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default HomeSearch;
