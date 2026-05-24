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
  title: 'Our Team | NPS Kaloor',
  description:
    'Meet the dedicated teaching and non-teaching staff members of National Public School Kaloor.',
}

const teachingStaff = [
  {
    slNo: 1,
    name: 'Ms. SIMI SHAMNAWAS',
    qualification: 'MSc, B.Ed, SET, DCA',
    subject: 'Zoology',
    category: 'PGT',
  },
  {
    slNo: 2,
    name: 'SHAMLA K.B',
    qualification: 'M.Sc, B.Ed',
    subject: 'Social Science',
    category: 'PGT',
  },
  {
    slNo: 3,
    name: 'SHEEJA K V',
    qualification: 'M.Sc, B.Ed',
    subject: 'Biology',
    category: 'PGT',
  },
  {
    slNo: 4,
    name: 'SHYBI V.A',
    qualification: 'M.A, B.Ed',
    subject: 'Economics',
    category: 'PGT',
  },
  {
    slNo: 5,
    name: 'SHIBI JOHN',
    qualification: 'M.A, B.Ed',
    subject: 'English',
    category: 'PGT',
  },
  {
    slNo: 6,
    name: 'DEEPA T',
    qualification: 'M.Sc, B.Ed',
    subject: 'Chemistry',
    category: 'PGT',
  },
  {
    slNo: 7,
    name: 'MARY GEETHU A R',
    qualification: 'M.Sc, B.Ed',
    subject: 'Maths',
    category: 'PGT',
  },
  {
    slNo: 8,
    name: 'PRAKASINI N SHENOY',
    qualification: 'B.Sc, MCA, B.Ed',
    subject: 'Computer',
    category: 'TGT',
  },
  {
    slNo: 9,
    name: 'SHEENA MOL V A',
    qualification: 'M.Com, B.Ed',
    subject: 'Accountancy',
    category: 'PGT',
  },
  {
    slNo: 10,
    name: 'JITHU TRAISY',
    qualification: 'M.Sc, B.Ed',
    subject: 'Physics',
    category: 'PGT',
  },
  {
    slNo: 11,
    name: 'DEVI KRISHNA K A',
    qualification: 'B.A, MPEd',
    subject: 'Physical Education',
    category: 'TGT',
  },
  {
    slNo: 12,
    name: 'SHABANA T.M',
    qualification: 'B.Sc, B.Ed',
    subject: 'Maths',
    category: 'TGT',
  },
  {
    slNo: 13,
    name: 'FEBIN ABDUL SALAM',
    qualification: 'M.A, B.Ed',
    subject: 'English',
    category: 'PGT',
  },
  {
    slNo: 14,
    name: 'TREASA BINSI P S',
    qualification: 'M.A, B.Ed',
    subject: 'Social Science',
    category: 'PGT',
  },
  {
    slNo: 15,
    name: 'MARY LIYA RAPHAEL',
    qualification: 'M.A, B.Ed',
    subject: 'Malayalam',
    category: 'PGT',
  },
  {
    slNo: 17,
    name: 'SAJNA V A',
    qualification: 'M.A, B.Ed',
    subject: 'Hindi',
    category: 'PGT',
  },
  {
    slNo: 18,
    name: 'SUNEERA P S',
    qualification: 'BCA',
    subject: 'Computer',
    category: 'Special Staff',
  },
  {
    slNo: 19,
    name: 'LINCEY MARY PETER P',
    qualification: 'M.A, B.Ed',
    subject: 'Malayalam',
    category: 'PGT',
  },
  {
    slNo: 20,
    name: 'M.N. MANJU',
    qualification: 'M.A, B.Ed',
    subject: 'Social Science',
    category: 'PGT',
  },
  {
    slNo: 21,
    name: 'DHANYA S',
    qualification: 'B.Sc, B.Ed',
    subject: 'Chemistry',
    category: 'TGT',
  },
  {
    slNo: 22,
    name: 'JESNA A',
    qualification: 'B.Sc, B.Ed',
    subject: 'Maths',
    category: 'TGT',
  },
  {
    slNo: 23,
    name: 'HASBI RIYAS',
    qualification: 'B.A, B.Ed',
    subject: 'Hindi',
    category: 'TGT',
  },
  {
    slNo: 24,
    name: 'AYSHA FARZANA P S',
    qualification: 'M.A, PPTTC',
    subject: 'Arabic',
    category: 'PGT',
  },
  {
    slNo: 25,
    name: 'NIROOP RANI B',
    qualification: 'M.A, DLED',
    subject: 'Hindi',
    category: 'PRT',
  },
  {
    slNo: 26,
    name: 'FATHIMA M A',
    qualification: 'M.A, B.Ed',
    subject: 'Arabic',
    category: 'PGT',
  },
  {
    slNo: 27,
    name: 'SUNIMOL P S',
    qualification: 'B.A, DCA',
    subject: 'Computer',
    category: 'Special Staff',
  },
  {
    slNo: 28,
    name: 'JOSMY P L',
    qualification: 'M.A, B.Ed',
    subject: 'English',
    category: 'PGT',
  },
  {
    slNo: 29,
    name: 'JUNAIZA ZAINUDHEEN',
    qualification: 'M.A, B.Ed',
    subject: 'English',
    category: 'PGT',
  },
  {
    slNo: 30,
    name: 'FARISA V A',
    qualification: 'B.Sc, B.Ed',
    subject: 'Biology',
    category: 'PGT',
  },
  {
    slNo: 31,
    name: 'THASMI P B',
    qualification: 'B.Sc, BLISc, B.Ed',
    subject: 'Library Science',
    category: 'TGT',
  },
  {
    slNo: 32,
    name: 'SHERIN JOSEPH',
    qualification: 'B.A',
    subject: 'Counselling',
    category: 'Special Staff',
  },
  {
    slNo: 33,
    name: 'SURAJA MANU',
    qualification: 'CSA, Multimedia',
    subject: 'Art',
    category: 'Special Staff',
  },
  {
    slNo: 34,
    name: 'FASNA BIN HUSSAIN',
    qualification: 'B.A',
    subject: 'Music',
    category: 'Special Staff',
  },
]

