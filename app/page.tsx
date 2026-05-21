"use client";

import Image from "next/image";

import { SectionHeader } from "@/components/section-header";
import { EnquiryForm } from "@/components/enquiry-form";
import { FadeUp } from "@/components/animations/fade-up";
import HeroSection from "@/components/sections/hero-section";
import { MissionVisionSection } from "@/components/sections/mission-vision-section";
import { StatsSection } from "@/components/sections/stats-section";
import { CampusLifeSection } from "@/components/sections/campus-life-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import LeadershipMessages from '@/components/sections/leadership-messages'
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* <StatsSection /> */}

      {/* Mission & Vision Section */}
      <MissionVisionSection />
      {/* Campus Life Section */}
      <CampusLifeSection />

      <ExperienceSection />

      <LeadershipMessages />



      {/* Enquiry Form Section */}
      <section
        id="enquiry-form"
        className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-20 sm:py-28"
      >
        {/* Subtle Background Glow to lift the section */}
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-200/50 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              title="Enquire About Admissions"
              subtitle="Fill in your details and we'll get back to you soon"
            />
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="group relative mt-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60 sm:mt-12 sm:p-12">

              {/* Soft decorative corner highlights */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#f9b916]/10 blur-[40px] transition-all duration-500 group-hover:bg-[#f9b916]/20" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-slate-300/20 blur-[40px]" />

              {/* Form Container */}
              <div className="relative z-10">
                <EnquiryForm />
              </div>

            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
