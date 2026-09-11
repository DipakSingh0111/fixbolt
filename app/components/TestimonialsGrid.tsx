import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import data from "@/data/data.json";

const { eyebrow, items: testimonials } = data.testimonials;

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

export default function TestimonialsGrid() {
  return (
    <section className="bg-white py-10 md:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center space-x-3">
            <span className="w-8 h-[1.5px] bg-[#e51d25]"></span>
            <span className="text-xs font-bold tracking-wider text-[#e51d25] uppercase">
              {eyebrow || "TESTIMONIALS"}
            </span>
            <span className="w-8 h-[1.5px] bg-[#e51d25]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3">
            What Our{" "}
            <span className="text-[#e51d25] relative inline-block">
              Customers
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#e51d25]"></span>
            </span>{" "}
            Say
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mt-4 leading-relaxed">
            Real stories from real customers who trust us with their devices.
            Quality service, honest prices, and reliable repairs every time.
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
                <div className="flex gap-1 pt-1">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#e51d25] text-[#e51d25]"
                    />
                  ))}
                </div>
              </div>

              {/* Review Text Body */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
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
                  <ShieldCheck size={16} className="text-[#e51d25] shrink-0" />
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
