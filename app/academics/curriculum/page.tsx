import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Brain,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  LaptopMinimal,
  Lightbulb,
  MonitorSmartphone,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Curriculum | NPS Kaloor',
  description:
    'CBSE curriculum framework, academic philosophy, learning methodology, and assessment approach at National Public School Kaloor.',
}

const methodologies = [
  'Activity-based learning',
  'Experiential learning',
  'Interactive classroom teaching',
  'Project-based assignments',
  'Collaborative learning',
  'Smart classroom integration',
]

const assessments = [
  'Periodic assessments',
  'Continuous evaluation',
  'Formative and summative assessments',
  'Practical and project work',
  'CBSE board examination preparation',
]

const coCurricular = [
  'Sports and physical education',
  'Arts and creative activities',
  'Music and cultural programs',
  'Leadership and teamwork activities',
  'Club participation and events',
  'Community engagement initiatives',
]

const studentDevelopment = [
  {
    title: 'Critical Thinking',
    icon: Brain,
  },
  {
    title: 'Leadership Skills',
    icon: Users,
  },
  {
    title: 'Communication',
    icon: HeartHandshake,
  },
  {
    title: 'Creativity & Innovation',
    icon: Sparkles,
  },
]

export default function CurriculumPage() {
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
              Curriculum
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">
              A balanced academic framework focused on conceptual learning,
              holistic development, creativity, and academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="h-6 w-6 text-slate-700" />

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  CBSE Curriculum Framework
                </h2>
              </div>

              <div className="space-y-5 text-slate-600 leading-8">
                <p>
                  The school follows the curriculum prescribed by the Central
                  Board of Secondary Education (CBSE), designed to promote
                  academic excellence, conceptual understanding, and skill-based
                  learning.
                </p>

                <p>
                  The curriculum is structured to support intellectual,
                  emotional, physical, and social development across all stages
                  of education from Kindergarten to Senior Secondary.
                </p>

                <p>
                  The academic framework aligns with modern educational
                  practices and encourages analytical thinking, creativity,
                  communication, and problem-solving skills.
                </p>
              </div>
            </div>

            <Card className="rounded-3xl border border-slate-200 shadow-none">
              <CardContent className="p-10">
                <div className="grid gap-6">
                  {[
                    'Conceptual understanding',
                    'Skill-based learning',
                    'Academic excellence',
                    'Holistic development',
                    'National Education Policy alignment',
                    'Continuous evaluation',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Target className="h-5 w-5 text-slate-700" />
                      </div>

                      <p className="text-slate-700 font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-3xl border border-slate-200 shadow-none bg-white">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-5">
                <Lightbulb className="h-6 w-6 text-slate-700" />

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Academic Philosophy
                </h2>
              </div>

              <div className="space-y-5 text-slate-600 leading-8">
                <p>
                  The school believes in nurturing confident, responsible, and
                  compassionate learners through a balanced educational
                  approach.
                </p>

                <p>
                  Equal importance is given to academics, discipline,
                  creativity, communication, values, and life skills to support
                  the all-round development of every student.
                </p>

                <p>
                  Students are encouraged to think independently, participate
                  actively, and develop a lifelong passion for learning.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="h-6 w-6 text-slate-700" />

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Learning Methodology
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
              The curriculum is delivered through engaging and student-centered
              teaching practices.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {methodologies.map((item) => (
              <Card
                key={item}
                className="rounded-3xl border border-slate-200 shadow-none"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-slate-700" />
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

      {/* Assessment */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Assessment */}
            <Card className="rounded-3xl border border-slate-200 shadow-none bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardCheck className="h-6 w-6 text-slate-700" />

                  <h2 className="text-2xl font-bold text-slate-900">
                    Assessment & Evaluation
                  </h2>
                </div>

                <div className="space-y-4">
                  {assessments.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Target className="h-4 w-4 text-slate-700" />
                      </div>

                      <p className="text-slate-700 leading-7">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Co-curricular */}
            <Card className="rounded-3xl border border-slate-200 shadow-none bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="h-6 w-6 text-slate-700" />

                  <h2 className="text-2xl font-bold text-slate-900">
                    Co-Curricular Integration
                  </h2>
                </div>

                <div className="space-y-4">
                  {coCurricular.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-4 w-4 text-slate-700" />
                      </div>

                      <p className="text-slate-700 leading-7">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-3xl border border-slate-200 shadow-none">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-5">
                <MonitorSmartphone className="h-6 w-6 text-slate-700" />

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Technology Integration
                </h2>
              </div>

              <div className="space-y-5 text-slate-600 leading-8">
                <p>
                  Technology-enabled learning is integrated into classroom
                  teaching to enhance student engagement and conceptual clarity.
                </p>

                <p>
                  Smart classrooms, digital learning tools, audio-visual
                  resources, and computer education are incorporated into the
                  academic process wherever appropriate.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Student Development */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <Users className="h-6 w-6 text-slate-700" />

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Student Development
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
              The curriculum supports the overall growth and personality
              development of students.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {studentDevelopment.map((item) => {
              const Icon = item.icon

              return (
                <Card
                  key={item.title}
                  className="rounded-3xl border border-slate-200 shadow-none bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto">
                      <Icon className="h-7 w-7 text-slate-700" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-3xl border border-slate-200 shadow-none bg-slate-50">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900">
                Need More Academic Information?
              </h2>

              <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-8">
                Contact the academic office for curriculum details, academic
                guidance, and learning support information.
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