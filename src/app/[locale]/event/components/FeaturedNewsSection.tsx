"use client";
import React from "react";

const FeaturedNewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="md:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
            className="rounded-xl mb-6 w-full h-[360px] object-cover"
            alt="featured"
          />

          <p className="text-sm text-gray-500 mb-2">
            18/07/2024 · Tin nổi bật
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Du lịch MICE – Giải pháp nâng cao hiệu suất & gắn kết doanh nghiệp
          </h2>

          <p className="text-gray-600 leading-relaxed">
            MICE Tourism đang trở thành xu hướng chiến lược của nhiều doanh
            nghiệp hiện đại. Việc kết hợp du lịch, đào tạo và sự kiện không chỉ
            mang lại trải nghiệm mới mẻ mà còn góp phần nâng cao hiệu quả làm
            việc, tinh thần đội nhóm và văn hóa doanh nghiệp bền vững.
          </p>

          <a
            href="#"
            className="inline-block mt-6 text-orange-600 font-semibold"
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
              <h4 className="font-semibold text-gray-800 leading-snug">
                {title}
              </h4>
              <a
                href="#"
                className="text-sm text-orange-600 font-medium"
              >
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
