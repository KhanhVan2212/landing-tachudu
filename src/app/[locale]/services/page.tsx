"use client";
import React, { useEffect } from "react";
import {
  Plane,
  Hotel,
  Car,
  Ticket,
  FileCheck,
  Camera,
  Shield,
  Map,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "flight",
      title: "Đặt Vé Máy Bay",
      description:
        "Đặt vé máy bay nội địa và quốc tế với giá ưu đãi. Hỗ trợ đặt vé khứ hồi, một chiều với tất cả các hãng hàng không.",
      features: [
        "Giá vé cạnh tranh",
        "Nhiều hãng bay",
        "Hỗ trợ 24/7",
        "Hoàn/đổi vé linh hoạt",
      ],
      icon: Plane,
      image: "/images/sevices/plane.webp",
      color: "orange",
    },
    {
      id: "hotel",
      title: "Đặt Phòng Khách Sạn",
      description:
        "Hệ thống khách sạn đối tác từ 3-5 sao trên toàn quốc và quốc tế. Cam kết giá tốt nhất với nhiều ưu đãi hấp dẫn.",
      features: [
        "Khách sạn 3-5 sao",
        "Giá cam kết tốt nhất",
        "Miễn phí hủy phòng",
        "Điểm thưởng thành viên",
      ],
      icon: Hotel,
      image: "/images/sevices/hotel.jpg",
      color: "blue", // Keeping variety but will style with orange theme predominantly
    },
    {
      id: "car",
      title: "Thuê Xe Du Lịch",
      description:
        "Dịch vụ cho thuê xe du lịch từ 4-45 chỗ với tài xế kinh nghiệm. Xe đời mới, sạch sẽ, an toàn tuyệt đối.",
      features: [
        "Xe 4-45 chỗ",
        "Tài xế chuyên nghiệp",
        "Xe đời mới 2022-2024",
        "Bảo hiểm đầy đủ",
      ],
      icon: Car,
      image: "/images/sevices/car.webp",
      color: "green",
    },
    {
      id: "ticket",
      title: "Vé Tham Quan",
      description:
        "Đặt trước vé tham quan các điểm du lịch nổi tiếng trong và ngoài nước với giá ưu đãi, không cần xếp hàng.",
      features: [
        "Không cần xếp hàng",
        "Giá ưu đãi",
        "E-ticket tiện lợi",
        "Nhiều điểm đến",
      ],
      icon: Ticket,
      image: "/images/sevices/ticket.webp",
      color: "purple",
    },
    {
      id: "visa",
      title: "Làm Visa",
      description:
        "Dịch vụ làm visa du lịch, công tác cho tất cả các quốc gia. Tư vấn hồ sơ miễn phí, tỷ lệ đậu cao.",
      features: [
        "Tư vấn miễn phí",
        "Tỷ lệ đậu cao",
        "Xử lý nhanh",
        "Hỗ trợ toàn diện",
      ],
      icon: FileCheck,
      image: "/images/sevices/visa.webp",
      color: "red",
    },
    {
      id: "photo",
      title: "Chụp Ảnh Du Lịch",
      description:
        "Dịch vụ chụp ảnh chuyên nghiệp tại các điểm du lịch. Lưu giữ những khoảnh khắc đẹp nhất của chuyến đi.",
      features: [
        "Nhiếp ảnh gia chuyên nghiệp",
        "Thiết bị hiện đại",
        "Chỉnh sửa chuyên nghiệp",
        "Giao ảnh nhanh",
      ],
      icon: Camera,
      image: "/images/sevices/photo.jpg",
      color: "pink",
    },
    {
      id: "insurance",
      title: "Bảo Hiểm Du Lịch",
      description:
        "Gói bảo hiểm du lịch toàn diện, bảo vệ bạn trong suốt hành trình với mức phí hợp lý và quyền lợi tối đa.",
      features: [
        "Chi phí y tế",
        "Mất hành lý",
        "Hủy/hoãn chuyến",
        "Hỗ trợ 24/7",
      ],
      icon: Shield,
      image: "/images/sevices/bao-hiem.webp",
      color: "teal",
    },
    {
      id: "custom-tour",
      title: "Tour Theo Yêu Cầu",
      description:
        "Thiết kế tour riêng theo yêu cầu của khách hàng. Lịch trình linh hoạt, trải nghiệm độc đáo, phù hợp mọi ngân sách.",
      features: [
        "Lịch trình tùy chỉnh",
        "Hướng dẫn riêng",
        "Linh hoạt thời gian",
        "Trải nghiệm độc đáo",
      ],
      icon: Map,
      image: "/images/sevices/tour.jpg",
      color: "indigo",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <div className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            width={1920}
            height={800}
            src="/images/sevices/banner.avif"
            alt="Services Banner"
            className="h-full w-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 px-4 text-center text-white pt-10">
          <h1 className="text-3xl font-bold capitalize tracking-wide drop-shadow-md md:text-5xl">
            Dịch Vụ Du Lịch
          </h1>
          <p className="mx-auto mt-4 max-w-3xl px-4 font-medium text-orange-50 drop-shadow sm:text-lg">
            Tachudu cung cấp các dịch vụ đi kèm cho
            cả khách lẻ và khách đoàn
          </p>
        </div>
      </div>

      {/* Main Services Detail */}
      <div className="mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="group relative md:w-1/2">
              <div
                className={`absolute -inset-4 transform rounded-xl transition-transform group-hover:rotate-6 ${
                  index % 2 === 0 ? "rotate-3" : "-rotate-3"
                } bg-orange-100 opacity-70`}
              ></div>
              <Image
                width={800}
                height={600}
                src={service.image}
                alt={service.title}
                className="relative h-[400px] w-full rounded-lg object-cover shadow-xl transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
            <div className="md:w-1/2">
              <div className="mb-4 flex items-center space-x-3">
                <div className="rounded-lg bg-orange-100 p-3 text-orange-600">
                  <service.icon size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                {service.description}
              </p>
              <ul className="mb-8 grid grid-cols-1 gap-y-3 sm:grid-cols-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 size={20} className="mr-3 text-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center font-bold text-orange-600 transition-colors hover:text-orange-700 hover:underline"
              >
                Liên hệ tư vấn <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 px-4 py-20 text-center">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Bạn cần hỗ trợ thêm?
          </h2>
          <p className="mb-8 text-lg text-orange-50">
            Đội ngũ tư vấn viên của TACHUDU luôn sẵn sàng giải đáp mọi thắc mắc
            của bạn 24/7.
          </p>
          <Link
            href="/contact"
            className="inline-block transform rounded-full bg-white px-10 py-4 text-lg font-bold text-orange-600 shadow-lg transition-all hover:scale-105 hover:bg-orange-50"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
