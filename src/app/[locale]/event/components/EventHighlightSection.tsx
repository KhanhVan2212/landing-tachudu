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
    HIGHLIGHT_SLUGS.includes(post.slug),
  );

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="mb-10 text-center text-2xl font-bold text-gray-900">
          Sự kiện & Hoạt động nổi bật
        </h3>

        <div className="grid gap-6 md:grid-cols-4">
          {highlightEvents.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="block overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg"
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
