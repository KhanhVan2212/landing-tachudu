"use client";
// Force rebuild
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// Helper để tạo URL placeholder nếu chưa có logo
const getLogo = (name: string, logo?: string) => {
  return (
    logo || `https://placehold.co/200x100?text=${encodeURIComponent(name)}`
  );
};

const airlinePartners = [
  { name: "Korean Air", logo: "/images/Korean-air.png" },
  { name: "Qantas", logo: "/images/Quantas.png" },
  { name: "China Southern", logo: "/images/China-Southern.png" },
  {
    name: "American Airlines",
    logo: "/images/American-Airlines.png",
    scale: 1.5,
  },
  { name: "Japan Airlines", logo: "/images/Japan-Airlines.png", scale: 1.5 },
  { name: "Air France", logo: "/images/Air-France.png" },
  { name: "Asiana Airlines", logo: "/images/Asiana-Airlines.png" },
  { name: "Air China", logo: "/images/Air-China.png" },
  { name: "Eva Air", logo: "/images/EVA-Air.png" },
  { name: "Lufthansa", logo: "/images/Lufthansa.png" },
  {
    name: "Philipine Airlines",
    logo: "/images/Philippine-Airlines.png",
    scale: 1.5,
  },
  { name: "British Airways", logo: "/images/British-Airways.png" },
  { name: "AEROFLOT RUSSIAN AIRLINES", logo: "/images/Aeroflot.png" },
  { name: "Singapore Airlines", logo: "/images/Singapore-Airlines.png" },
  { name: "Delta Airlines", logo: "/images/Delta-Airlines.png" },
  { name: "China Airlines", logo: "/images/China-Airlines.png", scale: 1.5 },
  { name: "Air Canada", logo: "/images/Air-Canada.png" },
  { name: "Cathay Pacific", logo: "/images/Cathay-Pacific.png", scale: 1.5 },
  { name: "Turkish Airlines", logo: "/images/Turkish-Airlines.png" },
  { name: "Emirates", logo: "/images/Emirates.png" },
];

const corporateCustomers = [
  { name: "BIDV", logo: "/images/bidv.png", scale: 1.5 },
  { name: "Vietinbank", logo: "/images/viet-tin-bank.png" },
  { name: "BIC", logo: "/images/bico.png", scale: 1.5 },
  { name: "Mobifone", logo: "/images/Mobifone.png" },
  { name: "Agribank", logo: "/images/agribank.jpg", scale: 1.5 },
  {
    name: "Trung Tâm Hội Nghị Quốc Gia",
    logo: "/images/trung-tam-hoi-nghi-quoc-gia.jpg",
    scale: 1.5,
  },
  { name: "Crystal Bay", logo: "/images/Crystal-Bay.jpg" },
  { name: "Arysta Life Science", logo: "/images/Arysta-Life-Science.png" },
];

const AirlinePartners = () => {
  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white py-12">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-red-600">
            Đối tác hàng không và khách hàng doanh nghiệp
          </span>
        </motion.div>

        {/* Airline Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-800">
              Đối tác hàng không
            </h3>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent"></div>

            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover
              direction="right"
              autoFill
            >
              {airlinePartners.map(
                (
                  item: { name: string; logo: string; scale?: number },
                  index: number,
                ) => (
                  <div
                    key={index}
                    className="flex h-24 w-[200px] items-center justify-center px-4"
                  >
                    <div
                      className="relative h-16 w-full overflow-hidden"
                      style={{
                        transform: item.scale ? `scale(${item.scale})` : "none",
                      }}
                    >
                      <Image
                        src={getLogo(item.name, item.logo)}
                        alt={item.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                ),
              )}
            </Marquee>
          </div>
        </motion.div>

        {/* Corporate Customers Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="mb-6 text-center">
            <h3 className="pb-6 text-xl font-bold text-slate-800">
              Các khách hàng doanh nghiệp
            </h3>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent"></div>

            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover
              direction="left"
              autoFill
            >
              {corporateCustomers.map(
                (
                  item: { name: string; logo: string; scale?: number },
                  index: number,
                ) => (
                  <div
                    key={index}
                    className="flex h-24 w-[200px] items-center justify-center px-4"
                  >
                    <div
                      className="relative h-16 w-full overflow-hidden"
                      style={{
                        transform: item.scale ? `scale(${item.scale})` : "none",
                      }}
                    >
                      <Image
                        src={getLogo(item.name, item.logo)}
                        alt={item.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                ),
              )}
            </Marquee>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AirlinePartners;
