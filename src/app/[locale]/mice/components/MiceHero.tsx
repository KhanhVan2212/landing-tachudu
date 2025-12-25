import React from "react";
import Image from "next/image";

const MiceHero = () => {
  return (
    <div className="relative min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
          alt="MICE Tourism Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center items-center text-center px-4 text-white sm:px-6 lg:px-8 pt-[200px]">
        <h1 className="text-3xl font-bold uppercase tracking-wide drop-shadow-md md:text-4xl">
          Du Lịch <span className="text-orange-500">MICE</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl px-4 font-medium text-orange-50 drop-shadow sm:text-lg">
          Giải pháp tổ chức sự kiện, hội nghị, hội thảo kết hợp
          du lịch nghỉ dưỡng chuyên nghiệp và đẳng cấp.
        </p>
      </div>
    </div>
  );
};

export default MiceHero;
