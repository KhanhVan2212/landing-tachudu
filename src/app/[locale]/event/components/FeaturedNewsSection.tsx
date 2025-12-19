"use client";
import React from "react";
import Link from "next/link";

const featuredPost = {
  slug: "du-lich-mice-giai-phap-doanh-nghiep",
  title:
    "Du lịch MICE – Giải pháp nâng cao hiệu suất & gắn kết doanh nghiệp",
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* LEFT – FEATURED */}
        <Link
          href={`/event/${featuredPost.slug}`}
          className="md:col-span-2 block group"
        >
          <div className="overflow-hidden rounded-xl mb-6">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-[360px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <p className="text-sm text-gray-500 mb-2">
            {featuredPost.date} · Tin nổi bật
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition">
            {featuredPost.title}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {featuredPost.excerpt}
          </p>

          <span className="inline-block mt-6 text-orange-600 font-semibold">
            Đọc bài viết →
          </span>
        </Link>

        {/* RIGHT – LIST */}
        <div className="space-y-6">
          {sidePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/event/${post.slug}`}
              className="block border-b pb-4 hover:bg-gray-50 transition rounded-md px-1"
            >
              <p className="text-sm text-gray-500">{post.date}</p>

              <h4 className="font-semibold text-gray-800 leading-snug hover:text-orange-600 transition">
                {post.title}
              </h4>

              <span className="text-sm text-orange-600 font-medium">
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
