import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import ContactSection from "../common/ContactSection";

export default function ContactPage() {
  return (
    <div>
      <PageBanner title={data.pages.contact.bannerTitle} />
      <ContactSection />
    </div>
  );
}
