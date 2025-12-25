"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 min-h-[400px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hoinghi.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-28 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Tin tức & Sự kiện
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Bên cạnh các chương trình du lịch trong và ngoài
          nước, Tachudu còn là đơn vị chuyên tổ chức sự
          kiện chuyên nghiệp.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
