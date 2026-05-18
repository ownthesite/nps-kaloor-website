'use client'

import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  FileText,
  GraduationCap,
  Shirt,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { EnquiryForm } from '@/components/enquiry-form'



const requiredDocuments = [
  'Photo copy of Birth Certificate',
  'Passport-size photograph affixed on application form',
  'Transfer Certificate (if applicable)',
]

const schoolHours = [
  {
    days: 'Monday – Thursday',
    timing: '9:00 AM – 3:30 PM',
  },
  {
    days: 'Friday',
    timing: '9:00 AM – 3:40 PM',
  },
]

const uniforms = [
  {
    classes: 'Classes I – III',
    boys: 'Shorts & Shirt',
    girls: 'Pinafore with Shirt',
  },
  {
    classes: 'Classes IV – VI',
    boys: 'Shirt & Two Pleated Pants',
    girls: 'Sleeveless Coat with Full Sleeve Shirt & Pants',
  },
  {
    classes: 'Classes VII – X',
    boys: 'Shirt & Two Pleated Pants',
    girls: 'Churidhar with Coat',
  },
]

export default function AdmissionsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-slate-100 text-slate-700 hover:bg-slate-100">
              Academic Year 2026–27
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Admissions
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">
              Information regarding admission procedure, eligibility,
              supporting documents, school timings, and uniform details.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Procedure */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="h-6 w-6 text-slate-700" />

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Admission Procedure
              </h2>
            </div>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Parents seeking admission for their ward to any class are
                required to fill in the application form available along with
                the prospectus and submit it at the school office on or before
                the due date.
              </p>

              <p>
                Registration does not guarantee admission. Admission will be
                strictly subject to seat availability and eligibility of the
                student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility + Documents */}
      <section className="pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-2">
          {/* Eligibility */}
          <Card className="rounded-3xl border border-slate-200 shadow-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <CalendarDays className="h-6 w-6 text-slate-700" />

                <h2 className="text-2xl font-bold text-slate-900">
                  Eligibility
                </h2>
              </div>

              <p className="text-slate-600 leading-8">
                For admission to Class I, the child should have completed the
                age of 6 years at the time of admission.
              </p>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card className="rounded-3xl border border-slate-200 shadow-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <FileText className="h-6 w-6 text-slate-700" />

                <h2 className="text-2xl font-bold text-slate-900">
                  Required Documents
                </h2>
              </div>

              <ul className="space-y-4">
                {requiredDocuments.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <Check
                      size={20}
                      className="text-slate-700 flex-shrink-0 mt-0.5"
                    />

                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-3xl border border-slate-200 shadow-none overflow-hidden">
            <CardContent className="p-0">
              <div className="p-8 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <Clock3 className="h-6 w-6 text-slate-700" />

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    School Hours
                  </h2>
                </div>

                <p className="text-slate-600">
                  School timings for Classes I – X.
                </p>
              </div>

              <div className="divide-y divide-slate-200">
                {schoolHours.map((item) => (
                  <div
                    key={item.days}
                    className="grid sm:grid-cols-2 gap-4 px-8 py-6"
                  >
                    <div>
                      <p className="text-sm text-slate-500">
                        Working Days
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-slate-900">
                        {item.days}
                      </h3>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Timing
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-slate-900">
                        {item.timing}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Uniform */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Shirt className="h-6 w-6 text-slate-700" />

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Uniform Information
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {uniforms.map((uniform) => (
              <Card
                key={uniform.classes}
                className="rounded-3xl border border-slate-200 shadow-none bg-white"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900">
                    {uniform.classes}
                  </h3>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-sm text-slate-500">Boys</p>

                      <p className="mt-1 text-slate-700 leading-7">
                        {uniform.boys}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Girls</p>

                      <p className="mt-1 text-slate-700 leading-7">
                        {uniform.girls}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 rounded-3xl border border-slate-200 shadow-none bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-900">
                Additional Uniform Information
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                Students are required to wear black shoes with brown socks.
                White pants and white house T-shirts are to be worn on
                Wednesdays.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enquiry Form */}
      <section
        id="enquiry-form"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Enquire About Admissions
            </h2>

            <p className="mt-4 text-slate-600 leading-8">
              Submit your details and we&apos;ll contact you soon.
            </p>
          </div>

          <div className="mt-12 bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-3xl border border-slate-200 shadow-none bg-slate-50">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900">
                Need Assistance With Admissions?
              </h2>

              <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-8">
                For admission enquiries and further assistance, please contact
                the school office.
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
