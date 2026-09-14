import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import ServicesSection from "../common/Services";

export default function Services() {
  return (
    <div>
      <PageBanner title={site.pages['services'].bannerTitle} />
      <ServicesSection />
    </div>
  );
}
