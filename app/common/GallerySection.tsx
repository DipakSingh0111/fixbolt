"use client";
import Link from "next/link";

import React, { useState } from "react";
import {
  Smartphone,
  Users,
  Award,
  ShieldCheck,
  Calendar,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site, SectionProps, GalleryData } from "@/data";

const StatIconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  users: Users,
  award: Award,
  shieldCheck: ShieldCheck
};

export default function GallerySection({ data, className }: SectionProps<GalleryData> = {}) {
  const content = data || site.gallery;
  const { images: galleryImages, stats, banner } = content;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className={`bg-[#fbfbfb] py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center font-sans ${className || ""}`}>
      <div className="site-container relative">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
            <span className="text-base font-extrabold tracking-wider text-[#d32f2f] uppercase">
              {content.eyebrow || content.tagline}
            </span>
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-2">
            {content.title.split(content.titleHighlight)[0]}
            <span className="text-[#d32f2f]">{content.titleHighlight}</span>
          </h2>
          <p className="site-container text-gray-500 text-base sm:text-base mt-2 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Gallery Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
          {/* LEFT SIDE: 1 Big Vertical Image (Occupies 4 cols out of 12 and full height) */}
          <div 
            className="lg:col-span-4 h-80 lg:h-auto min-h-[400px] relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-900 group cursor-pointer"
            onClick={() => setSelectedIndex(0)}
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
          </div>

          {/* RIGHT SIDE: Stacked Grid Images (Occupies 8 cols out of 12) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(1).map((image, index) => (
              <div 
                key={index}
                className="h-48 rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-900 group cursor-pointer relative"
                onClick={() => setSelectedIndex(index + 1)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
              onClick={() => setSelectedIndex(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors p-2"
                onClick={() => setSelectedIndex(null)}
              >
                <X className="w-8 h-8" />
              </button>

              <button 
                className="absolute left-4 md:left-8 text-white hover:text-red-500 transition-colors p-2"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
              </button>

              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              <button 
                className="absolute right-4 md:right-8 text-white hover:text-red-500 transition-colors p-2"
                onClick={handleNext}
              >
                <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats & Trust Highlights Bar */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {stats.map((stat, index) => {
              const Icon = StatIconMap[stat.icon] || ShieldCheck;
              return (
                <div key={index} className="flex items-center space-x-4 pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#d32f2f]" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-gray-900 leading-tight">
                      {stat.title}
                    </h3>
                    {stat.subtitle && (
                      <p className="text-base font-bold text-gray-700">
                        {stat.subtitle}
                      </p>
                    )}
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">{stat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner: Need a Repair? */}
        <div className="bg-[#fff5f5] rounded-2xl p-5 border border-red-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#d32f2f] flex items-center justify-center shrink-0 shadow-sm">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900">
                {banner.title}
              </h4>
              <p className="text-base text-gray-500 mt-0.5">
                {banner.description}
              </p>
            </div>
          </div>

          <Link href="/bookrepair" className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-6 py-2.5 rounded-xl text-base font-bold transition shadow-sm">
            <span>{banner.buttonText}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
