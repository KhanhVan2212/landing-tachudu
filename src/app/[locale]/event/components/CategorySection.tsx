"use client";
import React from "react";
import NextImage from "next/image";

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
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <a href="#" className="font-semibold text-orange-600">
            Xem tất cả →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg"
            >
              <div className="relative h-52 w-full">
                <NextImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="mb-2 text-sm text-gray-500">{item.date}</p>
                <h3 className="line-clamp-2 font-bold text-gray-900">
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
