import React from 'react';
import Link from 'next/link';
import data from '@/data/data.json';
import { ChevronRight } from 'lucide-react';

export default function SitemapPage() {
  const { sitemapPage } = data;
  const { hero, groups } = sitemapPage;

  return (
    <div className="font-sans min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] flex items-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${hero.bgImage}')` }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-left">{hero.title}</h1>
          <p className="text-sm font-medium flex items-center text-gray-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">{hero.title}</span>
          </p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <div 
              key={group.id} 
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow"
            >
              <h3 className="text-[17px] font-bold text-[#111111] mb-6 pb-4 border-b border-gray-100 flex items-center">
                <span className="text-[#e51d25] mr-2">{group.title.split('.')[0]}.</span>
                {group.title.split('.').slice(1).join('.').trim()}
              </h3>
              
              <ul className="space-y-4">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.href}
                      className="group flex items-center text-sm font-medium text-gray-600 hover:text-[#e51d25] transition-colors"
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
