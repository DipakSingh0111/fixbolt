"use client";

import { Users, Share2 } from "lucide-react";
import { site } from "@/data";

const {
  tagline,
  eyebrow,
  title,
  description,
  members: teamMembers,
} = site.team;
const sectionEyebrow = eyebrow || tagline;

const defaultSocials = {
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

import { useRouter } from "next/navigation";

export default function TeamSection() {
  const router = useRouter();

  return (
    <section className="bg-[#f8f9fa] pt-10 md:pt-16 pb-6 md:pb-10 text-center relative overflow-hidden">
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
      <div className="site-container mb-14">
        <div className="inline-flex items-center gap-2 text-base md:text-base font-bold uppercase tracking-wider text-[#d31c24] mb-2">
          <Users size={32} className="text-[#d31c24]" />
          <span>{sectionEyebrow}</span>
        </div>
        <div className="w-8 h-[2px] bg-[#d31c24] mx-auto mt-1 mb-4" />

        <h2 className="text-[32px] sm:text-4xl md:text-5xl font-extrabold text-[#111] mb-6 tracking-tight leading-[1.15]">
          {title.split("Behind FixBolt")[0]}
          <span className="text-[#d31c24]">Behind FixBolt</span>
        </h2>

        <p className="max-w-[600px] mx-auto text-gray-600 text-[14px] md:text-base leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="site-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member: any) => (
          <div
            key={member.id}
            onClick={() => {
              const nameSlug = member.name.toLowerCase().replace(/\s+/g, "-");
              router.push(`/ourteam/${nameSlug}`);
            }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer text-left flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative h-[380px] w-full overflow-hidden bg-gray-900">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute top-1/2 right-4 z-20 flex -translate-y-1/2 flex-col gap-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                {[
                  {
                    href: member.socials?.twitter || defaultSocials.twitter,
                    icon: TwitterIcon,
                    label: "X",
                    className:
                      "bg-[#111111] text-white shadow-lg shadow-black/20 hover:scale-110 hover:brightness-110",
                  },
                  {
                    href: member.socials?.instagram || defaultSocials.instagram,
                    icon: InstagramIcon,
                    label: "Instagram",
                    className:
                      "bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] text-white shadow-lg shadow-[#dc2743]/30 hover:scale-110 hover:brightness-110",
                  },
                  {
                    href: member.socials?.facebook || defaultSocials.facebook,
                    icon: FacebookIcon,
                    label: "Facebook",
                    className:
                      "bg-[#1877F2] text-white shadow-lg shadow-[#1877F2]/35 hover:scale-110 hover:brightness-110",
                  },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      onClick={(e) => e.stopPropagation()}
                      className={`grid size-10 place-items-center rounded-full transition-all duration-300 ${social.className}`}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
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
                <p className="text-base md:text-base text-red-600 group-hover:text-white/90 transition-colors duration-300 font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
