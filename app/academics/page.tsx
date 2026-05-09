'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { ContentCard } from '@/components/content-card'
import { CTASection } from '@/components/cta-section'
import { BookOpen, Users, Lightbulb } from 'lucide-react'

export default function AcademicsPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Our Academic Programs"
        subtitle="Excellence through innovation and dedication"
      />

      {/* Curriculum Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="CBSE Curriculum"
            subtitle="Following the Central Board of Secondary Education standards"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                stage: 'Primary (Classes 1-5)',
                description:
                  'Foundation years focusing on fundamental concepts, language skills, and mathematical thinking with interactive learning methods.',
              },
              {
                stage: 'Upper Primary (Classes 6-8)',
                description:
                  'Building on foundations with subject-specific learning, critical thinking, and preparation for secondary exams.',
              },
              {
                stage: 'Secondary (Classes 9-12)',
                description:
                  'Advanced academics with specialized streams, competitive exam preparation, and career guidance services.',
              },
            ].map((stage, i) => (
              <ContentCard
                key={i}
                title={stage.stage}
                description={stage.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Teaching Approach"
            subtitle="Innovation and excellence in every classroom"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ContentCard
              icon={<BookOpen size={28} />}
              title="Conceptual Learning"
              description="Moving beyond rote learning to develop deep understanding and application of concepts"
            />
            <ContentCard
              icon={<Users size={28} />}
              title="Interactive Classes"
              description="Student-centered learning with discussions, group work, and collaborative projects"
            />
            <ContentCard
              icon={<Lightbulb size={28} />}
              title="Research & Discovery"
              description="Encouraging curiosity and independent thinking through hands-on learning experiences"
            />
          </div>
        </div>
      </section>

      {/* Subject Highlights */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Core Subjects"
            subtitle="Comprehensive curriculum covering all key areas"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              'Mathematics',
              'English',
              'Science (Physics, Chemistry, Biology)',
              'Social Studies',
              'Information Technology',
              'Physical Education',
            ].map((subject, i) => (
              <div key={i} className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-primary">{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Beyond Academics"
            subtitle="Comprehensive development through activities"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'Sports',
                items: ['Cricket', 'Badminton', 'Football', 'Volleyball'],
              },
              {
                title: 'Arts',
                items: ['Music', 'Dance', 'Painting', 'Theater'],
              },
              {
                title: 'Clubs',
                items: ['Debate', 'Science Club', 'Literary', 'Environment'],
              },
              {
                title: 'Programs',
                items: ['Leadership', 'Community Service', 'Workshops', 'Camps'],
              },
            ].map((activity, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {activity.title}
                </h3>
                <ul className="space-y-2">
                  {activity.items.map((item, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Assessment Methods"
            subtitle="Comprehensive evaluation of student progress"
          />

          <div className="mt-12 bg-background rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Continuous & Comprehensive Evaluation
                </h3>
                <p className="text-muted-foreground">
                  Regular assessments including quizzes, assignments, projects, and practical work to evaluate student learning continuously.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Periodic Examinations
                </h3>
                <p className="text-muted-foreground">
                  Term exams and unit tests aligned with CBSE standards to measure academic progress and readiness.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Feedback & Counseling
                </h3>
                <p className="text-muted-foreground">
                  Regular parent-teacher meetings and student counseling to ensure holistic development and address concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            title="Experience Academic Excellence"
            description="Discover how our curriculum and teaching methods can help your child succeed"
            buttonText="Learn More"
          />
        </div>
      </section>

      <Footer />
    </>
  )
}
