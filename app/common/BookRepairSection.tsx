"use client";

import React from "react";
import {
  Calendar,
  ShieldCheck,
  Clock,
  Settings,
  DollarSign,
  Lock,
  PhoneCall,
} from "lucide-react";

import { site, SectionProps, BookRepairData } from "@/data";

const whyBookIcons: Record<string, React.ElementType> = {
  shieldCheck: ShieldCheck,
  clock: Clock,
  settings: Settings,
  dollarSign: DollarSign,
};

export default function BookRepairSection({ data, className }: SectionProps<BookRepairData> = {}) {
  const content = data || site.bookRepair;
  const { form, quickBooking, whyBook, footerHelp, titleHighlight } = content;
  const inputClass =
    "w-full px-4 py-2.5 text-xs text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#d32f2f] focus:border-[#d32f2f] placeholder-gray-400 transition";

  return (
    <section className="bg-[#fbfbfb] py-12 min-h-screen font-sans">
      <div className="site-container">
        <div className="w-full bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="mb-2">
                <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-wider">
                  {content.eyebrow || content.tagline}
                </span>
                <div className="w-6 h-[2px] bg-[#d32f2f] mt-1"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-2">
                {content.title.split(titleHighlight)[0]}
                <span className="text-[#d32f2f]">{titleHighlight}</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-8 leading-relaxed">
                {content.description}
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    {form.fields.name.label}{" "}
                    {form.fields.name.required ? <span className="text-red-500">*</span> : null}
                  </label>
                  <input type="text" placeholder={form.fields.name.placeholder} className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    {form.fields.phone.label}{" "}
                    {form.fields.phone.required ? <span className="text-red-500">*</span> : null}
                  </label>
                  <input type="tel" placeholder={form.fields.phone.placeholder} className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    {form.fields.email.label}{" "}
                    {form.fields.email.required ? <span className="text-red-500">*</span> : null}
                  </label>
                  <input type="email" placeholder={form.fields.email.placeholder} className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    {form.fields.deviceType.label}{" "}
                    {form.fields.deviceType.required ? <span className="text-red-500">*</span> : null}
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2.5 text-xs text-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#d32f2f] focus:border-[#d32f2f] appearance-none cursor-pointer">
                      <option value="">{form.fields.deviceType.placeholder}</option>
                      {form.deviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    {form.fields.issue.label}{" "}
                    {form.fields.issue.required ? <span className="text-red-500">*</span> : null}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={form.fields.issue.placeholder}
                    className={`${inputClass} resize-y`}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition shadow-sm hover:shadow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{form.submitLabel}</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center space-x-1.5 text-[11px] text-gray-400 mt-4">
              <Lock className="w-3.5 h-3.5 text-gray-400" />
              <span>{form.privacyNote}</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#fff5f5] rounded-2xl p-6 border border-red-50">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-[#d32f2f]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{quickBooking.title}</h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                    {quickBooking.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fffdfd] rounded-2xl p-8 border border-red-50/60 space-y-8 flex-1">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{whyBook.title}</h3>
                <div className="w-8 h-[2px] bg-[#d32f2f] mt-2"></div>
              </div>

              <div className="space-y-6">
                {whyBook.items.map((item) => {
                  const Icon = whyBookIcons[item.icon] ?? ShieldCheck;
                  return (
                    <div key={item.title} className="flex items-start space-x-5">
                      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                        <Icon className="w-5 h-5 text-[#d32f2f]" />
                      </div>
                      <div className="pt-0.5">
                        <h4 className="text-[15px] font-bold text-gray-900">{item.title}</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4 text-[#d32f2f]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">{footerHelp.title}</h4>
              <p className="text-xs text-gray-500">
                Call us at{" "}
                <span className="font-semibold text-gray-800">{footerHelp.phone}</span> or email us at{" "}
                <a
                  href={`mailto:${footerHelp.email}`}
                  className="text-[#d32f2f] hover:underline font-semibold"
                >
                  {footerHelp.email}
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-5 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-[#d32f2f]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">{footerHelp.hoursTitle}</h4>
              <p className="text-xs text-gray-500 whitespace-pre-line">{footerHelp.hours}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
