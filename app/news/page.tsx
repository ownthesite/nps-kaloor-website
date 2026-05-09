'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { Calendar, User } from 'lucide-react'

const newsArticles = [
  {
    id: 1,
    title: 'Science Fair 2024 - A Showcase of Innovation',
    excerpt:
      'Students presented innovative science projects demonstrating their curiosity and problem-solving skills. The fair highlighted renewable energy and sustainable solutions.',
    date: 'May 10, 2024',
    author: 'Academic Team',
    image: '/hero-classroom.jpg',
    category: 'Academic',
  },
  {
    id: 2,
    title: 'Inter-School Sports Championship 2024',
    excerpt:
      'NPS Kaloor team secured second position in the inter-school sports championship. Students displayed excellent sportsmanship and athletic prowess.',
    date: 'May 5, 2024',
    author: 'Sports Department',
    image: '/campus.jpg',
    category: 'Sports',
  },
  {
    id: 3,
    title: 'Board Exam Results - Celebrating Excellence',
    excerpt:
      'Our Class 12 students achieved outstanding results with 85% scoring above 80%. We are proud of their dedication and hard work.',
    date: 'April 28, 2024',
    author: 'Principal Office',
    image: '/hero-classroom.jpg',
    category: 'Academic',
  },
  {
    id: 4,
    title: 'Environmental Awareness Program',
    excerpt:
      'Eco Club organized a tree-planting drive and sustainability workshop. Over 200 saplings were planted across the campus.',
    date: 'April 20, 2024',
    author: 'Eco Club',
    image: '/campus.jpg',
    category: 'Environment',
  },
  {
    id: 5,
    title: 'Cultural Festival 2024 - A Grand Success',
    excerpt:
      'Our annual cultural festival brought vibrant performances showcasing the talents of our students across music, dance, and theater.',
    date: 'April 10, 2024',
    author: 'Activities Team',
    image: '/hero-classroom.jpg',
    category: 'Events',
  },
  {
    id: 6,
    title: 'New STEM Lab Inaugurated',
    excerpt:
      'State-of-the-art STEM laboratory with robotics equipment and coding stations was inaugurated to enhance hands-on learning.',
    date: 'March 30, 2024',
    author: 'Management',
    image: '/campus.jpg',
    category: 'Infrastructure',
  },
]

const categories = ['All', 'Academic', 'Sports', 'Events', 'Environment', 'Infrastructure']

export default function NewsPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="News & Events"
        subtitle="Stay informed about NPS Kaloor updates"
      />

      {/* News Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Latest Updates"
            subtitle="Important announcements and news from our school"
          />

          {/* Category Filter */}
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-background text-foreground border border-border hover:bg-secondary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category Badge */}
                  <span className="inline-block w-fit text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <button className="mt-4 text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Mark your calendar for important school events"
          />

          <div className="mt-12 space-y-4">
            {[
              {
                date: 'June 15, 2024',
                title: 'Annual Day Celebration',
                description: 'Grand celebration featuring cultural programs and awards ceremony',
              },
              {
                date: 'June 20-22, 2024',
                title: 'Summer Camp',
                description: 'Fun learning activities and skill development programs for students',
              },
              {
                date: 'July 1, 2024',
                title: 'New Academic Year Begins',
                description: 'Welcome to Class 2024-25 with orientation and class assignment',
              },
              {
                date: 'July 15, 2024',
                title: 'Parents Orientation',
                description: 'Session with parents to discuss academic plan and expectations',
              },
              {
                date: 'August 10, 2024',
                title: 'Sports Meet 2024',
                description: 'Inter-house sports competition showcasing athletic talents',
              },
              {
                date: 'September 5, 2024',
                title: 'Independence Day Celebration',
                description: 'Patriotic program with student performances and activities',
              },
            ].map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-lg">
                      <Calendar size={28} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary mb-1">
                      {event.date}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Stay Updated"
            subtitle="Subscribe to receive updates about news and events"
          />

          <form className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
