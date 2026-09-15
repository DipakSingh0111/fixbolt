"use client";

import { Settings, Laptop, Send, Cpu, PackageCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { site, SectionProps, WorkProcessData } from "@/data";

const IconMap: Record<string, LucideIcon> = {
  laptop: Laptop,
  send: Send,
  cpu: Cpu,
  packageCheck: PackageCheck,
};


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};


export default function WorkProcessSection({ data, className }: SectionProps<WorkProcessData> = {}) {
  const content = data || site.workProcess;
  const { eyebrow, tagline, title, description, bgImage, steps: processSteps } = content;
  return (
    <section className="relative w-full bg-gradient-to-r from-[#800000] via-[#a30000] to-[#520000] text-white py-10 md:py-20 overflow-hidden">
      {/* Background Technology Circuit Overlay Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Top Section Badge & Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="site-container relative z-10 text-center mb-10 md:mb-16"
      >
        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden sm:block w-16 h-[2px] bg-white/60" />
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-white/90">
            <Settings size={16} className="text-white" />
            <span>{eyebrow || tagline}</span>
          </div>
          <div className="hidden sm:block w-16 h-[2px] bg-white/60" />
        </motion.div>

        <motion.h2 variants={fadeInUp} className="text-[32px] sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
          {title.split('Work Process')[0]}
          <span className="text-white">Work Process</span>
          <span className="text-red-500">.</span>
        </motion.h2>

        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mt-6 mb-6">
          <div className="w-12 h-[2px] bg-white/40" />
          <div className="w-14 h-[4px] bg-red-600 rounded-full" />
          <div className="w-12 h-[2px] bg-white/40" />
        </motion.div>

        <motion.p variants={fadeInUp} className="max-w-[600px] mx-auto text-white/80 text-[14px] md:text-base font-light leading-relaxed">
          {description}
        </motion.p>
      </motion.div>

      {/* Process Cards Grid with Connecting Lines */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="site-container relative z-10"
      >
        {/* Horizontal Dotted Connecting Line (Desktop) */}
        <motion.div variants={fadeInUp} className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-white/40 z-0" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-8 lg:gap-6 relative z-10">
          {processSteps.map((step, index) => {
            const IconComponent = IconMap[step.icon];

            return (
              <motion.div
                variants={fadeInUp}
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
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white rounded-3xl mx-auto flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-900/50 mb-5 sm:mb-6">
                  {/* Floating Number Badge */}
                  <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-[#d31c24] text-white text-base sm:text-lg font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-md shadow-lg z-10">
                    {step.step}
                  </div>

                  {/* Main Red Outline Icon */}
                  <div className="text-red-600 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    <IconComponent className="w-10 h-10 sm:w-14 sm:h-14" strokeWidth={1.4} />
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm max-w-[200px] leading-relaxed font-normal">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
