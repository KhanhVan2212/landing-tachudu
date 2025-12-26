"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
} from "@/lib/schemas/contact-schema";
import { toast } from "sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      toast.success("Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm nhất.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Có lỗi xảy ra, vui lòng thử lại sau.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl lg:p-12">
      <h2 className="mb-2 text-3xl font-bold text-gray-900">Gửi tin nhắn</h2>
      <p className="mb-8 text-gray-600">
        Bạn có thắc mắc hoặc cần tư vấn? Điền thông tin bên dưới, chúng tôi sẽ
        liên hệ lại ngay.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              Họ và tên
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName")}
              placeholder="Nguyễn Văn A"
              className={`w-full rounded-xl border bg-gray-50 px-5 py-3 text-gray-900 outline-none transition-all focus:bg-white focus:ring-1 ${
                errors.fullName
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 focus:border-orange-500 focus:ring-orange-500"
              }`}
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
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              Số điện thoại
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              placeholder="0912 345 678"
              className={`w-full rounded-xl border bg-gray-50 px-5 py-3 text-gray-900 outline-none transition-all focus:bg-white focus:ring-1 ${
                errors.phone
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 focus:border-orange-500 focus:ring-orange-500"
              }`}
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
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="example@gmail.com"
            className={`w-full rounded-xl border bg-gray-50 px-5 py-3 text-gray-900 outline-none transition-all focus:bg-white focus:ring-1 ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:border-orange-500 focus:ring-orange-500"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Nội dung cần tư vấn
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            placeholder="Tôi muốn tìm hiểu về tour..."
            className={`w-full rounded-xl border bg-gray-50 px-5 py-3 text-gray-900 outline-none transition-all focus:bg-white focus:ring-1 ${
              errors.message
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:border-orange-500 focus:ring-orange-500"
            }`}
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
          className="group flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-red-600 py-4 font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-70"
        >
          {isSubmitting ? "Đang gửi..." : "Gửi ngay"}
          {!isSubmitting && (
            <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
