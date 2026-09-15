import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import TeamSection from "../common/TeamSection";

export const metadata: Metadata = {
  title: "Our Team | FixBolt",
};

export default function OurTeam() {
  return (
    <div>
      <PageBanner 
        title={site.pages['our-team'].bannerTitle} 
        breadcrumbs={[
          { label: site.pageBanner.homeLabel, href: "/" },
          { label: "About", href: "/#" },
          { label: site.pages['our-team'].bannerTitle },
        ]}
      />
      <TeamSection />
    </div>
  );
}
