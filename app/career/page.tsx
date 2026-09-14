import React from "react";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";

import CareerHero from "./components/CareerHero";
import WhyJoinUs from "./components/WhyJoinUs";
import OpenPositions from "./components/OpenPositions";
import CareerCta from "./components/CareerCta";

export default function CareerPage() {
  const { hero, buildFuture, whyJoin, openPositions, bottomCta } = site.career;

  return (
    <div className="font-sans min-h-screen bg-white">
      <PageBanner title={hero.title} />
      <CareerHero buildFuture={buildFuture} />
      <WhyJoinUs whyJoin={whyJoin} />
      <OpenPositions openPositions={openPositions} />
      <CareerCta bottomCta={bottomCta} />
    </div>
  );
}
