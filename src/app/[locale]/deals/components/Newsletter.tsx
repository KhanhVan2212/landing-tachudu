import React from "react";

const Newsletter = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 text-center md:p-12">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-orange-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-orange-600 opacity-20 blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Đăng ký nhận ưu đãi
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            Nhận thông báo về các chương trình khuyến mãi, vé máy bay giá rẻ và
            các tour du lịch độc quyền sớm nhất.
          </p>
          <form className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <button
              type="button"
              className="rounded-full bg-orange-600 px-8 py-4 font-bold text-white shadow-lg shadow-orange-600/30 transition-colors hover:bg-orange-700"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
