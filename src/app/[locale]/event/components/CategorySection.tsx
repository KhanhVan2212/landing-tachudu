"use client";
import React from "react";
import Link from "next/link";
import NextImage from "next/image";

interface Props {
  title: string;
  viewAllHref?: string;
  items: {
    slug: string;
    title: string;
    date: string;
    image: string;
  }[];
}

const CategorySection: React.FC<Props> = ({
  title,
  items,
  viewAllHref = "#",
}) => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

          <Link
            href={viewAllHref}
            className="text-orange-600 font-semibold hover:underline"
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/event/${item.slug}`}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden block"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
