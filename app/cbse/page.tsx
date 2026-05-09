'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { ContentCard } from '@/components/content-card'
import { CTASection } from '@/components/cta-section'
import { Check, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'CBSE Board | National Public School Kaloor',
  description: 'Learn about our CBSE board affiliation and curriculum at NPS Kaloor.',
}

export default function CBSEPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="CBSE Affiliation"
        subtitle="Central Board of Secondary Education"
      />

      {/* CBSE Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About CBSE"
            subtitle="Understanding our board affiliation"
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Why CBSE?</h3>
              <ul className="space-y-4">
                {[
                  'Nationally recognized curriculum and standards',
                  'Balanced focus on academics and holistic development',
                  'Emphasis on conceptual learning over rote memorization',
                  'Preparation for competitive entrance examinations',
                  'Uniform standards across the country',
                  'Modern teaching methodologies and assessment',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">NPS Kaloor CBSE</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                National Public School, Kaloor is a proud CBSE-affiliated institution committed to providing quality education that meets the highest standards. Our curriculum is designed to develop critical thinking, problem-solving skills, and character.
              </p>
              <p className="text-foreground leading-relaxed">
                We implement CBSE guidelines while maintaining flexibility to incorporate innovative teaching methods and local cultural values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Curriculum Structure"
            subtitle="Classes and subjects under CBSE"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stage: 'Primary (Classes 1-5)',
                subjects: ['English', 'Mathematics', 'Environmental Science', 'Hindi', 'Computer Science'],
              },
              {
                stage: 'Upper Primary (Classes 6-8)',
                subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Computer Science'],
              },
              {
                stage: 'Secondary (Classes 9-12)',
                subjects: ['English', 'Hindi', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Electives'],
              },
            ].map((level, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {level.stage}
                </h3>
                <ul className="space-y-2">
                  {level.subjects.map((subject, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Pattern */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Assessment Pattern"
            subtitle="CBSE evaluation methods and examinations"
          />

          <div className="mt-12 space-y-6">
            {[
              {
                title: 'Continuous & Comprehensive Evaluation (CCE)',
                description:
                  'Regular assessment throughout the year including formative and summative evaluations to track student progress.',
              },
              {
                title: 'Board Examinations',
                description:
                  'Class X and XII board exams conducted by CBSE with emphasis on conceptual understanding and application skills.',
              },
              {
                title: 'Internal Assessment',
                description:
                  'School-based assessment including classwork, projects, practicals, and written tests.',
              },
              {
                title: 'Practical Examinations',
                description:
                  'Hands-on practical work in Science, Computer Science, and other subjects with external evaluation.',
              },
            ].map((item, i) => (
              <ContentCard
                key={i}
                icon={<BookOpen size={28} />}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Exam Schedule */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Important CBSE Dates"
            subtitle="Key examination and submission deadlines"
          />

          <div className="mt-12 bg-white rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Event
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Timeline
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      event: 'Curriculum Release',
                      timeline: 'April-May',
                      details: 'CBSE releases curriculum and guidelines for academic year',
                    },
                    {
                      event: 'Unit Tests',
                      timeline: 'Throughout Year',
                      details: 'Regular school-based assessments and unit tests',
                    },
                    {
                      event: 'Half Yearly Exams',
                      timeline: 'September-October',
                      details: 'Mid-year examinations for Classes 1-12',
                    },
                    {
                      event: 'Annual Exams (Board)',
                      timeline: 'February-March',
                      details: 'CBSE board exams for Class X and XII',
                    },
                    {
                      event: 'Results Declaration',
                      timeline: 'April-May',
                      details: 'Board results and annual exam results announced',
                    },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 font-medium text-foreground">
                        {row.event}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{row.timeline}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">
                        {row.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CBSE Benefits */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Benefits of CBSE at NPS"
            subtitle="Why choose our CBSE school"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              'Nationally recognized curriculum',
              'Mobility across CBSE schools',
              'Uniform evaluation standards',
              'JEE & NEET entrance exam preparation',
              'Focus on conceptual learning',
              'Digital learning integration',
              'Project-based learning',
              'Research opportunities',
              'Competitive exam readiness',
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-background rounded-lg p-6 border border-border flex items-start gap-3"
              >
                <Check size={20} className="text-secondary flex-shrink-0 mt-1" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            title="Join Our CBSE School"
            description="Provide your child with quality CBSE education and holistic development"
            buttonText="Enquire Now"
          />
        </div>
      </section>

      <Footer />
    </>
  )
}
