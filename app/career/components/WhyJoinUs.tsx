import React from "react";
import {
  Users,
  GraduationCap,
  HandCoins,
  HeartPulse,
  CalendarPlus,
  Award,
} from "lucide-react";

import { CareerData } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Users,
  GraduationCap,
  HandCoins,
  HeartPulse,
  CalendarPlus,
  Award,
};

export default function WhyJoinUs({ whyJoin }: { whyJoin: CareerData['whyJoin'] }) {
  return (
    <section className="site-container bg-[#fffafa] py-6 sm:py-8 mb-8 rounded-xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-2">
          {whyJoin.title}
        </h2>
        <div className="w-10 h-[2px] bg-[#e51d25] mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-3 gap-y-6 sm:gap-x-4 lg:gap-x-2 xl:gap-x-4 max-w-6xl mx-auto">
        {whyJoin.perks.map((perk: any, idx: number) => {
          const Icon = iconMap[perk.icon];
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-1 sm:px-2 lg:px-1 xl:px-2"
            >
              <div className="flex items-center justify-center mb-2.5 text-[#cc1616]">
                {Icon && <Icon strokeWidth={1.5} className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />}
              </div>
              <h4 className="text-[13px] sm:text-sm lg:text-[13px] xl:text-sm font-bold text-gray-900 mb-1.5 leading-tight">
                {perk.title}
              </h4>
              <p className="text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[11px] text-gray-500 leading-relaxed max-w-[160px] lg:max-w-none">
                {perk.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
