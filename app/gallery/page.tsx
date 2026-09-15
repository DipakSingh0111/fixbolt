import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import GallerySection from "../common/GallerySection";

export const metadata: Metadata = {
  title: "Gallery | FixBolt",
};

export default function GalleryPage() {
  return (
    <div>
      <PageBanner 
            title={site.pages.gallery.bannerTitle} 
            breadcrumbs={[
            { label: site.pageBanner.homeLabel, href: "/" },
            { label: "Resources", href: "/#" },
            { label: site.pages.gallery.bannerTitle },
            ]}
        />
      <GallerySection />
    </div>
  );
}
