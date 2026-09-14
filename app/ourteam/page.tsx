import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import TeamSection from "../common/TeamSection";

export default function OurTeam() {
  return (
    <div>
      <PageBanner title={site.pages['our-team'].bannerTitle} />
      <TeamSection />
    </div>
  );
}
