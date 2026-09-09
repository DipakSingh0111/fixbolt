"use client";

import { useEffect, useRef, useState } from "react";
import { Target, UserCog, HeartHandshake, Percent } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import data from "@/data/data.json";

const IconMap: Record<string, LucideIcon> = {
  target: Target,
  userCog: UserCog,
  heartHandshake: HeartHandshake,
  percent: Percent,
};

const stats = data.counters;

export default function CounterSection() {
  return (
    <section className="relative w-full bg-[#121316] border-t-2 border-red-600 py-16 px-4 overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-red-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {stats.map((item, index) => {
          const IconComponent = IconMap[item.icon];
          return (
            <div
              key={item.id}
              className="flex items-center w-full md:w-auto flex-1"
            >
              {/* Stat Box */}
              <div className="flex-1 text-center py-2">
                <div className="flex justify-center text-red-500 mb-3">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-1">
                  <CounterItem target={item.target} decimals={item.decimals} />
                  <span>{item.suffix}</span>
                </h2>
                <p className="text-gray-400 text-sm font-normal">
                  {item.label}
                </p>
              </div>

              {/* Divider */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block w-[1px] h-20 bg-white/10" />
              )}
            </div>
          );
        })}
      </div>
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
