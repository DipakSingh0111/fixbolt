"use client";

import { Users, Share2 } from "lucide-react";
import data from "@/data/data.json";

const { eyebrow, title, description, members: teamMembers } = data.team;

// Social Icons ke SVG Components (Zero Extra Dependencies)
const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


export default function TeamSection() {
  return (
    <section className="bg-[#f8f9fa] py-20 px-4 md:px-8 text-center relative overflow-hidden">
      {/* Background Tech Line Decorators */}
      <div className="absolute top-8 left-8 opacity-15 pointer-events-none hidden md:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
          ))}
        </div>
      </div>
      <div className="absolute top-8 right-8 opacity-15 pointer-events-none hidden md:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
          ))}
        </div>
      </div>

      {/* Header Section */}
      <div className="max-w-[1280px] mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-red-600 mb-2">
          <Users size={18} className="text-red-600" />
          <span>{eyebrow}</span>
        </div>
        <div className="w-8 h-[2px] bg-red-600 mx-auto mt-1 mb-4" />

        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
          {title.split('Behind FixBolt')[0]}<span className="text-red-600">Behind FixBolt</span>
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer text-left flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative h-[380px] w-full overflow-hidden bg-gray-900">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Social Media Buttons (Right Side) */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <a
                  href={member.socials.twitter}
                  className="w-9 h-9 bg-white hover:bg-red-600 text-red-600 hover:text-white rounded-lg flex items-center justify-center shadow transition-colors duration-300"
                >
                  <TwitterIcon size={16} />
                </a>
                <a
                  href={member.socials.instagram}
                  className="w-9 h-9 bg-white hover:bg-red-600 text-red-600 hover:text-white rounded-lg flex items-center justify-center shadow transition-colors duration-300"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={member.socials.facebook}
                  className="w-9 h-9 bg-white hover:bg-red-600 text-red-600 hover:text-white rounded-lg flex items-center justify-center shadow transition-colors duration-300"
                >
                  <FacebookIcon size={16} />
                </a>
              </div>
            </div>

            {/* Bottom Info Card Area */}
            <div className="relative p-5 transition-colors duration-500 bg-white group-hover:bg-red-600 flex items-center justify-between">
              {/* Left Accent Bar (Only Visible on Normal State) */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 group-hover:bg-transparent transition-colors duration-300" />

              {/* Name & Role */}
              <div className="pl-2">
                <h3 className="text-lg font-bold text-black group-hover:text-white transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-red-600 group-hover:text-white/90 transition-colors duration-300 font-medium">
                  {member.role}
                </p>
              </div>

              {/* Share Icon Button */}
              <button className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-white text-red-600 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
