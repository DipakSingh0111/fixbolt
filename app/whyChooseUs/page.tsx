import type { Metadata } from "next";
import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import WhyChooseUs from "../common/WhyChooseUs";
import WorkProcessSection from "../common/WorkProcessSection";

export const metadata: Metadata = {
  title: data.pages.whyChooseUs.metaTitle,
  description: data.pages.whyChooseUs.metaDescription,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title={data.pages.whyChooseUs.bannerTitle} />
      <WhyChooseUs />
      <WorkProcessSection />
    </>
  );
}
