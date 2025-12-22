import React from "react";
import { SLOGAN } from "../../../../../constants";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const Hero: React.FC = () => {
  return (
    <div className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-home.jpg"
          alt="Travel Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-lg flex flex-col gap-4 sm:text-6xl">
          <p>Khám phá thế giới cùng</p>
          <span className="text-orange-500">TA<span className="text-red-600">CHU</span>DU</span>
        </h1>
        <p className="mb-10 font-[family-name:var(--font-inter)] text-xl font-light italic text-gray-100 drop-shadow-md sm:text-2xl md:text-3xl">
          {SLOGAN}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="#services"
            className="transform rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/50"
          >
            Khám phá dịch vụ
          </Link>
          <Link
            href="#contact"
            className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-orange-600"
          >
            Liên hệ ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
