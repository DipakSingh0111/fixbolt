import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import RepairPricingSection from "../common/RepairPricingSection";

export default function PricingPage() {
  return (
    <>
      <PageBanner title={data.pages.pricing.bannerTitle} />
      <RepairPricingSection />
    </>
  );
}
