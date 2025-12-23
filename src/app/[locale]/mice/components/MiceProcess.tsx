import React from "react";

const MiceProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Tiếp Nhận & Tư Vấn",
      description:
        "Lắng nghe nhu cầu, ngân sách và mục tiêu của doanh nghiệp để tư vấn giải pháp phù hợp nhất.",
    },
    {
      number: "02",
      title: "Lên Ý Tưởng & Kế Hoạch",
      description:
        "Xây dựng kịch bản chi tiết, thiết kế concept, chương trình tour và dự trù ngân sách.",
    },
    {
      number: "03",
      title: "Ký Kết & Triển Khai",
      description:
        "Ký hợp đồng và tiến hành đặt dịch vụ, chuẩn bị hậu cần, thiết kế ấn phẩm truyền thông.",
    },
    {
      number: "04",
      title: "Tổ Chức & Giám Sát",
      description:
        "Điều hành sự kiện, tour theo kịch bản, xử lý tình huống phát sinh chuyên nghiệp.",
    },
    {
      number: "05",
      title: "Tổng Kết & Đánh Giá",
      description:
        "Nghiệm thu, làm báo cáo tổng kết và lấy ý kiến đánh giá để hoàn thiện dịch vụ.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-3 font-bold uppercase tracking-wider text-orange-600">
            Quy Trình Làm Việc
          </h2>
          <h3 className="text-4xl font-bold text-gray-900">
            5 Bước Tổ Chức <span className="text-orange-600">Thành Công</span>
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-0 top-1/2 z-0 hidden h-1 w-full -translate-y-1/2 bg-gray-100 lg:block"></div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={index} className="group relative z-10">
                <div className="h-full transform rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl group-hover:-translate-y-2">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-2xl font-bold text-white shadow-lg shadow-orange-500/20 lg:mx-0">
                    {step.number}
                  </div>
                  <h4 className="mb-3 text-center text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600 lg:text-left">
                    {step.title}
                  </h4>
                  <p className="text-center text-sm leading-relaxed text-gray-600 lg:text-left">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiceProcess;
