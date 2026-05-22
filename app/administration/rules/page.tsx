import { ShieldCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const rules = [
  {
    title: "Attendance & Punctuality",
    description:
      "Students are expected to attend school regularly and arrive on time every day. Late arrivals may affect classroom participation and discipline records.",
  },
  {
    title: "Discipline & Conduct",
    description:
      "Students must maintain respectful behavior towards teachers, staff, and fellow students both inside and outside the campus.",
  },
  {
    title: "Uniform Regulations",
    description:
      "Students should wear the prescribed school uniform neatly and with proper identity cards during all working days.",
  },
  {
    title: "Mobile Phones & Gadgets",
    description:
      "Use of mobile phones, smart watches, and electronic gadgets is strictly prohibited within the school campus unless permitted.",
  },
  {
    title: "School Property",
    description:
      "Students are responsible for maintaining classroom furniture, library books, laboratory equipment, and all school property.",
  },
  {
    title: "Leave & Absence",
    description:
      "Leave applications must be submitted by parents or guardians in advance. Medical leave should be supported with valid documents when necessary.",
  },
]

export default function RulesPage() {
  return (
    <main className="bg-[#f7f8fc]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6]">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 border border-white/20 bg-white/10 px-4 py-1 text-white backdrop-blur-sm hover:bg-white/10">
              Academic Year 2026–27
            </Badge>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Rules & Regulations
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              School rules, code of conduct, discipline guidelines, and
              important responsibilities expected from every student to maintain
              a safe and respectful learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Intro Card */}
          <div className="relative mb-12 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-200 blur-3xl" />
            </div>

            <div className="relative max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-white" />

                <span className="text-sm font-medium tracking-wide text-white">
                  Student Guidelines
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Code of Conduct
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Students are expected to follow school rules with discipline,
                responsibility, respect, and integrity throughout the academic
                year.
              </p>
            </div>
          </div>

          {/* Rules Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rules.map((rule, index) => (
              <Card
                key={index}
                className="rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2c3575] to-[#5564d8] text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {rule.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}