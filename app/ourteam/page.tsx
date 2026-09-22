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
      <PageBanner title="Our Team" breadcrumbs={[ { label: "Home", href: "/" }, { label: "About", href: "/#" }, { label: "Our Team" } ]} 
      />
      <TeamSection />
    </div>
  );
}

