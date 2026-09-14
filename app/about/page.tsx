import type { Metadata } from "next";
import data from "@/data/data.json";
import AboutSection from "../common/AboutSection";
import PageBanner from "../common/PageBanner";
import CounterSection from "../common/CounterSection";
import WhyChooseUs from "../common/WhyChooseUs";
import WorkProcessSection from "../common/WorkProcessSection";

export const metadata: Metadata = {
  title: data.pages.about.metaTitle,
  description: data.pages.about.metaDescription,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title={data.pages.about.bannerTitle} />
      <AboutSection />
      <CounterSection />
      <WhyChooseUs />
      <WorkProcessSection />
    </>
  );
}
