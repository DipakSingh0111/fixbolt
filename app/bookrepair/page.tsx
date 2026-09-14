import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import BookRepairSection from "../common/BookRepairSection";

export default function BookRepair() {
  return (
    <div>
      <PageBanner title={site.pages['book-repair'].bannerTitle} />
      <BookRepairSection />
    </div>
  );
}
