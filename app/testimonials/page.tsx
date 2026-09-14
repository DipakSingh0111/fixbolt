import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import TestimonialsGrid from "../common/TestimonialsGrid";

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner title={data.pages.testimonials.bannerTitle} />
      <TestimonialsGrid />
    </>
  );
}
