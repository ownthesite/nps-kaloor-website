  import Image from 'next/image'

  import { Badge } from '@/components/ui/badge'
  import { Card, CardContent } from '@/components/ui/card'

  import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

  export const metadata = {
    title: 'Educational Trust Members | NPS Kaloor',
    description:
      'Kaloor Muslim Jamaath Educational & Charitable Trust Members for the academic year 2025–2026.',
  }

  const trustMembers = [
    {
      name: 'T E Bilal',
      role: 'Chairman',
      image: '/management/te-bilal.jpeg',
    },
    {
      name: 'K A Raheem',
      role: 'Vice Chairman',
      image: '/trust/ka-raheem.jpeg',
    },
    {
      name: 'K K Abdulsalam',
      role: 'Trust General Secretary',
      image: '/management/kk-abdulsalam.jpeg',
    },
    {
      name: 'P A Noushad Haji',
      role: 'Treasurer',
      image: '/management/pa-noushad-haji.jpeg',
    },
    {
      name: 'N A Ashraf',
      role: 'Joint Secretary',
      image: '/trust/na-ashraf.jpeg',
    },
    {
      name: 'C U Saheed Haji',
      role: 'Member',
      image: '/trust/cu-saheed-haji.jpeg',
    },
    {
      name: 'M A Junaid',
      role: 'Member',
      image: '/trust/ma-junaid.jpeg',
    },
    {
      name: 'Abdul Jabbar',
      role: 'Member',
      image: '/trust/abdul-jabbar.jpeg',
    },
    {
      name: 'Khalid Ali',
      role: 'Member',
      image: '/trust/khalid-ali.jpeg',
    },
    {
      name: 'C M Abdul Lathief',
      role: 'Member',
      image: '/trust/cm-abdul-lathief.jpeg',
    },
    {
      name: 'Thajudheen K A',
      role: 'Member',
      image: '/trust/thajudheen-ka.jpeg',
    },
    {
      name: 'T H Ansar',
      role: 'Member',
      image: '/trust/th-ansar.jpeg',
    },
    {
      name: 'U S Mohammed Ashraf',
      role: 'Member',
      image: '/trust/us-mohammed-ashraf.jpeg',
    },
    {
      name: 'M M Mahin',
      role: 'Member',
      image: '/trust/mm-mahin.jpeg',
    },
    {
      name: 'C K Jaffar',
      role: 'Member',
      image: '/trust/ck-jaffar.jpeg',
    },
  ]
  export default function TrustMembersPage() {
    return (
      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-[#34346b]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-white/10 text-white hover:bg-white/10">
                Academic Year 2026–2027
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Educational Trust Members
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                Meet the members of the Kaloor Muslim Jamaath Educational &
                Charitable Trust guiding and supporting the vision of National
                Public School Kaloor.
              </p>
            </div>
          </div>
        </section>

        {/* Members */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Trust Members
              </h2>

              <p className="mt-3 text-slate-600">
                Kaloor Muslim Jamaath Educational & Charitable Trust 2026–2027
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {trustMembers.map((member) => (
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
              {/* Trust Members Table */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Trust Members Directory
            </h2>

            <p className="mt-3 text-slate-600">
              Kaloor Muslim Jamaath Educational & Charitable Trust Members
              2025–2026
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-100 hover:bg-slate-100">
                    <TableHead className="w-[80px] font-bold text-slate-900">
                      Sl.No
                    </TableHead>

                    <TableHead className="font-bold text-slate-900">
                      Name
                    </TableHead>

                    <TableHead className="font-bold text-slate-900">
                      Designation
                    </TableHead>

                    <TableHead className="font-bold text-slate-900">
                      Mobile No.
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {[
                    '9895307000',
                    '9656440077',
                    '9633805621',
                    '9946006106',
                    '9741532888',
                    '9846277056',
                    '9605619896',
                    '9846965599',
                    '9605773773',
                    '9633830930',
                    '9895372522',
                    '9995052922',
                    '9745240477',
                    '8606362787',
                    '9847753746',
                  ].map((mobile, index) => {
                    const member = trustMembers[index]

                    return (
                      <TableRow key={member.name}>
                        <TableCell className="font-medium">
                          {index + 1}
                        </TableCell>

                        <TableCell className="font-semibold text-slate-900">
                          {member.name}
                        </TableCell>

                        <TableCell>{member.role}</TableCell>

                        <TableCell>{mobile}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
      </main>
    )
  }