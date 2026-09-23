import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";
import { site, SectionProps, ServicesData } from "@/data";
import { CustomServiceIcons } from "./ServiceIcons";


export default function ServicesSection({ data }: SectionProps<ServicesData> = {}) {
  const content = data || site.services;
  const services = content.items;
  return (
    <section className="section-pad relative overflow-hidden bg-[#fbfbfb] px-4 font-sans sm:px-6 lg:px-8">
      {/* Subtle Grid Dot Background */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="site-container">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative">
            <span className="text-base font-bold tracking-wider text-[#d32f2f] uppercase">
              {content.eyebrow || content.tagline}
            </span>
            <div className="w-8 h-[2px] bg-[#d32f2f] mx-auto mt-1"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3">
            {content.title.split(content.titleHighlight)[0]}
            <span className="text-[#d32f2f]">{content.titleHighlight}</span>
          </h2>
          <p className="site-container text-gray-500 text-base mt-2 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service) => {
            const Icon = CustomServiceIcons[service.icon] ?? Settings;
            return (
              <Link
                href={`/services/${service.slug}`}
                key={service.id}
                className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col h-full"
              >
                {/* STANDARD CARD VIEW */}
                <div className="flex flex-col h-full transition-opacity duration-300 group-hover:opacity-0">
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="relative pt-6 pb-6 px-5 flex-1 flex flex-col justify-between">
                    {/* Floating Icon Badge */}
                    <div className="absolute -top-5 left-5 w-10 h-10 bg-[#e51d25] rounded-md flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-900 mt-1">
                        {service.title}
                      </h3>
                      <p className="text-base text-gray-500 mt-2 leading-relaxed whitespace-pre-line">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* RED HOVER */}
                <div className="absolute inset-0 bg-[#e51d25] text-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  {/* Watermark Big Circular Icon */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Top Header */}
                  <div></div>

                  {/* Hover Content */}
                  <div className="z-10 mt-auto">
                    {/* Small Icon Box */}
                    <div className="w-9 h-9 rounded-lg border border-white/30 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="text-base text-white/90 mt-1 leading-relaxed whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Action */}
                  <div className="absolute bottom-5 right-5 z-10">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-[#e51d25] hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
