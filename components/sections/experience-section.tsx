"use client";

import { motion } from "framer-motion";

import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";

export function ExperienceSection() {
  return (
    <section className="bg-white py-24 sm:py-28">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Academic Environment
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              A Place Where Students Grow with Confidence
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              NPS Kaloor combines academic excellence, discipline,
              creativity, and modern learning methods to create
              a supportive environment where every student can thrive.
            </p>

            {/* Highlights */}
            <StaggerContainer
              staggerDelay={0.1}
              delayChildren={0.15}
            >

              <div className="mt-12 space-y-6">

                <StaggerItem>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                    <h3 className="text-lg font-semibold text-slate-900">
                      CBSE Focused Learning
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Strong academic foundation with conceptual and
                      practical learning approaches.
                    </p>

                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                    <h3 className="text-lg font-semibold text-slate-900">
                      Experienced Faculty
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Dedicated teachers committed to guiding students
                      academically and personally.
                    </p>

                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                    <h3 className="text-lg font-semibold text-slate-900">
                      Holistic Development
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Equal importance to academics, discipline,
                      creativity, sports, and values.
                    </p>

                  </div>
                </StaggerItem>

              </div>
            </StaggerContainer>
          </motion.div>

          {/* Right Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >

            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-slate-900 p-10 md:p-14 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">

              {/* Accent */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

              <div className="relative">

                <div className="text-6xl leading-none text-white/15">
                  “
                </div>

                <p className="mt-6 text-xl leading-9 text-white/80 md:text-2xl">
                  NPS Kaloor provides students with the confidence,
                  discipline, and academic guidance needed to excel
                  both inside and outside the classroom.
                </p>

                <div className="mt-10">

                  <div className="text-lg font-semibold text-white">
                    National Public School
                  </div>

                  <div className="mt-1 text-sm uppercase tracking-[0.18em] text-white/50">
                    Kerala • CBSE Institution
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Facilities */}
        <StaggerContainer
          staggerDelay={0.08}
          delayChildren={0.1}
        >

          <div className="mt-20 flex flex-wrap gap-4">

            {[
              "Science Laboratories",
              "Digital Classrooms",
              "Computer Labs",
              "Library",
              "Sports Facilities",
              "Auditorium",
            ].map((item, i) => (
              <StaggerItem key={i}>

                <div className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-700 shadow-sm">
                  {item}
                </div>

              </StaggerItem>
            ))}

          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}