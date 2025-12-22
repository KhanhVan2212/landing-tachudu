"use client";

import { Link } from "@/i18n/navigation";
import React from "react";
import {
  FaRightLeft,
  FaHeadset,
  FaClock,
  FaCircleCheck,
  FaCreditCard,
  FaStore,
  FaUserShield,
  FaFileContract,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa6";

export default function PolicyPage() {
  // Hàm cuộn mượt đến section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* 1. HERO HEADER */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            Chính sách & Quy định
          </h1>
          <p className="mx-auto max-w-2xl text-orange-100">
            Thông tin chi tiết về quy trình hoàn/đổi vé, thanh toán và cam kết
            bảo mật thông tin của TACHUDU.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* 2. SIDEBAR NAVIGATION (STICKY) */}
          <div className="hidden lg:col-span-1 lg:block">
            <div className="sticky top-28 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-800">
                Mục lục
              </h3>
              <ul className="space-y-3 text-sm font-medium text-slate-600">
                <li
                  onClick={() => scrollToSection("step-1")}
                  className="flex cursor-pointer items-center gap-2 transition hover:translate-x-1 hover:text-orange-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>{" "}
                  Các bước đổi vé
                </li>
                <li
                  onClick={() => scrollToSection("step-2")}
                  className="flex cursor-pointer items-center gap-2 transition hover:translate-x-1 hover:text-orange-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>{" "}
                  Quy trình chung
                </li>
                <li
                  onClick={() => scrollToSection("step-3")}
                  className="flex cursor-pointer items-center gap-2 transition hover:translate-x-1 hover:text-orange-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>{" "}
                  Điều kiện đổi vé
                </li>
                <li
                  onClick={() => scrollToSection("step-4")}
                  className="flex cursor-pointer items-center gap-2 transition hover:translate-x-1 hover:text-orange-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>{" "}
                  Hoàn vé & Hủy vé
                </li>
                <li
                  onClick={() => scrollToSection("step-5")}
                  className="flex cursor-pointer items-center gap-2 transition hover:translate-x-1 hover:text-orange-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>{" "}
                  Chính sách thanh toán
                </li>
                <li
                  onClick={() => scrollToSection("step-6")}
                  className="flex cursor-pointer items-center gap-2 transition hover:translate-x-1 hover:text-orange-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>{" "}
                  Chính sách bảo mật
                </li>
              </ul>
            </div>
          </div>

          {/* 3. MAIN CONTENT */}
          <div className="space-y-12 lg:col-span-3">
            {/* I. Các bước đổi vé */}
            <section id="step-1" className="scroll-mt-28">
              <h2 className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4 text-2xl font-bold text-slate-800">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-lg text-orange-600">
                  <FaRightLeft />
                </span>
                I. Các bước đổi vé máy bay
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-orange-200">
                  <div className="absolute right-0 top-0 rounded-bl-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                    Bước 1
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-800">
                    Truy cập Website
                  </h3>
                  <p className="text-slate-600">
                    Truy cập vào website chính thức của TACHUDU để tra cứu thông
                    tin vé.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-orange-200">
                  <div className="absolute right-0 top-0 rounded-bl-lg bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                    Bước 2
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-800">
                    Liên hệ nhân viên
                  </h3>
                  <p className="mb-3 text-slate-600">
                    Liên hệ nhân viên tư vấn qua Box Chat hoặc Hotline:
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="tel:02439351122"
                      className="flex w-fit items-center gap-2 rounded-full bg-orange-50 px-3 py-1 font-bold text-orange-600 hover:bg-orange-100"
                    >
                      <FaPhone className="text-sm" /> 024.39351122
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* II. Quy trình chung */}
            <section id="step-2" className="scroll-mt-28">
              <h2 className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4 text-2xl font-bold text-slate-800">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-lg text-orange-600">
                  <FaFileContract />
                </span>
                II. Quy trình đổi vé, hoàn vé
              </h2>
              <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700">
                    <FaCircleCheck className="mt-1 flex-shrink-0 text-orange-500" />
                    <span>
                      Việc đổi, hoàn hoặc hủy vé máy bay được thực hiện theo
                      điều kiện giá vé áp dụng tại thời điểm mua vé.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <FaCircleCheck className="mt-1 flex-shrink-0 text-orange-500" />
                    <span>
                      Vé được xử lý đổi/hoàn/hủy phải còn hiệu lực (trong thời
                      gian sử dụng).
                    </span>
                  </li>
                </ul>
                <div className="mt-6 flex gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm font-medium text-yellow-800">
                  <FaClock className="mt-0.5 text-lg" />
                  <p>
                    LƯU Ý QUAN TRỌNG: Trong mọi trường hợp, yêu cầu đổi/hoàn/hủy
                    phải được thực hiện <strong>trước 03 giờ</strong> so với giờ
                    khởi hành dự kiến.
                  </p>
                </div>
              </div>
            </section>

            {/* III & IV. Điều kiện */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <section id="step-3" className="scroll-mt-28">
                <div className="h-full rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 border-b pb-2 text-lg font-bold text-slate-800">
                    <FaRightLeft className="text-orange-500" /> III. Điều kiện
                    đổi vé
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <FaArrowRight className="mt-1 text-xs text-orange-400" />{" "}
                      Áp dụng cho các hạng vé cho phép đổi.
                    </li>
                    <li className="flex gap-2">
                      <FaArrowRight className="mt-1 text-xs text-orange-400" />{" "}
                      Thực hiện tối thiểu trước 03 giờ so với giờ khởi hành.
                    </li>
                    <li className="flex gap-2">
                      <FaArrowRight className="mt-1 text-xs text-orange-400" />{" "}
                      Chỉ đổi sang hành trình/loại vé có giá bằng hoặc cao hơn
                      vé ban đầu.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="step-4" className="scroll-mt-28">
                <div className="h-full rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 border-b pb-2 text-lg font-bold text-slate-800">
                    <FaRightLeft className="text-orange-500" /> IV. Hoàn vé &
                    Hủy vé
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <FaArrowRight className="mt-1 text-xs text-orange-400" />{" "}
                      Áp dụng cho vé có điều kiện hoàn vé.
                    </li>
                    <li className="flex gap-2">
                      <FaArrowRight className="mt-1 text-xs text-orange-400" />{" "}
                      Vé phải chưa được sử dụng hoặc mới sử dụng một phần.
                    </li>
                    <li className="flex gap-2">
                      <FaArrowRight className="mt-1 text-xs text-orange-400" />{" "}
                      Phí hoàn vé sẽ được tính theo quy định của hãng hàng
                      không.
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* V. Chính sách thanh toán */}
            <section id="step-5" className="scroll-mt-28">
              <h2 className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4 text-2xl font-bold text-slate-800">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-lg text-orange-600">
                  <FaCreditCard />
                </span>
                V. Chính sách thanh toán
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl text-orange-600">
                    <FaCreditCard />
                  </div>
                  <h4 className="mb-2 font-bold text-slate-800">
                    Thanh toán Online
                  </h4>
                  <p className="text-sm text-slate-600">
                    Khách hàng có thể thanh toán thông qua các cổng thanh toán
                    trực tuyến:
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded border bg-white px-2 py-1 text-xs font-bold">
                      VISA
                    </span>
                    <span className="rounded border bg-white px-2 py-1 text-xs font-bold">
                      MASTER
                    </span>
                    <span className="rounded border bg-white px-2 py-1 text-xs font-bold">
                      Internet Banking
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl text-orange-600">
                    <FaStore />
                  </div>
                  <h4 className="mb-2 font-bold text-slate-800">
                    Thanh toán tại Đại lý
                  </h4>
                  <p className="text-sm text-slate-600">
                    Đến trực tiếp văn phòng TACHUDU tại:
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    Số 4 ngõ 230/31 Phố Định Công Thượng, Phường Định Công, Quận
                    Hoàng Mai, HN
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Chấp nhận: <span className="font-semibold">Tiền mặt</span>{" "}
                    hoặc <span className="font-semibold">Quẹt thẻ</span>.
                  </p>
                </div>
              </div>
            </section>

            {/* VI. Chính sách bảo mật */}
            <section id="step-6" className="scroll-mt-28">
              <h2 className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4 text-2xl font-bold text-slate-800">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-lg text-orange-600">
                  <FaUserShield />
                </span>
                VI. Chính sách bảo mật
              </h2>
              <div className="space-y-6 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
                <div>
                  <h4 className="mb-2 text-lg font-bold text-orange-600">
                    1. Mục đích và phạm vi thu thập
                  </h4>
                  <p className="text-justify text-sm leading-relaxed text-slate-600">
                    Các loại thông tin cá nhân công ty chúng tôi thu thập phụ
                    thuộc vào những tình huống và loại dịch vụ mà khách hàng yêu
                    cầu cung cấp (họ tên, địa chỉ, chuyến bay, thông tin du
                    lịch, số thẻ tín dụng/ghi nợ, địa chỉ hóa đơn, số điện
                    thoại, sức khỏe...).
                    <br />
                    <br />
                    Công ty có thể thu thập thông tin khi khách hàng làm việc
                    qua điện thoại, tin nhắn, truy cập website hoặc gặp gỡ trực
                    tiếp.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-orange-600">
                    2. Phạm vi sử dụng thông tin
                  </h4>
                  <p className="text-justify text-sm leading-relaxed text-slate-600">
                    Công ty thu thập thông tin cá nhân của khách hàng cho những
                    mục đích sau đây: để tiến hành sắp xếp việc đi lại, vận
                    chuyển hàng hóa và những giao dịch khác.
                    <br />
                    <br />
                    Một số thông tin cá nhân công ty thu thập sẽ rất cần thiết
                    để có thể xác định chính xác người nào đang sử dụng dịch vụ.
                    Những loại thông tin khác giúp TACHUDU lập hồ sơ cá nhân về
                    người đang sử dụng dịch vụ và xác định nhu cầu của khách
                    hàng.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
