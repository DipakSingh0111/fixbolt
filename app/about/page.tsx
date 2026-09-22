import type { Metadata } from "next";
import { site } from "@/data";
import AboutSection from "../common/AboutSection";
import PageBanner from "../common/PageBanner";
import CounterSection from "../common/CounterSection";
import WhyChooseUs from "../common/WhyChooseUs";
import WorkProcessSection from "../common/WorkProcessSection";

export const metadata: Metadata = {
  title: "About Us | FixBolt",
  description: site.pages.about.metaDescription,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner 
            title={site.pages.about.bannerTitle}
        />
      <AboutSection />
      <CounterSection />
      <WhyChooseUs />
      <WorkProcessSection />
    </>
  );
}

