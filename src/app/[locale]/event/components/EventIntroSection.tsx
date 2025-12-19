"use client";
import React from "react";

const EventIntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Tachudu – Không chỉ là du lịch
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          Bên cạnh các chương trình du lịch trong và ngoài nước,{" "}
          <span className="font-semibold text-orange-600">Tachudu</span>{" "}
          còn là đơn vị chuyên tổ chức{" "}
          <span className="font-semibold">
            sự kiện doanh nghiệp, hội nghị, hội thảo, team building và MICE
          </span>
          . Chúng tôi đồng hành cùng doanh nghiệp trong việc xây dựng trải
          nghiệm, kết nối con người và tạo ra những dấu ấn đáng nhớ.
        </p>
      </div>
    </section>
  );
};

export default EventIntroSection;
