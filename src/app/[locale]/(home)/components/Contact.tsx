import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { CONTACT_INFO } from "../../../../../constants";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20"
    >
      {/* Decorative circles */}
      <div className="absolute right-0 top-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-orange-200 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-orange-300 opacity-20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-orange-600">
              Liên hệ
            </span>
            <h2 className="mb-6 mt-2 text-4xl font-bold text-gray-900">
              Bắt đầu hành trình của bạn
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              Để lại thông tin, đội ngũ TACHUDU sẽ liên hệ tư vấn giải pháp tốt
              nhất cho chuyến đi của bạn.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-orange-100 p-3">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Địa chỉ</h4>
                  <p className="text-gray-600">
                    Số 4 ngõ 230/31 Phố Định Công Thượng, Phường Định Công, Quận
                    Hoàng Mai, HN
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-orange-100 p-3">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Hotline</h4>
                  <a
                    href={`tel:${CONTACT_INFO.hotlineUrl}`}
                    className="text-gray-600 hover:text-orange-600"
                  >
                    {CONTACT_INFO.hotline}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-orange-100 p-3">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Email</h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-600 hover:text-orange-600"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 text-gray-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Họ tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    placeholder="0909 xxx xxx"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Nội dung cần tư vấn
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="Tôi muốn đặt tour đi..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-orange-600 py-4 font-bold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-orange-600/30"
              >
                Gửi thông tin <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
