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

const faqsData = [
  {
    question: "How long does a typical repair take?",
    answer:
      "Most repairs are completed within 30 minutes to 2 hours, depending on the issue and device. You'll receive an estimated time when we inspect your device.",
  },
  {
    question: "Do you offer warranty on repairs?",
    answer:
      "Yes, we provide a standard warranty on all our repair services and replaced parts for your complete peace of mind.",
  },
  {
    question: "Are your parts genuine?",
    answer:
      "Absolutely! We use 100% original and high-quality grade OEM components for all device repairs.",
  },
  {
    question: "How much will my repair cost?",
    answer:
      "Our repair prices are transparent with no hidden charges. Check our pricing table or contact us for an instant quote.",
  },
  {
    question: "Do you fix all brands and models?",
    answer:
      "We repair all major smartphone, tablet, and laptop brands including Apple, Samsung, Xiaomi, OnePlus, Google, and more.",
  },
  {
    question: "Can I book a repair in advance?",
    answer:
      "Yes, you can schedule an appointment online via our 'Book a Repair' section to skip the wait time.",
  },
  {
    question: "What if my device cannot be fixed?",
    answer:
      "If we are unable to fix your device, our 'No Fix, No Fee' policy ensures you won't be charged for the repair attempt.",
  },
  {
    question: "Is there a diagnostic fee?",
    answer:
      "Initial diagnosis is completely free of charge when you proceed with the repair service with us.",
  },
  {
    question: "Do you provide pickup and delivery?",
    answer:
      "Yes, we offer doorstep pickup and delivery services depending on your location.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash, Credit/Debit Cards, UPI, Net Banking, and major Digital Wallets.",
  },
  {
    question: "Will I lose my data during the repair?",
    answer:
      "We take extreme care of your data, but we always recommend backing up your device before handing it over for service.",
  },
  {
    question: "How can I track my repair status?",
    answer:
      "You can track your device status live by entering your Work Order / Booking ID on our website.",
  },
];

export default function FaqSection() {
  // Set the first item (index 0) open by default to match screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fbfbfb] py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-4xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
            <span className="text-xs font-extrabold tracking-wider text-[#d32f2f] uppercase">
              FAQS
            </span>
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-2">
            Frequently Asked <span className="text-[#d32f2f]">Questions</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed">
            Find answers to the most common questions about our repair services,
            process, pricing, and policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10">
          {faqsData.map((faq, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-200"
              >
                {/* Question Row Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <div className="flex items-center space-x-3.5">
                    {/* Red Outline Question Icon Box */}
                    <div className="w-8 h-8 rounded-lg border border-red-200 bg-red-50/50 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-4 h-4 text-[#d32f2f]" />
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-bold ${isOpen ? "text-[#d32f2f]" : "text-gray-900"}`}
                    >
                      {faq.question}
                    </span>
                  </div>

                {/* Plus/Minus Toggle Indicator */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#d32f2f]" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-400" />
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
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5 text-[#d32f2f]" />
              </div>
              <h4 className="text-xs font-bold text-gray-900">
                Transparent Pricing
              </h4>
              <p className="text-[10px] text-gray-400 mt-0.5">
                No hidden charges
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-2">
                <Award className="w-5 h-5 text-[#d32f2f]" />
              </div>
              <h4 className="text-xs font-bold text-gray-900">Quality Parts</h4>
              <p className="text-[10px] text-gray-400 mt-0.5">
                100% genuine parts
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-2">
                <UserCheck className="w-5 h-5 text-[#d32f2f]" />
              </div>
              <h4 className="text-xs font-bold text-gray-900">
                Certified Technicians
              </h4>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Skilled & experienced
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 text-[#d32f2f]" />
              </div>
              <h4 className="text-xs font-bold text-gray-900">
                Customer Satisfaction
              </h4>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Our top priority
              </p>
            </div>

            {/* Contact Support Action Card */}
            <div className="flex flex-col items-center text-center pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-200 md:pl-4">
              <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-1">
                <Headphones className="w-4 h-4 text-[#d32f2f]" />
              </div>
              <h4 className="text-xs font-bold text-gray-900">
                Still have questions?
              </h4>
              <p className="text-[10px] text-gray-400 mb-2">
                We're here to help!
              </p>

              <button className="inline-flex items-center space-x-1.5 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-4 py-2 rounded-lg text-xs font-bold transition shadow-sm">
                <span>Contact Support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
