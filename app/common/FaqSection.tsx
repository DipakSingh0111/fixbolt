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
            <span className="text-xs font-extrabold tracking-wider text-[#d32f2f] uppercase">
              {content.eyebrow}
            </span>
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-2">
            {content.title.split(titleHighlight)[0]}
            <span className="text-[#d32f2f]">{titleHighlight}</span>
          </h2>
          <p className="site-container text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
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
                      className={`text-[13px] sm:text-sm font-bold ${isOpen ? "text-[#111111]" : "text-gray-900"}`}
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
                          <p className="text-xs text-gray-600 leading-relaxed">
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
        <div className="bg-[#f7f8fa] rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {features.map((feature, idx) => {
              const Icon = FeatureIconMap[feature.icon] || ShieldCheck;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-[#d32f2f]" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {feature.description}
                  </p>
                </div>
              );
            })}

            {/* Contact Support Action Card */}
            <div className="flex flex-col items-center text-center pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-200 md:pl-4">
              <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-1">
                {React.createElement(FeatureIconMap[support.icon] || Headphones, { className: "w-4 h-4 text-[#d32f2f]" })}
              </div>
              <h4 className="text-xs font-bold text-gray-900">
                {support.title}
              </h4>
              <p className="text-[10px] text-gray-400 mb-2">
                {support.description}
              </p>

              <button className="inline-flex items-center space-x-1.5 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-4 py-2 rounded-lg text-xs font-bold transition shadow-sm">
                <span>{support.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
