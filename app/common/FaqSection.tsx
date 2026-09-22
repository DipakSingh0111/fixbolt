"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  Plus,
  Minus,
  ShieldCheck,
  Award,
  UserCheck,
  Heart,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site, SectionProps, FAQData } from "@/data";


const FeatureIconMap: Record<string, React.ElementType> = {
  shieldCheck: ShieldCheck,
  award: Award,
  userCheck: UserCheck,
  heart: Heart,
  headphones: Headphones
};

export default function FaqSection({ data, className }: SectionProps<FAQData> = {}) {
  const content = data || site.faq;
  const { items: faqs, features, support, titleHighlight } = content;
  // Set the first item (index 0) open by default to match screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fbfbfb] py-16 font-sans">
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-2">
            {content.title.split(titleHighlight)[0]}
            <span className="text-[#d32f2f]">{titleHighlight}</span>
          </h2>
          <p className="site-container text-gray-500 text-base sm:text-base mt-2 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-200"
              >
                {/* Question Row Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Red Outline Question Icon Box */}
                    <div className="w-10 h-10 rounded-xl border border-red-100 bg-red-50/30 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-5 h-5 text-[#e51d25] stroke-[1.5]" />
                    </div>
                    <span
                      className={`text-[13px] sm:text-base font-bold ${isOpen ? "text-[#111111]" : "text-gray-900"}`}
                    >
                      {faq.question}
                    </span>
                  </div>

                {/* Plus/Minus Toggle Indicator */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0 text-gray-400"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-gray-400 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-400 stroke-[1.5]" />
                    )}
                  </motion.div>
                </button>

                {/* Expanded Answer Content Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="p-4 rounded-xl bg-[#fff8f8] border border-red-50">
                          <p className="text-base text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Feature & Support Bar */}
        <div className="rounded-2xl border border-gray-100 bg-[#f7f8fa] p-5 shadow-sm sm:p-6">
          <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-5 lg:items-center lg:gap-4">
            {features.map((feature, idx) => {
              const Icon = FeatureIconMap[feature.icon] || ShieldCheck;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="mb-2.5 flex h-14 w-14 items-center justify-center rounded-full border border-red-100 bg-red-50 sm:mb-3 sm:h-[72px] sm:w-[72px]">
                    <Icon className="h-7 w-7 text-[#d32f2f] sm:h-10 sm:w-10" strokeWidth={1.6} />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 sm:text-base">
                    {feature.title}
                  </h4>
                  <p className="mt-0.5 text-[12px] text-gray-500 sm:text-[13px]">
                    {feature.description}
                  </p>
                </div>
              );
            })}

            {/* Contact Support Action Card */}
            <div className="col-span-2 flex flex-col items-center border-t border-gray-200 pt-5 text-center sm:pt-6 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
              <div className="mb-2.5 flex h-14 w-14 items-center justify-center rounded-full border border-red-100 bg-red-50 sm:mb-3 sm:h-[72px] sm:w-[72px]">
                {React.createElement(FeatureIconMap[support.icon] || Headphones, {
                  className: "h-7 w-7 text-[#d32f2f] sm:h-10 sm:w-10",
                  strokeWidth: 1.6,
                })}
              </div>
              <h4 className="text-sm font-bold text-gray-900 sm:text-base">
                {support.title}
              </h4>
              <p className="mb-2.5 mt-0.5 text-[12px] text-gray-500 sm:text-[13px]">
                {support.description}
              </p>

              <button className="inline-flex items-center space-x-1.5 rounded-lg bg-[#d32f2f] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#b71c1c] sm:text-base">
                <span>{support.buttonText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
