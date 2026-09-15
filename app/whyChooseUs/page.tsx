import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import WhyChooseUs from "../common/WhyChooseUs";
import WorkProcessSection from "../common/WorkProcessSection";

export const metadata: Metadata = {
  title: "Why Choose Us | FixBolt",
  description: site.pages['why-choose-us'].metaDescription,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title={site.pages['why-choose-us'].bannerTitle} />
      <WhyChooseUs />
      <WorkProcessSection />
    </>
  );
}
