import { ShieldCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const rules = [
  "All students must reach school before the first bell at 8:40 A.M.",
  "Latecomers must report to the Principal and Class Teacher; names will be recorded.",
  "Students should greet all teaching and non-teaching staff respectfully and courteously.",
  "Attendance during morning assembly is compulsory; students must participate in an orderly manner.",
  "School uniform must be worn neatly and completely. Improper uniform may lead to being sent back as a disciplinary action.",
  "Hairstyles must be neat and appropriate, following school norms.",
  "Maintain polite, respectful, and considerate language; avoid shouting, swearing, or offensive words.",
  "Always be courteous, helpful, and well-behaved, including during recess, games, and meals.",
  "Submit assignments and projects on time.",
  "Take utmost care of school property. Damage—even accidental—must be reported immediately.",
  "Students responsible for any damage must pay for repairs and may be fined.",
  "Exchange of personal items or money transactions among students is not allowed.",
  "Junk food, chewing gum, soft drinks, electronic gadgets, and toys are not permitted.",
  "Every student is responsible for safekeeping personal belongings.",
  "Avoid bringing money unless requested in writing by the school.",
  "Valuables like gold jewelry are strictly prohibited.",
  "Students should not enter the teachers' lounge, office, or other classrooms without permission.",
  "Wearing the ID card is mandatory; students without it cannot board the school bus or attend classes.",
  "Library books must be returned on time; lost books must be replaced or paid for.",
  "Littering is strictly prohibited inside or around the school premises.",
  "Maintain silence in class when the teacher is absent.",
  "Playing in classrooms and corridors is not allowed.",
  "No meetings, celebrations, or parties may be held without Principal’s approval.",
  "All monetary transactions must go through the school office.",
  "Students must not enter other classrooms, even during intervals.",
  "Plastic covers are banned in campus.",
  "Students and parents are expected to participate in school functions and support school activities.",
]

export default function RulesPage() {
  return (
    <main className="bg-[#f7f8fc]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6]">
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
              Code of Conduct
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Students are expected to follow these rules and maintain
              discipline, responsibility, respect, and integrity throughout the
              academic year.
            </p>
          </div>
        </div>
      </section>

      {/* Rules List */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-6 sm:px-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2c3575] to-[#5564d8] text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Student Guidelines
                  </h2>

                  <p className="mt-1 text-sm text-slate-600">
                    All students are expected to adhere to the following rules.
                  </p>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="px-6 py-8 sm:px-10">
              <ol className="space-y-5">
                {rules.map((rule, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 border-b border-slate-100 pb-5 last:border-none"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2c3575] to-[#5564d8] text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="leading-7 text-slate-700">{rule}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}