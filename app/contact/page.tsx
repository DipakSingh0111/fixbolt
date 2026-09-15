import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import ContactSection from "../common/ContactSection";

export const metadata: Metadata = {
  title: "Contact | FixBolt",
};

export default function ContactPage() {
  return (
    <div>
      <PageBanner title={site.pages.contact.bannerTitle} />
      <ContactSection />
    </div>
  );
}
