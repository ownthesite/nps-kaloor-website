import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const metadata = {
  title: 'PTA | NPS Kaloor',
  description:
    'Parent Teacher Association members of National Public School Kaloor for the academic year 2025–2026.',
}

const ptaMembers = [
  {
    slNo: 1,
    name: 'Mrs. Simi Sham Navas',
    designation: 'Secretary',
    mobile: '7560821234',
  },
  {
    slNo: 2,
    name: 'Thaha C. U',
    designation: 'President',
    mobile: '9847782404',
  },
  {
    slNo: 3,
    name: 'K K Rahim',
    designation: 'Vice President',
    mobile: '9846610831',
  },
  {
    slNo: 4,
    name: 'M S Salam',
    designation: 'Joint Secretary',
    mobile: '9846788842',
  },
  {
    slNo: 5,
    name: 'Mohammed Hafeez M S',
    designation: 'Treasurer',
    mobile: '9249420206',
  },
  {
    slNo: 6,
    name: 'Shiras Siddique',
    designation: 'Member',
    mobile: '9995111990',
  },
  {
    slNo: 7,
    name: 'Anitha Siddik',
    designation: 'Member',
    mobile: '9846277152',
  },
  {
    slNo: 8,
    name: 'Shuhaib Manikoth',
    designation: 'Member',
    mobile: '7034201130',
  },
  {
    slNo: 9,
    name: 'Jyothi',
    designation: 'Member',
    mobile: '9995545727',
  },
  {
    slNo: 10,
    name: 'Dhanesh',
    designation: 'Member',
    mobile: '7356315646',
  },
  {
    slNo: 11,
    name: 'Adv ESM Kabeer',
    designation: 'Manager',
    mobile: '-',
  },
  {
    slNo: 12,
    name: 'T E Bilal',
    designation: 'Chairman',
    mobile: '-',
  },
  {
    slNo: 13,
    name: 'K K Abdul Salam',
    designation: 'Trust Secretary',
    mobile: '-',
  },
  {
    slNo: 14,
    name: 'P A Noushad',
    designation: 'NPS Secretary',
    mobile: '-',
  },
  {
    slNo: 15,
    name: 'Sheeja K V',
    designation: 'Vice Principal',
    mobile: '-',
  },
]

export default function PTAPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-[#34346b]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-white/10 text-white hover:bg-white/10">
              Academic Year 2025–2026
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Parent Teacher Association
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
              Parent Teacher Association members of National Public School
              Kaloor working together to strengthen collaboration between
              parents, teachers, and the school community.
            </p>
          </div>
        </div>
      </section>

      {/* PTA Table */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              PTA Members
            </h2>

            <p className="mt-3 text-slate-600">
              Parent Teacher Association Members 2025–2026
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
                      Member Name
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
                  {ptaMembers.map((member) => (
                    <TableRow key={member.slNo}>
                      <TableCell className="font-medium">
                        {member.slNo}
                      </TableCell>

                      <TableCell className="font-semibold text-slate-900">
                        {member.name}
                      </TableCell>

                      <TableCell>{member.designation}</TableCell>

                      <TableCell>{member.mobile}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}