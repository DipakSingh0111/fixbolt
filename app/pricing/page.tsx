import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import RepairPricingSection from "../common/RepairPricingSection";

export const metadata: Metadata = {
  title: "Pricing | FixBolt",
};

export default function PricingPage() {
  return (
    <>
      <PageBanner title={site.pages.pricing.bannerTitle} />
      <RepairPricingSection />
    </>
  );
}
