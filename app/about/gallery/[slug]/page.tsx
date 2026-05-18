import Image from 'next/image'
import { notFound } from 'next/navigation'

import {
  galleryEvents,
  generateImages,
} from '@/lib/gallery'

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
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-slate-500">
              Gallery Event
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              {event.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-8">
              {event.count} photos from this event gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <div
                key={image}
                className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200"
              >
                <Image
                  src={image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}