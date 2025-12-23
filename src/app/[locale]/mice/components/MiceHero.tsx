import React from "react";
import Image from "next/image";

const MiceHero = () => {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
          alt="MICE Tourism Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 text-white sm:px-6 lg:px-8">
        <h1 className="animate-fade-in-up mb-6 text-4xl font-bold md:text-6xl">
          Du Lịch <span className="text-orange-500">MICE</span>
        </h1>
        <p className="animate-fade-in-up mb-8 max-w-2xl text-xl leading-relaxed opacity-90 delay-100 md:text-2xl">
          Giải pháp tổ chức sự kiện, hội nghị, hội thảo kết hợp du lịch nghỉ
          dưỡng chuyên nghiệp và đẳng cấp.
        </p>
        <div className="animate-fade-in-up flex flex-wrap gap-4 delay-200">
          <button className="transform rounded-lg bg-orange-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-700">
            Nhận Báo Giá
          </button>
          <button className="rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
            Tìm Hiểu Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiceHero;
