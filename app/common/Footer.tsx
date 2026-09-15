import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import ScrollToTopLink from "../components/ScrollToTopLink";
import { site, SectionProps, FooterData } from "@/data";

const SocialIcon: Record<string, ReactNode> = {
  twitter: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  ),
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.12 5.32h2.16V2.14A29.3 29.3 0 0 0 14.13 2c-3.1 0-5.22 1.95-5.22 5.52v2.8H6v3.56h2.91V22h3.58v-8.12h2.9l.44-3.56h-3.35V7.87c0-1.03.28-2.55 2.64-2.55Z" />
    </svg>
  ),
  pinterest: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.17-.11-.95-.2-2.4.04-3.44.22-.94 1.4-5.96 1.4-5.96s-.35-.72-.35-1.79c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.76 1.51 1.68 0 1.03-.65 2.57-.99 4-.28 1.19.6 2.16 1.78 2.16 2.13 0 3.77-2.25 3.77-5.49 0-2.88-2.06-4.89-5.01-4.89-3.41 0-5.42 2.56-5.42 5.21 0 1.03.4 2.13.89 2.73.1.12.11.22.08.34l-.33 1.36c-.05.22-.17.27-.4.16-1.5-.7-2.44-2.89-2.44-4.65 0-3.79 2.75-7.27 7.93-7.27 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.61 7.47-6.23 7.47-1.21 0-2.36-.64-2.75-1.38l-.75 2.85c-.27 1.05-1 2.35-1.49 3.15A12 12 0 1 0 12 0Z" />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.02 4.85.08 3.25.14 4.77 1.69 4.91 4.91.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.91 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.15-3.22 1.66-4.77 4.92-4.91C8.42 2.18 8.8 2.16 12 2.16Zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
    </svg>
  ),
  youtube: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.47A3.01 3.01 0 0 0 .5 6.2C0 8.05 0 12 0 12s0 3.95.5 5.8a3.01 3.01 0 0 0 2.12 2.13C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.47a3.01 3.01 0 0 0 2.12-2.13C24 15.95 24 12 24 12s0-3.95-.5-5.8ZM9.6 15.6V8.4l6.27 3.6-6.27 3.6Z" />
    </svg>
  ),
};

function LocationContactIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="#e8292a" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}
function PhoneContactIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15.5 21C7.49 21 3 16.51 3 8.5V6.6c0-.88.72-1.6 1.6-1.6h2.06c.7 0 1.31.46 1.52 1.12l.72 2.3c.19.6-.02 1.25-.53 1.62l-1.1.8a10.6 10.6 0 0 0 4.9 4.9l.8-1.1c.37-.51 1.02-.72 1.62-.53l2.3.72c.66.21 1.11.82 1.11 1.52v2.05c0 .88-.72 1.6-1.6 1.6h-.9Z" stroke="#e8292a" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
function MailContactIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#e8292a" strokeWidth="1.5"/>
      <path d="M2 8l10 6 10-6" stroke="#e8292a" strokeWidth="1.5"/>
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#e8292a" strokeWidth="1.5"/>
      <path d="M12 7v5l3 3" stroke="#e8292a" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function Footer({ data, className }: SectionProps<FooterData> = {}) {
  const content = data || site.footer;
  const { logo, tagline, quickLinks, expertise, contact, copyright } = content;
  const topbarSocials = site.topbar.socialLinks; // Use the same socials array as TopBar

  return (
    <footer className="footer">
      <div className="footer-deco" aria-hidden="true">
        <div className="footer-deco-dark" />
        <div className="footer-deco-red" />
        <div className="footer-deco-dots">
          {Array.from({ length: 32 }).map((_, i) => (
            <span key={i} className="footer-deco-dot" />
          ))}
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col footer-col--brand">
            <Link href={logo.href} className="footer-logo" aria-label="FixBolt">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-tagline">{tagline}</p>
            <span className="footer-brand-line" aria-hidden="true" />
            <div className="footer-bottom-socials" style={{ marginTop: '1.5rem', justifyContent: 'flex-start' }}>
              {topbarSocials.map((s: any, index: number) => (
                <a key={index} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-bottom-social-icon" aria-label={s.label}>
                  {SocialIcon[s.platform]}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">{quickLinks.heading}</h3>
            <ul className="footer-links-list">
              {quickLinks.links
                .filter((link) => link.label !== "Refund Policy")
                .map((link) => (
                  <li key={link.href} className="footer-link-item">
                    <Link href={link.href} className="footer-link">
                      <span className="footer-link-arrow" aria-hidden="true">&#8250;</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">{expertise.heading}</h3>
            <ul className="footer-expertise-list flex flex-col gap-3">
              {expertise.services.map((service) => {
                let href = "/services";
                if (service !== "And More") {
                  if (service === "Software Solutions") {
                    href = "/services/software-issues";
                  } else {
                    href = "/services/" + service.toLowerCase().replace(/\s+/g, "-");
                  }
                }
                return (
                  <li key={service} className="footer-expertise-item">
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-[#e51d25] transition-colors duration-300 block text-[15px]"
                    >
                      {service}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">{contact.heading}</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-icon"><LocationContactIcon /></span>
                <span>{contact.address}</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon"><PhoneContactIcon /></span>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="footer-contact-link">
                  {contact.phone}
                </a>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon"><MailContactIcon /></span>
                <div className="footer-contact-emails">
                  {contact.emails.map((em) => (
                    <a key={em} href={`mailto:${em}`} className="footer-contact-link footer-contact-link--block">
                      {em}
                    </a>
                  ))}
                </div>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon"><ClockIcon /></span>
                <div>
                  {contact.hours.map((h) => (
                    <p key={h} className="footer-hours-line">{h}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            &copy; {copyright.year}{" "}
            <Link href={copyright.brandHref} className="footer-brand-name">
              {copyright.brand}
            </Link>
            . {copyright.text}
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 mt-4 md:mt-0 text-[13px] md:text-sm text-gray-400">
            {[
              { label: "Warranty Policy", href: "/refund-policy" },
              { label: "Cancellation / Refund Policy", href: "/refund-policy" },
              { label: "Privacy Policy", href: "/refund-policy" },
              { label: "Terms & Conditions", href: "/refund-policy" },
              { label: "Site-Map", href: "/sitemap" },
            ].map((link, idx) => (
              <ScrollToTopLink key={idx} href={link.href} className="hover:text-[#e51d25] transition-colors">
                {link.label}
              </ScrollToTopLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
