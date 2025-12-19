import React from "react";
import { Star } from "lucide-react";

const VoucherSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Kho Voucher Độc Quyền
          </h2>
          <p className="mt-2 text-gray-500">
            Dành riêng cho thành viên TACHUDU
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Voucher 1 */}
          <div className="relative flex flex-col overflow-hidden rounded-xl border border-orange-100 bg-gradient-to-r from-orange-50 to-white shadow-sm transition-shadow hover:shadow-md sm:flex-row">
            <div className="flex w-full items-center justify-center bg-orange-500 p-2 sm:w-8 sm:p-0">
              <span className="whitespace-nowrap text-sm font-bold tracking-widest text-white sm:-rotate-90">
                COUPON
              </span>
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-800">GIAM500K</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Giảm 500k cho đơn hàng vé máy bay quốc tế
                  </p>
                </div>
                <Star className="fill-current text-yellow-400" />
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-dashed border-gray-300 pt-4">
                <span className="text-xs text-gray-500">HSD: 30/12/2024</span>
                <button className="text-sm font-bold text-orange-600 hover:underline">
                  Lưu mã
                </button>
              </div>
            </div>
            {/* Decorative circles to make it look like a ticket */}
            <div className="absolute -left-2 top-1/2 h-4 w-4 rounded-full bg-white sm:hidden"></div>
            <div className="absolute -right-2 top-1/2 h-4 w-4 rounded-full bg-white"></div>
          </div>

          {/* Voucher 2 */}
          <div className="relative flex flex-col overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white shadow-sm transition-shadow hover:shadow-md sm:flex-row">
            <div className="flex w-full items-center justify-center bg-blue-500 p-2 sm:w-8 sm:p-0">
              <span className="whitespace-nowrap text-sm font-bold tracking-widest text-white sm:-rotate-90">
                COUPON
              </span>
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    SUMMER2024
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Giảm 10% tối đa 2 triệu cho Tour trong nước
                  </p>
                </div>
                <Star className="fill-current text-yellow-400" />
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-dashed border-gray-300 pt-4">
                <span className="text-xs text-gray-500">HSD: 15/08/2024</span>
                <button className="text-sm font-bold text-blue-600 hover:underline">
                  Lưu mã
                </button>
              </div>
            </div>
            <div className="absolute -right-2 top-1/2 h-4 w-4 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoucherSection;
