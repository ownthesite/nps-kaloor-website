import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Calculator,
  FlaskConical,
  Globe,
  GraduationCap,
  Landmark,
  Microscope,
  MonitorSmartphone,
  School,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Courses & Academic Programs | NPS Kaloor',
  description:
    'Academic programs, streams, subjects, and curriculum structure at National Public School Kaloor.',
}

const academicPrograms = [
  {
    title: 'Pre-Primary',
    classes: 'LKG & UKG',
    description:
      'Foundational learning through activity-based education, creativity, communication, and social development.',
    icon: School,
  },
  {
    title: 'Primary School',
    classes: 'Classes I – IV',
    description:
      'Core academic foundations focusing on language development, mathematics, science, and co-curricular growth.',
    icon: BookOpen,
  },
  {
    title: 'Middle School',
    classes: 'Classes V – VIII',
    description:
      'Conceptual and analytical learning with project-based activities and expanded subject exposure.',
    icon: Brain,
  },
  {
    title: 'Secondary School',
    classes: 'Classes IX – X',
    description:
      'CBSE-oriented academic preparation with strong focus on board examinations and overall performance.',
    icon: GraduationCap,
  },
  {
    title: 'Senior Secondary',
    classes: 'Classes XI – XII',
    description:
      'Stream-based academic specialization with career-focused guidance and preparation.',
    icon: BriefcaseBusiness,
  },
]

const streams = [
  {
    title: 'Science Stream',
    subjects: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Biology',
      'Computer Science',
    ],
    icon: FlaskConical,
  },
  {
    title: 'Commerce Stream',
    subjects: [
      'Accountancy',
      'Business Studies',
      'Economics',
      'Computer Applications',
    ],
    icon: Calculator,
  },
]

const languages = [
  'English',
  'Hindi',
  'Malayalam',
]

const methodology = [
  'Activity-based learning',
  'Smart classroom integration',
  'Continuous assessment and evaluation',
  'Experiential and project-based learning',
  'Academic and co-curricular balance',
  'Individual student mentoring and guidance',
]

export default function CoursesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-slate-100 text-slate-700 hover:bg-slate-100">
              CBSE Curriculum
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Courses & Academic Programs
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">
              Structured academic programs designed to support intellectual,
              creative, and personal growth from Kindergarten to Class XII.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="h-6 w-6 text-slate-700" />

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Academic Programs
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
              The school offers structured academic programs across various
              stages of learning under the CBSE curriculum.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mt-12">
            {academicPrograms.map((program) => {
              const Icon = program.icon

              return (
                <Card
                  key={program.title}
                  className="rounded-3xl border border-slate-200 shadow-none"
                >
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>

                    <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      {program.classes}
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-slate-900">
                      {program.title}
                    </h3>

                    <p className="mt-4 text-slate-600 leading-8">
                      {program.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Streams Offered */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <Landmark className="h-6 w-6 text-slate-700" />

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Streams Offered
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
              Senior secondary students are provided with stream-based
              academic specialization and subject selection.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mt-12">
            {streams.map((stream) => {
              const Icon = stream.icon

              return (
                <Card
                  key={stream.title}
                  className="rounded-3xl border border-slate-200 shadow-none bg-white"
                >
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {stream.title}
                    </h3>

                    <div className="mt-6 grid gap-3">
                      {stream.subjects.map((subject) => (
                        <div
                          key={subject}
                          className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3"
                        >
                          <Microscope className="h-4 w-4 text-slate-500" />

                          <span className="text-slate-700">
                            {subject}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-3xl border border-slate-200 shadow-none">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-5">
                <Globe className="h-6 w-6 text-slate-700" />

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Languages Offered
                </h2>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {languages.map((language) => (
                  <div
                    key={language}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <MonitorSmartphone className="h-6 w-6 text-slate-700" />

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Teaching Methodology
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
              The school follows a balanced academic approach integrating
              conceptual learning, technology, and co-curricular development.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {methodology.map((item) => (
              <Card
                key={item}
                className="rounded-3xl border border-slate-200 shadow-none bg-white"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-slate-700" />
                  </div>

                  <p className="text-slate-700 leading-7">
                    {item}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-3xl border border-slate-200 shadow-none bg-slate-50">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900">
                Need Academic Guidance?
              </h2>

              <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-8">
                Contact the academic office for detailed information regarding
                curriculum, streams, and subject selection.
              </p>

              <div className="mt-8 flex justify-center">
                <Button asChild size="lg" className="rounded-xl px-6">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}