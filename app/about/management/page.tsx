import { PageTitle } from '@/components/page-title'

export default function ManagementPage() {
  return (
    <main>
      <PageTitle
        title="Management"
        description="Information about our school's leadership and administrative team."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-gray-600">
              Content Updating for Academic Year 2026–27.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
