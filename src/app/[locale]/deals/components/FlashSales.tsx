import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FlashSales = () => {
  const flashSales = [
    {
      id: 401, // Linked to existing deal
      title: "Hè rực rỡ tại Phú Quốc",
      type: "Combo 3N2Đ",
      price: "2.990.000đ",
      originalPrice: "4.500.000đ",
      discount: "-35%",
      image: "https://picsum.photos/600/400?random=101",
      timeLeft: "2 ngày còn lại",
    },
    {
      id: 209, // Linked to existing deal
      title: "Khám phá Bangkok - Pattaya",
      type: "Tour 5N4Đ",
      price: "5.490.000đ",
      originalPrice: "7.990.000đ",
      discount: "-30%",
      image: "https://picsum.photos/600/400?random=102",
      timeLeft: "5 ngày còn lại",
    },
    {
      id: 302, // Linked to existing deal
      title: "Nghỉ dưỡng 5* Đà Nẵng",
      type: "Khách sạn",
      price: "1.200.000đ/đêm",
      originalPrice: "2.400.000đ",
      discount: "-50%",
      image: "https://picsum.photos/600/400?random=103",
      timeLeft: "12 giờ còn lại",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="flex items-center text-3xl font-bold text-gray-900">
            <Clock className="mr-3 animate-pulse text-red-500" />
            Flash Sale
          </h2>
          <p className="mt-2 text-gray-500">Cơ hội cuối cùng, đừng bỏ lỡ!</p>
        </div>
        <a
          href="#"
          className="hidden font-medium text-orange-600 hover:underline sm:block"
        >
          Xem tất cả
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {flashSales.map((deal) => (
          <Link href={`/deals/${deal.id}`} key={deal.id}>
            <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute left-4 top-4 z-10 rounded-md bg-red-600 px-3 py-1 font-bold text-white shadow-md">
                  {deal.discount}
                </div>
                <Image
                  src={deal.image}
                  alt={deal.title}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-start justify-between">
                  <span className="rounded bg-orange-50 px-2 py-1 text-xs font-bold uppercase text-orange-600">
                    {deal.type}
                  </span>
                  <span className="flex items-center text-xs font-medium text-red-500">
                    <Clock size={12} className="mr-1" /> {deal.timeLeft}
                  </span>
                </div>
                <h3 className="mb-3 line-clamp-2 h-14 text-xl font-bold text-gray-900">
                  {deal.title}
                </h3>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-400 line-through decoration-red-400">
                      {deal.originalPrice}
                    </p>
                    <p className="text-2xl font-bold text-orange-600">
                      {deal.price}
                    </p>
                  </div>
                  <button className="rounded-full bg-orange-100 p-2 text-orange-600 transition-colors hover:bg-orange-600 hover:text-white">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FlashSales;
