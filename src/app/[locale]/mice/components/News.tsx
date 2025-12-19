"use client";
import React from "react";

const news = [
  {
    title: "Du lịch MICE – Xu hướng mới cho doanh nghiệp",
    image: "https://picsum.photos/600/400?random=31",
  },
  {
    title: "Hạ Long – Điểm đến MICE hàng đầu Việt Nam",
    image: "https://picsum.photos/600/400?random=32",
  },
  {
    title: "Team building kết hợp du lịch: Vì sao không?",
    image: "https://picsum.photos/600/400?random=33",
  },
  {
    title: "Tổ chức sự kiện chuyên nghiệp cần gì?",
    image: "https://picsum.photos/600/400?random=34",
  },
  {
    title: "Top địa điểm MICE được ưa chuộng 2025",
    image: "https://picsum.photos/600/400?random=35",
  },
];

const News = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Tin tức & Cẩm nang du lịch
          </h2>
          <span className="text-sm font-semibold text-orange-600 cursor-pointer">
            Xem tất cả →
          </span>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-sm font-medium text-gray-800 line-clamp-2">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
