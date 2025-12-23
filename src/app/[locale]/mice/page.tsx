"use client";

import React, { useEffect } from "react";
import MiceHero from "./components/MiceHero";
import MiceIntro from "./components/MiceIntro";
import MiceServices from "./components/MiceServices";
import MiceAdvantages from "./components/MiceAdvantages";
import MiceProcess from "./components/MiceProcess";
import { JourneyDiary } from "./components/JourneyDiary";
import Contact from "../(home)/components/Contact";
import AirlinePartners from "../(home)/components/AirlinePartners";

export default function MICEPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <MiceHero />
      <MiceIntro />
      {/* <MiceServices /> */}
      <MiceAdvantages />
      <JourneyDiary />  
      <MiceProcess />
      <AirlinePartners />
      <Contact />
    </div>
  );
}
