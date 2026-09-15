import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import TestimonialsGrid from "../common/TestimonialsGrid";

export const metadata: Metadata = {
  title: "Testimonials | FixBolt",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner title={site.pages['testimonials'].bannerTitle} />
      <TestimonialsGrid />
    </>
  );
}
