import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section-header'
import { ContentCard } from '@/components/content-card'
import { EnquiryForm } from '@/components/enquiry-form'
import { CTASection } from '@/components/cta-section'
import { BookOpen, Users, Trophy, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'National Public School Kaloor | Premium CBSE Education',
  description:
    'Discover premium CBSE education at National Public School Kaloor. Established excellence in academics, sports, and holistic development.',
}

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
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { label: 'Years of Excellence', value: '28+' },
              { label: 'Students', value: '2000+' },
              { label: 'Faculty Members', value: '150+' },
              { label: 'Facilities', value: '50+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose NPS Kaloor"
            subtitle="A comprehensive approach to academic excellence and personal growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ContentCard
              icon={<BookOpen size={28} />}
              title="Quality Academics"
              description="CBSE curriculum with experienced faculty ensuring holistic learning and conceptual clarity"
            />
            <ContentCard
              icon={<Users size={28} />}
              title="Holistic Development"
              description="Focus on academics, sports, arts, and character building for well-rounded individuals"
            />
            <ContentCard
              icon={<Trophy size={28} />}
              title="Excellence & Achievement"
              description="Consistent academic performance with emphasis on competitive exam preparation"
            />
            <ContentCard
              icon={<Sparkles size={28} />}
              title="Modern Infrastructure"
              description="State-of-the-art facilities including labs, library, sports complex, and digital classrooms"
            />
          </div>
        </div>
      </section>

      {/* Academics Highlight */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Academic Excellence"
                subtitle="Curriculum designed for success"
                centered={false}
              />
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    CBSE Curriculum
                  </h3>
                  <p className="text-muted-foreground">
                    Following CBSE syllabus with emphasis on conceptual understanding and practical application
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Experienced Faculty
                  </h3>
                  <p className="text-muted-foreground">
                    Dedicated teachers with advanced qualifications and years of teaching experience
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Technology Integration
                  </h3>
                  <p className="text-muted-foreground">
                    Digital learning tools and smart classrooms to enhance teaching and learning
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/campus.jpg"
                alt="Academic facilities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="World-Class Facilities"
            subtitle="Providing everything students need for excellence"
          />

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
              <ContentCard
                key={i}
                title={facility.title}
                description={facility.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            title="Ready to Join NPS Kaloor?"
            description="Begin your journey towards academic excellence and personal development with us"
            buttonText="Enquire Now"
            onButtonClick={() => {
              const form = document.getElementById('enquiry-form')
              form?.scrollIntoView({ behavior: 'smooth' })
            }}
          />
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-16 sm:py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Enquire About Admissions"
            subtitle="Fill in your details and we'll get back to you soon"
          />
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-border">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
