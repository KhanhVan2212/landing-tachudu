"use client";

import React, { useEffect } from "react";

import Hero from "./components/HeroSection";
import DomesticTours from "./components/DomesticTour";
import InternationalTours from "./components/InternationalTour";
import News from "./components/News";
import Contact from "./components/Contact";
import Partners from "./components/Partners";

export default function MICEPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white">
      <Hero />
      <DomesticTours />
      <InternationalTours />
      <News />
      <Partners />
      <Contact />
    </div>
  );
}
