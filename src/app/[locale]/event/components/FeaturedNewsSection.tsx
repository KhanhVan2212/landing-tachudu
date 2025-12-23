"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const featuredPost = {
  slug: "dai-hoi-hoi-nong-dan-ha-noi-lan-thu-xi",
  title:
    "Đại hội đại biểu Hội Nông dân Thành phố Hà Nội lần thứ XI diễn ra thành công tốt đẹp",
  date: "25/11/2025",
  excerpt:
    "Đại hội đại biểu Hội Nông dân Thành phố Hà Nội lần thứ XI, nhiệm kỳ 2025–2030 đã diễn ra trang trọng với sự tham gia của 288 đại biểu chính thức, đại diện cho hơn 400.000 hội viên nông dân Thủ đô.",
  image:
    "/images/events/1.jpg",
};

const sidePosts = [
  {
    slug: "le-tuyen-duong-thu-khoa-xuat-sac-2025",
    title: "Lễ tuyên dương thủ khoa xuất sắc 2025: Hành trình tri thức rực rỡ",
    date: "14/11/2025",
  },
  {
    slug: "vinh-danh-80-guong-mat-thap-lua-thi-dua-yeu-nuoc",
    title:
      "Vinh danh 80 gương mặt tiêu biểu “Thắp lửa” phong trào thi đua yêu nước",
    date: "26/10/2025",
  },
  {
    slug: "weilaiya-hanh-trinh-ruc-ro-2025",
    title: "Weilaiya - Hành trình rực rỡ: Dấu ấn 2025",
    date: "23/02/2025",
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
