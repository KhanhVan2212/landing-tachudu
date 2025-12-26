"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
}

const FeaturedNewsSection = () => {
  const [featuredPost, setFeaturedPost] = useState<Event | null>(null);
  const [sidePosts, setSidePosts] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events?featured=true&limit=4");
        const data = await response.json();

        if (data.success && data.docs.length > 0) {
          setFeaturedPost(data.docs[0]);
          setSidePosts(data.docs.slice(1, 4));
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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="py-20 text-gray-500">Đang tải...</div>
        </div>
      </section>
    );
  }

  if (!featuredPost) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-3">
        {/* LEFT – FEATURED */}
        <Link
          href={`/event/${featuredPost.id}`}
          className="group block md:col-span-2"
        >
          <div className="mb-6 overflow-hidden rounded-xl">
            <Image
              width={600}
              height={360}
              src={featuredPost.cover}
              alt={featuredPost.title}
              className="h-[360px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <p className="mb-2 text-sm text-gray-500">
            {featuredPost.date} · Tin nổi bật
          </p>

          <h2 className="mb-4 text-2xl font-bold text-gray-900 transition group-hover:text-orange-600 md:text-3xl">
            {featuredPost.title}
          </h2>

          <p className="leading-relaxed text-gray-600">
            {featuredPost.excerpt}
          </p>

          <span className="mt-6 inline-block font-semibold text-orange-600">
            Đọc bài viết →
          </span>
        </Link>

        {/* RIGHT – LIST */}
        <div className="space-y-6">
          {sidePosts.map((post) => (
            <Link
              key={post.id}
              href={`/event/${post.id}`}
              className="block rounded-md border-b px-1 pb-4 transition hover:bg-gray-50"
            >
              <p className="text-sm text-gray-500">{post.date}</p>

              <h4 className="font-semibold leading-snug text-gray-800 transition hover:text-orange-600">
                {post.title}
              </h4>

              <span className="text-sm font-medium text-orange-600">
                Xem thêm →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsSection;