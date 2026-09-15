import { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import ServicesSection from "../common/ServicesSection";

export const metadata: Metadata = {
  title: `${site.pages['services'].bannerTitle} | FixBolt`,
};

export default function Services() {
  return (
    <div>
      <PageBanner title={site.pages['services'].bannerTitle} />
      <ServicesSection />
    </div>
  );
}
