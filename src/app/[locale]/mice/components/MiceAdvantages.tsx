import React from "react";
import Image from "next/image";

const MICEAdvantages = () => {
  const advantages = [
    {
      title: "Kinh Nghiệm Chuyên Sâu",
      description:
        "Hơn 10 năm kinh nghiệm trong lĩnh vực tổ chức sự kiện và du lịch MICE.",
      icon: (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Mạng Lưới Đối Tác Rộng",
      description:
        "Hợp tác với các khách sạn 5 sao, trung tâm hội nghị và hãng hàng không hàng đầu.",
      icon: (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Tối Ưu Chi Phí",
      description:
        "Giải pháp tài chính linh hoạt, minh bạch và hiệu quả nhất cho doanh nghiệp.",
      icon: (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Sáng Tạo Đột Phá",
      description:
        "Luôn đổi mới kịch bản, ý tưởng team building và concept thiết kế độc đáo.",
      icon: (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
          alt="Office background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-3 font-bold uppercase tracking-wider text-orange-500">
            Tại Sao Chọn Chúng Tôi
          </h2>
          <h3 className="mb-6 text-4xl font-bold text-white">
            Đồng Hành Cùng <span className="text-orange-500">Thành Công</span>{" "}
            Của Bạn
          </h3>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-orange-500/30 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-orange-400">
                {item.title}
              </h4>
              <p className="leading-relaxed text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MICEAdvantages;
