import React from "react";
import Hero from "./components/Hero";
import History from "./components/History";
import CoreValues from "./components/CoreValues";
import Intro from "./components/Intro";
import Contact from "../(home)/components/Contact";
import AirlinePartners from "../(home)/components/AirlinePartners";
import MissionVision from "./components/MissionVision";
import { DreamDestination } from "./components/DreamDestination";
import { getCompanyInfo } from "@/utils/getCompanyInfo";

const Page = async () => {
  const companyInfo = await getCompanyInfo();

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
      <MissionVision />
      {/* Partners List */}
      <DreamDestination />
      <AirlinePartners />
      <Contact companyInfo={companyInfo} />
    </div>
  );
};

export default Page;
