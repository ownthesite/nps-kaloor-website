"use client";



import { ExperienceSection } from "@/components/sections/experience-section";



import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";
import { ContentCard } from "@/components/content-card";
import { EnquiryForm } from "@/components/enquiry-form";
import { CTASection } from "@/components/cta-section";
import { FadeUp } from "@/components/animations/fade-up";
import HeroSection from "@/components/sections/hero-section";
import { MissionVisionSection } from "@/components/sections/mission-vision-section";
import { StatsSection } from "@/components/sections/stats-section";
import { CampusLifeSection } from "@/components/sections/campus-life-section";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <HeroSection />


       {/* <StatsSection /> */}

      {/* Mission & Vision Section */}
      <MissionVisionSection />
      {/* Campus Life Section */}
      <CampusLifeSection />

     
      <ExperienceSection />



      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              title="Enquire About Admissions"
              subtitle="Fill in your details and we'll get back to you soon"
            />
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-12 bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <EnquiryForm />
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}