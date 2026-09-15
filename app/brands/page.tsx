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
      <PageBanner 
            title={site.pages.brands.bannerTitle} 
            breadcrumbs={[
            { label: site.pageBanner.homeLabel, href: "/" },
            { label: "About", href: "/#" },
            { label: site.pages.brands.bannerTitle },
            ]}
        />
      <BrandsSection />
    </div>
  );
}
