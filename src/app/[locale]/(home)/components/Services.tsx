"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../../../../../constants";
import { Link } from "@/i18n/navigation";

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-600">
            Dịch vụ của chúng tôi
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Giải pháp du lịch toàn diện
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Chúng tôi cung cấp đầy đủ các dịch vụ để đảm bảo chuyến đi của bạn
            hoàn hảo nhất.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-orange-500/20 transition-colors group-hover:bg-transparent" />
                <Image
                  src={service.image} // MUST start with "/services/..."
                  alt={service.title}
                  width={800}
                  height={600}
                  priority
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                  <service.icon size={24} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center font-medium text-orange-600 transition-colors hover:text-orange-700"
                >
                  Tìm hiểu thêm <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
