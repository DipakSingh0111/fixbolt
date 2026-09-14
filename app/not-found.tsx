import React from 'react';
import Link from 'next/link';
import { site } from '@/data';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  const notFound = site.notFound;

  return (
    <div className="min-h-screen bg-white font-sans flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="site-container flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-6 max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
            {notFound.subtitle}
          </h2>
          
          <h1 className="text-8xl sm:text-[150px] font-extrabold text-[#d32f2f] leading-none tracking-tighter">
            {notFound.title}
          </h1>
          
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
              {notFound.heading}
            </h3>
            
            <div className="w-12 h-1 bg-[#d32f2f] rounded-full"></div>
            
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {notFound.description}
            </p>
          </div>
          
          <div className="pt-4">
            <Link href={notFound.cta.href}>
              <button className="inline-flex items-center justify-center space-x-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-8 py-3.5 rounded-lg text-sm font-bold transition shadow-md">
                <span>{notFound.cta.label}</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image/Illustration */}
        <div className="flex-1 relative w-full max-w-md md:max-w-none">
          {/* Decorative background blob/shape using a div */}
          <div className="absolute inset-0 bg-red-50 rounded-[40px] transform rotate-3 scale-105 -z-10"></div>
          
          <div className="relative bg-white p-4 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-red-50">
            <img 
              src={notFound.image} 
              alt="404 Illustration" 
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
