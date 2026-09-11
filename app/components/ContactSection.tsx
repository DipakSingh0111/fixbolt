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

export default function ContactSection() {
  return (
    <section className="bg-[#fbfbfb] py-16 px-4 sm:px-6 lg:px-8 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3">
            <span className="w-8 h-[1.5px] bg-[#e51d25]"></span>
            <span className="text-xs font-bold tracking-wider text-[#e51d25] uppercase">
              CONTACT US
            </span>
            <span className="w-8 h-[1.5px] bg-[#e51d25]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3">
            We're Here to <span className="text-[#e51d25]">Help</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mt-4 leading-relaxed">
            Have a question, need a repair, or want to know more about our
            services? Reach out to us using any of the options below.
          </p>
        </div>

        {/* 4 Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Call Us */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] border border-gray-100 group hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-[#e51d25]" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Call Us</h3>
            <p className="text-[11px] text-gray-500 mb-1">
              Mon - Sat: 9:00 AM - 8:00 PM
            </p>
            <p className="text-xs font-bold text-[#e51d25]">+91 98765 43210</p>
          </div>

          {/* Card 2: Email Us */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] border border-gray-100 group hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-[#e51d25]" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Email Us</h3>
            <p className="text-[11px] text-gray-500 mb-1">
              We reply within 24 hours
            </p>
            <p className="text-xs font-bold text-[#e51d25]">
              support@fixbolt.com
            </p>
          </div>

          {/* Card 3: Visit Us */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] border border-gray-100 group hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-[#e51d25]" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Visit Us</h3>
            <p className="text-[11px] text-gray-500 leading-tight px-2">
              123 FixBolt Street, Tech Park,
              <br />
              Bangalore - 560001
            </p>
          </div>

          {/* Card 4: Business Hours */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] border border-gray-100 group hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 text-[#e51d25]" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">
              Business Hours
            </h3>
            <p className="text-[11px] text-gray-500 mb-1">
              Mon - Sat: 9:00 AM - 8:00 PM
            </p>
            <p className="text-xs font-bold text-[#e51d25]">Sunday: Closed</p>
          </div>
        </div>

        {/* Middle Section: Form (Left) + Features (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-gray-500 mb-6 max-w-sm">
              Fill out the form and our team will get back to you as soon as
              possible.
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
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#e51d25] focus:border-[#e51d25] placeholder-gray-400"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
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
                  placeholder="Your Phone Number"
                  className="w-full pl-10 pr-4 py-3 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#e51d25] focus:border-[#e51d25] placeholder-gray-400"
                />
              </div>

              {/* Row 3: Subject Dropdown */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Tag className="w-4 h-4" />
                </div>
                <select className="w-full pl-10 pr-10 py-3 text-xs text-gray-400 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#e51d25] focus:border-[#e51d25] appearance-none cursor-pointer">
                  <option value="">Select Subject</option>
                  <option value="repair">Repair Inquiry</option>
                  <option value="status">Check Status</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
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
                  placeholder="Your Message"
                  className="w-full pl-10 pr-4 py-3 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#e51d25] focus:border-[#e51d25] placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-5 py-3 rounded-xl text-xs font-bold transition shadow-sm"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right: Why Contact FixBolt? (Dark Card) */}
          <div className="relative bg-[#0d0e12] rounded-3xl p-8 overflow-hidden text-white flex flex-col justify-center">
            {/* Background Image overlay */}
            <div
              className="absolute inset-0 opacity-[0.15] bg-cover bg-center pointer-events-none"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=800')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e12] via-[#0d0e12]/90 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-8">Why Contact FixBolt?</h3>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start space-x-4">
                  <div className="mt-0.5 shrink-0">
                    <Timer className="w-6 h-6 text-[#e51d25]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      Quick Response
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                      We respond to all inquiries as quickly as possible.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start space-x-4">
                  <div className="mt-0.5 shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#e51d25]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      Trusted Support
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                      Get expert help from our experienced team.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start space-x-4">
                  <div className="mt-0.5 shrink-0">
                    <Tag className="w-6 h-6 text-[#e51d25]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      Transparent Service
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                      Honest information and clear communication.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start space-x-4">
                  <div className="mt-0.5 shrink-0">
                    <Headphones className="w-6 h-6 text-[#e51d25]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      Customer First
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                      Your satisfaction is our top priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Map + Book Repair Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Image container */}
          <div className="lg:col-span-2 relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-gray-200 border border-gray-100 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
                  FixBolt Service Center
                </h4>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                  123 FixBolt Street, Tech Park,
                  <br />
                  Bangalore - 560001
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
              Book a Repair
            </h3>
            <p className="text-xs text-gray-500 mb-6 px-4">
              Save time! Book your repair appointment in advance.
            </p>
            <button className="inline-flex items-center justify-center space-x-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-8 py-3 rounded-xl text-xs font-bold transition shadow-sm">
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
