import type { Metadata } from "next";
import React from 'react';
import { site } from '@/data';
import PageBanner from "../common/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy | FixBolt",
};

export default function PrivacyPolicyPage() {
  const dummySections = site.refundPolicy.sections;

  return (
    <div className="font-sans min-h-screen bg-white">
      <PageBanner title="Privacy Policy" />
      <section className="site-container section-pad">
        <div className="space-y-12 text-[#111111]">
          {dummySections.map((section: any) => (
            <div key={section.id} className="space-y-4">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <div className="space-y-3">
                {section.content.map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-base sm:text-[15px] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
