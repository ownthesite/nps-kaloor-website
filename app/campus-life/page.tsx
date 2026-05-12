

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { ContentCard } from '@/components/content-card'
import { CTASection } from '@/components/cta-section'

export const metadata = {
  title: 'Campus Life | National Public School Kaloor',
  description: 'Explore student life, activities, and experiences at NPS Kaloor.',
}

export default function CampusLifePage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Campus Life at NPS"
        subtitle="Where learning meets growth and friendship"
      />

      {/* Life Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Life at National Public School"
            subtitle="More than just academics - building lifelong friendships and memories"
          />

          <p className="mt-8 text-lg text-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Our campus is a vibrant community where students not only excel academically but also develop as responsible citizens. Through various activities, sports, clubs, and cultural programs, students discover their passions and build lasting relationships.
          </p>
        </div>
      </section>

      {/* Sports & Athletics */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Sports & Athletics"
            subtitle="Building champions both in and out of the field"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'Cricket',
                description: 'Professional coaching with indoor and outdoor facilities',
              },
              {
                title: 'Basketball',
                description: 'Training programs with modern court facilities',
              },
              {
                title: 'Badminton',
                description: 'Expert coaches and championship-standard courts',
              },
              {
                title: 'Football',
                description: 'Grassroots development and competitive teams',
              },
              {
                title: 'Volleyball',
                description: 'Team sports training and inter-school competitions',
              },
              {
                title: 'Athletics',
                description: 'Track and field events with professional training',
              },
              {
                title: 'Swimming',
                description: 'Aquatics program with certified instructors',
              },
              {
                title: 'Martial Arts',
                description: 'Karate and self-defense training programs',
              },
            ].map((sport, i) => (
              <ContentCard
                key={i}
                title={sport.title}
                description={sport.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Clubs & Organizations"
            subtitle="Explore your interests and discover your passion"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'Debate & Public Speaking',
                description:
                  'Develop communication skills through debates, model parliament, and public speaking competitions.',
              },
              {
                name: 'Science Club',
                description:
                  'Conduct experiments, science fairs, and projects that go beyond classroom curriculum.',
              },
              {
                name: 'Literary Society',
                description:
                  'Creative writing, poetry, storytelling, and literary competitions for budding authors.',
              },
              {
                name: 'Eco Club',
                description:
                  'Environmental awareness initiatives including campus greening and sustainability projects.',
              },
              {
                name: 'Technology Club',
                description:
                  'Coding, robotics, coding workshops, and exploration of emerging technologies.',
              },
              {
                name: 'Performing Arts',
                description:
                  'Music, dance, and theater productions showcasing student talents throughout the year.',
              },
            ].map((club, i) => (
              <ContentCard
                key={i}
                title={club.name}
                description={club.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Events & Celebrations */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Annual Events"
            subtitle="Celebrating achievements and creating lasting memories"
          />

          <div className="mt-12 space-y-6">
            {[
              {
                title: 'Annual Day',
                description:
                  'Grand celebration featuring cultural programs, awards, and recognition of student achievements',
              },
              {
                title: 'Science & Technology Fair',
                description:
                  'Student projects, innovations, and demonstrations showcasing scientific thinking',
              },
              {
                title: 'Sports Day',
                description:
                  'Inter-house competitions, athletics, and celebration of sporting excellence',
              },
              {
                title: 'Cultural Fest',
                description:
                  'Celebrations of festivals with traditional performances, food, and cultural programs',
              },
              {
                title: 'Foundation Day',
                description:
                  'Commemorating school establishment with alumni meetings and heritage celebrations',
              },
              {
                title: 'Farewell Function',
                description:
                  'Emotional yet joyful send-off for graduating students with performances and memories',
              },
            ].map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Student Support Services"
            subtitle="Comprehensive support for holistic development"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: 'Academic Counseling',
                description:
                  'Guidance for subject selection, study strategies, and academic improvement',
              },
              {
                title: 'Career Counseling',
                description:
                  'Professional guidance for career planning and entrance exam preparation',
              },
              {
                title: 'Mental Health Support',
                description:
                  'Student counselors available for emotional well-being and stress management',
              },
              {
                title: 'Health & Safety',
                description:
                  'On-campus medical facility with trained staff and safety protocols',
              },
            ].map((service, i) => (
              <ContentCard
                key={i}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Campus Infrastructure */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Campus Facilities"
            subtitle="State-of-the-art infrastructure for learning and growth"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              'Modern Classrooms',
              'Science Labs',
              'Computer Lab',
              'Library',
              'Auditorium',
              'Sports Complex',
              'Cafeteria',
              'Medical Room',
              'Playground',
            ].map((facility, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-foreground">{facility}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            title="Experience Campus Life"
            description="Join a vibrant community of learners and achievers"
            buttonText="Schedule a Visit"
          />
        </div>
      </section>

      <Footer />
    </>
  )
}
