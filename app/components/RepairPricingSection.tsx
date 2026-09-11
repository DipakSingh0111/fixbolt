import React from "react";
import {
  ShieldCheck,
  UserCheck,
  Tag,
  Award,
  Settings,
  ThumbsUp,
  Smartphone,
  BatteryCharging,
  Zap,
  Camera,
  Volume2,
  Droplet,
  Cpu,
  Info,
  Headphones,
  PhoneCall,
  Mail,
  Calendar,
  ArrowRight,
} from "lucide-react";

// Top Feature Badges Data
const features = [
  { title: "Quality Service", icon: ShieldCheck },
  { title: "Expert Technicians", icon: UserCheck },
  { title: "Affordable Pricing", icon: Tag },
  { title: "Repair Warranty", icon: Award },
  { title: "Genuine Parts", icon: Settings },
  { title: "100% Satisfaction", icon: ThumbsUp },
];

// Repair Pricing Table Rows
const pricingData = [
  {
    service: "Screen Replacement",
    description: "Cracked or damaged screen",
    apple: "₹12,999",
    samsung: "₹8,499",
    oneplus: "₹6,499",
    xiaomi: "₹5,499",
    realme: "₹4,499",
    icon: Smartphone,
  },
  {
    service: "Battery Replacement",
    description: "Battery draining fast or not charging",
    apple: "₹3,499",
    samsung: "₹2,499",
    oneplus: "₹2,299",
    xiaomi: "₹1,899",
    realme: "₹1,799",
    icon: BatteryCharging,
  },
  {
    service: "Charging Port Repair",
    description: "Charging port loose or not working",
    apple: "₹2,499",
    samsung: "₹1,799",
    oneplus: "₹1,699",
    xiaomi: "₹1,499",
    realme: "₹1,299",
    icon: Zap,
  },
  {
    service: "Camera Replacement",
    description: "Blurry or not working camera",
    apple: "₹4,999",
    samsung: "₹3,499",
    oneplus: "₹2,999",
    xiaomi: "₹2,499",
    realme: "₹2,299",
    icon: Camera,
  },
  {
    service: "Speaker Repair",
    description: "Low or no sound issues",
    apple: "₹2,299",
    samsung: "₹1,499",
    oneplus: "₹1,299",
    xiaomi: "₹1,199",
    realme: "₹999",
    icon: Volume2,
  },
  {
    service: "Water Damage Repair",
    description: "Water damage diagnosis & repair",
    apple: "₹2,999",
    samsung: "₹2,999",
    oneplus: "₹2,999",
    xiaomi: "₹2,999",
    realme: "₹2,999",
    icon: Droplet,
  },
  {
    service: "Software Issue Fixing",
    description: "Software update, hang or lag issues",
    apple: "₹999",
    samsung: "₹999",
    oneplus: "₹999",
    xiaomi: "₹999",
    realme: "₹999",
    icon: Cpu,
  },
];

export default function RepairPricingSection() {
  return (
    <section className="bg-[#fbfbfb] py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
            <span className="text-xs font-extrabold tracking-wider text-[#d32f2f] uppercase">
              REPAIR COST
            </span>
            <span className="h-[1px] w-6 bg-[#d32f2f]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] mt-2">
            Clear Prices.{" "}
            <span className="text-[#d32f2f]">Trusted Repairs.</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            We believe in honest pricing and quality repairs. No hidden charges,
            no surprises – just complete peace of mind.
          </p>
        </div>

        {/* Top Feature Badges Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 flex flex-col items-center justify-center border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-[#d32f2f]" />
                </div>
                <span className="text-sm font-bold text-gray-900 text-center leading-tight">
                  {feat.title}
                </span>
                <div className="w-4 h-[2px] bg-[#d32f2f] mt-2 opacity-80"></div>
              </div>
            );
          })}
        </div>

        {/* Main Pricing Table Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#0B142F] text-white text-[13px] font-bold tracking-wider uppercase">
                  <th className="py-3.5 px-5 w-[22%]">SERVICE</th>
                  <th className="py-3.5 px-4 w-[28%]">DESCRIPTION</th>
                  <th className="py-3.5 px-4 text-center">APPLE</th>
                  <th className="py-3.5 px-4 text-center">SAMSUNG</th>
                  <th className="py-3.5 px-4 text-center">ONEPLUS</th>
                  <th className="py-3.5 px-4 text-center">XIAOMI</th>
                  <th className="py-3.5 px-4 text-center">REALME</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100 text-sm">
                {pricingData.map((row, idx) => {
                  const RowIcon = row.icon;
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50/80 transition-colors duration-150"
                    >
                      {/* Service Name with Icon Box */}
                      <td className="py-3.5 px-5 font-bold text-gray-900">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-md bg-red-50/80 border border-red-100 flex items-center justify-center shrink-0">
                            <RowIcon className="w-5 h-5 text-[#d32f2f]" />
                          </div>
                          <span className="text-sm font-bold">
                            {row.service}
                          </span>
                        </div>
                      </td>

                      {/* Description */}
                      <td className="py-3.5 px-4 text-gray-500 text-[13px]">
                        {row.description}
                      </td>

                      {/* Prices */}
                      <td className="py-3.5 px-4 text-center font-bold text-gray-800 text-[14px]">
                        {row.apple}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-gray-800 text-[14px]">
                        {row.samsung}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-gray-800 text-[14px]">
                        {row.oneplus}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-gray-800 text-[14px]">
                        {row.xiaomi}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-gray-800 text-[14px]">
                        {row.realme}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Note Box */}
        <div className="bg-[#edf2f9]/70 rounded-lg p-3 flex items-center justify-center space-x-2 text-sm text-gray-600 mb-6 border border-blue-50">
          <Info className="w-5 h-5 text-gray-500 shrink-0" />
          <span>
            Prices may vary based on device model and condition. Final cost will
            be confirmed after diagnosis.
          </span>
        </div>

        {/* Bottom Help & Booking Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Need Help Column */}
            <div className="md:col-span-4 flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6 text-[#d32f2f]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Need Help?</h4>
                <p className="text-xs text-gray-500 leading-tight">
                  Our support team is here to help you choose the right repair.
                </p>
              </div>
            </div>

            {/* Phone Column */}
            <div className="md:col-span-3 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5 text-[#d32f2f]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  +91 456 785 889
                </h4>
                <p className="text-xs text-gray-400">Call us anytime</p>
              </div>
            </div>

            {/* Email Column */}
            <div className="md:col-span-3 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#d32f2f]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  support@fixbolt.com
                </h4>
                <p className="text-xs text-gray-400">
                  We reply within 24hrs
                </p>
              </div>
            </div>

            {/* CTA Button Column */}
            <div className="md:col-span-2 flex justify-start md:justify-end">
              <button className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition shadow-sm">
                <Calendar className="w-5 h-5" />
                <span>Book a Repair</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
