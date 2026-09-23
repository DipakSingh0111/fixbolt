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
  // Shield with checkmark — Quality Service
  QualityService: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M32 6L10 16v16c0 13.3 9.3 25.7 22 29 12.7-3.3 22-15.7 22-29V16L32 6Z"
        fill="#fde8e8"
        stroke="#d31c24"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M22 32l7 7 13-13"
        stroke="#d31c24"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // Mechanic person with car — Expert Technicians
  ExpertTechnicians: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* head */}
      <circle cx="32" cy="14" r="7" fill="#fde8e8" stroke="#d31c24" strokeWidth="2.2" />
      {/* helmet/cap */}
      <path d="M25 14c0-3.9 3.1-7 7-7s7 3.1 7 7" fill="#d31c24" />
      {/* body / torso */}
      <rect x="23" y="24" width="18" height="14" rx="3" fill="#fde8e8" stroke="#d31c24" strokeWidth="2.2" />
      {/* arms */}
      <path d="M23 28l-7 4M41 28l7 4" stroke="#d31c24" strokeWidth="2.2" strokeLinecap="round" />
      {/* wrench in right hand */}
      <path d="M48 32l5 5-2 2-5-5" stroke="#d31c24" strokeWidth="2" strokeLinecap="round" />
      <circle cx="51" cy="30" r="3" stroke="#d31c24" strokeWidth="2" />
      {/* car body */}
      <rect x="10" y="44" width="44" height="10" rx="3" fill="#fde8e8" stroke="#d31c24" strokeWidth="2" />
      <path d="M17 44l5-8h20l5 8" stroke="#d31c24" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="19" cy="55" r="4" fill="white" stroke="#d31c24" strokeWidth="2" />
      <circle cx="45" cy="55" r="4" fill="white" stroke="#d31c24" strokeWidth="2" />
    </svg>
  ),

  // Price tag with ₹ — Affordable Pricing
  AffordablePricing: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M36 6H18a4 4 0 0 0-4 4v18l22 22 26-26L40 2l-4 4Z"
        fill="#fde8e8"
        stroke="#d31c24"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="22" r="3" fill="#d31c24" />
      {/* ₹ symbol */}
      <text x="28" y="38" fontSize="14" fill="#d31c24" fontWeight="bold" fontFamily="serif">₹</text>
    </svg>
  ),

  // Shield with check medal — Repair Warranty
  RepairWarranty: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M32 6L10 16v16c0 13.3 9.3 25.7 22 29 12.7-3.3 22-15.7 22-29V16L32 6Z"
        fill="#fde8e8"
        stroke="#d31c24"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M22 32l7 7 13-13"
        stroke="#d31c24"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // Gear / cog — Genuine Parts
  GenuineParts: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M32 20a12 12 0 1 1 0 24 12 12 0 0 1 0-24Z"
        fill="#fde8e8"
        stroke="#d31c24"
        strokeWidth="2.5"
      />
      <path
        d="M32 4v6M32 54v6M4 32h6M54 32h6M10.1 10.1l4.2 4.2M49.7 49.7l4.2 4.2M10.1 53.9l4.2-4.2M49.7 14.3l4.2-4.2"
        stroke="#d31c24"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="5" fill="#d31c24" />
    </svg>
  ),

  // Stars + thumbs up — 100% Satisfaction
  Satisfaction: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* stars row */}
      {[6, 16, 26, 36, 46].map((x, i) => (
        <path
          key={i}
          d={`M${x + 4} 6l1.2 3.6H${x + 10}l-3 2.2 1.1 3.4-3.3-2.4-3.3 2.4 1.1-3.4-3-2.2h4.8Z`}
          fill="#d31c24"
        />
      ))}
      {/* thumbs up */}
      <path
        d="M28 28v-8a4 4 0 0 0-4-4l-8 16v18h21a4 4 0 0 0 4-3.4l2.4-14A4 4 0 0 0 39.4 28H28Z"
        fill="#fde8e8"
        stroke="#d31c24"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 32H11a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5"
        stroke="#d31c24"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    <section className={`section-pad bg-[#fbfbfb] font-sans ${className || ""}`}>
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
            <span className="text-base font-extrabold tracking-wider text-[#d32f2f] uppercase">
              {content.eyebrow || content.tagline}
            </span>
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] mt-2">
            {pricing.title.split(pricing.titleHighlight)[0]}
            <span className="text-[#d32f2f]">{pricing.titleHighlight}</span>
          </h2>
          <p className="site-container text-gray-500 text-base sm:text-base mt-2 leading-relaxed">
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
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#fde8e8]">
                  <Icon className="h-9 w-9" />
                </div>
                <span className="text-base font-bold text-gray-900 text-center leading-tight">
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
              <tbody className="divide-y divide-gray-100 text-base">
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
                          <span className="text-base font-bold">
                            {row.service}
                          </span>
                        </div>
                      </td>

                      {/* Description */}
                      <td className="py-3.5 px-4 text-[#333] text-[15px] font-medium">
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
        <div className="bg-[#edf2f9]/70 rounded-lg p-3 flex items-center justify-center space-x-2 text-base text-gray-600 mb-6 border border-blue-50">
          <Info className="w-5 h-5 text-gray-500 shrink-0" />
          <span>{pricing.note}</span>
        </div>

        <div className="rounded-[28px] bg-white px-5 py-5 shadow-[0_10px_40px_rgba(15,15,15,0.06)] sm:px-8 sm:py-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#fff1f1] text-[#e11d24]">
                <Headphones className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <div>
                <h4 className="text-lg font-extrabold text-[#111]">{pricing.help.title}</h4>
                <p className="mt-1 max-w-[240px] text-[14px] leading-snug text-neutral-600">
                  {pricing.help.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#fff1f1] text-[#e11d24]">
                <Phone className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <div>
                <a
                  href={`tel:${String(pricing.help.phone).replace(/\s+/g, "")}`}
                  className="text-lg font-extrabold text-[#e11d24] hover:underline underline-offset-2"
                >
                  {pricing.help.phone}
                </a>
                <p className="mt-1 text-[14px] text-neutral-600">{pricing.help.phoneHint}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#fff1f1] text-[#e11d24]">
                <Mail className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <div>
                <a
                  href={`mailto:${pricing.help.email}`}
                  className="text-lg font-extrabold text-[#e11d24] hover:underline underline-offset-2 break-all"
                >
                  {pricing.help.email}
                </a>
                <p className="mt-1 text-[14px] text-neutral-600">{pricing.help.emailHint}</p>
              </div>
            </div>

            <Link
              href={pricing.help.ctaHref}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#e11d24] px-5 py-3 text-[14px] font-bold text-white transition hover:bg-[#c8181e]"
            >
              <Calendar className="h-6 w-6" strokeWidth={1.8} />
              <span>{pricing.help.ctaLabel}</span>
              <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
