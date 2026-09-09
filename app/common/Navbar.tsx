"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import data from "@/data/data.json";

const { logo, links, cta } = data.navbar;

function ArrowRight() {
  return (
    <svg
      width="15"
      height="15"
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative z-50 w-full bg-brand-dark">
      <div className="site-container flex min-h-[78px] items-center">
        {/* Logo — mix-blend-screen drops the logo's white backdrop */}
        <Link href={logo.href} className="mr-8 flex shrink-0 items-center py-1.5">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="h-[54px] w-auto object-contain mix-blend-screen brightness-[1.05] contrast-[1.05] transition-opacity hover:opacity-90"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden flex-1 items-center lg:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative inline-block px-[18px] py-[26px] text-[15px] font-semibold transition-colors ${
                    isActive ? "text-brand-red" : "text-white hover:text-white/80"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-[14px] bottom-[18px] h-[1.5px] bg-brand-red transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href={cta.href}
          className="group ml-auto hidden h-[50px] shrink-0 items-center gap-2 rounded-lg bg-brand-red px-[26px] text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-red-dark lg:inline-flex"
        >
          {cta.label}
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            <ArrowRight />
          </span>
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="ml-auto flex flex-col gap-[5px] p-2 lg:hidden"
        >
          <span className="block h-[2.5px] w-6 rounded bg-white" />
          <span className="block h-[2.5px] w-6 rounded bg-white" />
          <span className="block h-[2.5px] w-6 rounded bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full border-t-2 border-brand-red bg-brand-dark px-6 pt-4 pb-6 shadow-[0_8px_24px_rgba(0,0,0,0.5)] lg:hidden">
          <ul className="mb-4 flex flex-col">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block border-b border-white/10 py-2.5 text-[15px] font-medium transition-colors hover:text-brand-red ${
                      isActive ? "text-brand-red" : "text-neutral-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href={cta.href}
            onClick={() => setMobileOpen(false)}
            className="flex h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-brand-red text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            {cta.label}
            <ArrowRight />
          </Link>
        </div>
      )}
    </nav>
  );
}
