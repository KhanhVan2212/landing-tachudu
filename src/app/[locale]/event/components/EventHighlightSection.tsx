"use client";
import React from "react";
import Link from "next/link";
import { mockEventPosts } from "@/data/mockEventPosts";
import Image from "next/image";

const HIGHLIGHT_SLUGS = [
  "dai-hoi-hoi-nong-dan-ha-noi-lan-thu-xi",
  "le-tuyen-duong-thu-khoa-xuat-sac-2025",
  "vinh-danh-80-guong-mat-thap-lua-thi-dua-yeu-nuoc",
  "weilaiya-hanh-trinh-ruc-ro-2025",
];

const EventHighlightSection = () => {
  // 1. Get highlight posts from Mock
  const highlightPosts = HIGHLIGHT_SLUGS.map((slug) =>
    mockEventPosts.find((p) => p.slug === slug),
  ).filter(Boolean); // Filter out undefined if slug not found

  if (!highlightPosts.length) return null;

  return (
    <section className="bg-gray-50 pt-20">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="mb-10 text-center text-2xl font-bold text-gray-900">
          Sự kiện & Hoạt động nổi bật
        </h3>

        <div className="grid gap-6 md:grid-cols-4">
          {highlightPosts.map((post) => {
            if (!post) return null;
            return (
              <Link
                key={post.slug}
                href={`/event/${post.slug}`}
                className="group relative block overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40" />
                </div>

                <div className="p-4">
                  <p className="mb-2 text-xs text-gray-400">{post.date}</p>
                  <h4 className="line-clamp-2 text-sm font-bold text-gray-900 group-hover:text-orange-600">
                    {post.title}
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventHighlightSection;
