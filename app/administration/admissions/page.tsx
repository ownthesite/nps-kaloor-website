'use client'

import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  FileText,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  Shirt,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { EnquiryForm } from '@/components/enquiry-form'
import { FadeUp } from '@/components/animations/fade-up'
import { SectionHeader } from '@/components/section-header'



const requiredDocuments = [
  'Photo copy of Birth Certificate',
  'Passport-size photograph affixed on application form',
  'Transfer Certificate (if applicable)',
  'Aadhaar Card',
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

const uniforms = {
  boys: [
    {
      classes: 'Classes I – III',
      uniform: 'Shorts & Shirt',
    },
    {
      classes: 'Classes IV – X',
      uniform: 'Shirt & Two Pleated Pants',
    },
  ],

  girls: [
    {
      classes: 'Classes I – IV',
      uniform: 'Pinafore with Shirt',
    },
    {
      classes: 'Classes V – X',
      uniform: 'Sleeveless Coat with Full Sleeve Shirt & Pants',
    },
  ],
}

export default function AdmissionsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6]">
        {/* Glow Effects */}
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
              Admissions
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore admission guidelines, eligibility criteria, required documents,
              school timings, fee details, and everything parents need for a smooth
              admission process at National Public School Kaloor.
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

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Boys */}
            <Card className="rounded-3xl border border-slate-200 shadow-none bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">Boys</h3>

                <div className="mt-6 space-y-6">
                  {uniforms.boys.map((item) => (
                    <div
                      key={item.classes}
                      className="border-b border-slate-100 pb-5 last:border-none last:pb-0"
                    >
                      <p className="text-sm font-medium text-slate-500">
                        {item.classes}
                      </p>

                      <p className="mt-2 text-slate-700 leading-7">
                        {item.uniform}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Girls */}
            <Card className="rounded-3xl border border-slate-200 shadow-none bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">Girls</h3>

                <div className="mt-6 space-y-6">
                  {uniforms.girls.map((item) => (
                    <div
                      key={item.classes}
                      className="border-b border-slate-100 pb-5 last:border-none last:pb-0"
                    >
                      <p className="text-sm font-medium text-slate-500">
                        {item.classes}
                      </p>

                      <p className="mt-2 text-slate-700 leading-7">
                        {item.uniform}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
        id="contact-info"
        className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-20 sm:py-28"
      >
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-200/50 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              title="Get in Touch"
              subtitle="Reach out to us for admissions and school enquiries"
            />
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="group relative mt-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60 sm:mt-12 sm:p-12">

              {/* Decorative Glow */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#f9b916]/10 blur-[40px] transition-all duration-500 group-hover:bg-[#f9b916]/20" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-slate-300/20 blur-[40px]" />

              {/* Content */}
              <div className="relative z-10 grid gap-8 sm:grid-cols-3">

                {/* Website */}
                <a
                  href="https://www.npskaloor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f9b916]/40 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f9b916]/10 text-[#0c2d83]">
                    <Globe className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Website
                  </h3>

                  <p className="mt-2 break-all text-sm text-slate-600">
                    www.npskaloor.com
                  </p>
                </a>

                {/* Email */}
                <a
                  href="mailto:nps.kaloor@gmail.com"
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f9b916]/40 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f9b916]/10 text-[#0c2d83]">
                    <Mail className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Email
                  </h3>

                  <p className="mt-2 break-all text-sm text-slate-600">
                    nps.kaloor@gmail.com
                  </p>
                </a>

                {/* Phone */}
                <a
                  href="tel:+914842539088"
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f9b916]/40 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f9b916]/10 text-[#0c2d83]">
                    <Phone className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Contact Number
                  </h3>

                  <div className="mt-3 space-y-1">
                    <p className="text-sm font-medium text-slate-600">
                      +91 484 253 9088
                    </p>

                    <p className="text-sm font-medium text-slate-600">
                      +91 75609 81234
                    </p>
                  </div>
                </a>

              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  )
}
