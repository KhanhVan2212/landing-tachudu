"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const featuredPost = {
  slug: "du-lich-mice-giai-phap-doanh-nghiep",
  title: "Du lịch MICE – Giải pháp nâng cao hiệu suất & gắn kết doanh nghiệp",
  date: "18/07/2024",
  excerpt:
    "MICE Tourism đang trở thành xu hướng chiến lược của nhiều doanh nghiệp hiện đại, kết hợp du lịch – đào tạo – sự kiện nhằm gia tăng hiệu quả làm việc và xây dựng văn hóa đội nhóm.",
  image:
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
};

const sidePosts = [
  {
    slug: "tachudu-to-chuc-hoi-nghi-khach-hang-2024",
    title: "Tachudu tổ chức hội nghị khách hàng toàn quốc 2024",
    date: "12/07/2024",
  },
  {
    slug: "team-building-dong-luc-doi-nhom",
    title: "Team building – Chìa khóa tạo động lực & gắn kết nội bộ",
    date: "10/07/2024",
  },
  {
    slug: "xu-huong-su-kien-doanh-nghiep-2025",
    title: "Xu hướng tổ chức sự kiện doanh nghiệp năm 2025",
    date: "08/07/2024",
  },
];

const FeaturedNewsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-3">
        {/* LEFT – FEATURED */}
        <Link
          href={`/event/${featuredPost.slug}`}
          className="group block md:col-span-2"
        >
          <div className="mb-6 overflow-hidden rounded-xl">
            <Image
              width={600}
              height={600}
              src={featuredPost.image}
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
              key={post.slug}
              href={`/event/${post.slug}`}
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
