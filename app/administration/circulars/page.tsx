import { PageTitle } from '@/components/page-title'

export default function CircularsPage() {
  return (
    <main>
      <PageTitle
        title="Circulars & Notices"
        description="Important circulars, notices, and announcements for parents and students."
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
