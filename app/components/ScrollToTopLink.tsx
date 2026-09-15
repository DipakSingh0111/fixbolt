"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function ScrollToTopLink({ href, className, children }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {children}
    </Link>
  );
}
