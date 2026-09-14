import PageBanner from "@/app/common/PageBanner";
import data from "@/data/data.json";
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
  Users
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CareerDetailsPage({ params }: Props) {
  const { slug } = await params;
  
  // Find the requested job
  const job = data.career.openPositions.jobs.find((j: any) => j.slug === slug);

  if (!job) {
    notFound();
  }

  const detail = data.career.jobDetail;
  const { applyForm } = detail;

  return (
    <main className="bg-[#fbfbfb] min-h-screen font-sans pb-12">
      <PageBanner 
        title={data.pages.careerDetail.bannerTitle} 
        breadcrumbs={[
          { label: data.pageBanner.homeLabel, href: "/" },
          { label: data.pages.careerDetail.bannerTitle }
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
                  const OfferIcon = { IndianRupee, GraduationCap, HeartPulse, Users }[offer.icon] ?? Users;
                  return (
                    <div key={offer.title} className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                      <div className="w-12 h-12 bg-red-50 text-[#cc1616] rounded-full flex items-center justify-center mb-3">
                        <OfferIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-gray-900 mb-2">{offer.title}</h4>
                      <p className="text-[10px] text-gray-500 leading-relaxed">{offer.description}</p>
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
                    {applyForm.experienceOptions.map((opt) => (
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
                  <Link2 className="w-4 h-4 fill-current" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#cc1616] text-white flex items-center justify-center hover:bg-[#a51212] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#cc1616] text-white flex items-center justify-center hover:bg-[#a51212] transition-colors">
                  <MailIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
