"use client";

import { Edit3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { site, SectionProps, BlogData } from "@/data";
import Link from "next/link";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

type BlogSectionProps = SectionProps<BlogData> & {
  category?: string;
  limit?: number;
};

export default function BlogSection({ category, limit, data, className }: BlogSectionProps) {
  const content = data || site.blog;
  const { eyebrow, tagline, title, description, posts: blogPosts = [] } = content;

  let filteredPosts = category 
    ? blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
    : blogPosts;

  if (limit) {
    filteredPosts = filteredPosts.slice(0, limit);
  }

  return (
    <section className="bg-[#f8f9fa] pt-10 pb-10 md:pt-12 md:pb-12 relative overflow-hidden text-center">
      {/* Background Decorative Circuit/Dot Grid Accents */}
      <div className="absolute top-10 left-10 pointer-events-none hidden md:block">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#c90f16] rounded-full" />
          ))}
        </div>
      </div>
      <div className="absolute top-6 right-6 opacity-20 pointer-events-none hidden md:block">
        <div className="w-24 h-24 border-r-2 border-t-2 border-dashed border-gray-400" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="site-container relative z-10 text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 h-[2px] bg-[#c90f16]" />
            <div className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-[0.08em] text-[#c90f16]">
              <Edit3 size={32} className="text-[#c90f16]" />
              <span>{eyebrow || tagline}</span>
            </div>
            <div className="w-10 h-[2px] bg-[#c90f16]" />
          </div>

          <h2 className="text-[32px] sm:text-4xl md:text-[44px] font-extrabold text-[#111] mb-6 tracking-tight leading-[1.15]">
            {title.split('Our Blog')[0]}<span className="text-[#c90f16]">Our Blog</span>
          </h2>

          <div className="flex items-center justify-center gap-1.5 mb-7">
            <div className="w-12 h-[3px] bg-[#c90f16] rounded-full" />
            <div className="w-2 h-[3px] bg-[#c90f16] rounded-full" />
          </div>

          <p className="max-w-[600px] mx-auto text-gray-500 text-[14px] md:text-[15px] leading-relaxed mb-6 font-medium">
            {description}
          </p>

          {category && (
            <div className="inline-flex items-center gap-3 bg-red-50 text-[#c90f16] px-4 py-2 rounded-full border border-red-100">
              <span className="font-bold text-base">Category: {category}</span>
              <Link href="/blog" className="text-gray-400 hover:text-[#c90f16] transition-colors" title="Clear filter">
                &times;
              </Link>
            </div>
          )}
        </motion.div>

        {/* 4 Cards Grid Container */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No posts found in this category.
          </div>
        ) : (
          <motion.div variants={fadeInUp} className="site-container relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {filteredPosts.map((post: any) => (
            <motion.div
              variants={fadeInUp}
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full cursor-pointer">
                <div>
                  {/* Image Container with Floating Red Date Badge */}
                  <div className="relative h-[220px] w-full overflow-hidden bg-gray-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Floating Top-Left Date Badge */}
                    <div className="absolute top-4 left-4 bg-[#c90f16] text-white rounded-lg px-2.5 py-2 text-center shadow-md min-w-[48px]">
                      <span className="block text-xl font-bold leading-none mb-1">
                        {post.date}
                      </span>
                      <span className="block text-[10px] font-semibold uppercase leading-tight">
                        {post.monthYear.split(' ')[0]}
                        <br />
                        {post.monthYear.split(' ')[1]}
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
                    <p className="text-gray-500 text-base leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Read More Bottom Action Link */}
                <div className="px-5 pb-5 pt-0 mt-auto">
                  <span
                    className="inline-flex items-center gap-2 text-base font-bold text-red-600 group-hover:text-red-700 transition-all duration-200 uppercase tracking-wider group-hover:translate-x-1"
                  >
                    <span>READ MORE</span>
                    <ArrowRight size={32} className="stroke-[2.5]" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        )}
      </motion.div>
    </section>
  );
}
