"use client";

import { MessageSquare, Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import data from "@/data/data.json";

// Swiper Styles Import
import "swiper/css";
import "swiper/css/pagination";

const { eyebrow, title, description, bgImage, items: testimonials } = data.testimonials;


export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-[#0d0e12] text-white py-20 px-4 md:px-8 overflow-hidden">
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

      {/* Top Header Section */}
      <div className="relative z-10 max-w-[1280px] mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-red-500 mb-2">
          <MessageSquare size={18} className="text-red-500" />
          <span>{eyebrow}</span>
        </div>
        <div className="w-10 h-[2px] bg-red-600 mx-auto mt-1 mb-4" />

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          {title.split('Customers Say')[0]}<span className="text-red-600">Customers Say</span>
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
          {description}
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto pb-12">
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
          // Flex stretch force setup: Swiper wrapper ko full height items me stretch karta hai
          className="w-full !pb-4 ![&_.swiper-wrapper]:items-stretch"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto flex">
              {/* Fixed Equal Height Card Container (h-[320px] for identical height) */}
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

        {/* Custom Red Pagination Dots */}
        <div className="custom-swiper-pagination flex justify-center items-center gap-2 mt-8 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-40 [&_.swiper-pagination-bullet-active]:!bg-red-600 [&_.swiper-pagination-bullet-active]:!w-4 [&_.swiper-pagination-bullet-active]:!h-4 [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet-active]:border-2 [&_.swiper-pagination-bullet-active]:border-red-500 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 cursor-pointer" />
      </div>
    </section>
  );
}
