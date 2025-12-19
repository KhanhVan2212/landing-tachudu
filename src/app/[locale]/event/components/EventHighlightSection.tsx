"use client";
import React from "react";
import Link from "next/link";
import { mockEventPosts } from "@/data/mockEventPosts";

const HIGHLIGHT_SLUGS = [
  "tachudu-to-chuc-hoi-nghi-khach-hang-2024",
  "team-building-bai-bien",
  "gala-dinner-doanh-nghiep-da-nang",
  "chuong-trinh-dao-tao-ket-noi-doanh-nghiep",
];

const EventHighlightSection = () => {
  const highlightEvents = mockEventPosts.filter((post) =>
    HIGHLIGHT_SLUGS.includes(post.slug)
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Sự kiện & Hoạt động nổi bật
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {highlightEvents.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition block"
            >
              <img
                src={event.cover}
                alt={event.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 text-center font-semibold text-gray-800">
                {event.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlightSection;
