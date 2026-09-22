import React from "react";
import { Users, TrendingUp, ShieldCheck } from "lucide-react";

import { CareerData } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Users,
  TrendingUp,
  ShieldCheck,
};

export default function CareerHero({ buildFuture }: { buildFuture: CareerData['buildFuture'] }) {
  return (
    <section className="relative flex flex-col lg:flex-row items-stretch w-full overflow-hidden bg-white min-h-[500px]">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 pt-10 md:pt-16 lg:pt-20 pb-10 lg:pb-20 px-4 sm:px-6 lg:pl-8 xl:pl-40 lg:pr-10 z-10 flex items-center">
        <div className="max-w-xl w-full">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-base font-bold tracking-wider text-[#e51d25] uppercase">
              {buildFuture.eyebrow}
            </span>
            <span className="w-12 h-[2px] bg-[#e51d25]"></span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-[#111111] leading-[1.1] mb-6 tracking-tight">
            {buildFuture.title.map((t: any, idx: number) => (
              <React.Fragment key={idx}>
                {t.accent ? (
                  <span className="text-[#e51d25]">{t.text}</span>
                ) : (
                  t.text
                )}
                {idx === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-lg mb-6">
            {buildFuture.description}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-y-6">
            {buildFuture.features.map((feature: any, idx: number) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={idx}
                  className={`flex flex-col flex-1 relative ${
                    idx !== 0
                      ? "sm:px-6 sm:border-l border-gray-200"
                      : "sm:pr-6"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {Icon && (
                      <Icon
                        className="w-6 h-6 text-[#e51d25] shrink-0"
                        strokeWidth={2}
                      />
                    )}
                    <h4 className="text-[15px] font-bold text-gray-900 leading-tight">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[85%] xl:w-[85%] h-[400px] lg:h-auto relative lg:absolute right-0 top-0 bottom-0 z-0 pointer-events-none">
        <div className="w-full h-full relative">
          <img
            src={buildFuture.image}
            alt={buildFuture.imageAlt}
            className="w-full h-full object-cover object-left max-lg:object-[85%_center]"
          />
        </div>
      </div>
    </section>
  );
}
