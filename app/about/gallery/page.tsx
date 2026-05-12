import { PageTitle } from '@/components/page-title'

export default function GalleryPage() {
  return (
    <main>
      <PageTitle
        title="Gallery"
        description="Visual highlights of school activities, events, and campus life."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-gray-600">
              Content coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
