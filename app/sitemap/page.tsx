import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { site } from "@/data";
import { ChevronRight } from 'lucide-react';
import PageBanner from "../common/PageBanner";

export const metadata: Metadata = {
  title: "Sitemap | FixBolt",
};

export default function SitemapPage() {
  const { categories } = site.sitemap;
  
  const sitemapGroups = (categories ?? [])
    .map(group => ({
      ...group,
      links: group.links.filter((link: any) => link.href !== "#")
    }))
    .filter(group => group.links.length > 0);

  return (
    <div className="font-sans min-h-screen bg-[#fafafa]">
      <PageBanner title="Sitemap" />

      {/* Sitemap Grid */}
      <section className="site-container py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sitemapGroups.map((group) => (
            <div 
              key={group.id} 
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow"
            >
              <h3 className="text-[17px] font-bold text-[#111111] mb-6 pb-4 border-b border-gray-100 flex items-center">
                <span className="text-[#e51d25] mr-2">{group.title.split('.')[0]}.</span>
                {group.title.split('.').slice(1).join('.').trim()}
              </h3>
              
              <ul className="space-y-4">
                {group.links.map((link: any, idx: number) => (
                  <li key={idx}>
                    <Link 
                      href={link.href}
                      className="group flex items-center text-base font-medium text-gray-600 hover:text-[#e51d25] transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-[#e51d25] mr-2 transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
