import React from "react";

const ForeignHero = () => {
  return (
    <div className="relative overflow-hidden  py-16 pt-[200px] text-center text-white min-h-[400px]">
      <div className="absolute inset-0 bg-[url('/images/sw.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold uppercase tracking-wide drop-shadow-md md:text-4xl">
          Du Lịch Nước Ngoài
        </h1>
        <p className="mx-auto mt-4 max-w-2xl px-4 font-medium text-orange-50 drop-shadow sm:text-lg">
          Khám phá 5 châu, trải nghiệm văn hóa và kỳ quan thế giới
        </p>
      </div>
    </div>
  );
};

export default ForeignHero;
