"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { site, SectionProps, CountersData } from "@/data";

// Custom SVG Icons that match the requested design
const HandGearIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Gear */}
    <path d="M32 16a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
    <path d="M32 12v-4M32 36v4M44 24h4M16 24h4" />
    <path d="M40.485 15.515l2.829-2.829M20.686 32.485l-2.828 2.828M40.485 32.485l2.829 2.828M20.686 15.515l-2.828-2.829" />
    {/* Arrow heads */}
    <path d="M43.314 12.686h-4M43.314 12.686v4" />
    <path d="M43.314 35.314h-4M43.314 35.314v-4" />
    <path d="M17.858 12.686h4M17.858 12.686v4" />
    <path d="M17.858 35.314h4M17.858 35.314v-4" />
    {/* Hand */}
    <path d="M22 44l-6 5a4 4 0 0 0 5 6l8-6h13a5 5 0 0 0 5-5v-1" />
  </svg>
);

const WorkerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Hard Hat */}
    <path d="M18 22c0-7.732 6.268-14 14-14s14 6.268 14 14" />
    <path d="M14 22h36" />
    <path d="M32 4v4" />
    {/* Face/Head */}
    <path d="M24 22v6a8 8 0 0 0 16 0v-6" />
    {/* Body / Overalls */}
    <path d="M18 52V36c0-2.21 1.79-4 4-4h20c2.21 0 4 1.79 4 4v16" />
    <path d="M26 42v10M38 42v10M26 42h12" />
  </svg>
);

const StarsUserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* User */}
    <circle cx="32" cy="24" r="5" />
    <path d="M24 36c0-3.3 3.582-6 8-6s8 2.7 8 6" />
    {/* Stars */}
    <path d="M32 6l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" />
    <path d="M20 10l1 2 2 .5-1.5 1.5.5 2.5-2-1-2 1 .5-2.5-1.5-1.5 2-.5z" />
    <path d="M44 10l1 2 2 .5-1.5 1.5.5 2.5-2-1-2 1 .5-2.5-1.5-1.5 2-.5z" />
    {/* Hand */}
    <path d="M22 46l-6 5a4 4 0 0 0 5 6l8-6h13a5 5 0 0 0 5-5v-1" />
  </svg>
);

// Map the data.json icons to our custom SVGs
const IconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  target: HandGearIcon,
  userCog: WorkerIcon,
  heartHandshake: StarsUserIcon,
  percent: HandGearIcon, // Same icon for the 4th item in the design
};

export default function CounterSection({ data, className }: SectionProps<CountersData> = {}) {
  const content = data || site.counters;
  const stats = content.items || [];

  return (
    <section className={`relative w-full bg-[#161616] py-6 md:py-8 px-4 ${className || ""}`}>
      {/* Background overlay/image could go here to match texture */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/Home_banner.png')", // fallback to a known image for texture
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }}
      />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="site-container grid grid-cols-2 gap-y-10 gap-x-4 md:flex md:flex-row items-center justify-between relative z-10"
      >
        {stats.map((item, index) => {
          const IconComponent = IconMap[item.icon] || HandGearIcon;
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
              }}
              key={item.id}
              className="flex items-center w-full md:w-auto flex-1 relative py-4"
            >
              {/* Stat Box */}
              <div className="flex-1 text-center flex flex-col items-center">
                <div className="flex justify-center text-red-600 mb-6 h-16 w-16">
                  <IconComponent className="w-full h-full drop-shadow-md" />
                </div>
                <h2 className="text-4xl md:text-[40px] font-bold text-white mb-2 tracking-tight">
                  <CounterItem target={item.target} decimals={item.decimals} />
                  <span>{item.suffix}</span>
                </h2>
                <p className="text-gray-400 text-[15px] font-medium">
                  {item.label}
                </p>
              </div>

              {/* Divider */}
              {index !== stats.length - 1 && (
               <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/10" />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

function CounterItem({
  target,
  decimals,
}: {
  target: number;
  decimals: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}
