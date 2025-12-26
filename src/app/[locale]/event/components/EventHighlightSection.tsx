"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Event {
  slug: string;
  title: string;
  date: string;
  cover: string;
}

const EventHighlightSection = () => {
  const [highlightPosts, setHighlightPosts] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events?highlight=true&limit=4");
        const data = await response.json();

        if (data.success) {
          setHighlightPosts(data.docs);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-50 pt-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="py-20 text-gray-500">Đang tải...</div>
        </div>
      </section>
    );
  }

  if (!highlightPosts.length) return null;

  return (
    <section className="bg-gray-50 pt-20">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="mb-10 text-center text-2xl font-bold text-gray-900">
          Sự kiện & Hoạt động nổi bật
        </h3>

        <div className="grid gap-6 md:grid-cols-4">
          {highlightPosts.map((post) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlightSection;