import { PageTitle } from '@/components/page-title'

export default function BrochurePage() {
  return (
    <main>
      <PageTitle
        title="E-Brochure"
        description="Download our comprehensive school brochure for more information."
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
