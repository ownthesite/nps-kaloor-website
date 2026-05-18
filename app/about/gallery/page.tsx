import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Images,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { galleryEvents } from '@/lib/gallery'

export const metadata = {
  title: 'Gallery | NPS Kaloor',
  description:
    'School events, celebrations, academic activities, cultural programs, and campus moments at National Public School Kaloor.',
}

const groupedEvents = galleryEvents.reduce(
  (acc, event) => {
    const category = event.category || 'School Events'

    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push(event)

    return acc
  },
  {} as Record<string, typeof galleryEvents>
)
export default function GalleryPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-slate-100 text-slate-700 hover:bg-slate-100">
              School Events & Activities
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Gallery
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">
              Explore memorable moments from school events, celebrations,
              academic activities, competitions, and student programs at
              National Public School Kaloor.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="py-12 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="rounded-3xl border border-slate-200 shadow-none bg-white">
              <CardContent className="p-8 text-center">
                <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto">
                  <Images className="h-7 w-7 text-slate-700" />
                </div>

                <h2 className="mt-5 text-3xl font-bold text-slate-900">
                  {galleryEvents.length}
                </h2>

                <p className="mt-2 text-slate-600">
                  Event Galleries
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-slate-200 shadow-none bg-white">
              <CardContent className="p-8 text-center">
                <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto">
                  <Camera className="h-7 w-7 text-slate-700" />
                </div>

                <h2 className="mt-5 text-3xl font-bold text-slate-900">
                  {galleryEvents.reduce(
                    (total, event) => total + event.count,
                    0
                  )}
                </h2>

                <p className="mt-2 text-slate-600">
                  Photos
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-slate-200 shadow-none bg-white">
              <CardContent className="p-8 text-center">
                <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto">
                  <CalendarDays className="h-7 w-7 text-slate-700" />
                </div>

                <h2 className="mt-5 text-3xl font-bold text-slate-900">
                  {
                    new Set(
                      galleryEvents.map((event) => event.year)
                    ).size
                  }
                </h2>

                <p className="mt-2 text-slate-600">
                  Academic Years
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Categories */}
       <section className="py-16 sm:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* <div className="flex items-end justify-between gap-4 mb-10">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Event Galleries
        </h2>

        <p className="mt-3 text-slate-600">
          Explore school events, celebrations, activities, and campus life.
        </p>
      </div>
    </div> */}

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {galleryEvents.map((event) => (
        <Link
          key={event.slug}
          href={`/about/gallery/${event.slug}`}
          className="group"
        >
          <Card className="h-full rounded-3xl border border-slate-200 shadow-none overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-slate-300">
            <div className="relative aspect-square overflow-hidden bg-slate-100">
              <Image
                src={event.cover}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <CardContent className="p-5">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {event.category && (
                  <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {event.category}
                  </div>
                )}

                {event.year && (
                  <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {event.year}
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 line-clamp-2">
                {event.title}
              </h3>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm text-slate-600">
                  {event.count} Photos
                </p>

                <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center transition-colors group-hover:bg-slate-900">
                  <ArrowRight className="h-4 w-4 text-slate-700 transition-colors group-hover:text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  </div>
</section>
    </main>
  )
}