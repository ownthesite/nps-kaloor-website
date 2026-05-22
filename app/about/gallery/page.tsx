import Image from "next/image"
import Link from "next/link"

import {
  ArrowRight,
  CalendarDays,
  Camera,
  Images,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import { galleryEvents } from "@/lib/gallery"

export const metadata = {
  title: "Gallery | NPS Kaloor",
  description:
    "School events, celebrations, academic activities, cultural programs, and campus moments at National Public School Kaloor.",
}

const groupedEvents = galleryEvents.reduce(
  (acc, event) => {
    const category = event.category || "School Events"

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
    <main className="bg-[#f7f8fc]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6]">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 border border-white/20 bg-white/10 px-4 py-1 text-white backdrop-blur-sm hover:bg-white/10">
              School Events & Activities
            </Badge>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Gallery
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore memorable moments from school celebrations, academic
              activities, cultural programs, competitions, and student life at
              National Public School Kaloor.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      

      {/* Categories Section */}
      <section className="pb-20 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Intro Banner */}
          <div className="relative mb-12 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-200 blur-3xl" />
            </div>

            <div className="relative max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Images className="h-4 w-4 text-white" />

                <span className="text-sm font-medium tracking-wide text-white">
                  School Memories
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Event Galleries
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Explore school events, celebrations, competitions, campus
                activities, achievements, and memorable student experiences
                throughout the academic year.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/about/gallery/${event.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/30 to-transparent" />

                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={event.cover}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    {/* Tags */}
                    <div className="mb-5 flex flex-wrap items-center gap-2">
                      {event.category && (
                        <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
                          {event.category}
                        </div>
                      )}

                      {event.year && (
                        <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
                          {event.year}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="line-clamp-2 text-xl font-black tracking-tight text-slate-900">
                      {event.title}
                    </h3>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-600">
                        {event.count} Photos
                      </p>

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 transition-all duration-300 group-hover:bg-[#2c3575]">
                        <ArrowRight className="h-4 w-4 text-slate-700 transition-colors duration-300 group-hover:text-white" />
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