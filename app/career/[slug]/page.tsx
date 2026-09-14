import PageBanner from "@/app/common/PageBanner";
import { site } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  Briefcase, 
  MapPin, 
  Clock, 
  Banknote, 
  CheckCircle2, 
  ArrowRight,
  User,
  Mail,
  Phone,
  UploadCloud,
  Link2,
  MessageCircle, // WhatsApp
  Mail as MailIcon,
  IndianRupee,
  GraduationCap,
  HeartPulse,
  Users,
} from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.5 9H3.8v11H6.5V9ZM5.2 4C4.2 4 3.4 4.8 3.4 5.8S4.2 7.6 5.2 7.6 6.9 6.8 6.9 5.8 6.1 4 5.2 4ZM20.2 13.3c0-3.1-1.6-4.6-3.9-4.6-1.8 0-2.6 1-3.1 1.7V9H10.6c0 1.1 0 11 0 11h2.7v-6.1c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V20h2.8v-6.7Z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.2 3H21l-6.5 7.4L22 21h-6.2l-4.8-6.3L5.7 21H3l7-7.9L2.2 3h6.3l4.4 5.8L18.2 3Zm-1.1 16.2h1.7L7 4.7H5.2l11.9 14.5Z" />
    </svg>
  );
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CareerDetailsPage({ params }: Props) {
  const { slug } = await params;
  
  // Find the requested job
  const job = site.career.openPositions.jobs.find((j: any) => j.slug === slug);

  if (!job) {
    notFound();
  }

  const detail = site.jobDetail.shared;
  const { applyForm } = detail;

  return (
    <main className="bg-[#fbfbfb] min-h-screen font-sans pb-12">
      <PageBanner 
        title={site.pages['careers-detail'].bannerTitle} 
        breadcrumbs={[
          { label: site.pageBanner.homeLabel, href: "/" },
          { label: site.pages.careers.bannerTitle, href: "/career" },
        ]} 
      />

      <div className="site-container mt-8 md:mt-12">
        
        {/* Back Link */}
        <Link href="/career" className="inline-flex items-center gap-2 text-sm font-bold text-[#cc1616] hover:text-[#a51212] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {detail.backLabel}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* LEFT MAIN CONTENT */}
          <div className="lg:col-span-8">
            
            {/* Job Header */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-20 h-20 bg-[#cc1616] rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                  <Briefcase className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{job.title}</h1>
                  <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#cc1616]" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#cc1616]" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#cc1616]" />
                      {job.experience}
                    </div>
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-[#cc1616]" />
                      {job.salary || detail.salaryFallback}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About & Overview */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8 space-y-8">
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{detail.aboutTitle}</h3>
                <div className="w-8 h-[2px] bg-[#cc1616] mb-4"></div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {detail.aboutText}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{detail.overviewTitle}</h3>
                <div className="w-8 h-[2px] bg-[#cc1616] mb-4"></div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {detail.overviewText.replace("{jobTitle}", job.title)}
                </p>
              </div>

            </div>

            {/* Responsibilities & Requirements */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8 space-y-8">
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{detail.responsibilitiesTitle}</h3>
                <div className="w-8 h-[2px] bg-[#cc1616] mb-6"></div>
                <ul className="space-y-4">
                  {detail.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#cc1616] shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{detail.requirementsTitle}</h3>
                <div className="w-8 h-[2px] bg-[#cc1616] mb-6"></div>
                <ul className="space-y-4">
                  {detail.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#cc1616] shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* What We Offer */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{detail.offerTitle}</h3>
              <div className="w-8 h-[2px] bg-[#cc1616] mb-8"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {detail.offers.map((offer) => {
                  const offerIcons = { IndianRupee, GraduationCap, HeartPulse, Users } as const;
                  const OfferIcon = offerIcons[offer.icon as keyof typeof offerIcons] ?? Users;
                  return (
                    <div key={offer.title} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl bg-white shadow-sm h-full hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-red-50 text-[#cc1616] rounded-full flex items-center justify-center mb-4 shadow-[0_0_0_6px_rgba(204,22,22,0.05)] ring-1 ring-red-100">
                        <OfferIcon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-2">{offer.title}</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{offer.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Apply Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">{applyForm.title}</h3>
              <div className="w-8 h-[2px] bg-[#cc1616] mb-6"></div>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                {applyForm.description}
              </p>
              
              <form className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                  <input type="text" placeholder={applyForm.placeholders.name} className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                  <input type="email" placeholder={applyForm.placeholders.email} className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="w-4 h-4 text-gray-400" />
                  </div>
                  <input type="tel" placeholder={applyForm.placeholders.phone} className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                </div>

                <div className="relative">
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
                    <option value="">{applyForm.placeholders.experience}</option>
                    {applyForm.experienceOptions.map((opt: any) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-bold text-gray-700 mb-2">{applyForm.resumeLabel}</p>
                  <div className="border-2 border-dashed border-red-200 bg-red-50/50 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-red-50 transition-colors cursor-pointer group">
                    <UploadCloud className="w-8 h-8 text-[#cc1616] mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-gray-900 mb-1">{applyForm.resumeHint}</span>
                    <span className="text-[10px] text-gray-500">{applyForm.resumeMaxSize}</span>
                  </div>
                </div>

                <button type="button" className="w-full bg-[#cc1616] hover:bg-[#a51212] text-white font-bold py-4 px-4 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm mt-4">
                  {applyForm.submitLabel}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Job Summary */}
            <div className="bg-[#fff5f5] rounded-2xl shadow-sm border border-red-50 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{detail.summaryTitle}</h3>
              <div className="w-8 h-[2px] bg-[#cc1616] mb-6"></div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Briefcase className="w-4 h-4 text-[#cc1616] shrink-0 mt-0.5" />
                  <div className="grid grid-cols-2 w-full gap-2">
                    <span className="text-xs font-bold text-gray-900">{detail.summaryLabels.jobTitle}</span>
                    <span className="text-xs text-gray-600">{job.title}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-4 h-4 text-[#cc1616] shrink-0 mt-0.5" />
                  <div className="grid grid-cols-2 w-full gap-2">
                    <span className="text-xs font-bold text-gray-900">{detail.summaryLabels.location}</span>
                    <span className="text-xs text-gray-600">{job.location}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Briefcase className="w-4 h-4 text-[#cc1616] shrink-0 mt-0.5" />
                  <div className="grid grid-cols-2 w-full gap-2">
                    <span className="text-xs font-bold text-gray-900">{detail.summaryLabels.jobType}</span>
                    <span className="text-xs text-gray-600">{job.type}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-4 h-4 text-[#cc1616] shrink-0 mt-0.5" />
                  <div className="grid grid-cols-2 w-full gap-2">
                    <span className="text-xs font-bold text-gray-900">{detail.summaryLabels.experience}</span>
                    <span className="text-xs text-gray-600">{job.experience}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Banknote className="w-4 h-4 text-[#cc1616] shrink-0 mt-0.5" />
                  <div className="grid grid-cols-2 w-full gap-2">
                    <span className="text-xs font-bold text-gray-900">{detail.summaryLabels.salary}</span>
                    <span className="text-xs text-gray-600">{job.salary || detail.salaryFallback}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share This Job */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{detail.shareTitle}</h3>
              <div className="w-8 h-[2px] bg-[#cc1616] mb-4"></div>
              <p className="text-xs text-gray-500 mb-6">{detail.shareDescription}</p>
              
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-[#cc1616] text-white flex items-center justify-center hover:bg-[#a51212] transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#cc1616] text-white flex items-center justify-center hover:bg-[#a51212] transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#cc1616] text-white flex items-center justify-center hover:bg-[#a51212] transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#cc1616] text-white flex items-center justify-center hover:bg-[#a51212] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#cc1616] text-white flex items-center justify-center hover:bg-[#a51212] transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
