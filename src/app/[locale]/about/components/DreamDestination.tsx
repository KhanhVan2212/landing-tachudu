"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { journeyImages } from "./journey-diary";

const ITEMS_PER_PAGE = 7; // Customize based on grid slots

export function DreamDestination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Flatten all images from journeyImages (main + gallery)
  const allDestinations = useMemo(() => {
    return journeyImages.flatMap((tour) => {
      // Main image
      const mainImage = {
        src: tour.src,
        alt: tour.tourName || tour.alt, // Prefer simpler name if available
      };
      // Gallery images
      const galleryImages = tour.gallery.map((imgSrc) => ({
        src: imgSrc,
        alt: tour.tourName || tour.alt,
      }));
      return [mainImage, ...galleryImages];
    });
  }, []);

  const totalPages = Math.ceil(allDestinations.length / ITEMS_PER_PAGE);

  // Slice for current page
  const currentItems = allDestinations.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="text-secondary text-sm font-bold uppercase tracking-widest text-orange-600">
            Dream Destination
          </span>
          <h2 className="text-primary mt-2 text-4xl font-bold text-gray-900">
            Sự lựa chọn của khách hàng
          </h2>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Side Arrows (Desktop) */}
          <div className="hidden xl:block">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="group absolute -left-28 top-1/2 z-20 -translate-y-1/2 transition-transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Previous page"
            >
              <div className="relative h-24 w-24">
                <ChevronLeft className="absolute left-2 top-0 h-full w-full text-gray-300" />
                <ChevronLeft className="relative z-10 h-full w-full text-red-500 transition-transform group-hover:-translate-x-1" />
              </div>
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="group absolute -right-28 top-1/2 z-20 -translate-y-1/2 transition-transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Next page"
            >
              <div className="relative h-24 w-24">
                <ChevronRight className="absolute right-2 top-0 h-full w-full text-gray-300" />
                <ChevronRight className="relative z-10 h-full w-full text-red-500 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid h-[600px] grid-cols-2 grid-rows-3 gap-4 md:h-[500px] md:grid-cols-4 md:grid-rows-2">
            {currentItems.map((item, index) => {
              // Determine span based on index for the bento effect
              // First item is large (2x2)
              const isLarge = index === 0;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedImage(item)}
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-3xl",
                    isLarge ? "col-span-2 row-span-2" : "col-span-1 row-span-1",
                  )}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-lg font-bold text-white">
                      {item.alt}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="mt-8 flex justify-center gap-2 xl:hidden">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={cn(
                  "h-3 w-3 rounded-full transition-all",
                  currentPage === idx ? "w-8 bg-red-500" : "bg-gray-300",
                )}
              />
            ))}
          </div>

          {/* Lightbox Dialog */}
          <Dialog
            open={!!selectedImage}
            onOpenChange={(open) => !open && setSelectedImage(null)}
          >
            <DialogContent className="flex max-h-[90vh] max-w-[90vw] items-center justify-center overflow-hidden border-none bg-transparent p-0 shadow-none">
              {/* Make Title visually hidden but present for accessibility */}
              <DialogTitle className="sr-only">
                {selectedImage?.alt || "Image Preview"}
              </DialogTitle>

              <div className="relative h-[80vh] w-full md:h-[90vh]">
                {selectedImage && (
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
