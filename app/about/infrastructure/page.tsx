import Image from 'next/image'
import {
  BookOpen,
  Bus,
  FlaskConical,
  HeartPulse,
  MonitorSmartphone,
  Music4,
  School,
  Sparkles,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Infrastructure & Facilities | NPS Kaloor',
  description:
    'Infrastructure, laboratories, library, transport, and campus facilities at National Public School Kaloor.',
}

const facilities = [
  {
    title: 'Library',
    description:
      'A well-equipped library supporting reading habits, academic reference, and independent learning.',
    image: '/facilities/nps-kaloor-library.webp',
    icon: BookOpen,
  },
  {
    title: 'Biology Laboratory',
    description:
      'Modern biology laboratory facilities designed for practical scientific learning and experimentation.',
    image: '/facilities/nps-kaloor-biology-lab.webp',
    icon: FlaskConical,
  },
  {
    title: 'Computer Laboratory',
    description:
      'Computer-enabled learning environment with digital resources and technology integration.',
    image: '/facilities/nps-kaloor-computer-lab.webp',
    icon: MonitorSmartphone,
  },
  {
    title: 'Chemistry Laboratory',
    description:
      'Laboratory facilities supporting practical chemistry experiments and scientific observation.',
    image: '/facilities/nps-kaloor-chemistry-lab.webp',
    icon: FlaskConical,
  },
  {
    title: 'Science Activities Lab',
    description:
      'Interactive activity-based science learning spaces encouraging experimentation and discovery.',
    image: '/facilities/nps-kaloor-science-lab-activities.webp',
    icon: Sparkles,
  },
  {
    title: 'Advanced Science Laboratory',
    description:
      'Dedicated advanced science infrastructure supporting higher secondary practical learning.',
    image: '/facilities/nps-kaloor-advanced-science-laboratory.webp',
    icon: FlaskConical,
  },
  {
    title: 'Cultural Activities',
    description:
      'Programs and events promoting creativity, participation, teamwork, and student engagement.',
    image: '/facilities/nps-kaloor-cultural-program.webp',
    icon: Music4,
  },
  {
    title: 'Medical & Wellness Support',
    description:
      'Basic medical and wellness support facilities for student health and emergency care.',
    image: '/facilities/nps-kaloor-medical-checkup.webp',
    icon: HeartPulse,
  },
  {
    title: 'School Transportation',
    description:
      'Safe and reliable transportation facilities with school bus connectivity across major routes.',
    image: '/facilities/nps-kaloor-school-bus-transport.webp',
    icon: Bus,
  },
]

const infrastructure = [
  {
    room: 'Staff Rooms',
    count: 8,
    length: 1220,
    breadth: 600,
  },
  {
    room: 'Language Lab',
    count: 1,
    length: 905,
    breadth: 600,
  },
  {
    room: 'Computer Science Lab',
    count: 2,
    length: 1577,
    breadth: 895,
  },
  {
    room: 'Music Lab',
    count: 1,
    length: 650,
    breadth: 480,
  },
  {
    room: 'Activity Lab',
    count: 2,
    length: 1570,
    breadth: 750,
  },
  {
    room: 'Mathematics Lab',
    count: 1,
    length: 900,
    breadth: 775,
  },
  {
    room: 'Home Science Lab',
    count: 1,
    length: 800,
    breadth: 600,
  },
  {
    room: 'Library',
    count: 3,
    length: 1500,
    breadth: 1390,
  },
  {
    room: 'Class Rooms',
    count: 49,
    length: 800,
    breadth: 600,
  },
  {
    room: 'Wellness Room / Clinic',
    count: 1,
    length: 650,
    breadth: 500,
  },
]

export default function InfrastructurePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-slate-100 text-slate-700 hover:bg-slate-100">
              Campus Facilities
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Infrastructure & Facilities
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">
              Modern infrastructure and learning facilities designed to support
              academic excellence, student development, and holistic education.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <School className="h-6 w-6 text-slate-700" />

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Campus Facilities
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
              The school campus is equipped with laboratories, library,
              technology-enabled learning spaces, and student support
              facilities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {facilities.map((facility) => {
              const Icon = facility.icon

              return (
                <Card
                  key={facility.title}
                  className="rounded-3xl border border-slate-200 shadow-none overflow-hidden"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="h-11 w-11 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-slate-700" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {facility.title}
                    </h3>

                    <p className="mt-4 text-slate-600 leading-7">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Infrastructure Details
            </h2>

            <p className="mt-4 text-slate-600 leading-8">
              Overview of classrooms, laboratories, and institutional
              facilities available on campus.
            </p>
          </div>

          <Card className="rounded-3xl border border-slate-200 shadow-none overflow-hidden bg-white">
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="bg-slate-900">
                    <th className="px-6 py-5 text-left text-sm font-semibold text-white">
                      Facility
                    </th>

                    <th className="px-6 py-5 text-center text-sm font-semibold text-white">
                      No. of Rooms
                    </th>

                    <th className="px-6 py-5 text-center text-sm font-semibold text-white">
                      Length
                    </th>

                    <th className="px-6 py-5 text-center text-sm font-semibold text-white">
                      Breadth
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {infrastructure.map((item, index) => (
                    <tr
                      key={item.room}
                      className={`border-b border-slate-200 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                      }`}
                    >
                      <td className="px-6 py-5 text-sm font-medium text-slate-900">
                        {item.room}
                      </td>

                      <td className="px-6 py-5 text-center text-sm text-slate-700">
                        {item.count}
                      </td>

                      <td className="px-6 py-5 text-center text-sm text-slate-700">
                        {item.length}
                      </td>

                      <td className="px-6 py-5 text-center text-sm text-slate-700">
                        {item.breadth}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}