"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 py-28 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Tin tức & Sự kiện
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Cập nhật hoạt động, sự kiện & hành trình của Tachudu
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
