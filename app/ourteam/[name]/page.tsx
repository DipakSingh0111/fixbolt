import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, CalendarDays, Award, Smartphone, Users, ShieldCheck, PhoneCall } from "lucide-react";
import { site } from "@/data";
import PageBanner from "@/app/common/PageBanner";

const iconMap: Record<string, any> = {
  Award,
  Smartphone,
  Users,
  ShieldCheck,
  Mail,
  PhoneCall: Phone,
  MapPin,
  CalendarDays
};

export default async function TeamDetailsPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = await params;
  
  // Find member by comparing hyphenated names (e.g. "rahul-verma" === "rahul-verma")
  const member = site.team.members.find(
    (m: any) => m.name.toLowerCase().replace(/\s+/g, '-') === resolvedParams.name
  );

  if (!member) {
    notFound();
  }

  const { ctaBanner, shared } = site.teamDetail;
  
  const stats = shared.stats;
  const skills = shared.skills;
  const contact = {
    email: `${member.name.split(" ")[0].toLowerCase()}@fixbolt.com`,
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    experience: "5+ Years"
  };

  return (
    <>
      <PageBanner
        title={member.name}
        breadcrumbs={[
          { label: site.pageBanner.homeLabel, href: "/" },
          { label: site.pages['our-team'].bannerTitle, href: "/ourteam" },
          { label: member.name }
        ]}
      />

      <main className="bg-[#fcfcfc] pt-10 md:pt-16 lg:pt-20 pb-6 md:pb-8 px-5">
        <div className="site-container">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[500px_1fr] xl:grid-cols-[560px_1fr] gap-8 lg:gap-16 items-start mb-10 md:mb-20">
            
            {/* Left Column (Image & Stats) */}
            <div className="w-full">
              {/* Member Image */}
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-t-3xl overflow-hidden shadow-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Black Stats Ribbon */}
              <div className="bg-[#161616] rounded-b-3xl py-3 sm:py-4 px-1.5 sm:px-2 grid grid-cols-2 lg:grid-cols-4 shadow-2xl relative z-10 -mt-2">
                {stats.map((stat: any, i: number) => {
                  const StatIcon = iconMap[stat.icon] || Award;
                  return (
                    <div
                      key={i}
                      className={`flex flex-col items-center justify-center gap-1.5 text-center py-3 px-1.5 sm:px-2 min-w-0 ${
                        i % 2 === 0 ? "max-lg:border-r max-lg:border-white/10" : ""
                      } ${
                        i < 2 ? "max-lg:border-b max-lg:border-white/10" : ""
                      } ${
                        i < stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
                      }`}
                    >
                      <StatIcon
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white/80 shrink-0"
                        strokeWidth={1.5}
                      />
                      <div className="flex flex-col min-w-0 w-full">
                        <span className="text-red-600 font-bold text-[13px] sm:text-[15px] leading-tight">
                          {stat.value}
                        </span>
                        <span className="text-white text-[8px] sm:text-[9px] uppercase tracking-wide font-semibold leading-snug mt-0.5 break-words px-0.5">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column (Info, Contact, Skills) */}
            <div className="pt-4 lg:pt-8 flex flex-col h-full">
              
              {/* Header: Name, Role, Bio */}
              <div className="mb-6 sm:mb-8 lg:mb-10 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#111] mb-2 tracking-tight">
                  {member.name}
                </h1>
                <p className="text-red-600 text-[15px] sm:text-[17px] font-bold mb-3 sm:mb-5 tracking-wide">
                  {member.role}
                </p>
                <p className="text-neutral-500 text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left sm:text-justify">
                  {member.bio}
                </p>
              </div>

              {/* Grid for Contact & Skills */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Contact Info List */}
                <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
                  {[
                    { icon: Mail, label: "Email", value: contact.email },
                    { icon: Phone, label: "Phone", value: contact.phone },
                    { icon: MapPin, label: "Location", value: contact.location },
                    { icon: CalendarDays, label: "Experience", value: contact.experience },
                  ].map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3 sm:gap-4 min-w-0">
                        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-gray-200 rounded-xl text-red-600">
                          <ItemIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="pt-0.5 sm:pt-1 text-left min-w-0 flex-1">
                          <h4 className="text-[14px] sm:text-[15px] font-bold text-[#111] leading-tight mb-0.5">
                            {item.label}
                          </h4>
                          <p className="text-[13px] sm:text-[15px] text-neutral-500 break-words">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Skills & Expertise */}
                <div className="text-left w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-[#111] mb-4 sm:mb-5 tracking-tight text-center lg:text-left">
                    Skills & Expertise
                  </h3>
                  <div className="flex flex-col gap-4 sm:gap-5">
                    {skills.map((skill: any, index: number) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1.5 gap-3">
                          <span className="text-[12px] sm:text-[13px] font-bold text-[#222] min-w-0 truncate">
                            {skill.name}
                          </span>
                          <span className="text-[12px] sm:text-[13px] font-bold text-[#111] shrink-0">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 h-[3px] rounded-full overflow-hidden">
                          <div
                            className="bg-[#c90f16] h-full rounded-full"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom CTA Banner */}
          <div className="bg-[#f3f4f6] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4 sm:gap-5 shadow-sm border border-gray-100 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4 min-w-0">
              <div className="shrink-0 text-red-600 opacity-80">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 sm:w-14 sm:h-14">
                  <rect x="20" y="8" width="24" height="48" rx="4" />
                  <path d="M28 12h8" />
                  <path d="M12 40l10-10 M14 26l24 24" />
                  <circle cx="28" cy="28" r="4" fill="currentColor" className="text-white" />
                  <path d="M30 46h4" />
                  <path d="M42 22l-6 10h8l-8 14" className="text-red-600" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#111] mb-1">
                  {ctaBanner.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500 font-medium">
                  {ctaBanner.description}
                </p>
              </div>
            </div>
            <Link
              href={ctaBanner.button.href}
              className="shrink-0 inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-[#c90f16] text-white px-6 py-3 rounded-lg font-bold text-[13px] sm:text-[14px] transition-colors hover:bg-red-700 sm:ml-2"
            >
              {ctaBanner.button.label}
              <span>→</span>
            </Link>
          </div>
          
        </div>
      </main>
    </>
  );
}
