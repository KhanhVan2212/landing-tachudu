import React from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl lg:p-12">
      <h2 className="mb-2 text-3xl font-bold text-gray-900">Gửi tin nhắn</h2>
      <p className="mb-8 text-gray-600">
        Bạn có thắc mắc hoặc cần tư vấn? Điền thông tin bên dưới, chúng tôi sẽ
        liên hệ lại ngay.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              Họ và tên
            </label>
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-gray-900 outline-none transition-all focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              Số điện thoại
            </label>
            <input
              type="tel"
              placeholder="0912 345 678"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-gray-900 outline-none transition-all focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Email
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-gray-900 outline-none transition-all focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Nội dung cần tư vấn
          </label>
          <textarea
            rows={4}
            placeholder="Tôi muốn tìm hiểu về tour..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-gray-900 outline-none transition-all focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500"
          ></textarea>
        </div>

        <button
          type="button"
          className="group flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-red-600 py-4 font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.98]"
        >
          Gửi ngay
          <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
