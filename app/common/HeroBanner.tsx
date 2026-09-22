"use client";

import Link from "next/link";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { site, SectionProps, HeroData } from "@/data";

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
      <path d="M12 2.6 4.5 5.4v5.9c0 4.6 3.1 8.4 7.5 10.1 4.4-1.7 7.5-5.5 7.5-10.1V5.4L12 2.6Z" />
      <path d="m8.7 11.6 2.4 2.4 4.2-4.2" />
    </svg>
  );
}
function GearIcon() {
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
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.5 12c0-.5-.05-1-.14-1.47l1.72-1.2-1.6-2.77-1.95.77a7.6 7.6 0 0 0-2.53-1.47L14.7 3.8h-3.2l-.3 2.06a7.6 7.6 0 0 0-2.54 1.47l-1.95-.77-1.6 2.77 1.72 1.2a7.7 7.7 0 0 0 0 2.94l-1.72 1.2 1.6 2.77 1.95-.77a7.6 7.6 0 0 0 2.53 1.47l.31 2.06h3.2l.3-2.06a7.6 7.6 0 0 0 2.54-1.47l1.95.77 1.6-2.77-1.72-1.2c.09-.47.14-.96.14-1.47Z" />
    </svg>
  );
}
function StopwatchIcon() {
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
      <circle cx="12" cy="13.4" r="7.9" />
      <path d="M12 9.6v3.8l2.6 2.1M9.6 2.6h4.8M12 2.6v3M18.6 6.4l1.6-1.6" />
    </svg>
  );
}
function AwardIcon() {
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
      <circle cx="12" cy="9.2" r="6.2" />
      <path d="m12 6.4.9 1.85 2.05.28-1.5 1.44.37 2.03L12 11.05l-1.82.95.37-2.03-1.5-1.44 2.05-.28L12 6.4Z" />
      <path d="m8.3 14.4-1.7 6 3.3-1.6 2.1 2.6 2.1-2.6 3.3 1.6-1.7-6" />
    </svg>
  );
}

const FeatureIcon: Record<string, ReactNode> = {
  shield: <ShieldIcon />,
  gear: <GearIcon />,
  stopwatch: <StopwatchIcon />,
  award: <AwardIcon />,
};

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h13M12.5 6.5 18.5 12l-6 5.5" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M15 6 9 12l6 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

const SWIPE_THRESHOLD = 45;

