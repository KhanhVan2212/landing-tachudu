"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  X,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const journeyImages = [
  {
    id: 1,
    src: "/images/mice/my-1.jpeg",
    alt: "Đoàn khách Tour Mỹ",
    tourName: "Tour Châu Mỹ",
    date: "09/2025",
    category: "Tour Châu Mỹ",
    gallery: [
      "/images/mice/my-1.jpeg",
      "/images/mice/my-2.jpeg",
      "/images/mice/my-3.jpeg",
      "/images/mice/my-4.jpeg",
      "/images/mice/my-5.jpeg",
      "/images/mice/my-6.jpeg",
      "/images/mice/my-7.jpeg",
      "/images/mice/my-8.jpeg",
    ],
  },
  {
    id: 2,
    src: "/images/mice/hoa-anh-dao-1.jpg",
    alt: "Mỹ hoa anh đào",
    tourName: "Tour Châu Mỹ",
    date: "04/2025",
    category: "Tour Châu Mỹ",
    gallery: [
      "/images/mice/hoa-anh-dao-1.jpg",
      "/images/mice/hoa-anh-dao-2.jpg",
      "/images/mice/hoa-anh-dao-3.jpg",
      "/images/mice/hoa-anh-dao-4.jpg",
      "/images/mice/hoa-anh-dao-5.jpg",
    ],
  },
  {
    id: 3,
    src: "/images/mice/chau-my-6.jpg",
    alt: "Đoàn khách Tour Mỹ",
    tourName: "Tour Châu Mỹ",
    date: "09/2025",
    category: "Tour Châu Mỹ",
    gallery: [
      "/images/mice/chau-my-1.jpg",
      "/images/mice/chau-my-2.jpg",
      "/images/mice/chau-my-3.jpg",
      "/images/mice/chau-my-4.jpg",
      "/images/mice/chau-my-5.jpg",
      "/images/mice/chau-my-6.jpg",
    ],
  },
  {
    id: 4,
    src: "/images/mice/my-sun-1.jpg",
    alt: "Đoàn khách Tour Mỹ",
    tourName: "Tour Châu Mỹ",
    date: "02/2025",
    category: "Tour Châu Mỹ",
    gallery: [
      "/images/mice/my-sun-1.jpg",
      "/images/mice/my-sun-2.jpg",
      "/images/mice/my-sun-3.jpg",
      "/images/mice/my-sun-4.jpg",
      "/images/mice/my-sun-5.jpg",
      "/images/mice/my-sun-6.jpg",
    ],
  },
  {
    id: 5,
    src: "/images/mice/chau-uc-1.jpeg",
    alt: "Đoàn khách Tour Úc",
    tourName: "Tour Châu Úc",
    date: "02/2025",
    category: "Tour Châu Úc",
    gallery: [
      "/images/mice/chau-uc-1.jpeg",
      "/images/mice/chau-uc-2.jpeg",
      "/images/mice/chau-uc-3.jpeg",
      "/images/mice/chau-uc-4.jpg",
      "/images/mice/chau-uc-5.jpeg",
    ],
  },
  {
    id: 6,
    src: "/images/mice/chau-phi-1.jpg",
    alt: "Đoàn khách Tour Châu Phi",
    tourName: "Tour Châu Phi",
    date: "02/2025",
    category: "Tour Châu Phi",
    gallery: [
      "/images/mice/chau-phi-1.jpg",
      "/images/mice/chau-phi-2.jpg",
      "/images/mice/chau-phi-3.jpg",
      "/images/mice/chau-phi-4.jpg",
      "/images/mice/chau-phi-5.png",
    ],
  },
  {
    id: 7,
    src: "/images/mice/nam-phi-1.jpg",
    alt: "Đoàn khách Tour Nam Phi",
    tourName: "Tour Châu Phi",
    date: "02/2025",
    category: "Tour Châu Phi",
    gallery: [
      "/images/mice/nam-phi-1.jpg",
      "/images/mice/nam-phi-2.jpg",
      "/images/mice/nam-phi-3.jpg",
      "/images/mice/nam-phi-4.jpg",
      "/images/mice/nam-phi-5.jpg",
    ],
  },
  {
    id: 8,
    src: "/images/mice/nga-1.jpg",
    alt: "Đoàn khách Tour Châu Âu - Nga",
    tourName: "Tour Châu Âu",
    date: "06/2025",
    category: "Tour Châu Âu",
    gallery: [
      "/images/mice/nga-1.jpg",
      "/images/mice/nga-2.jpg",
      "/images/mice/nga-3.jpg",
      "/images/mice/nga-4.jpg",
      "/images/mice/nga-5.jpg",
      "/images/mice/nga-6.jpg",
    ],
  },
  {
    id: 9,
    src: "/images/mice/anh-1.jpg",
    alt: "Đoàn khách Tour Châu Âu - Anh",
    tourName: "Tour Châu Âu",
    date: "09/2023",
    category: "Tour Châu Âu",
    gallery: [
      "/images/mice/anh-1.jpg",
      "/images/mice/anh-2.jpg",
      "/images/mice/anh-3.jpg",
    ],
  },
  {
    id: 10,
    src: "/images/mice/cuu-trai-cau-1.jpg",
    alt: "Đoàn khách Tour Châu Á - Trung Quốc - Cửu Trại Câu",
    tourName: "Tour Châu Á",
    date: "09/2024",
    category: "Tour Châu Á",
    gallery: [
      "/images/mice/cuu-trai-cau-1.jpg",
      "/images/mice/cuu-trai-cau-2.jpg",
      "/images/mice/cuu-trai-cau-3.jpg",
      "/images/mice/cuu-trai-cau-4.jpg",
      "/images/mice/cuu-trai-cau-5.jpg",
      "/images/mice/cuu-trai-cau-6.jpg",
      "/images/mice/cuu-trai-cau-7.jpg",
    ],
  },
  {
    id: 11,
    src: "/images/mice/le-chau-1.jpg",
    alt: "Đoàn khách Tour Châu Á - Trung Quốc - Lệ Châu",
    tourName: "Tour Châu Á",
    date: "09/2024",
    category: "Tour Châu Á",
    gallery: [
      "/images/mice/le-chau-1.jpg",
      "/images/mice/le-chau-2.jpg",
      "/images/mice/le-chau-3.jpg",
      "/images/mice/le-chau-4.jpg",
      "/images/mice/le-chau-5.jpg",
    ],
  },
  {
    id: 12,
    src: "/images/mice/thai-lan-1.jpg",
    alt: "Đoàn khách Tour Châu Á - Thái Lan",
    tourName: "Tour Châu Á",
    date: "09/2024",
    category: "Tour Châu Á",
    gallery: [
      "/images/mice/thai-lan-1.jpg",
      "/images/mice/thai-lan-2.jpg",
      "/images/mice/thai-lan-3.jpg",
      "/images/mice/thai-lan-4.jpg",
    ],
  },
  {
    id: 13,
    src: "/images/mice/singapore-1.jpg",
    alt: "Đoàn khách Tour Châu Á - Singapore",
    tourName: "Tour Châu Á",
    date: "09/2024",
    category: "Tour Châu Á",
    gallery: [
      "/images/mice/singapore-1.jpg",
      "/images/mice/singapore-2.jpg",
      "/images/mice/singapore-3.jpg",
      "/images/mice/singapore-4.jpg",
    ],
  },
  {
    id: 14,
    src: "/images/mice/nhat-ban-1.jpeg",
    alt: "Đoàn khách Tour Châu Á - Nhật Bản",
    tourName: "Tour Châu Á",
    date: "05/2024",
    category: "Tour Châu Á",
    gallery: [
      "/images/mice/nhat-ban-1.jpeg",
      "/images/mice/nhat-ban-2.jpg",
      "/images/mice/nhat-ban-3.jpeg",
      "/images/mice/nhat-ban-4.jpg",
      "/images/mice/nhat-ban-5.jpg",
    ],
  },
  {
    id: 15,
    src: "/images/mice/tra-co-1.jpg",
    alt: "Đoàn khách Tour Nội địa - Trà Cổ",
    tourName: "Nội địa",
    date: "05/2024",
    category: "Nội địa",
    gallery: [
      "/images/mice/tra-co-1.jpg",
      "/images/mice/tra-co-2.jpg",
      "/images/mice/tra-co-3.jpg",
      "/images/mice/tra-co-4.jpg",
      "/images/mice/tra-co-5.jpg",
    ],
  },
  {
    id: 16,
    src: "/images/mice/mui-ne-1.jpg",
    alt: "Đoàn khách Tour Nội địa - Mũi Né",
    tourName: "Nội địa",
    date: "05/2024",
    category: "Nội địa",
    gallery: [
      "/images/mice/mui-ne-1.jpg",
      "/images/mice/mui-ne-2.jpg",
      "/images/mice/mui-ne-3.jpg",
      "/images/mice/mui-ne-4.jpg",
    ],
  },
  {
    id: 17,
    src: "/images/mice/ha-long-1.jpg",
    alt: "Đoàn khách Tour Nội địa - Hạ Long",
    tourName: "Nội địa",
    date: "05/2024",
    category: "Nội địa",
    gallery: [
      "/images/mice/ha-long-1.jpg",
      "/images/mice/ha-long-2.jpg",
      "/images/mice/ha-long-3.jpg",
      "/images/mice/ha-long-4.jpg",
    ],
  },
];

