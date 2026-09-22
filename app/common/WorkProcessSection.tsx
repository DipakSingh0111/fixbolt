"use client";

import { Settings } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { site, SectionProps, WorkProcessData } from "@/data";

const IconImages: Record<string, string> = {
  laptop: "/images/icon_01.svg",
  send: "/images/icon_02.svg",
  cpu: "/images/icon_03.svg",
  packageCheck: "/images/icon_04.png",
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
          <div className="inline-flex items-center gap-2 text-base md:text-base font-semibold uppercase tracking-wider text-white/90">
            <Settings size={32} className="text-white" />
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
        <motion.div variants={fadeInUp} className="hidden lg:block absolute top-[70px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-white/40 z-0" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-8 lg:gap-6 relative z-10">
          {processSteps.map((step, index) => {
            const imageSrc = IconImages[step.icon];

            return (
              <motion.div
                variants={fadeInUp}
                key={step.step}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Connecting Circle Node (Desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[70px] -right-[15%] w-7 h-7 -mt-[14px] items-center justify-center z-20">
                    <div className="absolute inset-0 bg-[#970000] rounded-full" />
                    <div className="relative w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-md">
                      <div className="w-1.5 h-1.5 bg-[#b3141a] rounded-full" />
                    </div>
                  </div>
                )}

                {/* White Card Container */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-[140px] md:h-[140px] bg-white rounded-[24px] mx-auto flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-900/50 mb-5 sm:mb-6">
                  {/* Floating Number Badge with ribbon fold */}
                  <div className="absolute -top-4 -left-4 bg-[#c81017] text-white text-[17px] font-bold w-[46px] h-[38px] flex items-center justify-center rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-md z-10">
                    {step.step}
                    {/* Ribbon fold triangle */}
                    <div className="absolute top-full right-0 w-0 h-0 border-t-[8px] border-t-[#85080e] border-r-[8px] border-r-transparent"></div>
                  </div>

                  {/* Custom Image Icon */}
                  <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    <Image
                      src={imageSrc}
                      alt={step.title}
                      width={96}
                      height={96}
                      className="w-16 h-16 sm:w-[86px] sm:h-[86px] object-contain"
                    />
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/70 text-base md:text-base max-w-[200px] leading-relaxed font-normal">
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
