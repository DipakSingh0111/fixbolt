"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { site, SectionProps, HeaderData } from "@/data";

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

export default function Navbar({ data, className }: SectionProps<HeaderData> = {}) {
  const content = data || site.header;
  const { logo, menuItems, cta } = content;
  const links = menuItems;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
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
          {links.map((link: any) => {
            const isActive = pathname === link.href || link.dropdownItems?.some((dl: any) => dl.href === pathname);
            
            return (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group/link relative inline-block px-[18px] py-[26px] text-[15px] font-semibold transition-colors ${
                    isActive ? "text-brand-red" : "text-white hover:text-white/80"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {link.label}
                    {link.dropdownItems && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                  </span>
                  
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-[14px] bottom-[18px] h-[1.5px] bg-brand-red transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
                    }`}
                  />
                </Link>

                {link.dropdownItems && (
                  <div className="absolute left-0 top-full invisible w-48 translate-y-2 opacity-0 shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="flex flex-col overflow-hidden rounded-b-lg border-t-2 border-brand-red bg-white">
                      {link.dropdownItems.map((dropLink: any) => {
                        const isDropActive = pathname === dropLink.href;
                        return (
                          <li key={dropLink.href}>
                            <Link
                              href={dropLink.href}
                              className={`block px-5 py-3 text-[14px] font-medium transition-colors hover:bg-neutral-50 hover:text-brand-red ${
                                isDropActive ? "text-brand-red bg-neutral-50" : "text-[#111]"
                              }`}
                            >
                              {dropLink.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
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
            {links.map((link: any) => {
              const isActive = pathname === link.href || link.dropdownItems?.some((dl: any) => dl.href === pathname);
              const isDropdownOpen = mobileDropdownOpen === link.label;

              return (
                <li key={link.href} className="border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => !link.dropdownItems && setMobileOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block py-2.5 text-[15px] font-medium transition-colors hover:text-brand-red ${
                        isActive && !link.dropdownItems ? "text-brand-red" : "text-neutral-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                    
                    {link.dropdownItems && (
                      <button
                        onClick={() => setMobileDropdownOpen(isDropdownOpen ? null : link.label)}
                        className="p-2 text-white hover:text-brand-red"
                      >
                        <ChevronDown size={18} className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  
                  {link.dropdownItems && isDropdownOpen && (
                    <ul className="mb-2 flex flex-col gap-1 pl-4">
                      {link.dropdownItems.map((dropLink: any) => {
                        const isDropActive = pathname === dropLink.href;
                        return (
                          <li key={dropLink.href}>
                            <Link
                              href={dropLink.href}
                              onClick={() => setMobileOpen(false)}
                              className={`block py-2 text-[14px] transition-colors hover:text-brand-red ${
                                isDropActive ? "text-brand-red" : "text-neutral-400"
                              }`}
                            >
                              {dropLink.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
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
