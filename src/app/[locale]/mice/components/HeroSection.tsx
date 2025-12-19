"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image – FIXED UNSPLASH IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80)",
        }}
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          MICE TOURISM
        </h1>

        <p className="mt-4 text-lg md:text-xl opacity-95">
          Travel – Event – Team Building
        </p>

        <ul className="mt-8 space-y-2 text-base md:text-lg">
          <li>✓ Du lịch nội địa & quốc tế</li>
          <li>✓ Team building chất lượng cao</li>
          <li>✓ Tổ chức sự kiện & hội nghị</li>
        </ul>

        <a
          href="#contact"
          className="inline-block mt-12 rounded-full bg-white px-10 py-3 font-bold text-orange-600 hover:bg-orange-50 transition"
        >
          Liên hệ với chúng tôi
        </a>
      </div>
    </section>
  );
};

export default Hero;
