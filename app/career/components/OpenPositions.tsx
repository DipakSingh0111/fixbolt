import React from "react";
import Link from "next/link";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

export default function OpenPositions({ openPositions }: { openPositions: any }) {
  return (
    <section className="site-container mb-10 md:mb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-[#111111] mb-2">
            {openPositions.title}
          </h2>
          <p className="text-sm text-gray-500 whitespace-pre-line">
            {openPositions.description}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {openPositions.jobs.map((job: any, index: number) => (
          <Link
            href={`/career/${job.slug}`}
            key={index}
            className="bg-white border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-red-100 hover:shadow-lg transition-all group block cursor-pointer"
          >
            <div className="flex items-start gap-4 w-full md:w-auto">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e51d25] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  {job.title}
                </h3>
                <p className="text-xs text-gray-500">{job.experience}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 w-full md:w-auto mt-4 md:mt-0 ml-16 md:ml-0">
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <MapPin className="w-4 h-4 text-gray-400" />
                {job.location}
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Briefcase className="w-4 h-4 text-gray-400" />
                {job.type}
              </div>
              <button className="text-[#e51d25] border border-[#e51d25] hover:bg-[#e51d25] hover:text-white text-xs font-bold py-2 px-6 rounded-lg transition ml-auto sm:ml-0 flex items-center gap-2">
                {openPositions.applyLabel || "Apply Now"}
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
