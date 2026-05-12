"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-sky-100/60 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Layout */}
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.4,
              ease: smoothEase,
            }}
            className="absolute inset-0"
          >
            <Image
              src="/hero-banner/banner_01.webp"
              alt="National Public School Kaloor Campus"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Left Soft Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/10" />

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

          {/* Content */}
          <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: smoothEase,
                }}
              ></motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: smoothEase,
                  delay: 0.1,
                }}
                className="mt-8"
              >
                <Link href="/" className="inline-block">
                  <div
                    className="
        relative

        h-40
        sm:h-52
        lg:h-72

        w-[420px]
        sm:w-[620px]
        lg:w-[1000px]
        
        
        
      "
                  >
                    <Image
                      src="/logo.svg"
                      alt="National Public School Logo"
                      fill
                      priority
                      className="object-contain object-left"
                    />
                  </div>
                </Link>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: smoothEase,
                  delay: 0.2,
                }}
                className="mt-6 max-w-2xl"
              >
                <p className="text-base font-semibold uppercase tracking-[0.18em] text-blue-700">
                  CBSE Senior Secondary School • Established 2007
                </p>

                <h2 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight text-slate-950">
                  Inspiring Academic Excellence & Holistic Growth
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-700">
                  National Public School, Kaloor is a co-educational CBSE
                  institution dedicated to nurturing confident, disciplined, and
                  future-ready learners through strong academics, innovative
                  learning, and all-round development.
                </p>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Backed by experienced faculty and a vibrant learning
                  environment, the school empowers every child to discover their
                  talents, build character, and grow with confidence.
                </p>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: smoothEase,
                  delay: 0.3,
                }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <button
                  onClick={() => {
                    document.getElementById("enquiry-form")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Admission Enquiry
                  <ArrowRight size={18} />
                </button>

                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-8 py-4 text-sm font-semibold text-slate-700 backdrop-blur transition hover:bg-white"
                >
                  Explore School
                  <ArrowRight size={18} />
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: smoothEase,
                  delay: 0.4,
                }}
                className="mt-14 flex flex-wrap gap-10"
              >
                <div>
                  <h3 className="text-4xl font-bold text-slate-950">18+</h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Years of Excellence
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-slate-950">CBSE</h3>

                  <p className="mt-2 text-sm text-slate-600">
                    National Curriculum
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-slate-950">
                    Holistic
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Student Development
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
