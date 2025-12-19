"use client";
import { useTranslations } from "next-intl";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AirlinePartners from "./components/AirlinePartners";

const Page = () => {
  const t = useTranslations();
  return (
    <div>
      <Hero />
      <Services />
      <Advantages />
      <Testimonials />
      <AirlinePartners />
      <Contact />
    </div>
  );
};

export default Page;
