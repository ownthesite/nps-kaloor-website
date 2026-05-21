"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function MissionVisionSection() {
  return (
   <section className="bg-slate-50 py-20 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
        What We Believe
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        Learning Beyond Marks
      </h2>

      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
        We believe every child deserves a happy, supportive, and inspiring
        environment where they can learn with confidence and grow into
        responsible individuals.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
      {/* Vision */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        whileHover={{ y: -8 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:bg-slate-900 hover:shadow-xl hover:shadow-blue-600/20 sm:p-10"
      >
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/5 blur-[50px] transition-colors duration-500 group-hover:bg-white/15" />

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-sm font-bold text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600">
          01
        </div>

        <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-white sm:text-2xl">
          Our Vision
        </h3>

        <p className="mt-4 flex-1 leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-blue-50">
          To help every child become confident, kind, disciplined, and ready
          to face the future with courage, knowledge, and strong values.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        whileHover={{ y: -8 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:bg-slate-900 hover:shadow-xl hover:shadow-blue-600/20 sm:p-10"
      >
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/5 blur-[50px] transition-colors duration-500 group-hover:bg-white/15" />

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-sm font-bold text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600">
          02
        </div>

        <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-white sm:text-2xl">
          Our Mission
        </h3>

        <div className="mt-4 flex flex-1 flex-col gap-3 transition-colors duration-300">
          <p className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white">
            We create a caring learning environment where students feel safe,
            supported, and encouraged to do their best every day.
          </p>

          <p className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white">
            Along with academics, we focus on communication, character,
            creativity, and the overall growth of every child.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>
  );
}
