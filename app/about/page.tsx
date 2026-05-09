'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { ContentCard } from '@/components/content-card'
import { CTASection } from '@/components/cta-section'

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="About National Public School"
        subtitle="Pioneering education since 1996"
      />

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background rounded-xl p-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-foreground text-lg leading-relaxed">
                To provide quality education that develops intellectually competent, morally upright, and socially responsible citizens who can contribute meaningfully to society.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-foreground text-lg leading-relaxed">
                To be a premier educational institution recognized for academic excellence, innovation, and the holistic development of students in a nurturing and inclusive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Values */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Journey"
            subtitle="Three decades of educational excellence"
          />

          <div className="mt-12 bg-white rounded-xl p-8 border border-border">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              National Public School, Kaloor was established in 1996 with a vision to provide quality education to the youth of our community. Over the past 28 years, we have grown into one of the premier educational institutions in Kerala, maintaining the highest standards of academics and character development.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              Our journey has been marked by consistent growth, innovation in teaching methodologies, and a steadfast commitment to our core values. We take pride in our alumni who have gone on to achieve excellence in various fields of endeavor.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Core Values"
            subtitle="Principles that guide everything we do"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'Integrity',
                description: 'Honesty and moral principles in all our actions and relationships',
              },
              {
                title: 'Excellence',
                description: 'Commitment to the highest standards in academics and conduct',
              },
              {
                title: 'Inclusivity',
                description: 'Welcoming and supporting students from all backgrounds',
              },
              {
                title: 'Innovation',
                description: 'Embracing modern teaching methods and continuous improvement',
              },
            ].map((value, i) => (
              <ContentCard
                key={i}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Leadership Team"
            subtitle="Experienced educators leading our institution"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                title: 'Principal',
                description: 'PhD in Education with 25 years of experience in school administration',
              },
              {
                name: 'Mrs. Priya Sharma',
                title: 'Vice Principal - Academics',
                description: 'M.A. in English, specializing in curriculum development and faculty training',
              },
              {
                name: 'Mr. Arun Menon',
                title: 'Vice Principal - Administration',
                description: 'M.Com. with expertise in institutional management and student welfare',
              },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            title="Join the NPS Family"
            description="Be part of our community of learners and achievers"
            buttonText="Start Enquiry"
          />
        </div>
      </section>

      <Footer />
    </>
  )
}
