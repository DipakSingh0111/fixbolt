import type { Metadata } from "next";
import AboutSection from "../common/AboutSection";

export const metadata: Metadata = {
  title: "About Us | FixBolt",
  description:
    "FixBolt specializes in fast, reliable, and affordable mobile repair — expert technicians, genuine parts, and a customer-first approach.",
};

export default function AboutPage() {
  return <AboutSection />;
}
