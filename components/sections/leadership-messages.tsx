import Image from "next/image";
import { FadeUp } from "@/components/animations/fade-up";

export default function LeadershipMessages() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-slate-300/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-900 font-semibold">
            Leadership
          </p>

          <h2 className="mt-4 text-4xl sm:text-6xl font-bold text-slate-900 leading-tight">
            Voices Behind <br className="hidden sm:block" />
            Our Vision
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Dedicated educators and leaders working together to create
            a safe, inspiring and value-driven learning environment.
          </p>
        </div>

        {/* ================= CHAIRMAN ================= */}
        <FadeUp delay={0.1}>
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900 p-8 sm:p-10 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image on Right */}
            <div className="relative flex flex-col lg:flex-row-reverse gap-10 items-center lg:items-center">

              {/* Image */}
              <div className="relative shrink-0 w-44 h-56 sm:w-52 sm:h-[280px] rounded-[2rem] overflow-hidden border-2 border-slate-700 shadow-2xl ring-4 ring-white/5">
                <Image
                  src="/management/te-bilal.jpeg"
                  alt="Chairman"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center rounded-full bg-slate-800 px-4 py-1.5 text-sm font-semibold text-slate-200 backdrop-blur-sm shadow-sm border border-slate-700">
                  Chairman’s Message
                </div>

                <h3 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
                  T E Bilal
                </h3>

                <p className="mt-2 text-xl font-medium italic text-slate-400">
                  Chairman
                </p>

                <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-slate-300">
                  <p>
                    Welcome to National Public School. When we started this
                    school in Kaloor back in 2007, my dream was very simple.
                    I wanted to build a place where parents can send their
                    children with complete peace of mind.
                  </p>
                  <p>
                    For me, education is not just about scoring marks. It is
                    about teaching our children to respect their elders,
                    speak with kindness, and walk with good discipline.
                  </p>
                  <p>
                    We treat every child here as our own. We make sure they
                    are safe, loved, and guided properly every single day.
                    Your children are in safe and caring hands.
                  </p>
                </div>

                <div className="h-1 w-14 bg-slate-700 rounded-full mt-8 mx-auto lg:mx-0 transition-all duration-500 group-hover:w-28 group-hover:bg-slate-500" />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ================= MANAGER ================= */}
        <FadeUp delay={0.15}>
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900 p-8 sm:p-10 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image on Left */}
            <div className="relative flex flex-col lg:flex-row gap-10 items-center lg:items-center">

              {/* Image */}
              <div className="relative shrink-0 w-44 h-56 sm:w-52 sm:h-[280px] rounded-[2rem] overflow-hidden border-2 border-slate-700 shadow-2xl ring-4 ring-white/5">
                <Image
                  src="/management/adv-esm-kabeer-haji.jpg"
                  alt="Manager"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center rounded-full bg-slate-800 px-4 py-1.5 text-sm font-semibold text-slate-200 backdrop-blur-sm shadow-sm border border-slate-700">
                  Manager’s Message
                </div>

                <h3 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
                  ADV. E S M Kabeer
                </h3>

                <p className="mt-2 text-xl font-medium italic text-slate-400">
                  Manager
                </p>

                <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-slate-300">
                  <p>
                    It is with profound joy and immense pleasure to say that
                    for the last more than 14 years National Public School,
                    run under the Kaloor Muslim Jama-ath Educational and
                    Charitable Trust acquired a glorious past to serve the
                    society.
                  </p>
                  <p>
                    One can appreciate, the school was established to uplift
                    the education to the poor and needy. The students so far
                    proved their caliber not only in academics but also in
                    extracurricular activities.
                  </p>
                  <p>
                    I appreciate the dedication and devotion of the principal,
                    teachers and non-teaching staffs. I place on record the
                    co-operation from the public and their concern for the
                    progress of the school.
                  </p>
                </div>

                <div className="h-1 w-14 bg-slate-700 rounded-full mt-8 mx-auto lg:mx-0 transition-all duration-500 group-hover:w-28 group-hover:bg-slate-500" />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ================= PRINCIPAL ================= */}
        <FadeUp delay={0.2}>
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900 p-8 sm:p-10 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image on Right (Zig-Zag) */}
            <div className="relative flex flex-col lg:flex-row-reverse gap-10 items-center lg:items-center">

              {/* Image */}
              <div className="relative shrink-0 w-44 h-56 sm:w-52 sm:h-[280px] rounded-[2rem] overflow-hidden border-2 border-slate-700 shadow-2xl ring-4 ring-white/5">
                <Image
                  src="/management/simi-shamnawas.jpg"
                  alt="Principal"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center rounded-full bg-slate-800 px-4 py-1.5 text-sm font-semibold text-slate-200 backdrop-blur-sm shadow-sm border border-slate-700">
                  Principal’s Message
                </div>

                <h3 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
                  Ms. Simi Shamnawas
                </h3>

                <p className="mt-2 text-xl font-medium italic text-slate-400">
                  Principal
                </p>

                <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-slate-300">
                  <p>
                    I am both proud and privileged to lead a community
                    dedicated to foster a love for learning, character
                    development and lifelong success.
                  </p>
                  <p>
                    At National Public School we believe that education is
                    more than just academics, it's about inspiring curiosity,
                    nurturing talents and building confidence.
                  </p>
                  <p>
                    Our commitment is to provide a safe, inclusive and dynamic
                    environment where students can explore their passions,
                    develop critical thinking and grow into responsible
                    global citizens.
                  </p>
                  <p>
                    We strive to ensure that each student is given the support
                    and encouragement to reach their full potential with a
                    diverse range of programs, dedicated faculty and
                    state-of-the-art facilities.
                  </p>
                  <p>
                    We are committed to cultivate not only academic excellence
                    but also empathy, creativity and leadership skills.
                  </p>
                </div>

                <div className="h-1 w-14 bg-slate-700 rounded-full mt-8 mx-auto lg:mx-0 transition-all duration-500 group-hover:w-28 group-hover:bg-slate-500" />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}