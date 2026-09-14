import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, ArrowRight } from "lucide-react";

export default function CareerCta({ bottomCta }: { bottomCta: any }) {
  return (
    <section className="site-container mb-10 md:mb-20">
      <div className="grid items-center gap-8 rounded-2xl bg-[#0a0a0a] px-6 py-8 sm:px-8 md:grid-cols-2 md:px-10 md:py-9 lg:px-12">
        <div className="flex items-start gap-5">
          <div className="mt-1 grid size-14 shrink-0 place-items-center rounded-full bg-[#d40000]">
            <Send className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="mb-3 text-[26px] font-bold text-white sm:text-[28px]">
              {bottomCta.title}
            </h2>
            <p className="mb-6 max-w-[400px] text-[14px] leading-relaxed text-neutral-300">
              {bottomCta.description}
            </p>
            <Link
              href={bottomCta.cta.href}
              className="inline-flex items-center gap-2 rounded-md bg-[#d40000] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#b80000]"
            >
              {bottomCta.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <Image
            src={bottomCta.logo.src}
            alt={bottomCta.logo.alt}
            width={bottomCta.logo.width}
            height={bottomCta.logo.height}
            className="h-[68px] w-auto object-contain mix-blend-screen sm:h-[80px]"
          />
        </div>
      </div>
    </section>
  );
}
