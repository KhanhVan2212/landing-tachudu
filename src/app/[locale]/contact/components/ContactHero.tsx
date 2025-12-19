import React from "react";
import NextImage from "next/image";

const ContactHero = () => {
  return (
    <div className="relative pb-20 pt-[120px] text-center text-white lg:pt-[150px]">
      <div className="absolute inset-0 h-[500px] overflow-hidden">
        <NextImage
          src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <span className="mb-4 inline-block rounded-full bg-orange-600/20 px-4 py-1.5 text-sm font-bold text-orange-400 backdrop-blur-md">
          HỖ TRỢ 24/7
        </span>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Liên hệ với <span className="text-orange-500">TACHUDU</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl">
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại thông tin
          để nhận tư vấn chi tiết cho chuyến đi của bạn.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
