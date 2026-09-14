import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import ServicesSection from "../common/Services";

export default function Services() {
  return (
    <div>
      <PageBanner title={data.pages.services.bannerTitle} />
      <ServicesSection />
    </div>
  );
}
