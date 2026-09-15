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
  QualityService: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3 5 5.8v5.6c0 4.2 2.9 7.7 7 9.2 4.1-1.5 7-5 7-9.2V5.8L12 3Z" />
      <path d="m8.7 11.8 2.3 2.3 4.4-4.4" />
    </svg>
  ),
  ExpertTechnicians: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="9.2" r="2.6" />
      <path d="M8.2 7.4h7.6" />
      <path d="M7.4 7.4c0-2.2 2-3.6 4.6-3.6s4.6 1.4 4.6 3.6" />
      <path d="M6.8 20.2c.7-3.2 3-5 5.2-5s4.5 1.8 5.2 5" />
    </svg>
  ),
  AffordablePricing: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12.2 3.4 20.4 11.6a1.6 1.6 0 0 1 0 2.3l-6.5 6.5a1.6 1.6 0 0 1-2.3 0L3.4 12.2V3.4h8.8Z" />
      <circle cx="8.2" cy="8.2" r="1.1" />
      <path d="M13.2 10.4c-.4-1.2-2.4-1.3-2.8 0-.3 1 1 1.5 1.8 1.8.9.3 2.1.8 1.8 1.9-.4 1.3-2.6 1.2-3.1 0" />
      <path d="M12.2 9.2v.6M12.2 16.2v.6" />
    </svg>
  ),
  RepairWarranty: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="9.2" r="5.2" />
      <path d="m9.2 16.2-1.5 5.2 4.3-1.7 4.3 1.7-1.5-5.2" />
    </svg>
  ),
  GenuineParts: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z" />
      <path d="M12 3.2v2.2M12 18.6v2.2M20.8 12h-2.2M5.4 12H3.2M18.2 5.8l-1.6 1.6M7.4 16.6l-1.6 1.6M18.2 18.2l-1.6-1.6M7.4 7.4 5.8 5.8" />
    </svg>
  ),
  Satisfaction: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m4.6 3.4.8.8M8.2 2.2l.6.9M12 1.8v1.1M15.8 2.2l-.6.9M19.4 3.4l-.8.8" />
      <path d="M14.2 10.2V6.8a2.2 2.2 0 0 0-2.3-2.1L8.4 12.6V21h8.4a1.8 1.8 0 0 0 1.8-1.5l1.1-7.2a1.8 1.8 0 0 0-1.8-2.1h-3.7Z" />
      <path d="M8.4 21H5.6A1.8 1.8 0 0 1 3.8 19.2v-5.4A1.8 1.8 0 0 1 5.6 12h2.8" />
    </svg>
  ),
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
              {content.eyebrow || content.tagline}
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
                <div className="mb-3 grid size-12 place-items-center text-[#e11d24]">
                  <Icon className="h-8 w-8" />
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
