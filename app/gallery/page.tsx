import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import GallerySection from "../common/GallerySection";

export default function GalleryPage() {
  return (
    <div>
      <PageBanner title={site.pages.gallery.bannerTitle} />
      <GallerySection />
    </div>
  );
}
