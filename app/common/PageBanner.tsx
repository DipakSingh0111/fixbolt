"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  className
}: PageBannerProps) {
  const content = data || site.pageBanner;
  
  const finalBgImage =
    bgImage || content.backgroundImage || "/images/page_banner.jpg";

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
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl capitalize"
        >
          {title}
        </motion.h1>

        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2 text-sm font-medium text-white/80 md:text-base capitalize">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;

              return (
                <li key={index} className="flex items-center">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white" aria-current="page">
                      {crumb.label}
                    </span>
                  )}

                  {!isLast && (
                    <ChevronRight className="mx-2 h-4 w-4 text-white/60" />
                  )}
                </li>
              );
            })}
          </ol>
        </motion.nav>
      </div>
    </div>
  );
}
