import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  BatteryCharging,
  Zap,
  Settings,
  Cpu,
  Droplet,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    slug: "screen-repair",
    title: "Screen Repair",
    description:
      "Cracked or broken screen?\nWe replace it with precision and care.",
    image:
      "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=600",
    icon: Smartphone,
  },
  {
    id: 2,
    slug: "battery-replacement",
    title: "Battery Replacement",
    description:
      "Low battery life? We use high-quality batteries to power your device.",
    image:
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=600",
    icon: BatteryCharging,
  },
  {
    id: 3,
    slug: "charging-port-repair",
    title: "Charging Port Repair",
    description:
      "Loose or damaged port?\nWe fix charging issues quickly and safely.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
    icon: Zap,
  },
  {
    id: 4,
    slug: "software-issues",
    title: "Software Issues",
    description: "From crashes to performance problems, we've got you covered.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    icon: Settings,
    // You can set defaultHovered to true if you want the first card in bottom row red by default like screenshot
    defaultHovered: true,
  },
  {
    id: 5,
    slug: "hardware-repair",
    title: "Hardware Repair",
    description:
      "Faulty components?\nWe repair or replace with expert precision.",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=600",
    icon: Cpu,
  },
  {
    id: 6,
    slug: "water-damage-repair",
    title: "Water Damage Repair",
    description:
      "Liquid damage?\nWe clean, restore and bring your device back to life.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
    icon: Droplet,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#fbfbfb] py-10 md:py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle Grid Dot Background Pattern (Top Left & Top Right) */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative">
            <span className="text-xs font-bold tracking-wider text-[#d32f2f] uppercase">
              OUR SERVICES
            </span>
            <div className="w-8 h-[2px] bg-[#d32f2f] mx-auto mt-1"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3">
            Expert Solutions for{" "}
            <span className="text-[#d32f2f]">Every Device.</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            From minor fixes to complex repairs, we provide reliable and
            efficient solutions to keep your devices running like new.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                href={`/services/${service.slug}`}
                key={service.id}
                className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer block"
              >
                {/* STANDARD CARD VIEW */}
                <div className="flex flex-col h-full transition-opacity duration-300 group-hover:opacity-0">
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="relative pt-6 pb-6 px-5 flex-1 flex flex-col justify-between">
                    {/* Floating Icon Badge */}
                    <div className="absolute -top-5 left-5 w-10 h-10 bg-[#e51d25] rounded-md flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-900 mt-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed whitespace-pre-line">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* RED HOVER CARD OVERLAY */}
                <div className="absolute inset-0 bg-[#e51d25] text-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  {/* Watermark Big Circular Icon */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Top Header Placeholder spacing */}
                  <div></div>

                  {/* Hover Content */}
                  <div className="z-10 mt-auto">
                    {/* Small Icon Box */}
                    <div className="w-9 h-9 rounded-lg border border-white/30 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="text-xs text-white/90 mt-1 leading-relaxed whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Action Button */}
                  <div className="absolute bottom-5 right-5 z-10">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-[#e51d25] hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
