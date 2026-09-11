import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Camera,
  Check,
  ChevronRight,
  Clock,
  Cpu,
  Droplet,
  HardDrive,
  Headset,
  PlugZap,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  Volume2,
  Wrench,
} from "lucide-react";
import PageBanner from "@/app/common/PageBanner";
import data from "@/data/data.json";

type Props = {
  params: Promise<{ slug: string }>;
};

const serviceIconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  batteryCharging: BatteryCharging,
  plugZap: PlugZap,
  settings: Settings,
  cpu: Cpu,
  droplet: Droplet,
  camera: Camera,
  volume2: Volume2,
  hardDrive: HardDrive,
};

const highlightIconMap: Record<string, ReactNode> = {
  parts: <Smartphone className="h-5 w-5" strokeWidth={1.8} />,
  clock: <Clock className="h-5 w-5" strokeWidth={1.8} />,
  experts: <Wrench className="h-5 w-5" strokeWidth={1.8} />,
  warranty: <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />,
};

const processIconMap: Record<string, ReactNode> = {
  search: <Search className="h-5 w-5" strokeWidth={1.8} />,
  repair: <Smartphone className="h-5 w-5" strokeWidth={1.8} />,
  check: <ClipboardCheckIcon />,
  shield: <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />,
};

function ClipboardCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 4.5h6M9 12l2 2 4-4" />
    </svg>
  );
}

function RedCheck() {
  return (
    <span className="mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full bg-brand-red text-white">
      <Check className="h-3 w-3" strokeWidth={3} />
    </span>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="text-[20px] font-bold text-[#111] md:text-[22px]">{children}</h2>
      <span className="mt-2 block h-[3px] w-9 bg-brand-red" aria-hidden="true" />
    </div>
  );
}

export function generateStaticParams() {
  return data.services.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = data.services.items.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service Not Found | FixBolt" };
  }

  return {
    title: `${service.title} Service | FixBolt`,
    description: service.description,
  };
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = data.services.items.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const allServices = data.services.items;
  const details = data.services.details;

  return (
    <div className="bg-white pb-20">
      <PageBanner
        title="Services Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Services Detail" },
        ]}
      />

      <div className="mx-auto mt-8 lg:mt-16 grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 px-5 lg:px-6">
        {/* ── Left sidebar ── */}
        <aside className="space-y-7 lg:col-span-3">
          <div>
            <h3 className="text-[20px] font-extrabold text-[#111]">Our Services</h3>
            <span className="mt-2 mb-5 block h-[3px] w-9 bg-brand-red" aria-hidden="true" />

            <ul className="space-y-1.5">
              {allServices.map((item) => {
                const Icon = serviceIconMap[item.icon] ?? Settings;
                const isActive = item.slug === slug;

                return (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className={`flex items-center justify-between rounded-lg px-3.5 py-3 transition-colors ${
                        isActive
                          ? "bg-brand-red text-white"
                          : "text-[#222] hover:bg-neutral-50"
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <Icon
                          className={`h-[18px] w-[18px] shrink-0 ${
                            isActive ? "text-white" : "text-neutral-500"
                          }`}
                          strokeWidth={1.7}
                        />
                        <span className="truncate text-[13px] font-semibold">{item.title}</span>
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 ${
                          isActive ? "text-white" : "text-neutral-400"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-xl bg-[#fff5f5] px-6 py-8 text-center">
            <div className="mx-auto mb-4 text-brand-red">
              <Headset className="mx-auto h-10 w-10" strokeWidth={1.6} />
            </div>
            <h4 className="text-[17px] font-bold text-[#111]">{details.help.title}</h4>
            <p className="mt-2 mb-6 text-[13px] leading-relaxed text-neutral-500">
              {details.help.text}
            </p>
            <Link
              href={details.help.ctaHref}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-red text-[13px] font-bold text-white transition-colors hover:bg-brand-red-dark"
            >
              {details.help.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className="lg:col-span-9">
          {/* Top: copy + image */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div>
              <p className="text-[12px] font-bold tracking-[0.1em] text-brand-red uppercase">
                {service.title}
              </p>
              <h1 className="mt-2 text-[30px] leading-[1.15] font-extrabold text-[#111] md:text-[36px]">
                {service.title} Service
              </h1>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-neutral-500">
                {service.description}
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
                {details.highlights.map((item) => (
                  <li key={item.title} className="flex flex-col items-center text-center">
                    <span className="mb-2.5 grid size-[52px] place-items-center rounded-full bg-[#ffeaea] text-brand-red">
                      {highlightIconMap[item.icon]}
                    </span>
                    <span className="text-[11px] leading-snug font-bold text-[#111]">
                      {item.title.split(" ").map((word) => (
                        <span key={word} className="block">
                          {word}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Overview + Why Choose Us */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
            <section className="lg:col-span-3">
              <SectionTitle>{details.overviewTitle}</SectionTitle>
              <p className="mb-5 text-[14px] leading-relaxed text-neutral-600">
                {details.overviewText}
              </p>
              <ul className="space-y-3.5">
                {details.overviewPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <RedCheck />
                    <span className="text-[14px] text-neutral-700">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-neutral-200 bg-white p-6 lg:col-span-2">
              <SectionTitle>{details.whyTitle}</SectionTitle>
              <ul className="space-y-3.5">
                {details.whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <RedCheck />
                    <span className="text-[13px] font-medium text-neutral-700">{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Process + Devices */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
            <section className="lg:col-span-3">
              <SectionTitle>{details.processTitle}</SectionTitle>
              <ol className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-1">
                {details.process.map((step, index) => (
                  <li
                    key={step.step}
                    className="relative flex flex-1 flex-col items-center px-1 text-center"
                  >
                    <span className="mb-3 grid size-12 place-items-center rounded-full bg-[#ffeaea] text-brand-red">
                      {processIconMap[step.icon]}
                    </span>
                    <h3 className="text-[13px] font-bold text-[#111]">
                      {step.step}. {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-[118px] text-[11px] leading-snug text-neutral-500">
                      {step.description}
                    </p>
                    {index < details.process.length - 1 ? (
                      <ArrowRight
                        className="absolute top-[18px] -right-2 hidden h-4 w-4 text-neutral-300 sm:block"
                        aria-hidden="true"
                      />
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-xl border border-neutral-200 bg-white p-4 lg:col-span-2">
              <SectionTitle>{details.devicesTitle}</SectionTitle>
              <p className="mb-3 text-[12px] text-neutral-500">{details.devicesText}</p>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 sm:grid-cols-3">
                {details.devices.map((device) => (
                  <li
                    key={device.name}
                    className="flex h-7 items-center text-[14px] font-extrabold tracking-tight"
                    style={{ color: device.color }}
                  >
                    {device.name}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
