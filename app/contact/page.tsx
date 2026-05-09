import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { EnquiryForm } from '@/components/enquiry-form'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | National Public School Kaloor',
  description: 'Get in touch with National Public School Kaloor. Find our contact information, location, and hours.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Contact Us"
        subtitle="We're here to help and answer any questions"
      />

      {/* Contact Information */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin size={32} />,
                title: 'Location',
                details: ['Kaloor', 'Kochi, Kerala', 'India'],
              },
              {
                icon: <Phone size={32} />,
                title: 'Phone',
                details: ['+91-484-2396789', '+91-484-2396790', 'Available 9 AM - 5 PM'],
              },
              {
                icon: <Mail size={32} />,
                title: 'Email',
                details: [
                  'info@npskaloor.edu.in',
                  'admissions@npskaloor.edu.in',
                  'We respond within 24 hours',
                ],
              },
              {
                icon: <Clock size={32} />,
                title: 'School Hours',
                details: [
                  'Mon - Fri: 8:00 AM - 3:30 PM',
                  'Saturday: 8:00 AM - 12:30 PM',
                  'Sunday: Closed',
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-6 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 text-secondary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <div className="space-y-2">
                  {item.details.map((detail, j) => (
                    <p key={j} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Visit Our Campus"
            subtitle="Located in the heart of Kaloor, Kochi"
          />

          <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-96 bg-muted border border-border flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin size={48} className="mx-auto mb-4 opacity-50" />
              <p>Interactive map coming soon</p>
              <p className="text-sm">NPS Kaloor Campus, Kaloor, Kochi, Kerala</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeader
                title="Send us a Message"
                subtitle="We'll get back to you as soon as possible"
                centered={false}
              />
              <div className="mt-8 bg-background p-6 rounded-xl border border-border">
                <EnquiryForm />
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <SectionHeader
                title="Quick Links"
                subtitle="Frequently accessed information"
                centered={false}
              />

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: 'Admission Queries',
                    description:
                      'Contact our admissions team for questions about enrolling at NPS Kaloor.',
                    contact: 'admissions@npskaloor.edu.in',
                  },
                  {
                    title: 'Academic Support',
                    description:
                      'Reach out for any academic concerns or curriculum-related questions.',
                    contact: 'academics@npskaloor.edu.in',
                  },
                  {
                    title: 'General Inquiries',
                    description:
                      'For other questions or feedback, please contact our main office.',
                    contact: 'info@npskaloor.edu.in',
                  },
                  {
                    title: 'Emergency Contact',
                    description:
                      'For urgent matters outside office hours, call our emergency line.',
                    contact: '+91-484-2396789',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-background rounded-lg p-6 border border-border">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <a
                      href={
                        item.contact.includes('@')
                          ? `mailto:${item.contact}`
                          : `tel:${item.contact}`
                      }
                      className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                    >
                      {item.contact}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: 'What is the best time to visit the school?',
                a: 'School visits are best scheduled during non-class hours. Please contact admissions to schedule a campus tour.',
              },
              {
                q: 'How can I get admission forms?',
                a: 'Admission forms are available on our website and at the admissions office. You can also request them via email.',
              },
              {
                q: 'What languages are taught?',
                a: 'We teach English as the main medium of instruction. Regional languages and other languages are offered as per CBSE curriculum.',
              },
              {
                q: 'Do you offer scholarship programs?',
                a: 'Yes, we offer need-based and merit-based scholarships. Contact our admissions office for eligibility criteria.',
              },
            ].map((item, i) => (
              <details
                key={i}
                className="bg-white rounded-lg border border-border overflow-hidden"
              >
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-background transition-colors flex justify-between items-center">
                  {item.q}
                  <span className="text-secondary">+</span>
                </summary>
                <div className="px-6 py-4 bg-background border-t border-border text-muted-foreground">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
