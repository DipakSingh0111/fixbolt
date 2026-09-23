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
    <section className={`section-pad relative overflow-hidden bg-[#fbfbfb] px-4 font-sans sm:px-6 lg:px-8 ${className || ""}`}>
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
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <div className="inline-block">
            <span className="text-sm font-extrabold tracking-wider text-[#d32f2f] uppercase md:text-base">
              {eyebrow}
            </span>
            <div className="mx-auto mt-1.5 h-[2px] w-8 bg-[#d32f2f]"></div>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#111111] sm:text-4xl md:text-[42px]">
            {heading.split(highlight)[0]}
            <span className="text-[#d32f2f]">{highlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-500">
            {content.description}
          </p>
        </div>

        {/* Brands Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-10 md:grid-cols-6">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-100/80 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-lg sm:p-6"
            >
              {/* Logo Container */}
              <div className="mb-3 flex h-14 w-full items-center justify-center sm:mb-4 sm:h-16">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-14"
                />
              </div>

              {/* Brand Name */}
              <h3 className="text-center text-base font-bold text-gray-900 sm:text-lg">
                {brand.name}
              </h3>

              {/* Subtitle & Red Line */}
              <p className="mt-1 text-[13px] font-medium text-[#555] sm:text-[14px]">{brand.sub}</p>
              <div className="mt-2 h-[2px] w-5 bg-[#d32f2f] opacity-90 transition-all duration-300 group-hover:w-7"></div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Highlights Bar */}
        <div className="rounded-2xl border border-gray-100 bg-[#f7f8fa]/80 p-5 shadow-sm sm:p-6">
          <div className="grid grid-cols-1 items-start gap-5 divide-y divide-gray-200 md:grid-cols-3 md:gap-6 md:divide-x md:divide-y-0">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4 pt-4 first:pt-0 md:px-4 md:pt-0 first:md:pl-0">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-red-200 bg-red-50">
                <ShieldCheck className="h-7 w-7 text-[#d32f2f]" />
              </div>
              <div className="min-w-0 text-left">
                <h4 className="text-base font-bold text-gray-900">
                  100% Genuine Parts
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-gray-500 sm:text-base">
                  We use only original and high-quality parts for every repair.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4 pt-4 md:px-4 md:pt-0">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-red-200 bg-red-50">
                <Award className="h-7 w-7 text-[#d32f2f]" />
              </div>
              <div className="min-w-0 text-left">
                <h4 className="text-base font-bold text-gray-900">
                  Warranty on Every Repair
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-gray-500 sm:text-base">
                  All our repairs come with a warranty for your peace of mind.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4 pt-4 md:px-4 md:pt-0 md:pr-0">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-red-200 bg-red-50">
                <Headphones className="h-7 w-7 text-[#d32f2f]" />
              </div>
              <div className="min-w-0 text-left">
                <h4 className="text-base font-bold text-gray-900">Need Help?</h4>
                <p className="mt-1 text-sm leading-relaxed text-gray-500 sm:text-base">
                  Can't find your brand?{" "}
                  <span className="cursor-pointer font-medium text-gray-700 hover:underline">
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
