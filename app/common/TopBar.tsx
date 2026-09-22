import type { ReactNode } from "react";
import { site, SectionProps, TopbarData } from "@/data";


// ── Contact icons ────────────────────────────────────────────
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15.5 21C7.49 21 3 16.51 3 8.5V6.6c0-.88.72-1.6 1.6-1.6h2.06c.7 0 1.31.46 1.52 1.12l.72 2.3c.19.6-.02 1.25-.53 1.62l-1.1.8a10.6 10.6 0 0 0 4.9 4.9l.8-1.1c.37-.51 1.02-.72 1.62-.53l2.3.72c.66.21 1.11.82 1.11 1.52v2.05c0 .88-.72 1.6-1.6 1.6h-.9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8.1 8.2-5.4H3.8L12 13.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.8c3.42 0 6.2 2.78 6.2 6.2 0 4.3-4.53 9.6-6.2 11.4C10.33 18.6 5.8 13.3 5.8 9c0-3.42 2.78-6.2 6.2-6.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

// ── Social icons ─────────────────────────────────────────────
const SocialIcon: Record<string, ReactNode> = {
  twitter: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  ),
  facebook: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.12 5.32h2.16V2.14A29.3 29.3 0 0 0 14.13 2c-3.1 0-5.22 1.95-5.22 5.52v2.8H6v3.56h2.91V22h3.58v-8.12h2.9l.44-3.56h-3.35V7.87c0-1.03.28-2.55 2.64-2.55Z" />
    </svg>
  ),
  pinterest: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.17-.11-.95-.2-2.4.04-3.44.22-.94 1.4-5.96 1.4-5.96s-.35-.72-.35-1.79c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.76 1.51 1.68 0 1.03-.65 2.57-.99 4-.28 1.19.6 2.16 1.78 2.16 2.13 0 3.77-2.25 3.77-5.49 0-2.88-2.06-4.89-5.01-4.89-3.41 0-5.42 2.56-5.42 5.21 0 1.03.4 2.13.89 2.73.1.12.11.22.08.34l-.33 1.36c-.05.22-.17.27-.4.16-1.5-.7-2.44-2.89-2.44-4.65 0-3.79 2.75-7.27 7.93-7.27 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.61 7.47-6.23 7.47-1.21 0-2.36-.64-2.75-1.38l-.75 2.85c-.27 1.05-1 2.35-1.49 3.15A12 12 0 1 0 12 0Z" />
    </svg>
  ),
  instagram: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.02 4.85.08 3.25.14 4.77 1.69 4.91 4.91.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.91 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.15-3.22 1.66-4.77 4.92-4.91C8.42 2.18 8.8 2.16 12 2.16Zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
    </svg>
  ),
};

const itemClass =
  "flex shrink-0 items-center gap-[9px] text-[13px] transition-opacity hover:opacity-80";
const dividerClass = "h-[15px] w-px shrink-0 bg-white/40";

// ── Top Bar ──────────────────────────────────────────────────
export default function TopBar({ data, className }: SectionProps<TopbarData> = {}) {
  const content = data || site.topbar;
  const { phone, email, address, socialLinks } = content;
  return (
    <div className="w-full bg-brand-red text-white">
      <div className="site-container flex min-h-10 items-center gap-[22px]">
        {/* Phone */}
        <a href={phone.href} className={`${itemClass} font-semibold`}>
          <PhoneIcon />
          <span>{phone.display}</span>
        </a>

        <span className={`hidden sm:block ${dividerClass}`} aria-hidden="true" />

        {/* Email */}
        <a href={email.href} className={`hidden font-medium sm:flex ${itemClass}`}>
          <MailIcon />
          <span>{email.display}</span>
        </a>

        <span className={`hidden lg:block ${dividerClass}`} aria-hidden="true" />

        {/* Address */}
        <a
          href={address.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden font-medium lg:flex ${itemClass}`}
        >
          <PinIcon />
          <span>{address.display}</span>
        </a>

        {/* Socials */}
        <div className="ml-auto flex shrink-0 items-center gap-1.5">
          {socialLinks.map((social: any) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="grid size-7 place-items-center rounded border border-white/40 transition-colors hover:border-white hover:bg-white/20"
            >
              {SocialIcon[social.platform]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
