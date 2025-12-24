import { Award, Globe } from "lucide-react";
import Image from "next/image";
import React from "react";

const History = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-full bg-orange-100 p-3">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Lịch sử hình thành
              </h2>
            </div>
            <p className="mb-6 text-justify text-lg text-gray-600">
              Được thành lập từ năm 2018, Công ty TNHH Du lịch và Sự kiện
              Tachudu đã không ngừng đổi mới và phát triển, khẳng định vị thế
              của một doanh nghiệp trẻ, tiên phong trong lĩnh vực du lịch và tổ
              chức sự kiện.
            </p>
            <div className="mt-8 flex items-start">
              <div className="mr-4 rounded-full bg-orange-100 p-3">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Phạm vi hoạt động
                </h3>
                <p className="text-gray-600">
                  Chúng tôi cung cấp dịch vụ rộng khắp trên toàn lãnh thổ{" "}
                  <strong>Việt Nam</strong> và <strong>Quốc tế</strong>, kết nối
                  bạn với mọi miền văn hóa.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0">
            <Image
              src="/images/about.jpg"
              alt="History"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-xl border-l-4 border-orange-500 bg-white p-6 shadow-lg">
              <span className="block text-4xl font-bold text-gray-900">
                2018
              </span>
              <span className="text-sm uppercase tracking-wider text-gray-500">
                Năm thành lập
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
