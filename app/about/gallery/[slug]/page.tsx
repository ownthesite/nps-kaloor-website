import Image from "next/image"
import { notFound } from "next/navigation"

import {
  CalendarDays,
  Camera,
  Images,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import {
  galleryEvents,
  generateImages,
} from "@/lib/gallery"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function GalleryEventPage({
  params,
}: Props) {
  const { slug } = await params

  const event = galleryEvents.find(
    (e) => e.slug === slug
  )

  if (!event) {
    notFound()
  }

  const images = generateImages(
    event.slug,
    event.count
  )

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
              Gallery Event
            </Badge>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {event.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore memorable moments and highlights captured from this school
              event gallery at National Public School Kaloor.
            </p>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Camera className="h-4 w-4 text-white" />

                <span className="text-sm font-medium text-white">
                  {event.count} Photos
                </span>
              </div>

              {event.year && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <CalendarDays className="h-4 w-4 text-white" />

                  <span className="text-sm font-medium text-white">
                    {event.year}
                  </span>
                </div>
              )}

              {event.category && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <Images className="h-4 w-4 text-white" />

                  <span className="text-sm font-medium text-white">
                    {event.category}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20">
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
                  Event Gallery
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Photo Collection
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Browse through moments, celebrations, achievements, and memories
                captured during the event.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={image}
                className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image}
                    alt={`${event.title} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Bottom Label */}
                <div className="absolute bottom-4 left-4 z-20 rounded-full border border-white/15 bg-black/40 px-4 py-2 backdrop-blur-md">
                  <p className="text-sm font-medium text-white">
                    Photo {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}