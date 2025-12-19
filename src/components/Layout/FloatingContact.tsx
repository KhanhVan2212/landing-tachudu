"use client";

import React, { useState } from "react";
import {
  FaPhone,
  FaXmark,
  FaEnvelope,
  FaLocationDot,
  FaHeadset,
} from "react-icons/fa6";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popup Content */}
      <div
        className={`mb-4 w-80 origin-bottom-right rounded-2xl border border-slate-100 bg-orange-500 p-6 shadow-2xl transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-10 scale-0 opacity-0"
        }`}
      >
        <div className="mb-4 flex items-center justify-between border-b border-white/20 pb-3">
          <h3 className="text-lg font-bold text-white">Liên hệ hỗ trợ</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 transition hover:text-white"
          >
            <FaXmark size={20} />
          </button>
        </div>

        <div className="space-y-5">
          {/* Hotline */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-orange-600">
              <FaPhone />
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">Hotline</p>
              <a
                href="tel:02439351122"
                className="block text-lg font-bold leading-tight text-white hover:underline"
              >
                024.39351122
              </a>
              <span className="text-xs text-white/80">Hỗ trợ 24/7</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-orange-600">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">Email</p>
              <a
                href="mailto:tachuduvn@gmail.com"
                className="block break-all text-sm font-bold leading-tight text-white transition hover:text-white/90"
              >
                tachuduvn@gmail.com
              </a>
              <span className="text-xs text-white/80">
                Phản hồi trong vòng 24h
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-orange-600">
              <FaLocationDot />
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">Văn phòng</p>
              <p className="text-sm font-semibold leading-snug text-white">
                Số 4 ngõ 230/31 Phố Định Công Thượng, Phường Định Công, Quận
                Hoàng Mai, HN
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-orange-600/30 transition-all duration-300 hover:scale-110 ${
          isOpen ? "rotate-90 bg-white" : "animate-bounce-slow bg-orange-600"
        }`}
      >
        {isOpen ? (
          <FaXmark className="text-2xl text-orange-600" />
        ) : (
          <FaHeadset className="text-2xl text-white" />
        )}

        {/* Tooltip hint when closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
            Liên hệ ngay
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