const categories = [
  "Tất cả",
  "Nội địa",
  "Tour Châu Á",
  "Tour Châu Âu",
  "Tour Châu Mỹ",
  "Tour Châu Úc",
  "Tour Châu Phi",
];

export function JourneyDiary() {
  const [selectedTourId, setSelectedTourId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredImages = useMemo(
    () =>
      selectedCategory === "Tất cả"
        ? journeyImages
        : journeyImages.filter((img) => img.category === selectedCategory),
    [selectedCategory],
  );

  const selectedTour = journeyImages.find((img) => img.id === selectedTourId);

  const handleNext = () => {
    if (!selectedTour) return;
    setCurrentImageIndex((prev) =>
      prev === selectedTour.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    if (!selectedTour) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedTour.gallery.length - 1 : prev - 1,
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#fafaf9] py-24">
      {/* Trang trí nền */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-2 font-bold uppercase tracking-wider text-orange-500"
          >
            Thư Viện Ảnh
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl"
          >
            Dấu Ấn <span className="text-orange-600">Hành Trình</span>
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-500 to-red-600"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-10 max-w-2xl text-lg text-gray-600"
          >
            Mỗi bức ảnh là một câu chuyện, mỗi chuyến đi là một trải nghiệm vô
            giá được lưu giữ trọn vẹn qua từng khung hình.
          </motion.p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-200"
                    : "border border-slate-100 bg-white text-slate-600 hover:bg-slate-50",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Dialog
                  open={selectedTourId === image.id}
                  onOpenChange={(open) => {
                    setSelectedTourId(open ? image.id : null);
                    setCurrentImageIndex(0);
                  }}
                >
                  <DialogTrigger asChild>
                    <div className="group relative cursor-pointer overflow-hidden rounded-3xl bg-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <div className="relative w-full overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={800}
                          className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        {/* Overlay khi hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="mb-2 flex items-center gap-2">
                          <Badge className="border-none bg-orange-500 px-2 py-0 text-[10px] hover:bg-orange-600">
                            {image.category}
                          </Badge>
                          <span className="flex items-center gap-1 text-[11px] font-medium text-slate-200">
                            <Calendar className="h-3 w-3" /> {image.date}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold leading-tight">
                          {image.alt}
                        </h4>
                        <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4">
                          <span className="flex items-center gap-1.5 text-sm">
                            <Camera className="h-4 w-4" />{" "}
                            {image.gallery.length} ảnh
                          </span>
                          <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="h-[90vh] max-w-[95vw] overflow-hidden rounded-3xl border-none p-0 lg:max-w-[85vw]">
                    <div className="flex h-full flex-col lg:flex-row">
                      {/* Left: Image Viewer */}
                      <div className="relative flex flex-1 items-center justify-center bg-black p-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedTourId(null)}
                          className="absolute right-4 top-4 z-50 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 lg:hidden"
                        >
                          <X className="h-5 w-5" />
                        </Button>

                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="relative h-full w-full"
                          >
                            <Image
                              src={
                                selectedTour?.gallery[currentImageIndex] || ""
                              }
                              alt="Gallery"
                              fill
                              className="object-contain"
                              priority
                            />
                          </motion.div>
                        </AnimatePresence>

                        {/* Nav Buttons */}
                        <div className="pointer-events-none absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handlePrev}
                            className="pointer-events-auto h-12 w-12 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                          >
                            <ChevronLeft className="h-8 w-8" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleNext}
                            className="pointer-events-auto h-12 w-12 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                          >
                            <ChevronRight className="h-8 w-8" />
                          </Button>
                        </div>
                      </div>

                      {/* Right: Info Sidebar */}
                      <div className="flex w-full flex-col bg-white p-8 lg:w-[380px]">
                        <div className="flex-1">
                          <Badge
                            variant="outline"
                            className="mb-4 border-orange-200 bg-orange-50 text-orange-600"
                          >
                            {selectedTour?.category}
                          </Badge>
                          <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900">
                            {selectedTour?.alt}
                          </h2>

                          <div className="mb-8 space-y-3">
                            <div className="flex items-center gap-3 text-slate-600">
                              <MapPin className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">
                                {selectedTour?.tourName}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                              <Calendar className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">
                                Khởi hành: {selectedTour?.date}
                              </span>
                            </div>
                          </div>

                          <p className="mb-6 text-sm leading-relaxed text-slate-500">
                            Hình ảnh thực tế từ đoàn khách tham gia hành trình.
                            Chúng tôi cam kết chất lượng dịch vụ và những trải
                            nghiệm chân thực nhất.
                          </p>

                          <div className="grid grid-cols-4 gap-2">
                            {selectedTour?.gallery.map((img, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={cn(
                                  "relative aspect-square overflow-hidden rounded-xl transition-all",
                                  currentImageIndex === idx
                                    ? "ring-2 ring-orange-500 ring-offset-2"
                                    : "opacity-50 hover:opacity-100",
                                )}
                              >
                                <Image
                                  src={img}
                                  alt="thumb"
                                  fill
                                  className="object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                        <Link
                          href="#contact"
                          onClick={() => setSelectedTourId(null)}
                        >
                          <Button className="mt-8 flex w-full items-center justify-center rounded-md bg-orange-600 py-6 text-lg font-bold text-white shadow-lg shadow-orange-200 hover:bg-orange-700">
                            Tư vấn Tour này
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Button */}
        <div className="mt-20 text-center">
          <Button
            variant="outline"
            className="group h-14 rounded-full border-slate-200 px-10 text-base font-semibold transition-all hover:bg-slate-900 hover:text-white"
          >
            Khám phá thêm hành trình
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
