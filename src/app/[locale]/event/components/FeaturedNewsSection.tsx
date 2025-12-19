"use client";
import React from "react";
import NextImage from "next/image";

const FeaturedNewsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-3">
        {/* LEFT */}
        <div className="md:col-span-2">
          <div className="relative mb-6 h-[360px] w-full overflow-hidden rounded-xl">
            <NextImage
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
              alt="featured"
              fill
              className="object-cover"
            />
          </div>

          <p className="mb-2 text-sm text-gray-500">18/07/2024 · Tin nổi bật</p>

          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Du lịch MICE – Giải pháp nâng cao hiệu suất & gắn kết doanh nghiệp
          </h2>

          <p className="leading-relaxed text-gray-600">
            MICE Tourism đang trở thành xu hướng chiến lược của nhiều doanh
            nghiệp hiện đại. Việc kết hợp du lịch, đào tạo và sự kiện không chỉ
            mang lại trải nghiệm mới mẻ mà còn góp phần nâng cao hiệu quả làm
            việc, tinh thần đội nhóm và văn hóa doanh nghiệp bền vững.
          </p>

          <a
            href="#"
            className="mt-6 inline-block font-semibold text-orange-600"
          >
            Đọc bài viết →
          </a>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {[
            "Tachudu đồng hành tổ chức hội nghị khách hàng toàn quốc 2024",
            "Team building – Chìa khóa tạo động lực và gắn kết nội bộ",
            "Xu hướng tổ chức sự kiện doanh nghiệp năm 2025",
          ].map((title, i) => (
            <div key={i} className="border-b pb-4">
              <p className="text-sm text-gray-500">12/07/2024</p>
              <h4 className="font-semibold leading-snug text-gray-800">
                {title}
              </h4>
              <a href="#" className="text-sm font-medium text-orange-600">
                Xem thêm →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsSection;
