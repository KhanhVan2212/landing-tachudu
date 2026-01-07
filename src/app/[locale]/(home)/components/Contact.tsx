"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { CONTACT_INFO } from "../../../../../constants"; // Removed
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
} from "@/lib/schemas/contact-schema";
import { toast } from "sonner";

interface ContactProps {
  companyInfo: any;
}

const Contact: React.FC<ContactProps> = ({ companyInfo }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ... form setup

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm nhất.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
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
                    {companyInfo?.address ||
                      "Số 2 Tông Đản, Hoàn Kiếm, Hà Nội"}
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
                    href={`tel:${companyInfo?.hotline?.replace(/\./g, "") || "02439351122"}`}
                    className="text-gray-600 hover:text-orange-600"
                  >
                    {companyInfo?.hotline || "024.39351122"}
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
                    href={`mailto:${companyInfo?.email || "tachuduvn@gmail.com"}`}
                    className="text-gray-600 hover:text-orange-600"
                  >
                    {companyInfo?.email || "tachuduvn@gmail.com"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 text-gray-800 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Họ tên
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName")}
                    className={`w-full rounded-lg border bg-gray-50 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-orange-200 ${
                      errors.fullName
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-orange-500"
                    }`}
                    placeholder="Nguyễn Văn A"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
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
                    id="phone"
                    {...register("phone")}
                    className={`w-full rounded-lg border bg-gray-50 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-orange-200 ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-orange-500"
                    }`}
                    placeholder="0909 xxx xxx"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
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
                  id="email"
                  {...register("email")}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-orange-200 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-orange-500"
                  }`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Nội dung cần tư vấn
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className={`w-full resize-none rounded-lg border bg-gray-50 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-orange-200 ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-orange-500"
                  }`}
                  placeholder="Tôi muốn đặt tour đi..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-lg bg-orange-600 py-4 font-bold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-orange-600/30 disabled:opacity-70"
              >
                {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
