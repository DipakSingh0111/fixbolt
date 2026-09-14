import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import TeamSection from "../common/TeamSection";

export default function OurTeam() {
  return (
    <div>
      <PageBanner title={data.pages.ourTeam.bannerTitle} />
      <TeamSection />
    </div>
  );
}
