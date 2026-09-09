"use client";

import { Edit3, ArrowRight } from "lucide-react";
import data from "@/data/data.json";

const { eyebrow, title, description, posts: blogPosts } = data.blog;


export default function BlogSection() {
  return (
    <section className="bg-[#f8f9fa] py-20 px-4 md:px-8 relative overflow-hidden text-center">
      {/* Background Decorative Circuit/Dot Grid Accents */}
      <div className="absolute top-6 left-6 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-red-600 rounded-full" />
          ))}
        </div>
      </div>
      <div className="absolute top-6 right-6 opacity-20 pointer-events-none hidden md:block">
        <div className="w-24 h-24 border-r-2 border-t-2 border-dashed border-gray-400" />
      </div>

      {/* Header Section */}
      <div className="max-w-[1280px] mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-red-600 mb-2">
          <Edit3 size={18} className="text-red-600" />
          <span>{eyebrow}</span>
        </div>
        <div className="w-8 h-[2px] bg-red-600 mx-auto mt-1 mb-4" />

        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
          {title.split('Our Blog')[0]}<span className="text-red-600">Our Blog</span>
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* 4 Cards Grid Container */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100"
          >
            <div>
              {/* Image Container with Floating Red Date Badge */}
              <div className="relative h-52 w-full overflow-hidden bg-gray-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Top-Left Date Badge */}
                <div className="absolute top-3 left-3 bg-red-600 text-white rounded-xl px-3 py-1.5 text-center shadow-md border border-red-500">
                  <span className="block text-base font-extrabold leading-none">
                    {post.date}
                  </span>
                  <span className="block text-[9px] font-semibold tracking-wider mt-0.5 opacity-90">
                    {post.monthYear}
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-5">
                {/* Category with Red Line Accent */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-[2px] bg-red-600 inline-block" />
                  <span className="text-[11px] font-bold text-red-600 tracking-wider uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="text-base font-bold text-black group-hover:text-red-600 transition-colors duration-200 mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>

                {/* Post Description Short Teaser */}
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>
            </div>

            {/* Read More Bottom Action Link */}
            <div className="px-5 pb-5 pt-0">
              <a
                href={post.slug}
                className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 transition-all duration-200 uppercase tracking-wider group-hover:translate-x-1"
              >
                <span>READ MORE</span>
                <ArrowRight size={14} className="stroke-[2.5]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
