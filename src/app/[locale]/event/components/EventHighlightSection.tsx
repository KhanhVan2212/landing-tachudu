"use client";
import React from "react";
import NextImage from "next/image";

const events = [
  {
    title: "Hội nghị khách hàng toàn quốc",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
  {
    title: "Team Building bãi biển",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    title: "Gala Dinner doanh nghiệp",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    title: "Sự kiện đào tạo & kết nối",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

const EventHighlightSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="mb-10 text-center text-2xl font-bold text-gray-900">
          Sự kiện & Hoạt động nổi bật
        </h3>

        <div className="grid gap-6 md:grid-cols-4">
          {events.map((event, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg"
            >
              <div className="relative h-56 w-full">
                <NextImage
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center font-semibold text-gray-800">
                {event.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlightSection;
