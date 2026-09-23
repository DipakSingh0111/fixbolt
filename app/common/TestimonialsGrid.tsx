import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import { site, SectionProps, TestimonialData } from "@/data";


// A custom SVG for the big red quote marks
function QuoteIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="#e51d25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
    </svg>
  );
}

export default function TestimonialsGrid({ data, className }: SectionProps<TestimonialData> = {}) {
  const content = data || site.testimonial;
  const { eyebrow, tagline, title, description, items: testimonials } = content;
  return (
    <section className="bg-white py-10 md:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center space-x-3">
            <span className="w-8 h-[1.5px] bg-[#e51d25]"></span>
            <span className="text-base font-bold tracking-wider text-[#e51d25] uppercase">
              {eyebrow || tagline}
            </span>
            <span className="w-8 h-[1.5px] bg-[#e51d25]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3">
            {title.split(content.titleHighlight)[0]}
            <span className="text-[#e51d25] relative inline-block">
              {content.titleHighlight}
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#e51d25]"></span>
            </span>{" "}
            {title.split(content.titleHighlight)[1]}
          </h2>
          <p className="site-container text-gray-500 text-base mt-4 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              {/* Top Row: Quotes & Stars */}
              <div className="flex justify-between items-start mb-5">
                <QuoteIcon />

              </div>

              {/* Review Text Body */}
              <p className="text-gray-600 text-base sm:text-base leading-relaxed mb-6 flex-1">
                {item.review}
              </p>

              {/* Bottom Customer Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                {/* Avatar & Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-gray-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      {item.service || "Customer"}
                    </p>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={32} className="text-[#e51d25] shrink-0" />
                  <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-bold leading-tight">
                    Verified<br />Customer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