const nonTeachingStaff = [
  {
    slNo: 35,
    name: 'NAUMIYA M S',
    qualification: 'B.A, B.Ed, Tally',
  },
  {
    slNo: 36,
    name: 'FATHIMA M.N',
    qualification: 'B.Com, Tally',
  },
  {
    slNo: 37,
    name: 'NASEEMA A A',
    qualification: 'B.A',
  },
  {
    slNo: 38,
    name: 'SUHARA',
    qualification: 'SSLC',
  },
  {
    slNo: 39,
    name: 'USHA MOHANAN',
    qualification: '-',
  },
  {
    slNo: 40,
    name: 'NAZEER K A',
    qualification: 'SSLC',
  },
  {
    slNo: 41,
    name: 'RENISH K A',
    qualification: 'SSLC',
  },
]

export default function TeamPage() {
  return (
    <main className="bg-white">
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
              Our Team
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Meet the dedicated teaching and non-teaching staff members of
              National Public School Kaloor committed to academic excellence,
              student development, and holistic education.
            </p>
          </div>
        </div>
      </section>

      {/* Staff Summary */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ['Teaching Staff', '33'],
              ['Non-Teaching Staff', '7'],
              ['PGT', '20'],
              ['TGT', '7'],
              ['PRT', '1'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-medium text-slate-500">
                  {label}
                </p>

                <h2 className="mt-2 text-3xl font-black text-slate-900">
                  {value}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Teaching Staff
            </h2>

            <p className="mt-3 text-slate-600">
              Faculty members and subject teachers of the school.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-100 hover:bg-slate-100">
                    <TableHead>Sl.No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Qualification</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Category</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {teachingStaff.map((staff) => (
                    <TableRow key={staff.slNo}>
                      <TableCell>{staff.slNo}</TableCell>

                      <TableCell className="font-semibold text-slate-900">
                        {staff.name}
                      </TableCell>

                      <TableCell>{staff.qualification}</TableCell>

                      <TableCell>{staff.subject}</TableCell>

                      <TableCell>
                        <Badge variant="secondary">
                          {staff.category}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Non Teaching Staff */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Non-Teaching Staff
            </h2>

            <p className="mt-3 text-slate-600">
              Administrative and support staff members.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-100 hover:bg-slate-100">
                    <TableHead>Sl.No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Qualification</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {nonTeachingStaff.map((staff) => (
                    <TableRow key={staff.slNo}>
                      <TableCell>{staff.slNo}</TableCell>

                      <TableCell className="font-semibold text-slate-900">
                        {staff.name}
                      </TableCell>

                      <TableCell>{staff.qualification}</TableCell>
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