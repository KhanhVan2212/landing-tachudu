"use client";
import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import EventIntroSection from "./components/EventIntroSection";
import EventHighlightSection from "./components/EventHighlightSection";
import FeaturedNewsSection from "./components/FeaturedNewsSection";

export default function EventPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <EventIntroSection />
      <EventHighlightSection />
      <FeaturedNewsSection />
      <CategorySection
        title="Du lịch & Sự kiện"
        items={[
          {
            title: "Hành trình khám phá Phú Quốc cùng doanh nghiệp",
            date: "05/07/2024",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          },
          {
            title: "Gala dinner doanh nghiệp tại Đà Nẵng",
            date: "28/06/2024",
            image:
              "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
          },
          {
            title: "Du lịch khen thưởng – Động lực phát triển",
            date: "18/06/2024",
            image:
              "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
          },
        ]}
      />

      <CategorySection
        title="Team building & MICE"
        items={[
          {
            title: "Team building bãi biển gắn kết tập thể",
            date: "02/06/2024",
            image:
              "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
          },
          {
            title: "Sự kiện đào tạo kết hợp nghỉ dưỡng",
            date: "20/05/2024",
            image:
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          },
          {
            title: "Xu hướng tổ chức sự kiện doanh nghiệp 2025",
            date: "10/05/2024",
            image:
              "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
          },
        ]}
      />
    </>
  );
}