export default function HeroBanner({
  data,
  className,
}: SectionProps<HeroData> = {}) {
  const content = data || site.hero;
  const heroData = content;
  const { slides, features, autoplayMs } = heroData;
  const count = slides.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || count < 2) return;
    const timer = window.setTimeout(next, autoplayMs);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduceMotion, count, next, autoplayMs]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) next();
    else prev();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-page min-h-[600px] h-[600px] md:min-h-0 md:h-[480px] lg:h-[520px] xl:h-[560px] max-h-[700px]"
      aria-roledescription="carousel"
      aria-label="FixBolt highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
    >
      <div
        className="flex h-full w-full will-change-transform motion-safe:transition-transform motion-safe:duration-[850ms] motion-safe:ease-in-out"
        style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, i) => {
          const isActive = i === index;
          return (
            <div
              key={slide.id}
              className={`relative h-full w-full shrink-0 overflow-hidden ${isActive ? "is-active" : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className={`object-cover object-[center_right] max-lg:object-[74%_center] motion-safe:transition-transform motion-safe:duration-[8s] motion-safe:ease-out ${
                  isActive ? "scale-100" : "scale-105"
                }`}
              />

              <div className="absolute inset-0 z-[2] flex items-end md:items-start pb-20 md:pb-0 pt-0 max-md:pt-0 md:pt-6 lg:pt-8 xl:pt-10 max-lg:bg-linear-to-r max-lg:from-page/95 max-lg:via-page/80 max-lg:to-transparent">
                <div className="site-container w-full mt-0">
                  <div className="w-full max-w-[55%] xl:max-w-[50%] 2xl:max-w-[46%] max-lg:max-w-[75%] max-md:max-w-full">
                    <p
                      className={`mb-2.5 flex flex-wrap gap-x-2 text-[13px] font-bold tracking-wide uppercase md:text-[15px] ${
                        isActive
                          ? "motion-safe:animate-[heroRise_0.7s_0.08s_ease-out_both]"
                          : "opacity-0"
                      }`}
                    >
                      {slide.eyebrow.map((word) => (
                        <span
                          key={word.text}
                          className={
                            word.accent ? "text-brand-red" : "text-[#111]"
                          }
                        >
                          {word.text}
                        </span>
                      ))}
                    </p>

                    <h1
                      className={`text-[30px] leading-[1.05] font-extrabold tracking-tight uppercase text-[#111] md:text-[42px] lg:text-[48px] xl:text-[56px] ${
                        isActive
                          ? "motion-safe:animate-[heroRise_0.7s_0.16s_ease-out_both]"
                          : "opacity-0"
                      }`}
                    >
                      {slide.titleLines.map((line) => (
                        <span key={line.text} className="block">
                          {"accent" in line && line.accent ? (
                            <span className="text-brand-red">
                              {line.accent}{" "}
                            </span>
                          ) : null}
                          {line.text}
                        </span>
                      ))}
                    </h1>

                    <p
                      className={`mt-4 text-base leading-relaxed font-medium text-[#1a1a1a] md:text-lg xl:text-xl ${
                        isActive
                          ? "motion-safe:animate-[heroRise_0.7s_0.24s_ease-out_both]"
                          : "opacity-0"
                      }`}
                    >
                      {slide.description.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>

                    <div
                      className={`mt-5 md:mt-6 ${
                        isActive
                          ? "motion-safe:animate-[heroRise_0.7s_0.32s_ease-out_both]"
                          : "opacity-0"
                      }`}
                    >
                      <Link
                        href={slide.cta.href}
                        tabIndex={isActive ? undefined : -1}
                        className="group inline-flex h-[52px] items-center gap-3 rounded-lg bg-brand-red pr-1.5 pl-6 text-[13px] font-bold tracking-[0.07em] text-white uppercase transition-colors hover:bg-brand-red-dark"
                      >
                        {slide.cta.label}
                        <span className="grid size-10 place-items-center rounded-full bg-white text-brand-red transition-transform duration-200 group-hover:translate-x-0.5">
                          <ArrowRight />
                        </span>
                      </Link>
                    </div>

                    <ul
                      className={`mt-5 md:mt-7 grid grid-cols-2 gap-y-6 sm:flex sm:items-stretch sm:gap-y-0 ${
                        isActive
                          ? "motion-safe:animate-[heroRise_0.7s_0.4s_ease-out_both]"
                          : "opacity-0"
                      }`}
                    >
                      {features.map((feature, fi) => {
                        const isLast = fi === features.length - 1;
                        return (
                          <li
                            key={feature.id}
                            className={`relative z-[1] flex flex-col sm:flex-1 items-center justify-start gap-2.5 md:gap-3 px-2 text-center sm:px-4 md:px-5 ${
                              fi % 2 !== 0
                                ? "border-l border-black/10"
                                : "max-sm:border-l-0 max-sm:pl-0"
                            } ${
                              fi > 0
                                ? "sm:border-l sm:border-black/10"
                                : "sm:pl-0"
                            } ${
                              isLast ||
                              slide.image.src.includes("02") ||
                              slide.image.src.includes("03")
                                ? "before:absolute before:inset-[-18px] before:-z-10 before:rounded-2xl before:backdrop-blur-[6px] before:bg-white/55 before:[mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
                                : ""
                            } ${
                              isLast
                                ? "before:backdrop-blur-md before:bg-white/70 before:inset-[-22px] before:[mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_78%)]"
                                : ""
                            }`}
                          >
                            <span className="flex text-brand-red [&_svg]:h-9 [&_svg]:w-9 sm:[&_svg]:h-11 sm:[&_svg]:w-11 md:[&_svg]:h-12 md:[&_svg]:w-12 drop-shadow-sm">
                              {FeatureIcon[feature.icon]}
                            </span>
                            <span className="text-[12px] sm:text-[13px] leading-snug font-bold text-[#111] md:text-[14px]">
                              {feature.lines.map((line) => (
                                <span key={line} className="block">
                                  {line}
                                </span>
                              ))}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Icons - Commented as requested
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute z-[4] grid size-10 place-items-center rounded-md border-0 bg-brand-red text-white transition-colors hover:bg-brand-red-dark bottom-5 left-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-6 lg:left-8"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute z-[4] grid size-10 place-items-center rounded-md border-0 bg-brand-red text-white transition-colors hover:bg-brand-red-dark bottom-5 right-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-6 lg:right-8"
      >
        <ChevronRight />
      </button>

      <div
        className="absolute bottom-5 md:bottom-6 left-1/2 z-[4] flex -translate-x-1/2 gap-3"
        role="tablist"
        aria-label="Choose slide"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`size-2.5 rounded-full border-0 p-0 transition-transform ${
              i === index
                ? "scale-110 bg-brand-red"
                : "bg-[#b9bbbd] hover:bg-[#8d9092]"
            }`}
          />
        ))}
      </div>
      */}
    </section>
  );
}
