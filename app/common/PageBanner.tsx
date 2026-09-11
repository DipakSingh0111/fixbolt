import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBannerProps = {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
};

export default function PageBanner({
  title,
  breadcrumbs,
  bgImage = "/images/Home_banner.png",
}: PageBannerProps) {
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: title },
  ];

  const crumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <div className="relative flex min-h-[200px] md:min-h-[300px] items-center justify-center overflow-hidden bg-gray-900 py-12 md:py-20 lg:min-h-[360px]">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        className="object-cover object-center opacity-40"
      />

      {/* Content */}
      <div className="site-container relative z-10 w-full">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm font-medium text-white/80 md:text-base">
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
        </nav>
      </div>
    </div>
  );
}
