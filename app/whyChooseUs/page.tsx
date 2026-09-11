import type { Metadata } from "next";
import PageBanner from "../common/PageBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import WorkProcessSection from "../components/WorkProcessSection";

export const metadata: Metadata = {
  title: "Why Choose Us | FixBolt",
  description:
    "FixBolt specializes in fast, reliable, and affordable mobile repair — expert technicians, genuine parts, and a customer-first approach.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="Why Choose Us" />
      <WhyChooseUs />
      <WorkProcessSection />
    </>
  );
}
