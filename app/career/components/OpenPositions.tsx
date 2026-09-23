import React from "react";
import Link from "next/link";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

import { CareerData } from "@/data";

export default function OpenPositions({ openPositions }: { openPositions: CareerData['openPositions'] }) {
  return (
    <section className="site-container pt-10 md:pt-16 pb-2 md:pb-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-[#111111] mb-2">
            {openPositions.title}
          </h2>
          <p className="text-base text-gray-500 whitespace-pre-line">
            {openPositions.description}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {openPositions.jobs.map((job: any, index: number) => (
          <Link
            href={`/career/${job.slug}`}
            key={index}
            className="bg-white border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 hover:border-red-100 hover:shadow-lg transition-all group block cursor-pointer overflow-hidden"
          >
            <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 text-[#e51d25] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 break-words">
                  {job.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">{job.experience}</p>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-6 md:gap-8 w-full md:w-auto md:shrink-0 pl-0 sm:pl-14 md:pl-0">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>{job.type}</span>
                </div>
              </div>
              <span className="inline-flex w-full sm:w-auto justify-center items-center gap-2 text-[#e51d25] border border-[#e51d25] group-hover:bg-[#e51d25] group-hover:text-white text-xs sm:text-sm font-bold py-2.5 px-4 sm:px-6 rounded-lg transition whitespace-nowrap">
                {openPositions.applyLabel || "Apply Now"}
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
