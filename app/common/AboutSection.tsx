import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import data from "@/data/data.json";

const about = data.about;

function AwardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="5.4" />
      <path d="m8.4 13.8-1.6 7 3.2-1.5L12 22l2-2.7 3.2 1.5-1.6-7" />
    </svg>
  );
}

function StopwatchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="13.2" r="7.2" />
      <path d="M12 10v3.4l2.3 1.6M9.6 3.4h4.8M12 3.4v2.6M18.2 6.6l1.5-1.5" />
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

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

type AboutSectionProps = {
  showCta?: boolean;
};

export default function AboutSection({ showCta = false }: AboutSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Full-bleed red panel behind the photo — slanted right edge */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-[78%] w-[58%] bg-brand-red sm:w-[46%] lg:h-full lg:w-[34%]"
        style={{ clipPath: "polygon(0 0, 100% 0, 62% 100%, 0 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-10 right-8 hidden h-24 w-40 opacity-80 md:block"
        style={{
          backgroundImage: "radial-gradient(circle, #d21a25 1.3px, transparent 1.4px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 hidden h-16 w-36 -translate-x-1/2 md:block"
        style={{
          backgroundImage: "radial-gradient(circle, #d1d5db 1.3px, transparent 1.4px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative z-[1] mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative z-[1] pl-5 pt-8 md:pl-10 md:pt-12">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            width={720}
            height={560}
            className="relative z-[1] h-[360px] w-full rounded-[28px] object-cover object-[72%_center] shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:h-[480px]"
          />
        </div>

        <div>
          <p className="text-[13px] font-bold tracking-[0.08em] text-brand-red uppercase">
            {about.eyebrow}
          </p>
          <span className="mt-2 mb-5 block h-[3px] w-10 bg-brand-red" aria-hidden="true" />

          <h2 className="text-[32px] leading-tight font-extrabold text-[#111] md:text-[42px]">
            {about.title.map((part) => (
              <span key={part.text} className={part.accent ? "text-brand-red" : undefined}>
                {part.text}
              </span>
            ))}
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-500 md:text-base">
            {about.description}
          </p>

          <ul className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {about.features.map((feature) => (
              <li key={feature.id} className="flex items-start gap-3.5">
                <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-brand-red text-white [&_svg]:h-6 [&_svg]:w-6">
                  {FeatureIcon[feature.icon]}
                </span>
                <span>
                  <span className="block text-[15px] font-bold text-[#111]">
                    {feature.title}
                  </span>
                  <span className="mt-1 block text-[13px] leading-snug text-neutral-500">
                    {feature.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {showCta ? (
            <Link
              href={about.cta.href}
              className="mt-9 inline-flex h-12 items-center rounded-lg bg-brand-red px-6 text-[13px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-dark"
            >
              {about.cta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
