"use client";
import React from "react";

const tours = [
  { name: "Thailand", image: "https://picsum.photos/600/400?random=21" },
  { name: "Bali", image: "https://picsum.photos/600/400?random=22" },
  { name: "Philippines", image: "https://picsum.photos/600/400?random=23" },
  { name: "Malaysia", image: "https://picsum.photos/600/400?random=24" },
  { name: "Singapore", image: "https://picsum.photos/600/400?random=25" },
  { name: "Japan", image: "https://picsum.photos/600/400?random=26" },
];

const InternationalTours = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Tour Quốc Tế</h2>
          <span className="cursor-pointer text-sm font-semibold text-orange-600">
            Xem tất cả →
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-6">
          {tours.map((tour, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-sm font-semibold text-gray-800">
                {tour.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalTours;
