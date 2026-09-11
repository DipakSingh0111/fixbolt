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

export default function BookRepairSection() {
  return (
    <section className="bg-[#fbfbfb] py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN: Booking Form */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Top Subtitle Header */}
              <div className="mb-2">
                <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-wider">
                  BOOK A REPAIR
                </span>
                <div className="w-6 h-[2px] bg-[#d32f2f] mt-1"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-2">
                Book Your Repair{" "}
                <span className="text-[#d32f2f]">In Minutes</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you as
                soon as possible to confirm your repair.
              </p>

              {/* Form Controls */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 text-xs text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#d32f2f] focus:border-[#d32f2f] placeholder-gray-400 transition"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 text-xs text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#d32f2f] focus:border-[#d32f2f] placeholder-gray-400 transition"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2.5 text-xs text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#d32f2f] focus:border-[#d32f2f] placeholder-gray-400 transition"
                  />
                </div>

                {/* Device Type */}
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    Device Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2.5 text-xs text-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#d32f2f] focus:border-[#d32f2f] appearance-none cursor-pointer">
                      <option value="">Select device type</option>
                      <option value="smartphone">Smartphone</option>
                      <option value="tablet">Tablet</option>
                      <option value="laptop">Laptop</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Issue / Problem */}
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    Issue / Problem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the issue"
                    className="w-full px-4 py-2.5 text-xs text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#d32f2f] focus:border-[#d32f2f] placeholder-gray-400 transition resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition shadow-sm hover:shadow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Repair</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Privacy Note */}
            <div className="flex items-center space-x-1.5 text-[11px] text-gray-400 mt-4">
              <Lock className="w-3.5 h-3.5 text-gray-400" />
              <span>
                Your information is safe with us. We will never share it.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar Banner & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick & Easy Booking Banner */}
            <div className="bg-[#fff5f5] rounded-2xl p-6 border border-red-50">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-[#d32f2f]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    Quick & Easy Booking
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                    Select your device, describe the issue and choose a
                    convenient time. We'll handle the rest!
                  </p>
                </div>
              </div>
            </div>

            {/* Why Book With Us Section */}
            <div className="bg-[#fffdfd] rounded-2xl p-8 border border-red-50/60 space-y-8 flex-1">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Why Book With Us?
                </h3>
                <div className="w-8 h-[2px] bg-[#d32f2f] mt-2"></div>
              </div>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                    <ShieldCheck className="w-5 h-5 text-[#d32f2f]" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-[15px] font-bold text-gray-900">
                      Trusted Technicians
                    </h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed mt-1">
                      Certified experts with years of experience.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                    <Clock className="w-5 h-5 text-[#d32f2f]" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-[15px] font-bold text-gray-900">
                      Quick Turnaround
                    </h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed mt-1">
                      Most repairs completed same day.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                    <Settings className="w-5 h-5 text-[#d32f2f]" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-[15px] font-bold text-gray-900">
                      Quality Parts
                    </h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed mt-1">
                      We use only high-quality and genuine parts.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                    <DollarSign className="w-5 h-5 text-[#d32f2f]" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-[15px] font-bold text-gray-900">
                      Affordable Prices
                    </h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed mt-1">
                      Top-quality service at honest prices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="mt-10 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Need Help */}
          <div className="md:col-span-7 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4 text-[#d32f2f]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Need Help?</h4>
              <p className="text-xs text-gray-500">
                Call us at{" "}
                <span className="font-semibold text-gray-800">
                  +01 456 785 889
                </span>{" "}
                or email us at{" "}
                <a
                  href="mailto:support@fixbolt.com"
                  className="text-[#d32f2f] hover:underline font-semibold"
                >
                  support@fixbolt.com
                </a>
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="md:col-span-5 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-[#d32f2f]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Working Hours</h4>
              <p className="text-xs text-gray-500">
                Mon - Sat: 9:00 AM - 7:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
