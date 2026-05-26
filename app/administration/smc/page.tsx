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
    image: '/management/ka-masood.jpeg',
  },
  {
    name: 'Muhammed Raneesh',
    role: 'Committee Member',
    image: '/management/raneesh.jpeg',
  },
  {
    name: 'Muhammed Ashif T S',
    role: 'Committee Member',
    image: '/management/ashif.jpeg',
  },
  {
    name: 'K M Abbas',
    role: 'Committee Member',
    image: '/management/km-abbas.jpeg',
  },
  {
    name: 'K A Riyas',
    role: 'Committee Member',
    image: '/management/riyas.jpeg',
  },
  {
    name: 'Muneer',
    role: 'Committee Member',
    image: '/management/muneer.jpeg',
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
    image: '/management/saheed.jpeg',
  },
]

export default function SMCPage() {
  return (
    <main className="bg-[#f7f8fc]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 border border-white/20 bg-white/10 px-4 py-1 text-white backdrop-blur-sm hover:bg-white/10">
              Academic Year 2026–2027
            </Badge>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Management Committee
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Dedicated leaders and educators guiding National Public School
              Kaloor with integrity, responsibility, and a shared vision for
              excellence in education.
            </p>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Leadership Team
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Experienced mentors and management members working together to
              nurture a strong academic and value-driven environment.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {committeeMembers.map((member) => (
              <Card
                key={member.name}
                className="group overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Area */}
                <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 px-6 pt-8">
                  {/* Decorative Shape */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-[#2c3575] to-[#5564d8]" />

                  {/* Passport Photo Frame */}
                  <div className="relative mx-auto h-[290px] w-[220px] overflow-hidden rounded-[28px] border-[6px] border-white bg-white shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <CardContent className="px-6 pb-7 pt-6 text-center">
                  <h3 className="text-lg font-black uppercase tracking-[0.12em] text-slate-900">
                    {member.name}
                  </h3>

                  <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#2c3575] to-[#5564d8]" />

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#4b57b6]">
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