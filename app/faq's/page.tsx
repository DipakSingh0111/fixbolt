import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import FaqSection from "../common/FaqSection";

export const metadata: Metadata = {
  title: "FAQs | FixBolt",
};

export default function FaqPage() {
  return (
    <div>
      <PageBanner title={site.pages.faqs.bannerTitle} />
      <FaqSection />
    </div>
  );
}
