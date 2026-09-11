"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import data from "@/data/data.json";

const { eyebrow, title, description, image, features } = data.whyChooseUs;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

function CreditCardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 10h19M7 15h4" />
      <path d="M16.5 3.5 18 5.2l2.5-2.2" />
    </svg>
  );
}

function TechnicianIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.5c.8-3.2 3.3-5 6.5-5s5.7 1.8 6.5 5" />
      <path d="M16.2 5.2 18 3.8M18.8 7.5h2.2" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="10" r="5.2" />
      <path d="m9.2 17.2-1.4 4.3 2.8-1.2L12 22l1.4-1.7 2.8 1.2-1.4-4.3" />
      <path d="m9.8 10 1.5 1.5 3-3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 5 5.8v5.6c0 4.2 2.9 7.7 7 9.2 4.1-1.5 7-5 7-9.2V5.8L12 3Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.2" />
    </svg>
  );
}

const FeatureIcon: Record<string, ReactNode> = {
  creditCard: <CreditCardIcon />,
  userCheck: <TechnicianIcon />,
  award: <CertificateIcon />,
  shieldCheck: <ShieldIcon />,
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5]">
      {/* Top red accent slash (moved from image container to match design) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-[55%] z-[1] hidden h-[180px] w-[40px] bg-brand-red md:block"
        style={{ clipPath: "polygon(35% 0, 100% 0, 65% 100%, 0 100%)" }}
      />

      {/* Soft dot grid — top center-left */}
      <div
        aria-hidden="true"
        className="absolute top-16 left-[18%] hidden h-20 w-36 opacity-50 md:block"
        style={{
          backgroundImage: "radial-gradient(circle, #b0b0b0 1.2px, transparent 1.3px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Right image — full height, diagonal left cut */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[48%] lg:block"
        style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="48vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-[2] mx-auto grid max-w-[1280px] gap-8 px-5 py-10 md:px-8 md:py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
        {/* Left content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:col-span-7"
        >
          <motion.div variants={fadeInUp} className="mb-3 flex items-center gap-3">
            <p className="text-[13px] font-bold tracking-[0.08em] text-brand-red uppercase">
              {eyebrow}
            </p>
            <span className="h-[2px] w-6 bg-brand-red" aria-hidden="true" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="max-w-xl text-[32px] leading-[1.15] font-extrabold text-[#111] md:text-[44px] lg:text-[48px] mb-5">
            {title.map((part, i) => (
              <span key={`${part.text}-${i}`} className={part.accent ? "text-brand-red" : undefined}>
                {part.text}
                {!part.accent && i === 0 ? <br /> : null}
              </span>
            ))}
          </motion.h2>

          <motion.p variants={fadeInUp} className="mb-10 max-w-[500px] text-[15px] leading-relaxed text-neutral-500">
            {description}
          </motion.p>

          {/* Feature card */}
          <motion.div variants={fadeInUp} className="relative max-w-[680px] rounded-[24px] bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:p-10">
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 z-10 hidden size-2.5 -translate-x-1/2 -translate-y-1/2 bg-brand-red md:block"
            />

            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
              {features.map((feature, index) => (
                <li
                  key={feature.id}
                  className={`relative flex items-start gap-5 ${
                    index === 0
                      ? "sm:border-r sm:border-b sm:border-gray-100 sm:pr-10 sm:pb-10"
                      : index === 1
                        ? "sm:border-b sm:border-gray-100 sm:pb-10 sm:pl-10"
                        : index === 2
                          ? "sm:border-r sm:border-gray-100 sm:pr-10 sm:pt-10"
                          : "sm:pt-10 sm:pl-10"
                  }`}
                >
                  <span className="grid size-[64px] shrink-0 place-items-center rounded-full bg-red-50 text-brand-red [&_svg]:h-[30px] [&_svg]:w-[30px] border border-red-100">
                    {FeatureIcon[feature.icon]}
                  </span>
                  <div className="flex-1 pt-1.5">
                    <h3 className="text-[17px] font-bold text-[#111] mb-2.5">{feature.title}</h3>
                    <div className="w-8 h-[2px] bg-brand-red mb-3" />
                    <p className="text-[13px] leading-[1.7] text-neutral-500 font-medium">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Mobile / tablet image */}
        <div className="relative h-[320px] overflow-hidden rounded-2xl lg:col-span-5 lg:hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Spacer so left column doesn't collide with absolute image on desktop */}
        <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />
      </div>

      {/* Bottom red / black slanted bars */}
      <div className="relative z-[2] h-[42px] w-full md:h-[52px]" aria-hidden="true">
        <div
          className="absolute inset-y-0 left-0 w-[42%] bg-brand-red"
          style={{
            clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.28) 1.1px, transparent 1.2px), linear-gradient(#d40000, #d40000)",
            backgroundSize: "12px 12px, auto",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-[68%] bg-[#161616]"
          style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
      </div>
    </section>
  );
}
