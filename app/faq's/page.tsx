import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import FaqSection from "../common/FaqSection";

export default function FaqPage() {
  return (
    <div>
      <PageBanner title={data.pages.faq.bannerTitle} />
      <FaqSection />
    </div>
  );
}
