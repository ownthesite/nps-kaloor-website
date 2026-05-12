import { PageTitle } from '@/components/page-title'

export default function TextBooksPage() {
  return (
    <main>
      <PageTitle
        title="Text Books"
        description="List of prescribed text books and learning materials for all grades."
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
