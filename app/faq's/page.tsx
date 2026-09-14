import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import FaqSection from "../common/FaqSection";

export default function FaqPage() {
  return (
    <div>
      <PageBanner title={site.pages.faqs.bannerTitle} />
      <FaqSection />
    </div>
  );
}
