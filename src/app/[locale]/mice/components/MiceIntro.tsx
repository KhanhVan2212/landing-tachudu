import React from "react";
import Image from "next/image";

const MiceIntro = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
                    alt="Conference"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                    alt="Event details"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
                    alt="Team building"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2070&auto=format&fit=crop"
                    alt="Presentation"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-2 font-bold uppercase tracking-wider text-orange-500">
                Giới Thiệu
              </h2>
              <h3 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
                MICE - Nâng Tầm <br />
                <span className="text-orange-600">Sự Kiện Doanh Nghiệp</span>
              </h3>
              <div className="mb-8 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-gray-900">MICE</span> là viết
                tắt của
                <span className="font-semibold text-orange-600">
                  {" "}
                  Meeting
                </span>{" "}
                (Hội họp),
                <span className="font-semibold text-orange-600">
                  {" "}
                  Incentive
                </span>{" "}
                (Khen thưởng),
                <span className="font-semibold text-orange-600">
                  {" "}
                  Conference
                </span>{" "}
                (Hội nghị), và
                <span className="font-semibold text-orange-600">
                  {" "}
                  Exhibition
                </span>{" "}
                (Triển lãm).
              </p>
              <p className="leading-relaxed">
                Đây là loại hình du lịch kết hợp hội nghị, hội thảo, triển lãm,
                tổ chức sự kiện, du lịch khen thưởng của các công ty cho nhân
                viên, đối tác. MICE không chỉ là một chuyến đi, mà là cơ hội để
                doanh nghiệp gắn kết đội ngũ, mở rộng mạng lưới đối tác và khẳng
                định vị thế thương hiệu.
              </p>
              <p className="leading-relaxed">
                Với kinh nghiệm tổ chức chuyên nghiệp, chúng tôi cam kết mang
                đến những giải pháp MICE toàn diện, sáng tạo và hiệu quả nhất,
                được may đo riêng cho từng doanh nghiệp.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="group flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 transition-colors duration-300 group-hover:bg-orange-600">
                  <svg
                    className="h-6 w-6 text-orange-600 transition-colors duration-300 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800">
                  Chuyên Nghiệp
                </span>
              </div>
              <div className="group flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 transition-colors duration-300 group-hover:bg-red-600">
                  <svg
                    className="h-6 w-6 text-red-600 transition-colors duration-300 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800">
                  Tiết Kiệm Thời Gian
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiceIntro;
