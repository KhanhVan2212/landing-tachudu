"use client";
import React from "react";

interface Props {
  title: string;
  items: {
    title: string;
    date: string;
    image: string;
  }[];
}

const CategorySection: React.FC<Props> = ({ title, items }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <a href="#" className="text-orange-600 font-semibold">
            Xem tất cả →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="font-bold text-gray-900 line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
