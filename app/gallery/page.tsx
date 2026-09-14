import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import GallerySection from "../common/GallerySection";

export default function GalleryPage() {
  return (
    <div>
      <PageBanner title={data.pages.gallery.bannerTitle} />
      <GallerySection />
    </div>
  );
}
