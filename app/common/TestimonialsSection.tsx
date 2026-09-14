"use client";

import { MessageSquare, Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import data from "@/data/data.json";

// Swiper Styles Import
import "swiper/css";
import "swiper/css/pagination";

const {
  eyebrow,
  title,
  description,
  bgImage,
  items: testimonials,
} = data.testimonials;

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

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-[#0d0e12] text-white pt-12 pb-6 md:pt-16 md:pb-8 px-4 md:px-8 overflow-hidden">
      {/* Background Dark Overlay Image Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />

      {/* Top Left & Bottom Corner Red Decorative Badges */}
      <div className="absolute -top-16 -left-16 w-36 h-36 bg-red-600 rotate-45 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-red-600 rotate-45 pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Top Header Section */}
        <motion.div variants={fadeInUp} className="site-container relative z-10 text-center mb-8 md:mb-12">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Top icon with grey lines */}
            <div className="flex items-center justify-center gap-6 mb-3">
              <div className="hidden sm:block w-20 h-[1px] bg-white/20" />
              <div className="text-[#c90f16] flex items-center justify-center">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M42 22c0-5.5-5-10-12-10s-12 4.5-12 10c0 2 .6 3.8 1.5 5.2L18 30l4.5-1.5c2 1.2 4.5 1.8 7.5 1.8 7 0 12-4.5 12-10z" stroke="#666" strokeWidth="2" strokeDasharray="3 3"/>
                  <path d="M46 36c0 6.6-6 12-14 12-3.5 0-6.6-1-8.8-2.5L16 48l2.2-5c-2-2-3.2-4.8-3.2-8 0-7.7 6.7-14 15-14s16 6.3 16 14z" />
                  <path d="M25 32v2M33 32v2" />
                  <path d="M25 38c0 2 2 3 4 3s4-1 4-3" />
                </svg>
              </div>
              <div className="hidden sm:block w-20 h-[1px] bg-white/20" />
            </div>
            
            {/* == TESTIMONIALS == */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="w-8 h-[2px] bg-[#c90f16]" />
                <div className="w-8 h-[2px] bg-[#c90f16]" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c90f16]">
                {eyebrow}
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="w-8 h-[2px] bg-[#c90f16]" />
                <div className="w-8 h-[2px] bg-[#c90f16]" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-[44px] font-extrabold text-white mb-6 tracking-tight">
            {title.split("Customers")[0]}
            <span className="text-[#c90f16]">Customers</span>
            {title.split("Customers")[1]}
          </h2>

          {/* Decorative bottom line */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-14 h-[4px] bg-[#c90f16] rounded-full" />
          </div>

          <p className="site-container text-gray-400 text-sm md:text-[15px] font-normal leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div variants={fadeInUp} className="site-container relative z-10 pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full !pb-4 ![&_.swiper-wrapper]:items-stretch"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <div className="bg-white text-black rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full h-[320px]">
                  <div>
                    {/* Star Rating Bar */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-red-600 text-red-600"
                        />
                      ))}
                    </div>

                    {/* Quote Marks Top Bar */}
                    <div className="flex justify-between items-center text-red-500/30 mb-2">
                      <Quote
                        size={28}
                        className="rotate-180 fill-red-500 text-red-500"
                      />
                      <Quote size={28} className="fill-red-500 text-red-500" />
                    </div>

                    {/* Review Text Body (line-clamp-4 keeps height fixed) */}
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-normal line-clamp-4">
                      {item.review}
                    </p>
                  </div>

                  {/* Bottom Customer Info (Locked at bottom) */}
                  <div className="pt-3 border-t border-gray-100 flex items-center gap-4 mt-auto">
                    {/* Circular Avatar with Floating Red Quote Badge */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-red-500 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white text-[8px]">
                        <Quote size={8} className="fill-white" />
                      </div>
                    </div>

                    {/* Name & Subtitle */}
                    <div>
                      <h3 className="text-base font-bold text-black leading-tight">
                        {item.name}
                      </h3>
                      <div className="w-5 h-[2px] bg-red-600 my-1" />
                      <p className="text-gray-500 text-xs font-medium">
                        {item.service}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-pagination flex justify-center items-center gap-2 mt-6 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-40 [&_.swiper-pagination-bullet-active]:!bg-red-600 [&_.swiper-pagination-bullet-active]:!w-4 [&_.swiper-pagination-bullet-active]:!h-4 [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet-active]:border-2 [&_.swiper-pagination-bullet-active]:border-red-500 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 cursor-pointer" />
        </motion.div>
      </motion.div>
    </section>
  );
}
