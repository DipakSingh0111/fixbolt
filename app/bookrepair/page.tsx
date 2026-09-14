import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import BookRepairSection from "../common/BookRepairSection";

export default function BookRepair() {
  return (
    <div>
      <PageBanner title={data.pages.bookRepair.bannerTitle} />
      <BookRepairSection />
    </div>
  );
}
