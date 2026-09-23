"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { site, SectionProps, PageBannerData } from "@/data";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBannerProps = SectionProps<PageBannerData> & {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
};

export default function PageBanner({
  title,
  breadcrumbs,
  bgImage,
  data,
  className,
}: PageBannerProps) {
  const content = data || site.pageBanner;

  const finalBgImage =
    bgImage || content.backgroundImage || "/images/page_banner_01.webp";

  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: content.homeLabel, href: "/" },
    { label: title },
  ];

  const crumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <div className="relative flex min-h-[200px] md:min-h-[300px] items-center justify-center overflow-hidden bg-gray-900 py-12 md:py-20 lg:min-h-[360px]">
      {/* Background Image */}
      {finalBgImage && (
        <Image
          src={finalBgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
      )}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content */}
      <div className="site-container relative z-10 w-full">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl capitalize">
          {title}
        </h1>

        <nav aria-label="Breadcrumb" className="max-w-full">
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm font-medium text-white/80 sm:text-base capitalize">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;

              return (
                <li
                  key={index}
                  className="inline-flex max-w-full items-center gap-1.5"
                >
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="whitespace-nowrap transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      className={`text-white ${isLast ? "break-words" : "whitespace-nowrap"}`}
                      aria-current="page"
                    >
                      {crumb.label}
                    </span>
                  )}

                  {!isLast && (
                    <ChevronRight
                      className="h-3.5 w-3.5 shrink-0 text-white/60 sm:h-4 sm:w-4"
                      aria-hidden
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
