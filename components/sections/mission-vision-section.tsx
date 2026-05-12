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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
  className="max-w-3xl"
>
  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
    Our Foundation
  </p>

  <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
    Mission & Vision
  </h2>

  <p className="mt-6 text-lg leading-8 text-muted-foreground">
    Building confident, disciplined, and compassionate learners prepared
    for a rapidly changing world.
  </p>
</motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <span className="text-sm font-medium text-muted-foreground">
              01
            </span>

            <h3 className="mt-4 text-2xl font-semibold text-foreground">
              Our Vision
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              To develop the best within every child and prepare them for the
              challenges of a changing world through self-discipline,
              self-reliance, intellectual achievement, and physical fitness.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <span className="text-sm font-medium text-muted-foreground">
              02
            </span>

            <h3 className="mt-4 text-2xl font-semibold text-foreground">
              Our Mission
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              At NPS, we equip students to face the modern world through
              academics, co-curricular learning, and value-based education.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              The school follows the CBSE curriculum with multilingual learning
              and holistic character development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
