"use client";
import React, { useEffect } from "react";
import {
  Plane,
  Map,
  CalendarDays,
  Hotel,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Heart,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Hỗ trợ 24/7",
      desc: "Luôn sẵn sàng giải quyết mọi vấn đề phát sinh.",
      icon: Clock,
    },
    {
      title: "Giá tốt nhất",
      desc: "Cam kết giá cạnh tranh và nhiều ưu đãi độc quyền.",
      icon: ShieldCheck,
    },
    {
      title: "Tận tâm",
      desc: "Đặt lợi ích và trải nghiệm khách hàng lên hàng đầu.",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Banner */}
      <div className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/1920/800?random=service_hero"
            alt="Services Banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Dịch Vụ Của TACHUDU
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-light text-gray-200">
            Giải pháp toàn diện cho mọi nhu cầu du lịch và sự kiện của bạn.
          </p>
        </div>
      </div>

      {/* Main Services Detail */}
      <div className="mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6 lg:px-8">
        {/* Service 1: Flight Booking */}
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="group relative md:w-1/2">
            <div className="absolute -inset-4 rotate-3 transform rounded-xl bg-orange-100 transition-transform group-hover:rotate-6"></div>
            <img
              src="https://picsum.photos/800/600?random=flight"
              alt="Flight Booking"
              className="relative h-[400px] w-full rounded-lg object-cover shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-lg bg-orange-100 p-3 text-orange-600">
                <Plane size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Đặt Vé Máy Bay
              </h2>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Là đại lý cấp 1 của các hãng hàng không hàng đầu như Vietnam
              Airlines, Bamboo Airways, Vietjet Air và hơn 50 hãng hàng không
              quốc tế. Chúng tôi cam kết mang đến hành trình bay thuận lợi nhất
              với chi phí tối ưu.
            </p>
            <ul className="mb-8 space-y-3">
              {[
                "Săn vé rẻ, vé khuyến mãi 0đ",
                "Hỗ trợ đổi vé, hoàn hủy nhanh chóng",
                "Check-in online, chọn chỗ ngồi đẹp",
                "Xử lý các ca khó: giờ chót, sai tên",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle2 size={20} className="mr-3 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="inline-flex items-center font-bold text-orange-600 hover:underline"
            >
              Đặt vé ngay <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Service 2: Tours */}
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
          <div className="group relative md:w-1/2">
            <div className="absolute -inset-4 -rotate-3 transform rounded-xl bg-blue-100 transition-transform group-hover:-rotate-6"></div>
            <img
              src="https://picsum.photos/800/600?random=tour"
              alt="Tours"
              className="relative h-[400px] w-full rounded-lg object-cover shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                <Map size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Tour Du Lịch</h2>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Khám phá vẻ đẹp bất tận của Việt Nam và thế giới. TACHUDU thiết kế
              các tour du lịch đa dạng, từ nghỉ dưỡng sang trọng đến khám phá
              mạo hiểm, đáp ứng mọi sở thích của khách hàng.
            </p>
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border-l-4 border-blue-500 bg-white p-4 shadow">
                <h4 className="font-bold text-gray-900">Tour Trong Nước</h4>
                <p className="text-sm text-gray-500">
                  Phú Quốc, Đà Nẵng, Sapa, Hạ Long...
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-orange-500 bg-white p-4 shadow">
                <h4 className="font-bold text-gray-900">Tour Quốc Tế</h4>
                <p className="text-sm text-gray-500">
                  Thái Lan, Hàn Quốc, Nhật Bản, Châu Âu...
                </p>
              </div>
            </div>
            <Link
              href="/deals"
              className="inline-flex items-center font-bold text-blue-600 hover:underline"
            >
              Xem các tour ưu đãi <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Service 3: Events (MICE) */}
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="group relative md:w-1/2">
            <div className="absolute -inset-4 rotate-3 transform rounded-xl bg-purple-100 transition-transform group-hover:rotate-6"></div>
            <img
              src="https://picsum.photos/800/600?random=event"
              alt="Events"
              className="relative h-[400px] w-full rounded-lg object-cover shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
                <CalendarDays size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Tổ Chức Sự Kiện (MICE)
              </h2>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Chúng tôi cung cấp giải pháp tổ chức sự kiện trọn gói cho doanh
              nghiệp. Từ ý tưởng sáng tạo đến khâu vận hành chuyên nghiệp, đảm
              bảo sự kiện của bạn để lại dấu ấn sâu sắc.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center text-gray-700">
                <CheckCircle2 size={20} className="mr-3 text-purple-500" />
                Du lịch kết hợp hội nghị, hội thảo (MICE)
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 size={20} className="mr-3 text-purple-500" />
                Teambuilding gắn kết nhân sự
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 size={20} className="mr-3 text-purple-500" />
                Tiệc Gala Dinner, Year End Party
              </li>
            </ul>
          </div>
        </div>

        {/* Service 4: Visa & Hotel */}
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
          <div className="group relative md:w-1/2">
            <div className="absolute -inset-4 -rotate-3 transform rounded-xl bg-green-100 transition-transform group-hover:-rotate-6"></div>
            <img
              src="https://picsum.photos/800/600?random=hotel"
              alt="Visa Hotel"
              className="relative h-[400px] w-full rounded-lg object-cover shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-lg bg-green-100 p-3 text-green-600">
                <Hotel size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Visa & Khách Sạn
              </h2>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Xóa tan nỗi lo về thủ tục hành chính và nơi lưu trú. Dịch vụ Visa
              nhanh gọn với tỷ lệ đậu cao và hệ thống đặt phòng khách sạn toàn
              cầu với giá ưu đãi.
            </p>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
              <h4 className="mb-2 font-bold text-gray-900">
                Tại sao chọn chúng tôi?
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col text-sm text-gray-600">
                  <span className="text-2xl font-bold text-green-600">99%</span>
                  Tỷ lệ đậu Visa
                </div>
                <div className="flex flex-col text-sm text-gray-600">
                  <span className="text-2xl font-bold text-green-600">1M+</span>
                  Khách sạn liên kết
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Icons */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <feature.icon
                  size={48}
                  className="mx-auto mb-4 text-orange-600"
                />
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 px-4 py-20 text-center">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Bạn đã sẵn sàng cho chuyến đi tiếp theo?
          </h2>
          <p className="mb-8 text-lg text-orange-50">
            Liên hệ với TACHUDU ngay hôm nay để nhận tư vấn miễn phí và báo giá
            tốt nhất.
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
