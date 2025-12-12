import React from "react";

const CoreValues = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-orange-600 p-10 text-white shadow-2xl md:p-16">
          <div className="absolute right-0 top-0 -mr-10 -mt-10 h-64 w-64 rounded-full bg-orange-500 opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-yellow-500 opacity-50 blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h2 className="mb-8 inline-block border-b-2 border-orange-400 pb-2 text-3xl font-bold uppercase tracking-widest">
              Giá Trị Cốt Lõi
            </h2>
            <p className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed md:text-3xl">
              Kiến tạo những trải nghiệm vượt xa mong đợi thông qua thực hiện
              hóa mong muốn của khách hàng và sự kết hợp hài hòa giữa sáng tạo
              tiên phong với giá trị văn hóa phong phú.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
