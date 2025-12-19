import React from "react";

const DomesticHero = () => {
  return (
    <div className="relative overflow-hidden  py-16 pt-[200px] text-center text-white">
      <div className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center"></div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold uppercase tracking-wide drop-shadow-md md:text-4xl">
          Du Lịch Trong Nước
        </h1>
        <p className="mx-auto mt-4 max-w-2xl px-4 font-medium text-orange-50 drop-shadow sm:text-lg">
          Khám phá vẻ đẹp Việt Nam qua những hành trình đầy cảm xúc từ Bắc chí
          Nam
        </p>
      </div>
    </div>
  );
};

export default DomesticHero;
