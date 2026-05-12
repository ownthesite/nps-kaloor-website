import { PageTitle } from '@/components/page-title'

export default function CalendarPage() {
  return (
    <main>
      <PageTitle
        title="Academic Calendar"
        description="Important dates, holidays, and academic events for the current academic year."
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
