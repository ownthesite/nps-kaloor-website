import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { ContentCard } from '@/components/content-card'
import { EnquiryForm } from '@/components/enquiry-form'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Admissions | National Public School Kaloor',
  description: 'Learn about our admission process, eligibility, and how to apply at NPS Kaloor.',
}

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Admissions"
        subtitle="Join the NPS Kaloor family"
      />

      {/* Admission Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Open Admissions"
            subtitle="We welcome applications from students across all grades"
          />

          <div className="mt-12 bg-background rounded-xl p-8 border border-border">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              National Public School, Kaloor invites applications for admission to classes Nursery through XII. We seek talented, motivated students who are passionate about learning and committed to becoming responsible citizens.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              Our admission process is transparent and fair, focusing on identifying students who align with our values and academic standards. We believe in inclusive education and welcome students from diverse backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Eligibility Criteria"
            subtitle="Requirements for admission to different classes"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                stage: 'Nursery & LKG',
                criteria: ['Age 2.5-3 years for Nursery', 'Age 3.5-4 years for LKG', 'Basic social and communication skills'],
              },
              {
                stage: 'UKG & Classes 1-5',
                criteria: ['Age appropriate for the class', 'Previous academic records', 'Satisfactory performance in entrance assessment'],
              },
              {
                stage: 'Classes 6-8',
                criteria: ['Previous school records and performance', 'Aptitude assessment in English and Mathematics', 'Interview with parents'],
              },
              {
                stage: 'Classes 9-12',
                criteria: ['Previous academic records', 'CBSE board exam scores (if applicable)', 'Subject selection compatibility', 'Personal interview'],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {item.stage}
                </h3>
                <ul className="space-y-3">
                  {item.criteria.map((criterion, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Admission Process"
            subtitle="Simple and transparent steps to enroll"
          />

          <div className="mt-12">
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Submit Application',
                  description: 'Fill out the online admission form with required details and documents',
                },
                {
                  step: '02',
                  title: 'Document Verification',
                  description: 'Submit birth certificate, previous school records, and other required documents',
                },
                {
                  step: '03',
                  title: 'Entrance Assessment',
                  description: 'Students take aptitude test in relevant subjects (for Classes 1+)',
                },
                {
                  step: '04',
                  title: 'Interview',
                  description: 'Student and parent interview with school staff to understand fit and expectations',
                },
                {
                  step: '05',
                  title: 'Admission Decision',
                  description: 'Results declared and selected students receive admission letter',
                },
                {
                  step: '06',
                  title: 'Confirmation',
                  description: 'Pay admission fee and complete enrollment formalities',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white font-semibold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Required Documents"
            subtitle="Please keep these documents ready for admission"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              'Birth Certificate',
              'Previous School Records',
              'Transfer Certificate (if applicable)',
              'Progress Report Card',
              'Vaccination Certificate',
              'Passport-sized Photographs',
              'Parent/Guardian ID Proof',
              'Address Proof',
              'Aadhaar Card (if available)',
            ].map((doc, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 border border-border flex items-center gap-3"
              >
                <Check size={20} className="text-secondary flex-shrink-0" />
                <span className="text-foreground">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Information */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Fee Information"
            subtitle="Transparent and competitive fee structure"
          />

          <div className="mt-12 bg-background rounded-xl p-8 border border-border">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Admission Fee (One-time)
                </h3>
                <p className="text-muted-foreground">
                  Non-refundable fee charged at the time of admission. Amount varies by class level.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Monthly Tuition Fee
                </h3>
                <p className="text-muted-foreground">
                  Payable monthly from the first month. Includes tuition, activities, and facility usage.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Additional Charges
                </h3>
                <p className="text-muted-foreground">
                  Optional charges for transport, school uniform, books, and special programs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Scholarship Programs
                </h3>
                <p className="text-muted-foreground">
                  Need-based and merit-based scholarships available for deserving students. Contact admissions office for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Common queries about admissions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              {
                q: 'When does the admission cycle begin?',
                a: 'Admissions typically open from October-November for the next academic year. Please check our website for exact dates.',
              },
              {
                q: 'What is the student-teacher ratio?',
                a: 'Our average student-teacher ratio is 25:1 to ensure personalized attention and effective learning.',
              },
              {
                q: 'Do you provide transportation?',
                a: 'Yes, we offer school transport with GPS tracking and trained staff. Transport fee is additional.',
              },
              {
                q: 'Is there a school uniform policy?',
                a: 'Yes, students are required to wear the prescribed school uniform. Details are provided after admission.',
              },
              {
                q: 'What about extracurricular activities?',
                a: 'Participation in sports and clubs is encouraged. These are part of our holistic education approach.',
              },
              {
                q: 'How often are parent-teacher meetings held?',
                a: 'Regular PTMs are scheduled quarterly, and parents can also request meetings with teachers as needed.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  {item.q}
                </h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-16 sm:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Enquire About Admissions"
            subtitle="Submit your details and we'll contact you soon"
          />
          <div className="mt-12 bg-background p-8 rounded-xl border border-border">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
