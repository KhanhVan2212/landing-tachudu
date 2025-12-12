"use client";
import { useTranslations } from "next-intl";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

const Page = () => {
  const t = useTranslations();
  return (
    <div>
      <Hero />
      <Services />
      <Advantages />
      <Testimonials />
      <Partners />
      <Contact />
    </div>
  );
};

export default Page;
