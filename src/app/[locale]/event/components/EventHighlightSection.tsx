"use client";
import React from "react";

const events = [
  {
    title: "Hội nghị khách hàng toàn quốc",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
  {
    title: "Team Building bãi biển",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    title: "Gala Dinner doanh nghiệp",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    title: "Sự kiện đào tạo & kết nối",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

const EventHighlightSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Sự kiện & Hoạt động nổi bật
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-56 w-full object-cover"
              />
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
