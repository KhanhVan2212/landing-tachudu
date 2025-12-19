"use client";
import React from "react";
import { Plane, Building2 } from "lucide-react";

const airlines = [
  "Vietnam Airlines",
  "Vietjet Air",
  "Bamboo Airways",
  "AirAsia",
  "Korean Air",
  "Quantas",
  "China Southern",
  "American Airlines",
  "Japan Airlines",
  "Air France",
  "Asiana Airlines",
  "Air China",
  "Eva Air",
  "Lufthansa",
  "Philipine Airlines",
  "British Airways",
  "Aeroflot",
  "Singapore Airlines",
  "Delta Airlines",
  "China Airlines",
  "Air Canada",
  "Cathay Pacific",
  "Turkish Airlines",
  "Emirates",
];

const clients = [
  "BIDV",
  "Vietinbank",
  "BIC",
  "Mobifone",
  "Agribank",
  "Trung Tâm Hội Nghị Quốc Gia",
  "Crystal Bay",
  "Arysta Life Science",
];

const Partners: React.FC = () => {
  return (
    <section
      id="partners"
      className="overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-12 text-center text-2xl font-bold text-gray-900">
          Đối tác & Khách hàng
        </h3>

        {/* Airlines Slider */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-center">
            <Plane className="mr-2 h-6 w-6 text-orange-600" />
            <h4 className="text-lg font-semibold text-gray-700">
              Đối tác Hàng Không
            </h4>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="animate-scroll-left flex">
                {[...airlines, ...airlines].map((airline, index) => (
                  <div
                    key={index}
                    className="mx-3 flex-shrink-0 rounded-lg border border-gray-100 bg-white px-6 py-3 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="whitespace-nowrap text-sm font-medium text-gray-700">
                      {airline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Clients Slider */}
        <div>
          <div className="mb-6 flex items-center justify-center">
            <Building2 className="mr-2 h-6 w-6 text-orange-600" />
            <h4 className="text-lg font-semibold text-gray-700">
              Khách hàng Doanh Nghiệp
            </h4>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="animate-scroll-right flex">
                {[...clients, ...clients, ...clients].map((client, index) => (
                  <div
                    key={index}
                    className="mx-3 flex-shrink-0 rounded-lg border border-gray-100 bg-white px-8 py-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="whitespace-nowrap text-sm font-bold text-gray-800">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
