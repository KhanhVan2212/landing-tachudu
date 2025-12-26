import { getTranslations } from "next-intl/server"; // Use server version
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AirlinePartners from "./components/AirlinePartners";
import FeaturedTours from "./components/FeaturedTours";
import { getCompanyInfo } from "@/utils/getCompanyInfo";

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const companyInfo = await getCompanyInfo();

  return (
    <div>
      <Hero />
      <FeaturedTours />
      <Services />
      <Advantages />
      <Testimonials />
      <AirlinePartners />
      <Contact companyInfo={companyInfo} />
    </div>
  );
};

export default Page;
