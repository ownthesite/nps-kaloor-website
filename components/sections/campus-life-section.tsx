"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";

export function CampusLifeSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Campus Life
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Learning Beyond the Classroom
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            NPS Kaloor provides a vibrant academic environment with modern
            laboratories, digital learning spaces, and a rich library culture
            designed to nurture curiosity, creativity, and practical learning.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:grid-rows-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-[2rem] h-[620px] lg:col-span-7 lg:row-span-2 shadow-lg"
          >
            <Image
              src="/hero-banner/banner_03.webp"
              alt="Science Laboratory"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  Science & Innovation
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white md:text-4xl">
                Advanced Laboratory Learning
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/75 md:text-lg">
                Hands-on practical sessions encourage scientific thinking,
                experimentation, and collaborative learning among students.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-[2rem] h-[300px] lg:col-span-5 shadow-lg"
          >
            <Image
              src="/hero-banner/banner_04.webp"
              alt="Computer Lab"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white">
                Digital Learning Spaces
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/75">
                Modern computer labs equipped to support digital literacy,
                creativity, and future-ready skills.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-[2rem] h-[300px] lg:col-span-5 shadow-lg"
          >
            <Image
              src="/hero-banner/banner_05.webp"
              alt="School Library"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white">
                Resourceful Library
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/75">
                A quiet and enriching reading environment that inspires
                curiosity, imagination, and independent learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
