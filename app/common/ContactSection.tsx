"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Send,
  Timer,
  ShieldCheck,
  Tag,
  Headphones,
  Calendar,
  ArrowRight,
} from "lucide-react";

import { site, SectionProps, ContactData } from "@/data";

const CardIconMap: Record<string, React.ElementType> = {
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  clock: Clock,
};

const FeatureIconMap: Record<string, React.ElementType> = {
  timer: Timer,
  shieldCheck: ShieldCheck,
  tag: Tag,
  headphones: Headphones,
};

export default function ContactSection({ data, className }: SectionProps<ContactData> = {}) {
  const content = data || site.contact;
  const { contactCards, whyContact, map, bookRepairCard, form } = content;

  return (
    <section className={`bg-[#fbfbfb] py-16 px-4 sm:px-6 lg:px-8 min-h-screen font-sans ${className || ""}`}>
      <div className="site-container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3">
            <span className="w-8 h-[1.5px] bg-[#e51d25]"></span>
            <span className="text-xs font-bold tracking-wider text-[#e51d25] uppercase">
              {content.eyebrow}
            </span>
            <span className="w-8 h-[1.5px] bg-[#e51d25]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3">
            {content.title.split("Help")[0]}
            <span className="text-[#e51d25]">Help</span>
          </h2>
          <p className="site-container text-gray-500 text-sm mt-4 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* 4 Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, idx) => {
            const Icon = CardIconMap[card.icon] || MapPin;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(229,29,37,0.1)] transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d32f2f] transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#d32f2f] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-1">
                  {card.detail1}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {card.detail2}
                </p>
              </div>
            );
          })}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {form.title}
            </h3>
            <p className="text-xs text-gray-500 mb-6 max-w-sm">
              {form.description}
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder={form.placeholders.name}
                    className="w-full pl-10 pr-4 py-3 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#e51d25] focus:border-[#e51d25] placeholder-gray-400"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder={form.placeholders.email}
                    className="w-full pl-10 pr-4 py-3 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#e51d25] focus:border-[#e51d25] placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Row 2: Phone */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="tel"
                  placeholder={form.placeholders.phone}
                  className="w-full pl-10 pr-4 py-3 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#e51d25] focus:border-[#e51d25] placeholder-gray-400"
                />
              </div>

              {/* Row 3: Subject Dropdown */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Tag className="w-4 h-4" />
                </div>
                <select className="w-full pl-10 pr-10 py-3 text-xs text-gray-400 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#e51d25] focus:border-[#e51d25] appearance-none cursor-pointer">
                  <option value="">{form.placeholders.subject}</option>
                  {form.subjectOptions.map(
                    (opt: { value: string; label: string }, idx: number) => (
                      <option key={idx} value={opt.value}>
                        {opt.label}
                      </option>
                    ),
                  )}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="relative">
                <div className="absolute top-3 left-4 pointer-events-none">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                </div>
                <textarea
                  rows={4}
                  placeholder={form.placeholders.message}
                  className="w-full pl-10 pr-4 py-3 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#e51d25] focus:border-[#e51d25] placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-5 py-3 rounded-xl text-xs font-bold transition shadow-sm"
                >
                  <span>{form.submitButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right */}
          <div className="relative bg-[#0d0e12] rounded-3xl p-8 overflow-hidden text-white flex flex-col justify-center">
            {/* Background Image overlay */}
            <div
              className="absolute inset-0 opacity-[0.15] bg-cover bg-center pointer-events-none"
              style={{
                backgroundImage: `url('${whyContact.bgImage}')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e12] via-[#0d0e12]/90 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-8">{whyContact.title}</h3>

              <div className="space-y-6">
                {whyContact.features.map((feature, idx) => {
                  const Icon = FeatureIconMap[feature.icon] || Tag;
                  return (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="mt-0.5 shrink-0">
                        <Icon className="w-6 h-6 text-[#e51d25]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Image container */}
          <div className="lg:col-span-2 relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-gray-200 border border-gray-100 shadow-sm">
            <iframe
              src={map.url}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Floating Location Card overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg flex items-start space-x-3 w-64">
              <div className="shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-[#e51d25] fill-[#e51d25]/20" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">
                  {map.overlayTitle}
                </h4>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                  {map.overlayAddress1}
                  <br />
                  {map.overlayAddress2}
                </p>
              </div>
            </div>
          </div>

          {/* Book a Repair Card */}
          <div className="bg-[#fff5f5] rounded-3xl p-8 border border-red-50 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 text-[#e51d25]">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {bookRepairCard.title}
            </h3>
            <p className="text-xs text-gray-500 mb-6 px-4">
              {bookRepairCard.description}
            </p>
            <button className="inline-flex items-center justify-center space-x-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-8 py-3 rounded-xl text-xs font-bold transition shadow-sm">
              <span>{bookRepairCard.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
