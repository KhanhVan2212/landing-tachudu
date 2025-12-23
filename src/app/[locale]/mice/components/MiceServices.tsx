import React from "react";
import Image from "next/image";

const services = [
  {
    id: "meeting",
    letter: "M",
    title: "Meeting",
    subtitle: "Hội Họp",
    description:
      "Tổ chức các cuộc họp chiến lược, họp cổ đông, họp báo cáo thường niên chuyên nghiệp.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop",
    color: "bg-blue-600",
  },
  {
    id: "incentive",
    letter: "I",
    title: "Incentive",
    subtitle: "Khen Thưởng",
    description:
      "Chương trình du lịch khen thưởng nhân viên, đại lý xuất sắc kết hợp team building.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    color: "bg-green-600",
  },
  {
    id: "conference",
    letter: "C",
    title: "Conference",
    subtitle: "Hội Nghị",
    description:
      "Hội nghị khách hàng, hội thảo chuyên đề quy mô lớn với trang thiết bị hiện đại.",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2072&auto=format&fit=crop",
    color: "bg-orange-600",
  },
  {
    id: "exhibition",
    letter: "E",
    title: "Exhibition",
    subtitle: "Triển Lãm",
    description:
      "Tổ chức sự kiện ra mắt sản phẩm, triển lãm thương mại, hội chợ xúc tiến đầu tư.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
    color: "bg-red-600",
  },
];

const MiceServices = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-3 font-bold uppercase tracking-wider text-orange-600">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <h3 className="mb-4 text-4xl font-bold text-gray-900">
            Giải Pháp
            <span className="text-orange-600"> MICE </span>
            Toàn Diện
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Chúng tôi cung cấp đầy đủ các dịch vụ trong mô hình MICE, đảm bảo sự
            chuyên nghiệp và thành công cho mọi sự kiện.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div
                    className={`h-10 w-10 ${service.color} mb-2 flex items-center justify-center rounded-lg text-xl font-bold shadow-lg`}
                  >
                    {service.letter}
                  </div>
                  <h4 className="text-xl font-bold">{service.title}</h4>
                </div>
              </div>

              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold text-gray-900">
                  {service.subtitle}
                </h5>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <button className="flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 group-hover:underline">
                  Xem chi tiết
                  <svg
                    className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiceServices;
