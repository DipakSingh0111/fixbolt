import React from "react";
import {
  Users,
  GraduationCap,
  HandCoins,
  HeartPulse,
  CalendarPlus,
  Award,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Users,
  GraduationCap,
  HandCoins,
  HeartPulse,
  CalendarPlus,
  Award,
};

export default function WhyJoinUs({ whyJoin }: { whyJoin: any }) {
  return (
    <section className="site-container bg-[#fffafa] pt-4 sm:pt-6 pb-8 sm:pb-12 mb-10 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-4">
          {whyJoin.title}
        </h2>
        <div className="w-10 h-[2px] bg-[#e51d25] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
        {whyJoin.perks.map((perk: any, idx: number) => {
          const Icon = iconMap[perk.icon];
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4 sm:px-6 py-6 sm:py-0"
            >
              <div className="flex items-center justify-center mb-5 text-[#cc1616]">
                {Icon && <Icon strokeWidth={1.5} className="w-11 h-11" />}
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 leading-tight">
                {perk.title}
              </h4>
              <p className="text-[11px] text-gray-500 leading-relaxed max-w-[180px]">
                {perk.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
