import React from "react";
import { ADVANTAGES } from "../../../../../constants";
import Image from "next/image";

const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="relative mb-12 lg:mb-0">
            <div className="animate-blob absolute -left-4 -top-4 h-72 w-72 rounded-full bg-orange-200 opacity-70 mix-blend-multiply blur-xl filter"></div>
            <div className="animate-blob animation-delay-2000 absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-yellow-200 opacity-70 mix-blend-multiply blur-xl filter"></div>
            <Image
              src="https://picsum.photos/600/800?random=50"
              alt="Team working"
              width={600}
              height={800}
              className="relative z-10 h-[600px] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -right-5 bottom-10 z-20 hidden max-w-xs rounded-xl bg-white p-6 shadow-xl md:block">
              <p className="mb-2 text-4xl font-bold text-orange-600">10+</p>
              <p className="font-medium text-gray-600">
                Năm kinh nghiệm trong ngành du lịch & sự kiện
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              Tại sao chọn TACHUDU?
            </span>
            <h2 className="mb-8 mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Giá trị cốt lõi & Lợi thế cạnh tranh
            </h2>

            <div className="space-y-8">
              {ADVANTAGES.map((item) => (
                <div key={item.id} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white">
                      <item.icon size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold leading-6 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-justify text-base text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
