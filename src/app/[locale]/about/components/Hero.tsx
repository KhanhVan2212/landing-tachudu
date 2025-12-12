import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-orange-600 px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://picsum.photos/1920/600?random=about"
          alt="Background"
          className="h-full w-full object-cover"
          width={1920}
          height={600}
        />
      </div>
      <div className="relative mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Về Chúng Tôi
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-orange-100">
          Hành trình kiến tạo cảm xúc và giá trị.
        </p>
      </div>
    </div>
  );
};

export default Hero;
