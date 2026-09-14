import React from 'react';
import Link from 'next/link';
import data from '@/data/data.json';

export default function RefundPolicyPage() {
  const { refundPolicy } = data;
  const { hero, sections } = refundPolicy;

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] flex items-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${hero.bgImage}')` }}
        ></div>
        <div className="site-container relative z-10 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-left">{hero.title}</h1>
          <p className="text-sm font-medium flex items-center text-gray-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">{hero.title}</span>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="site-container py-16 sm:py-20">
        <div className="space-y-12 text-[#111111]">
          {sections.map((section) => (
            <div key={section.id} className="space-y-4">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <div className="space-y-3">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-[15px] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
