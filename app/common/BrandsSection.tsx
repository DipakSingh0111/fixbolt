import React from "react";
import { ShieldCheck, Award, Headphones } from "lucide-react";

import { site, SectionProps, BrandsSectionData } from "@/data";

export default function BrandsSection({ data, className }: SectionProps<BrandsSectionData> = {}) {
  const content = data || site.brandsSection;
  const brands = site.brands.items;
  const heading = content.title;
  const highlight = content.titleHighlight;
  const eyebrow = content.tagline || content.eyebrow;
  return (
    <section className={`relative bg-[#fbfbfb] py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center overflow-hidden font-sans ${className || ""}`}>
      {/* Background Left Watermark Circles */}
      <div className="absolute -left-16 top-1/4 opacity-10 pointer-events-none hidden md:block">
        <div className="w-64 h-64 border-[1px] border-gray-400 rounded-full flex items-center justify-center">
          <div className="w-48 h-48 border-[1px] border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 border-[1px] border-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Background Top Right Dot Grid Pattern */}
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="site-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <span className="text-xs font-extrabold tracking-wider text-[#d32f2f] uppercase">
              {eyebrow}
            </span>
            <div className="w-8 h-[2px] bg-[#d32f2f] mx-auto mt-1"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] mt-3 tracking-tight">
            {heading.split(highlight)[0]}
            <span className="text-[#d32f2f]">{highlight}</span>
          </h2>
          <p className="site-container text-gray-500 text-sm mt-2 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-10">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center border border-gray-100/80 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Logo Container */}
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-14 max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Brand Name */}
              <h3 className="text-sm font-bold text-gray-900 text-center">
                {brand.name}
              </h3>

              {/* Subtitle & Red Line */}
              <p className="text-[11px] text-gray-400 mt-0.5">{brand.sub}</p>
              <div className="w-4 h-[2px] bg-[#d32f2f] mt-1.5 opacity-80 group-hover:w-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Highlights Bar */}
        <div className="bg-[#f7f8fa]/80 rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4 pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0">
              <div className="w-10 h-10 rounded-full border border-red-200 bg-red-50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#d32f2f]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  100% Genuine Parts
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  We use only original and high-quality parts for every repair.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4 pt-4 md:pt-0 md:px-4">
              <div className="w-10 h-10 rounded-full border border-red-200 bg-red-50 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#d32f2f]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Warranty on Every Repair
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  All our repairs come with a warranty for your peace of mind.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4 pt-4 md:pt-0 md:px-4">
              <div className="w-10 h-10 rounded-full border border-red-200 bg-red-50 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5 text-[#d32f2f]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Need Help?</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Can't find your brand? <br />
                  <span className="cursor-pointer hover:underline text-gray-700 font-medium">
                    Contact us — we can still help!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
