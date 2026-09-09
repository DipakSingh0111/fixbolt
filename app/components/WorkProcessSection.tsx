"use client";

import { Settings, Laptop, Send, Cpu, PackageCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import data from "@/data/data.json";

const IconMap: Record<string, LucideIcon> = {
  laptop: Laptop,
  send: Send,
  cpu: Cpu,
  packageCheck: PackageCheck,
};

const { eyebrow, title, description, bgImage, steps: processSteps } = data.workProcess;


export default function WorkProcessSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#800000] via-[#a30000] to-[#520000] text-white py-20 px-5 lg:px-8 overflow-hidden">
      {/* Background Technology Circuit Overlay Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Top Section Badge & Heading */}
      <div className="relative z-10 max-w-[1280px] mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-white/90 mb-2">
          <Settings size={16} className="text-white animate-spin-slow" />
          <span>{eyebrow}</span>
        </div>
        <div className="w-10 h-[2px] bg-white/40 mx-auto mb-4" />

        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
          {title.split('Work Process')[0]}
          <span className="text-white">Work Process</span>
        </h2>

        <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          {description}
        </p>
      </div>

      {/* Process Cards Grid with Connecting Lines */}
      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Horizontal Dotted Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-white/40 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
          {processSteps.map((step, index) => {
            const IconComponent = IconMap[step.icon];

            return (
              <div
                key={step.step}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Connecting Circle Node (Desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[62px] -right-[15%] w-3 h-3 rounded-full bg-white border-2 border-red-700 items-center justify-center z-20 shadow-md">
                    <div className="w-1 h-1 bg-red-600 rounded-full" />
                  </div>
                )}

                {/* White Card Container */}
                <div className="relative w-36 h-36 md:w-40 md:h-40 bg-white rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-900/50 mb-6">
                  {/* Floating Number Badge */}
                  <div className="absolute -top-3 -left-3 bg-red-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-md border-2 border-white">
                    {step.step}
                  </div>

                  {/* Main Red Outline Icon */}
                  <div className="text-red-600 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent size={56} strokeWidth={1.4} />
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm max-w-[200px] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
