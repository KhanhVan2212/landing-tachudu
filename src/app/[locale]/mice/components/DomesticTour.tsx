"use client";
import Image from "next/image";
import React from "react";

const tours = [
  { name: "Ninh Bình", image: "https://picsum.photos/600/400?random=11" },
  { name: "Hạ Long", image: "https://picsum.photos/600/400?random=12" },
  { name: "Hà Giang", image: "https://picsum.photos/600/400?random=13" },
  { name: "Mộc Châu", image: "https://picsum.photos/600/400?random=14" },
  { name: "Sapa", image: "https://picsum.photos/600/400?random=15" },
  { name: "Đà Nẵng", image: "https://picsum.photos/600/400?random=16" },
];

const DomesticTours = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Tour Nội Địa</h2>
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
                <Image
                  width={600}
                  height={400}
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

export default DomesticTours;
