'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section-header'
import { ContentCard } from '@/components/content-card'
import { EnquiryForm } from '@/components/enquiry-form'
import { CTASection } from '@/components/cta-section'
import { FadeUp } from '@/components/animations/fade-up'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { StatCounter } from '@/components/animations/stat-counter'
import { BookOpen, Users, Trophy, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-classroom.jpg"
            alt="School campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Excellence in Education & Character
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nurturing young minds with quality academics and values-based education
          </p>
          <button
            onClick={() => {
              const form = document.getElementById('enquiry-form')
              form?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Start Enquiry
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.15} delayChildren={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
              <StaggerItem>
                <StatCounter number={28} label="Years of Excellence" suffix="+" />
              </StaggerItem>
              <StaggerItem>
                <StatCounter number={2000} label="Students" suffix="+" />
              </StaggerItem>
              <StaggerItem>
                <StatCounter number={150} label="Faculty Members" suffix="+" />
              </StaggerItem>
              <StaggerItem>
                <StatCounter number={50} label="Facilities" suffix="+" />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              title="Why Choose NPS Kaloor"
              subtitle="A comprehensive approach to academic excellence and personal growth"
            />
          </FadeUp>

          <StaggerContainer staggerDelay={0.12} delayChildren={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <StaggerItem>
                <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                  <ContentCard
                    icon={<BookOpen size={28} />}
                    title="Quality Academics"
                    description="CBSE curriculum with experienced faculty ensuring holistic learning and conceptual clarity"
                  />
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                  <ContentCard
                    icon={<Users size={28} />}
                    title="Holistic Development"
                    description="Focus on academics, sports, arts, and character building for well-rounded individuals"
                  />
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                  <ContentCard
                    icon={<Trophy size={28} />}
                    title="Excellence & Achievement"
                    description="Consistent academic performance with emphasis on competitive exam preparation"
                  />
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                  <ContentCard
                    icon={<Sparkles size={28} />}
                    title="Modern Infrastructure"
                    description="State-of-the-art facilities including labs, library, sports complex, and digital classrooms"
                  />
                </motion.div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Academics Highlight */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <SectionHeader
                  title="Academic Excellence"
                  subtitle="Curriculum designed for success"
                  centered={false}
                />
                <StaggerContainer staggerDelay={0.1} delayChildren={0.2}>
                  <div className="mt-8 space-y-6">
                    <StaggerItem>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          CBSE Curriculum
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Following CBSE syllabus with emphasis on conceptual understanding and practical application
                        </p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Experienced Faculty
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Dedicated teachers with advanced qualifications and years of teaching experience
                        </p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Technology Integration
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Digital learning tools and smart classrooms to enhance teaching and learning
                        </p>
                      </div>
                    </StaggerItem>
                  </div>
                </StaggerContainer>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <motion.img
                  src="/campus.jpg"
                  alt="Academic facilities"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              title="World-Class Facilities"
              subtitle="Providing everything students need for excellence"
            />
          </FadeUp>

          <StaggerContainer staggerDelay={0.1} delayChildren={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: 'Science Laboratories',
                  description: 'Well-equipped labs for physics, chemistry, and biology with modern apparatus',
                },
                {
                  title: 'Computer Lab',
                  description: 'Latest computers and software for computer science and digital literacy',
                },
                {
                  title: 'Library',
                  description: 'Extensive collection of books, digital resources, and reading materials',
                },
                {
                  title: 'Sports Complex',
                  description: 'Basketball court, badminton, volleyball, and outdoor play areas',
                },
                {
                  title: 'Auditorium',
                  description: 'State-of-the-art venue for events, assemblies, and performances',
                },
                {
                  title: 'Cafeteria',
                  description: 'Nutritious meals with variety of healthy food options for students',
                },
              ].map((facility, i) => (
                <StaggerItem key={i}>
                  <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                    <ContentCard
                      title={facility.title}
                      description={facility.description}
                    />
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <CTASection
              title="Ready to Join NPS Kaloor?"
              description="Begin your journey towards academic excellence and personal development with us"
              buttonText="Enquire Now"
              onButtonClick={() => {
                const form = document.getElementById('enquiry-form')
                form?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          </FadeUp>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-16 sm:py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              title="Enquire About Admissions"
              subtitle="Fill in your details and we'll get back to you soon"
            />
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <EnquiryForm />
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  )
}
