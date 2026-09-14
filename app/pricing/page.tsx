import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import RepairPricingSection from "../common/RepairPricingSection";

export default function PricingPage() {
  return (
    <>
      <PageBanner title={site.pages.pricing.bannerTitle} />
      <RepairPricingSection />
    </>
  );
}
