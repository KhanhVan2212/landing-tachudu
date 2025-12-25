import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <Image
          src="/images/aboutus.jpg"
          alt="Background"
          className="object-cover object-center"
          fill
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Về Chúng Tôi
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-orange-100">
          Gần 10 năm đồng hành cùng khách hàng
          trên hành trình khám phá thế giới
        </p>
      </div>
    </div>
  );
};

export default Hero;
