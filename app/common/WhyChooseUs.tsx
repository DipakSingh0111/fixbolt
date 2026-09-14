"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { site, SectionProps, WhyChooseUsData } from "@/data";


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function PaymentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="6.5" y="3.2" width="11" height="17.6" rx="2" />
      <path d="M10 7h5M12 17.4h.01" />
    </svg>
  );
}

function HardHatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.8 15.2h16.4" />
      <path d="M5.2 15.2v-1.6c0-3.8 3-6.8 6.8-6.8s6.8 3 6.8 6.8v1.6" />
      <path d="M12 6.8V4.6" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="9" r="4.3" />
      <path d="m9.5 13.2-1.5 6 4-1.6 1.5 2.8V17.6l4 1.6-1.5-6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3.2 5 5.8v5.5c0 4.1 2.9 7.6 7 9.1 4.1-1.5 7-5 7-9.1V5.8L12 3.2Z" />
      <path d="m8.7 11.7 2.3 2.3 4.4-4.4" />
    </svg>
  );
}

const FeatureIcon: Record<string, ReactNode> = {
  creditCard: <PaymentIcon />,
  userCheck: <HardHatIcon />,
  award: <CertificateIcon />,
  shieldCheck: <ShieldIcon />,
};

export default function WhyChooseUs({ data, className }: SectionProps<WhyChooseUsData> = {}) {
  const content = data || site.whyChooseUs;
  const { tagline, eyebrow, title, description, image, features } = content;
  const sectionEyebrow = eyebrow || tagline;
  return (
    <section className={`relative w-full overflow-hidden bg-[#f7f8fa] pt-10 lg:pt-16 pb-12 lg:pb-16 ${className || ""}`}>
      {/* Background Dot Patterns */}
      <div className="absolute top-4 left-[45%] hidden lg:grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none z-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-gray-600" />
        ))}
      </div>

      {/* FULL-WIDTH BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative h-full w-full">
          <Image
            src={image.src || "/images/why-choose.png"}
            alt={image.alt || "Electrical tools and equipment"}
            fill
            sizes="100vw"
            className="object-cover object-center lg:object-right"
            priority
          />
        </div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/80 lg:bg-white/10 xl:bg-transparent pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[#f7f8fa]/90 lg:bg-transparent pointer-events-none" />
      </div>

      {/* Main Container - using site-container to align perfectly with Navbar logo */}
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center z-10 pb-6 lg:pb-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="max-w-[620px]"
            >
              {/* Eyebrow */}
              <motion.div
                variants={fadeInUp}
                className="mb-3 flex items-center gap-2"
              >
                <p className="text-[12px] font-bold tracking-[0.14em] text-[#d31c24] uppercase">
                  {sectionEyebrow}
                </p>
                <span className="h-[2px] w-6 bg-[#d31c24]" />
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={fadeInUp}
                className="text-[32px] sm:text-[40px] xl:text-[44px] font-extrabold leading-[1.12] text-[#111] tracking-tight"
              >
                {title.map((part, i) => (
                  <span
                    key={i}
                    className={part.accent ? "text-[#d31c24]" : undefined}
                  >
                    {part.text}
                  </span>
                ))}
              </motion.h2>

              <motion.span
                variants={fadeInUp}
                className="mt-3 mb-4 block h-[2.5px] w-8 bg-[#d31c24]"
              />

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="mb-8 text-[13.5px] leading-relaxed text-gray-700 max-w-[480px] font-medium"
              >
                {description}
              </motion.p>

              {/* WHITE GRID CARD CONTAINER */}
              <motion.div
                variants={fadeInUp}
                className="relative rounded-[16px] bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100/80 h-auto"
              >
                {/* Center Red Square Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block h-2.5 w-2.5 bg-[#d31c24]" />

                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={`flex items-start gap-4 py-4 ${
                        index === 0
                          ? "sm:border-r sm:border-b sm:border-gray-100 sm:pr-6 sm:pb-6 sm:pt-0"
                          : index === 1
                            ? "sm:border-b sm:border-gray-100 sm:pb-6 sm:pl-6 sm:pt-0"
                            : index === 2
                              ? "sm:border-r sm:border-gray-100 sm:pr-6 sm:pt-6 sm:pb-0"
                              : "sm:pl-6 sm:pt-6 sm:pb-0"
                      }`}
                    >
                      {/* Pink Circle for Icon */}
                      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#fdeaea]">
                        {FeatureIcon[feature.icon]}
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <div className="mb-1.5 flex items-center gap-2">
                          <h3 className="text-[15px] font-bold text-[#111]">
                            {feature.title}
                          </h3>
                          <span className="h-[1.5px] w-4 bg-[#d31c24]" />
                        </div>
                        <p className="text-[11.5px] leading-[1.65] text-gray-500 m-0">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
