"use client";
import React, { useEffect } from "react";
import { Briefcase, Globe, Award, Users, Plane, Building2 } from "lucide-react";
import Hero from "./components/Hero";
import History from "./components/History";
import CoreValues from "./components/CoreValues";
import Intro from "./components/Intro";
import Contact from "../(home)/components/Contact";
import AirlinePartners from "../(home)/components/AirlinePartners";
import MapLocation from "@/components/Layout/MapLocation";

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="bg-white pt-20">
      {/* Header Section */}
      <Hero />
      {/* Intro */}
      <Intro />
      {/* History & Experience */}
      <History />
      {/* Core Values */}
      <CoreValues />
      {/* Partners List */}
      <AirlinePartners />
      <Contact />
      <MapLocation />
    </div>
  );
};

export default Page;
