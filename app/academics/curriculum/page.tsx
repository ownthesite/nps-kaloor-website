import { PageTitle } from '@/components/page-title'

export default function CurriculumPage() {
  return (
    <main>
      <PageTitle
        title="Curriculum"
        description="Our carefully designed curriculum combining academic excellence with holistic development."
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
