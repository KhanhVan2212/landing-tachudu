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

import { journeyImages } from "../../about/components/journey-diary";

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
