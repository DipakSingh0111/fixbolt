"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { site, SectionProps, AboutData } from "@/data";


function AwardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="9" r="5.4" />
      <path d="m8.4 13.8-1.6 7 3.2-1.5L12 22l2-2.7 3.2 1.5-1.6-7" />
    </svg>
  );
}

function StopwatchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="13.2" r="7.2" />
      <path d="M12 10v3.4l2.3 1.6M9.6 3.4h4.8M12 3.4v2.6M18.2 6.6l1.5-1.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 5 5.8v5.6c0 4.2 2.9 7.7 7 9.2 4.1-1.5 7-5 7-9.2V5.8L12 3Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.2" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 13.2 4.8 10a2.1 2.1 0 0 1 0-3l1.6-1.6a2.1 2.1 0 0 1 3 0L12 8l2.6-2.6a2.1 2.1 0 0 1 3 0L19.2 7a2.1 2.1 0 0 1 0 3l-3 3" />
      <path d="m8 13.2 2.4 2.4a1.6 1.6 0 0 0 2.2 0l.6-.6" />
      <path d="m14.2 11.6 1.6 1.6a1.6 1.6 0 0 1 0 2.2l-1 1" />
    </svg>
  );
}

const FeatureIcon: Record<string, ReactNode> = {
  award: <AwardIcon />,
  stopwatch: <StopwatchIcon />,
  shield: <ShieldIcon />,
  handshake: <HandshakeIcon />,
};

type AboutSectionProps = SectionProps<AboutData> & {
  showCta?: boolean;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function AboutSection({ showCta = false, data, className }: AboutSectionProps) {
  const content = data || site.about;
  const { eyebrow, title, description, features, image, cta } = content;

  return (
    <section className={`relative overflow-hidden bg-white py-10 md:py-16 lg:py-24 font-sans ${className || ""}`}>
      {/* Full-bleed red panel behind the photo — slanted right edge */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-[450px] w-[80%] bg-brand-red md:h-[600px] md:w-[50%] lg:h-full lg:w-[38%]"
        style={{ clipPath: "polygon(0 0, 100% 0, 62% 100%, 0 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-10 right-8 hidden h-24 w-40 opacity-80 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d21a25 1.3px, transparent 1.4px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 hidden h-16 w-36 -translate-x-1/2 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1.3px, transparent 1.4px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="site-container relative z-[1] grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="relative z-[1] pt-4 md:pt-6"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={720}
            height={700}
            className="relative z-[1] h-[450px] w-full rounded-[28px] object-cover object-[72%_center] shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:h-[600px] lg:h-[700px]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-[13px] md:text-[14px] font-bold tracking-[0.05em] text-brand-red uppercase mb-1.5"
          >
            {eyebrow}
          </motion.p>
          <motion.span
            variants={fadeInUp}
            className="mb-6 block h-[2.5px] w-12 bg-brand-red"
            aria-hidden="true"
          />

          <motion.h2
            variants={fadeInUp}
            className="text-[34px] leading-[1.1] font-extrabold text-[#111] md:text-[46px] lg:text-[48px] tracking-tight mb-5"
          >
            {title.map((part) => (
              <span
                key={part.text}
                className={part.accent ? "text-brand-red" : undefined}
              >
                {part.text}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-[540px] text-[15px] leading-relaxed text-neutral-500 md:text-[17px]"
          >
            {description}
          </motion.p>

          <motion.ul
            variants={staggerContainer}
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2"
          >
            {features.map((feature) => (
              <motion.li
                variants={fadeInUp}
                key={feature.id}
                className="flex items-start gap-4"
              >
                <span className="grid size-[64px] shrink-0 place-items-center rounded-[18px] bg-brand-red text-white [&_svg]:h-[32px] [&_svg]:w-[32px] shadow-sm">
                  {FeatureIcon[feature.icon]}
                </span>
                <span className="pt-1 flex-1">
                  <span className="block text-[16px] font-bold text-[#111] mb-1.5">
                    {feature.title}
                  </span>
                  <span className="block text-[14px] leading-[1.6] text-neutral-500 font-medium">
                    {feature.description}
                  </span>
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {showCta ? (
            <motion.div variants={fadeInUp}>
              <Link
                href={cta.href}
                className="mt-10 group inline-flex h-14 items-center gap-3 rounded-lg bg-brand-red pr-3 pl-7 text-[14px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-dark"
              >
                {cta.label}
                <span className="grid size-9 place-items-center rounded-md text-white transition-transform duration-200 group-hover:translate-x-1">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
