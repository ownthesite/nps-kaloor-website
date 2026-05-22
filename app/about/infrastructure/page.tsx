import Image from "next/image"

import {
  BookOpen,
  Bus,
  FlaskConical,
  HeartPulse,
  MonitorSmartphone,
  Music4,
  School,
  Sparkles,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Infrastructure & Facilities | NPS Kaloor",
  description:
    "Infrastructure, laboratories, library, transport, and campus facilities at National Public School Kaloor.",
}

const facilities = [
  {
    title: "Library",
    description:
      "A well-equipped library supporting reading habits, academic reference, and independent learning.",
    image: "/facilities/nps-kaloor-library.webp",
    icon: BookOpen,
  },
  {
    title: "Biology Laboratory",
    description:
      "Modern biology laboratory facilities designed for practical scientific learning and experimentation.",
    image: "/facilities/nps-kaloor-biology-lab.webp",
    icon: FlaskConical,
  },
  {
    title: "Computer Laboratory",
    description:
      "Computer-enabled learning environment with digital resources and technology integration.",
    image: "/facilities/nps-kaloor-computer-lab.webp",
    icon: MonitorSmartphone,
  },
  {
    title: "Chemistry Laboratory",
    description:
      "Laboratory facilities supporting practical chemistry experiments and scientific observation.",
    image: "/facilities/nps-kaloor-chemistry-lab.webp",
    icon: FlaskConical,
  },
  {
    title: "Science Activities Lab",
    description:
      "Interactive activity-based science learning spaces encouraging experimentation and discovery.",
    image: "/facilities/nps-kaloor-science-lab-activities.webp",
    icon: Sparkles,
  },
  {
    title: "Advanced Science Laboratory",
    description:
      "Dedicated advanced science infrastructure supporting higher secondary practical learning.",
    image: "/facilities/nps-kaloor-advanced-science-laboratory.webp",
    icon: FlaskConical,
  },
  {
    title: "Cultural Activities",
    description:
      "Programs and events promoting creativity, participation, teamwork, and student engagement.",
    image: "/facilities/nps-kaloor-cultural-program.webp",
    icon: Music4,
  },
  {
    title: "Medical & Wellness Support",
    description:
      "Basic medical and wellness support facilities for student health and emergency care.",
    image: "/facilities/nps-kaloor-medical-checkup.webp",
    icon: HeartPulse,
  },
  {
    title: "School Transportation",
    description:
      "Safe and reliable transportation facilities with school bus connectivity across major routes.",
    image: "/facilities/nps-kaloor-school-bus-transport.webp",
    icon: Bus,
  },
]



export default function InfrastructurePage() {
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
              Campus Facilities
            </Badge>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Infrastructure & Facilities
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Modern infrastructure and advanced learning facilities designed to
              support academic excellence, innovation, creativity, and holistic
              student development.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Intro Banner */}
          <div className="relative mb-12 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-200 blur-3xl" />
            </div>

            <div className="relative max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <School className="h-4 w-4 text-white" />

                <span className="text-sm font-medium tracking-wide text-white">
                  Modern Learning Spaces
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Campus Facilities
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                The campus is equipped with modern laboratories, technology
                enabled classrooms, library facilities, activity spaces, and
                student wellness infrastructure.
              </p>
            </div>
          </div>

          {/* Facility Cards */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const Icon = facility.icon

              return (
                <Card
                  key={facility.title}
                  className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/20 to-transparent" />

                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2c3575] to-[#5564d8] text-white shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-slate-900">
                      {facility.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      
    </main>
  )
}