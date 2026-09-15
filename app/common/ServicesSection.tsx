"use client";

import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { site, SectionProps, ServicesData } from "@/data";
import { CustomServiceIcons } from "./ServiceIcons";


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

type ServicesSectionProps = SectionProps<ServicesData> & {
  limit?: number;
};

export default function ServicesSection({ limit, data, className }: ServicesSectionProps) {
  const content = data || site.services;
  const { eyebrow, tagline, title, description, bgPattern, items: services } = content;
  const displayEyebrow = tagline || eyebrow;

  const displayServices = limit ? services.slice(0, limit) : services;
  
  return (
    <section className="bg-[#f8f9fa] py-10 md:py-16 text-center relative overflow-hidden">
      {/* Background Dots Pattern */}
      <div className="absolute top-6 left-6 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
          ))}
        </div>
      </div>
      <div className="absolute top-6 right-6 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
          ))}
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10"
      >
        {/* Header */}
        <div className="site-container mb-10 md:mb-16">
          {displayEyebrow && (
            <motion.span
              variants={fadeInUp}
              className="text-[#d31c24] font-bold text-xs md:text-sm tracking-wider uppercase block mb-2"
            >
              {displayEyebrow}
            </motion.span>
          )}
          
          <motion.div
            variants={fadeInUp}
            className="w-10 h-[2px] bg-[#d31c24] mx-auto mb-6"
          />

          <motion.h2
            variants={fadeInUp}
            className="text-[32px] sm:text-4xl md:text-5xl font-extrabold text-[#111] mb-6 tracking-tight leading-[1.15]"
          >
            {title.split(content.titleHighlight)[0]}
            <span className="text-[#d31c24]">{content.titleHighlight}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-[14px] md:text-base leading-relaxed max-w-[600px] mx-auto font-medium"
          >
            {description}
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          className="site-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-stretch"
        >
          {displayServices.map((service) => {
            const IconComponent = CustomServiceIcons[service.icon] ?? Settings;

            return (
              <motion.div variants={fadeInUp} key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[380px] block"
                >
                  {/* --- 1. DEFAULT STATE (Normal Layout) --- */}
                  <div className="flex flex-col h-full group-hover:opacity-0 transition-opacity duration-300">
                    {/* Image Box Wrapper */}
                    <div className="relative">
                      <div className="h-44 w-full overflow-hidden bg-gray-900">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {/* Floating Red Icon Badge */}
                      <div className="absolute -bottom-5 left-4 w-12 h-12 bg-[#c90f16] rounded-xl flex items-center justify-center text-white shadow-md z-10">
                        <IconComponent size={22} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="pt-8 pb-6 px-4 text-left flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* HOVER STATE  */}
                  <div className="absolute inset-0 bg-blue-500 p-6 text-white flex flex-col items-center justify-between text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="my-auto flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-red-500/50 flex items-center justify-center mb-6">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed max-w-[200px]">
                        {service.description}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow hover:scale-110 transition-transform duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
