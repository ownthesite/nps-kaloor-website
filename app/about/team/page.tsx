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
    name: 'SIMI SHAMNAWAS',
    designation: 'PRINCIPAL',
    qualification: 'M.Sc',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 2,
    name: 'SHEEJA K.V.',
    designation: 'VICE PRINCIPAL',
    qualification: 'M.Sc',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 3,
    name: 'JOHNSKUTTY CHACKO',
    designation: 'ADMINISTRATIVE OFFICER',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 4,
    name: 'SHAMLA K.B.',
    designation: 'PGT',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 5,
    name: 'FEBINA ABDUL SALAM',
    designation: 'PGT',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 6,
    name: 'DEEPA T',
    designation: 'PGT',
    qualification: 'M.Sc',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 7,
    name: 'SUMAIYA PARVEEN',
    designation: 'PGT',
    qualification: 'M.Sc',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 8,
    name: 'SAFNA HABEEB',
    designation: 'PGT',
    qualification: 'MCA',
    professionalQualification: 'MCA',
  },
  {
    slNo: 9,
    name: 'SHEENA MOL V B',
    designation: 'PGT',
    qualification: 'M.Com',
    professionalQualification: 'M.Com',
  },
  {
    slNo: 10,
    name: 'ASHNA P A',
    designation: 'PGT',
    qualification: 'M.Sc',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 11,
    name: 'SHIBI JOHN',
    designation: 'PGT',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 12,
    name: 'SAJNA V.A',
    designation: 'TGT',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 13,
    name: 'TREASA BINSI',
    designation: 'TGT',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 14,
    name: 'FATHIMA M A',
    designation: 'PRT',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 15,
    name: 'ANJALY VINAYAKUMAR',
    designation: 'PRT',
    qualification: 'M.Sc',
    professionalQualification: 'COUNSELLOR',
  },
  {
    slNo: 16,
    name: 'SHABANA T.M',
    designation: 'TGT',
    qualification: 'M.Sc',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 17,
    name: 'M.N. MANJU',
    designation: 'TGT',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 18,
    name: 'DHANYA S.',
    designation: 'TGT',
    qualification: 'B.Sc',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 19,
    name: 'JESNA A',
    designation: 'TGT',
    qualification: 'B.Sc',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 20,
    name: 'LINTA GEORGE',
    designation: 'PRT',
    qualification: 'M.Sc',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 21,
    name: 'NIROOP RANI',
    designation: 'PRT',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 22,
    name: 'SUNIMOL P.S.',
    designation: 'PRT',
    qualification: 'B.A',
    professionalQualification: 'B.A',
  },
  {
    slNo: 23,
    name: 'HASBI RIYAS',
    designation: 'PRT',
    qualification: 'B.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 24,
    name: 'THASMI P.B.',
    designation: 'PRT',
    qualification: 'BLISC',
    professionalQualification: 'BLISC',
  },
  {
    slNo: 25,
    name: 'JOSMY P L',
    designation: 'PRT',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 26,
    name: 'THASNIM ALI',
    designation: 'PRT',
    qualification: 'B.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 27,
    name: 'RAHMATH P.H.',
    designation: 'PRT',
    qualification: 'AFZAL ULMA',
    professionalQualification: 'DELED',
  },
  {
    slNo: 28,
    name: 'ASWATHY T A',
    designation: 'PRT',
    qualification: 'B.Sc',
    professionalQualification: 'DELED',
  },
  {
    slNo: 29,
    name: 'JYOTHISHA GOPI',
    designation: 'PRT',
    qualification: 'B.A',
    professionalQualification: 'B.A',
  },
  {
    slNo: 30,
    name: 'MUHAMMED SHAFI',
    designation: 'TGT',
    qualification: 'M.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 31,
    name: 'MINZIA NOUREEN',
    designation: 'PRT',
    qualification: 'M.Sc',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 32,
    name: 'JASEELA TASNIM',
    designation: 'PRT',
    qualification: 'B.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 33,
    name: 'NAUMIYA JAMAL',
    designation: 'TGT',
    qualification: 'B.A',
    professionalQualification: 'B.Ed',
  },
  {
    slNo: 34,
    name: 'ARUN SELVARAJ',
    designation: 'PET',
    qualification: 'M.PEd',
    professionalQualification: 'M.PEd',
  },
  {
    slNo: 35,
    name: 'SHEMINA NAZRIN P.K',
    designation: 'TGT',
    qualification: 'M.Sc',
    professionalQualification: 'B.Ed',
  },
]

const nonTeachingStaff = [
  {
    slNo: 36,
    name: 'FIDHA FATHIMA K.S',
    designation: 'OTHER',
    qualification: 'B.Com',
    professionalQualification: 'B.Com',
  },
  {
    slNo: 37,
    name: 'NASEEMA MAHIN A A',
    designation: 'OTHER',
    qualification: 'PREDEGREE',
    professionalQualification: 'PREDEGREE',
  },
  {
    slNo: 38,
    name: 'SUHARA',
    designation: 'OTHER',
    qualification: '',
    professionalQualification: '',
  },
  {
    slNo: 39,
    name: 'USHA MOHANAN',
    designation: 'OTHER',
    qualification: '',
    professionalQualification: '',
  },
  {
    slNo: 40,
    name: 'RENISH',
    designation: 'OTHER',
    qualification: '',
    professionalQualification: '',
  },
  {
    slNo: 41,
    name: 'NASEER',
    designation: 'OTHER',
    qualification: '',
    professionalQualification: '',
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
          ['Teaching Staff', '35'],
          ['Non-Teaching Staff', '6'],
          ['PGT', '11'],
          ['TGT', '10'],
          ['PRT', '14'],
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
          Faculty members and academic staff of the school.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-100 hover:bg-slate-100">
                <TableHead className="w-[80px]">Sl.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>Qualification</TableHead>
                <TableHead>Professional Qualification</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {teachingStaff.map((staff) => (
                <TableRow key={staff.slNo}>
                  <TableCell>{staff.slNo}</TableCell>

                  <TableCell className="font-semibold text-slate-900">
                    {staff.name}
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-3 py-1"
                    >
                      {staff.designation}
                    </Badge>
                  </TableCell>

                  <TableCell>{staff.qualification}</TableCell>

                  <TableCell>
                    {staff.professionalQualification}
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

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-100 hover:bg-slate-100">
                <TableHead className="w-[80px]">Sl.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>Qualification</TableHead>
                <TableHead>Professional Qualification</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {nonTeachingStaff.map((staff) => (
                <TableRow key={staff.slNo}>
                  <TableCell>{staff.slNo}</TableCell>

                  <TableCell className="font-semibold text-slate-900">
                    {staff.name}
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant="outline"
                      className="rounded-full px-3 py-1"
                    >
                      {staff.designation}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    {staff.qualification || '-'}
                  </TableCell>

                  <TableCell>
                    {staff.professionalQualification || '-'}
                  </TableCell>
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