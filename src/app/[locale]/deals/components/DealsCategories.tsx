import React from "react";
import { Tag, Plane, Map, Hotel, ArrowRight } from "lucide-react";

interface DealsCategoriesProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

const DealsCategories: React.FC<DealsCategoriesProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  const categories = [
    { name: "Vé máy bay", icon: Plane, count: "15+ ưu đãi" },
    { name: "Tour du lịch", icon: Map, count: "20+ ưu đãi" },
    { name: "Khách sạn", icon: Hotel, count: "30+ ưu đãi" },
    { name: "Combo tiết kiệm", icon: Tag, count: "10+ ưu đãi" },
  ];

  return (
    <section className="relative z-10 mx-auto -mt-6 sm:-mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((cat, idx) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <div
              key={idx}
              onClick={() => onSelectCategory(cat.name)}
              className={`group cursor-pointer rounded-xl border-b-4 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl ${
                isSelected
                  ? "border-orange-500 ring-2 ring-orange-100"
                  : "border-transparent hover:border-orange-500"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <cat.icon
                  className={`h-8 w-8 transition-transform group-hover:scale-110 ${isSelected ? "text-orange-600" : "text-orange-500"}`}
                />
                <ArrowRight
                  className={`h-5 w-5 transition-colors ${isSelected ? "text-orange-500" : "text-gray-300 group-hover:text-orange-500"}`}
                />
              </div>
              <h3
                className={`text-lg font-bold ${isSelected ? "text-orange-900" : "text-gray-900"}`}
              >
                {cat.name}
              </h3>
              <p className="text-sm text-gray-500">{cat.count}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DealsCategories;
