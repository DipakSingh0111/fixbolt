import React from 'react';
import Link from 'next/link';
import data from '@/data/data.json';
import {
  Users,
  TrendingUp,
  ShieldCheck,
  Heart,
  GraduationCap,
  HandCoins,
  Activity,
  CalendarDays,
  Award,
  Briefcase,
  MapPin,
  Send,
  ArrowRight,
  HeartPulse,
  CalendarPlus,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Users,
  TrendingUp,
  ShieldCheck,
  Heart,
  GraduationCap,
  HandCoins,
  Activity,
  CalendarDays,
  Award,
  Briefcase,
  MapPin,
  Send,
  HeartPulse,
  CalendarPlus,
};

export default function CareerPage() {
  const { career } = data;
  const { hero, buildFuture, whyJoin, openPositions, bottomCta } = career;

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] flex items-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${hero.bgImage}')` }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-left">{hero.title}</h1>
          <p className="text-sm font-medium flex items-center text-gray-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">{hero.title}</span>
          </p>
        </div>
      </section>

      {/* Build Your Future Section */}
      <section className="pt-10 md:pt-16 lg:pt-24 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <div className="flex-1 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xs font-bold tracking-wider text-[#e51d25] uppercase">{buildFuture.eyebrow}</span>
                <span className="w-8 h-[1.5px] bg-[#e51d25]"></span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111111] leading-tight">
                {buildFuture.title.map((t, idx) => (
                  <React.Fragment key={idx}>
                    {t.accent ? <span className="text-[#e51d25]">{t.text}</span> : t.text}
                    {idx === 0 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-gray-500 mt-6 leading-relaxed max-w-lg text-sm sm:text-base">
                {buildFuture.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              {buildFuture.features.map((feature, idx) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div key={idx}>
                    {Icon && <Icon className="w-6 h-6 text-[#e51d25] mb-3" />}
                    <h4 className="text-sm font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative rounded-bl-[100px] overflow-hidden shadow-2xl">
              <img 
                src={buildFuture.image}
                alt="FixBolt Technician" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="text-white text-3xl font-bold mb-1">Fix<span className="text-[#e51d25]">Bolt</span></div>
                <p className="text-gray-300 text-xs tracking-wider">Repair. Restore. Relieve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join FixBolt Section */}
      <section className="bg-[#fffafa] pt-4 sm:pt-6 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-[1400px] mb-10 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-4">{whyJoin.title}</h2>
          <div className="w-10 h-[2px] bg-[#e51d25] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {whyJoin.perks.map((perk, idx) => {
            const Icon = iconMap[perk.icon];
            return (
              <div key={idx} className="flex flex-col items-center text-center px-4 sm:px-6 py-6 sm:py-0">
                <div className="flex items-center justify-center mb-5 text-[#cc1616]">
                  {Icon && <Icon strokeWidth={1.5} className="w-11 h-11" />}
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-3 leading-tight">{perk.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed max-w-[180px]">{perk.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#111111] mb-2">{openPositions.title}</h2>
            <p className="text-sm text-gray-500 whitespace-pre-line">{openPositions.description}</p>
          </div>
          <Link href={openPositions.cta.href}>
            <button className="bg-[#cc1616] hover:bg-[#a51212] text-white text-xs font-bold py-3 px-6 rounded-lg transition shadow-md flex items-center gap-2">
              {openPositions.cta.label}
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <div className="space-y-4">
          {openPositions.jobs.map((job: any, index: number) => (
            <Link href={`/career/${job.slug}`} key={index} className="bg-white border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-red-100 hover:shadow-lg transition-all group block cursor-pointer">
              <div className="flex items-start gap-4 w-full md:w-auto">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e51d25] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{job.title}</h3>
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
                  Apply Now
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-20">
        <div className="bg-[#111111] rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Background Image overlay */}
          <div 
            className="absolute inset-0 opacity-[0.25] bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: `url('${bottomCta.bgImage}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          
          <div className="relative z-10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6 max-w-xl">
              <div className="w-16 h-16 rounded-full bg-[#e51d25] flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30">
                <Send className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{bottomCta.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                  {bottomCta.description}
                </p>
                <Link href={bottomCta.cta.href}>
                  <button className="bg-[#cc1616] hover:bg-[#a51212] text-white text-xs font-bold py-3 px-6 rounded-lg transition shadow-md inline-flex items-center gap-2">
                    {bottomCta.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="transform rotate-[-10deg] opacity-80 border-2 border-red-500/20 p-6 rounded-xl backdrop-blur-sm bg-black/20">
                <h1 className="text-5xl font-bold text-white">Fix<span className="text-[#e51d25]">Bolt</span></h1>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
