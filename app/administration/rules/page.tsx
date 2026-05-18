import { PageTitle } from '@/components/page-title'

export default function RulesPage() {
  return (
    <main>
      <PageTitle
        title="Rules & Regulations"
        description="School rules, code of conduct, and discipline policies."
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
