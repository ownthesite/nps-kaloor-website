"use client";

import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { EnquiryForm } from "@/components/enquiry-form";
import { FadeUp } from "@/components/animations/fade-up";
import HeroSection from "@/components/sections/hero-section";
import { MissionVisionSection } from "@/components/sections/mission-vision-section";
import { StatsSection } from "@/components/sections/stats-section";
import { CampusLifeSection } from "@/components/sections/campus-life-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import LeadershipMessages from '@/components/sections/leadership-messages'
import { BrochurePopup } from "@/components/brochure-popup";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <BrochurePopup />

      {/* <StatsSection /> */}

      {/* Mission & Vision Section */}
      <MissionVisionSection />
      {/* Campus Life Section */}
      <CampusLifeSection />

      <ExperienceSection />

      <LeadershipMessages />



      {/* Enquiry Form Section */}
      {/* Contact / Enquiry Info Section */}
      <section
        id="contact-info"
        className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-20 sm:py-28"
      >
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-200/50 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              title="Get in Touch"
              subtitle="Reach out to us for admissions and school enquiries"
            />
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="group relative mt-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60 sm:mt-12 sm:p-12">

              {/* Decorative Glow */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#f9b916]/10 blur-[40px] transition-all duration-500 group-hover:bg-[#f9b916]/20" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-slate-300/20 blur-[40px]" />

              {/* Content */}
              <div className="relative z-10 grid gap-8 sm:grid-cols-3">

                {/* Website */}
                <a
                  href="https://www.npskaloor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f9b916]/40 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f9b916]/10 text-[#0c2d83]">
                    <Globe className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Website
                  </h3>

                  <p className="mt-2 break-all text-sm text-slate-600">
                    www.npskaloor.com
                  </p>
                </a>

                {/* Email */}
                <a
                  href="mailto:nps.kaloor@gmail.com"
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f9b916]/40 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f9b916]/10 text-[#0c2d83]">
                    <Mail className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Email
                  </h3>

                  <p className="mt-2 break-all text-sm text-slate-600">
                    nps.kaloor@gmail.com
                  </p>
                </a>

                {/* Phone */}
                <a
                  href="tel:04842539088"
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f9b916]/40 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f9b916]/10 text-[#0c2d83]">
                    <Phone className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Contact Number
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-600">
                    Ph: 0484-2539088
                  </p>
                </a>

              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
