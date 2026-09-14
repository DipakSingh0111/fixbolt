"use client";

import React from "react";
import Link from "next/link";
import {
  Smartphone,
  BatteryCharging,
  Zap,
  Camera,
  Volume2,
  Droplet,
  Cpu,
  Info,
  Headphones,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { site, SectionProps, PricingData } from "@/data";

const CustomIcons = {
  QualityService: (props: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
  ExpertTechnicians: (props: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8" r="3" />
      <path d="M8 6h8" /> 
      <path d="M7 16c0-2.5 2-4.5 5-4.5s5 2 5 4.5" /> 
      <path d="M5 19h14" /> 
      <path d="M4 17v4c-1 0-1-4 0-4z" /> 
      <path d="M20 17v4c1 0 1-4 0-4z" /> 
    </svg>
  ),
  AffordablePricing: (props: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12.5 3.5l7 7-8.5 8.5a2.828 2.828 0 01-4-4l8.5-8.5z" />
      <circle cx="16" cy="7" r="1" />
      <path d="M8 12h4m-4 2h4m-3 0l3 4" />
    </svg>
  ),
  RepairWarranty: (props: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <circle cx="12" cy="11" r="3" />
      <path d="M10 13.5l-1 3.5 3-1 3 1-1-3.5" />
    </svg>
  ),
  GenuineParts: (props: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22v-4m0-12V2m6.07 18.07l-2.83-2.83M8.76 8.76L5.93 5.93M22 12h-4M6 12H2m14.07-6.07l-2.83 2.83M8.76 15.24l-2.83 2.83" />
      <circle cx="12" cy="12" r="6" />
      <path d="M10 11l2 1 2-1v-2l-2-1-2 1v2z" />
    </svg>
  ),
  Satisfaction: (props: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3z" />
      <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
      <path d="M3 4l1 1M7 2l1 1M11 1l1 1M16 2l-1 1M20 4l-1 1" />
    </svg>
  )
};

const FeatureIconMap: Record<string, React.ElementType> = CustomIcons;

const RowIconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  batteryCharging: BatteryCharging,
  zap: Zap,
  camera: Camera,
  volume2: Volume2,
  droplet: Droplet,
  cpu: Cpu,
};

export default function RepairPricingSection({ data, className }: SectionProps<PricingData> = {}) {
  const content = data || site.pricing;
  const pricing = content;

  return (
    <section className={`bg-[#fbfbfb] py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center font-sans ${className || ""}`}>
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
            <span className="text-xs font-extrabold tracking-wider text-[#d32f2f] uppercase">
              {content.eyebrow}
            </span>
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] mt-2">
            {pricing.title.split(pricing.titleHighlight)[0]}
            <span className="text-[#d32f2f]">{pricing.titleHighlight}</span>
          </h2>
          <p className="site-container text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
            {pricing.description}
          </p>
        </div>

        {/* Top Feature Badges Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {pricing.features.map((feat, idx) => {
            const Icon = FeatureIconMap[feat.icon] ?? CustomIcons.QualityService;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 flex flex-col items-center justify-center border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-[#d32f2f]" />
                </div>
                <span className="text-sm font-bold text-gray-900 text-center leading-tight">
                  {feat.title}
                </span>
                <div className="w-4 h-[2px] bg-[#d32f2f] mt-2 opacity-80"></div>
              </div>
            );
          })}
        </div>

        {/* Main Pricing Table Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#0B142F] text-white text-[13px] font-bold tracking-wider uppercase">
                  {pricing.columns.map((col, i) => (
                    <th
                      key={col}
                      className={
                        i === 0
                          ? "py-3.5 px-5 w-[22%]"
                          : i === 1
                            ? "py-3.5 px-4 w-[28%]"
                            : "py-3.5 px-4 text-center"
                      }
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100 text-sm">
                {pricing.rows.map((row, idx) => {
                  const RowIcon = RowIconMap[row.icon] ?? Smartphone;
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50/80 transition-colors duration-150"
                    >
                      {/* Service Name with Icon Box */}
                      <td className="py-3.5 px-5 font-bold text-gray-900">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-md bg-red-50/80 border border-red-100 flex items-center justify-center shrink-0">
                            <RowIcon className="w-5 h-5 text-[#d32f2f]" />
                          </div>
                          <span className="text-sm font-bold">
                            {row.service}
                          </span>
                        </div>
                      </td>

                      {/* Description */}
                      <td className="py-3.5 px-4 text-gray-500 text-[13px]">
                        {row.description}
                      </td>

                      {/* Prices */}
                      <td className="py-3.5 px-4 text-center font-bold text-gray-800 text-[14px]">
                        {row.apple}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-gray-800 text-[14px]">
                        {row.samsung}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-gray-800 text-[14px]">
                        {row.oneplus}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-gray-800 text-[14px]">
                        {row.xiaomi}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-gray-800 text-[14px]">
                        {row.realme}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Note Box */}
        <div className="bg-[#edf2f9]/70 rounded-lg p-3 flex items-center justify-center space-x-2 text-sm text-gray-600 mb-6 border border-blue-50">
          <Info className="w-5 h-5 text-gray-500 shrink-0" />
          <span>{pricing.note}</span>
        </div>

        <div className="rounded-[28px] bg-white px-5 py-5 shadow-[0_10px_40px_rgba(15,15,15,0.06)] sm:px-8 sm:py-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#fff1f1] text-[#e11d24]">
                <Headphones className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <div>
                <h4 className="text-[15px] font-bold text-[#111]">{pricing.help.title}</h4>
                <p className="mt-0.5 max-w-[220px] text-[12px] leading-snug text-neutral-400">
                  {pricing.help.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#fff1f1] text-[#e11d24]">
                <Phone className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div>
                <h4 className="text-[15px] font-bold text-[#111]">{pricing.help.phone}</h4>
                <p className="mt-0.5 text-[12px] text-neutral-400">{pricing.help.phoneHint}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#fff1f1] text-[#e11d24]">
                <Mail className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div>
                <h4 className="text-[15px] font-bold text-[#111]">{pricing.help.email}</h4>
                <p className="mt-0.5 text-[12px] text-neutral-400">{pricing.help.emailHint}</p>
              </div>
            </div>

            <Link
              href={pricing.help.ctaHref}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#e11d24] px-5 py-3 text-[14px] font-bold text-white transition hover:bg-[#c8181e]"
            >
              <Calendar className="h-5 w-5" strokeWidth={1.8} />
              <span>{pricing.help.ctaLabel}</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
