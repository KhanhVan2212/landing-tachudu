import React from "react";

const DealsHero = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <img
        src="https://picsum.photos/1920/600?random=deals"
        alt="Deals Banner"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center bg-gradient-to-r from-orange-900/80 to-transparent">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <span className="mb-4 inline-block rounded-full bg-orange-500 px-4 py-1 text-sm font-bold uppercase tracking-wider text-white">
              Hot Promotion
            </span>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Săn Deal Hời <br /> Vi Vu Khắp Nơi
            </h1>
            <p className="mb-8 text-xl font-light text-gray-200">
              Tiết kiệm tới 50% cho chuyến đi tiếp theo của bạn cùng TACHUDU.
            </p>
            <button className="rounded-full bg-white px-8 py-3 font-bold text-orange-600 shadow-lg transition-colors hover:bg-orange-50">
              Xem ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsHero;
