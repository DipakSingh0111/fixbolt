"use client";

import { CreditCard, UserCheck, Award, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import data from "@/data/data.json";

const IconMap: Record<string, LucideIcon> = {
  creditCard: CreditCard,
  userCheck: UserCheck,
  award: Award,
  shieldCheck: ShieldCheck,
};

const { eyebrow, title, description, image, features } = data.whyChooseUs;


export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#f8f9fa] py-16 px-5 lg:px-12 overflow-hidden">
      {/* Background Dot Patterns */}
      <div className="absolute top-6 left-1/2 opacity-20 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-500 rounded-full" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-12 left-4 opacity-20 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-500 rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Text & 2x2 Feature Grid */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Section Subtitle */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-red-600 mb-2">
            <span>{eyebrow}</span>
            <div className="w-8 h-[2px] bg-red-600" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
            {title.split('You Can')[0]}<br />
            You Can <span className="text-red-600">Rely On</span>
          </h2>
          <div className="w-10 h-[3px] bg-red-600 mb-4" />

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base max-w-xl mb-10 leading-relaxed font-normal">
            {description}
          </p>

          {/* 2x2 Features Grid Card Container */}
          <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
            {/* Center Red Square Accent Dot */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-red-600 rounded-sm z-20" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 relative z-10">
              {features.map((item, index) => {
                const IconComponent = IconMap[item.icon];

                return (
                  <div
                    key={item.id}
                    className={`flex items-start gap-4 p-2 transition-all duration-300 hover:translate-x-1 ${
                      /* Visual Divider Borders for 2x2 Desktop Layout */
                      index === 0
                        ? "md:border-r md:border-b md:border-gray-100 md:pb-8 md:pr-6"
                        : index === 1
                          ? "md:border-b md:border-gray-100 md:pb-8 md:pl-2"
                          : index === 2
                            ? "md:border-r md:border-gray-100 md:pt-4 md:pr-6"
                            : "md:pt-4 md:pl-2"
                    }`}
                  >
                    {/* Circle Icon Container */}
                    <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100 shadow-sm">
                      <IconComponent size={26} strokeWidth={1.8} />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="text-base font-bold text-black mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-xs leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Image with Red Diagonal Line Accent */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          {/* Top Red Diagonal Slash Line Accent */}
          <div className="absolute -top-10 left-4 w-3 h-40 bg-red-600 -rotate-12 transform origin-bottom z-20 hidden md:block" />
          <div className="absolute -top-6 left-12 w-2 h-28 bg-gray-800 -rotate-12 transform origin-bottom z-20 hidden md:block" />

          {/* Main Image Container */}
          <div className="relative w-full h-[400px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
