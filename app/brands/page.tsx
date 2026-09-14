import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import BrandsSection from "../common/BrandsSection";

export default function Brands() {
  return (
    <div>
      <PageBanner title={data.pages.brands.bannerTitle} />
      <BrandsSection />
    </div>
  );
}
