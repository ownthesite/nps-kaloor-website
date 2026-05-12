import { PageTitle } from '@/components/page-title'

export default function PTAPage() {
  return (
    <main>
      <PageTitle
        title="Parent Teacher Association"
        description="Information about the PTA and how parents can participate."
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
