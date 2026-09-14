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

      <main className="bg-[#fcfcfc] py-10 md:py-16 lg:py-24 px-5">
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
              <div className="bg-[#161616] rounded-b-3xl py-6 px-4 flex justify-between shadow-2xl relative z-10 -mt-2">
                {stats.map((stat: any, i: number) => {
                  const StatIcon = iconMap[stat.icon] || Award;
                  return (
                    <div 
                      key={i} 
                      className={`flex flex-1 flex-col sm:flex-row items-center gap-2 md:gap-3 text-center sm:text-left px-2 sm:px-4 ${
                        i !== stats.length - 1 ? "border-r border-white/10" : ""
                      }`}
                    >
                      <StatIcon className="w-8 h-8 text-white/80 shrink-0" strokeWidth={1.5} />
                      <div className="flex flex-col">
                        <span className="text-red-600 font-bold text-[13px] md:text-sm leading-tight">
                          {stat.value}
                        </span>
                        <span className="text-white text-[9px] md:text-[10px] uppercase tracking-wider font-semibold leading-tight max-w-[60px]">
                          {stat.label.replace(" ", "\n")}
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
              <div className="mb-10">
                <h1 className="text-4xl md:text-[42px] font-extrabold text-[#111] mb-2 tracking-tight">
                  {member.name}
                </h1>
                <p className="text-red-600 text-[17px] font-bold mb-5 tracking-wide">
                  {member.role}
                </p>
                <p className="text-neutral-500 text-[15px] leading-relaxed max-w-2xl">
                  {member.bio}
                </p>
              </div>

              {/* Grid for Contact & Skills */}
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 mt-auto">
                
                {/* Contact Info List */}
                <div className="flex flex-col gap-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl text-red-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-[15px] font-bold text-[#111] leading-tight mb-1">Email</h4>
                      <p className="text-sm text-neutral-500">{contact.email}</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl text-red-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-[15px] font-bold text-[#111] leading-tight mb-1">Phone</h4>
                      <p className="text-sm text-neutral-500">{contact.phone}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl text-red-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-[15px] font-bold text-[#111] leading-tight mb-1">Location</h4>
                      <p className="text-sm text-neutral-500">{contact.location}</p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl text-red-600">
                      <CalendarDays className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-[15px] font-bold text-[#111] leading-tight mb-1">Experience</h4>
                      <p className="text-sm text-neutral-500">{contact.experience}</p>
                    </div>
                  </div>
                </div>

                {/* Skills & Expertise */}
                <div>
                  <h3 className="text-xl font-bold text-[#111] mb-6 tracking-tight">Skills & Expertise</h3>
                  <div className="flex flex-col gap-5">
                    {skills.map((skill: any, index: number) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[13px] font-bold text-[#222]">{skill.name}</span>
                          <span className="text-[13px] font-bold text-[#111]">{skill.percentage}%</span>
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
          <div className="bg-[#f3f4f6] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-6">
              <div className="shrink-0 text-red-600 opacity-80">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                  {/* Phone Outline */}
                  <rect x="20" y="8" width="24" height="48" rx="4" />
                  <path d="M28 12h8" />
                  {/* Wrench/Tool cross */}
                  <path d="M12 40l10-10 M14 26l24 24" />
                  <circle cx="28" cy="28" r="4" fill="currentColor" className="text-white" />
                  <path d="M30 46h4" />
                  {/* Lightning bolt */}
                  <path d="M42 22l-6 10h8l-8 14" className="text-red-600" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-[22px] font-extrabold text-[#111] mb-1">
                  {ctaBanner.title}
                </h3>
                <p className="text-[15px] text-gray-500 font-medium">
                  {ctaBanner.description}
                </p>
              </div>
            </div>
            <Link 
              href={ctaBanner.button.href}
              className="shrink-0 inline-flex items-center gap-2 bg-[#c90f16] text-white px-6 py-3.5 rounded-lg font-bold text-[14px] transition-colors hover:bg-red-700"
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
