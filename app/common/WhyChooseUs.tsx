"use client";

import Image from "next/image";
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

const FeatureIconSrc: Record<string, string> = {
  creditCard: "/images/why-icon-payment.png",
  userCheck: "/images/why-icon-tech.png",
  award: "/images/why-icon-cert.png",
  shieldCheck: "/images/why-icon-shield.png",
};

export default function WhyChooseUs({ data, className }: SectionProps<WhyChooseUsData> = {}) {
  const content = data || site.whyChooseUs;
  const { tagline, eyebrow, title, description, image, features } = content;
  const sectionEyebrow = eyebrow || tagline;
  return (
    <section className={`section-pad relative w-full overflow-hidden bg-[#f7f8fa] ${className || ""}`}>
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
          <div className="z-10 flex flex-col justify-center lg:col-span-7 lg:pb-0 xl:col-span-7">
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
                      className={`flex items-start gap-5 py-4 ${
                        index === 0
                          ? "sm:border-r sm:border-b sm:border-gray-100 sm:pr-6 sm:pb-6 sm:pt-0"
                          : index === 1
                            ? "sm:border-b sm:border-gray-100 sm:pb-6 sm:pl-6 sm:pt-0"
                            : index === 2
                              ? "sm:border-r sm:border-gray-100 sm:pr-6 sm:pt-6 sm:pb-0"
                              : "sm:pl-6 sm:pt-6 sm:pb-0"
                      }`}
                    >
                      {/* Exact icon from design screenshot */}
                      <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={FeatureIconSrc[feature.icon] || FeatureIconSrc.creditCard}
                          alt={feature.title}
                          fill
                          sizes="88px"
                          className="object-contain"
                        />
                      </div>

                      <div className="min-w-0 pt-1">
                        <h3 className="text-[16px] font-bold text-[#111] leading-tight">
                          {feature.title}
                        </h3>
                        <span className="mt-2 mb-2.5 block h-[2.5px] w-8 bg-[#d31c24]" />
                        <p className="text-[12.5px] leading-[1.7] text-gray-500 m-0">
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
