import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'School Management Committee | NPS Kaloor',
  description:
    'Managing Committee Members of National Public School Kaloor for the academic year 2026–2027.',
}

const committeeMembers = [
  {
    name: 'T E Bilal',
    role: 'Chairman',
    image: '/management/te-bilal.jpeg',
  },
  {
    name: 'Adv. E S M Kabeer',
    role: 'Manager',
    image: '/management/adv-esm-kabeer-haji.jpeg',
  },
  {
    name: 'P H Ismail',
    role: 'Assistant Manager',
    image: '/management/ph-ismail.jpeg',
  },
  {
    name: 'P A Noushad',
    role: 'General Secretary, NPS',
    image: '/management/pa-noushad-haji.jpeg',
  },
  {
    name: 'K K Salam',
    role: 'General Secretary, Trust',
    image: '/management/kk-abdulsalam.jpeg',
  },
  {
    name: 'V M Sidhique',
    role: 'Treasurer, NPS',
    image: '/management/vm-sidhique.jpeg',
  },

  {
    name: 'C K Jaffar',
    role: 'Joint Secretary, NPS',
    image: '/trust/ck-jaffar.jpeg',
  },

  // Placeholder Images
  {
    name: 'K A Masood',
    role: 'Committee Member',
    image: '/management/placeholder.jpg',
  },
  {
    name: 'Muhammed Raneesh',
    role: 'Committee Member',
    image: '/management/placeholder.jpg',
  },
  {
    name: 'Muhammed Ashif T S',
    role: 'Committee Member',
    image: '/management/placeholder.jpg',
  },
  {
    name: 'K M Abbas',
    role: 'Committee Member',
    image: '/management/placeholder.jpg',
  },
  {
    name: 'K A Riyas',
    role: 'Committee Member',
    image: '/management/placeholder.jpg',
  },
  {
    name: 'Muneer',
    role: 'Committee Member',
    image: '/management/placeholder.jpg',
  },

  // Real Images
  {
    name: 'M S Aboobakker',
    role: 'Committee Member',
    image: '/management/ms-aboobakker-haji.jpeg',
  },
  {
    name: 'A A Nizamudheen',
    role: 'Committee Member',
    image: '/management/aa-nizamudheen.jpeg',
  },
  {
    name: 'V A Ashraf',
    role: 'Committee Member',
    image: '/management/va-ashraf.jpeg',
  },
  {
    name: 'O A Sathar',
    role: 'Committee Member',
    image: '/management/oa-sathar.jpeg',
  },
  {
    name: 'T I Shameer',
    role: 'Committee Member',
    image: '/management/ti-shameer.jpeg',
  },
  {
    name: 'K M Sherief',
    role: 'Committee Member',
    image: '/management/km-sherief.jpeg',
  },
  {
    name: 'Siddique C Y',
    role: 'Committee Member',
    image: '/management/siddique-cy.jpeg',
  },

  // Placeholder Image
  {
    name: 'P A Saheed',
    role: 'Committee Member',
    image: '/management/placeholder.jpg',
  },
]

export default function SMCPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-[#34346b]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-white/10 text-white hover:bg-white/10">
              Academic Year 2026–2027
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              School Management Committee
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
              Meet the management committee members of National Public School
              Kaloor guiding the institution with leadership, vision, and
              commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Management
            </h2>

            <p className="mt-3 text-slate-600">
              Managing Committee Members 2026–2027
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {committeeMembers.map((member) => (
              <Card
                key={member.name}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-5">
                  <h3 className="text-lg font-bold uppercase tracking-wide text-slate-900">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-600">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}