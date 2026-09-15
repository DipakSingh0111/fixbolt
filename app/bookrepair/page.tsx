import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import BookRepairSection from "../common/BookRepairSection";

export const metadata: Metadata = {
  title: "Book A Repair | FixBolt",
};

export default function BookRepair() {
  return (
    <div>
      <PageBanner title={site.pages['book-repair'].bannerTitle} />
      <BookRepairSection />
    </div>
  );
}
