"use client";
import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import EventIntroSection from "./components/EventIntroSection";
import EventHighlightSection from "./components/EventHighlightSection";
import FeaturedNewsSection from "./components/FeaturedNewsSection";

import { mockEventPosts } from "@/data/mockEventPosts";

export default function EventPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const travelEvents = mockEventPosts
    .filter((post) => post.category === "Du lịch & Sự kiện")
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      image: post.cover,
    }));

  const teamBuildingEvents = mockEventPosts
    .filter(
      (post) =>
        post.category === "Team Building & MICE" ||
        post.category === "Team Building"
    )
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      image: post.cover,
    }));

  return (
    <>
      <HeroSection />
      <EventIntroSection />
      <EventHighlightSection />
      <FeaturedNewsSection />

      <CategorySection
        title="Du lịch & Sự kiện"
        viewAllHref="/event?category=du-lich-su-kien"
        items={travelEvents}
      />

      <CategorySection
        title="Team building & MICE"
        viewAllHref="/event?category=team-building-mice"
        items={teamBuildingEvents}
      />
    </>
  );
}
