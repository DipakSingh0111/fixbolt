import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import BrandsSection from "../common/BrandsSection";

export const metadata: Metadata = {
  title: "Brands | FixBolt",
};

export default function Brands() {
  return (
    <div>
      <PageBanner title="Brands" breadcrumbs={[ { label: "Home", href: "/" }, { label: "About", href: "/#" }, { label: "Brands" } ]} 
        />
      <BrandsSection />
    </div>
  );
}

