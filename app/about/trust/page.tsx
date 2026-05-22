import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata = {
  title: "Educational Trust Members | NPS Kaloor",
  description:
    "Kaloor Muslim Jamaath Educational & Charitable Trust Members for the academic year 2026–2027.",
}

const trustMembers = [
  {
    name: "T E Bilal",
    role: "Chairman",
    image: "/management/te-bilal.jpeg",
    mobile: "9895307000",
  },
  {
    name: "K A Raheem",
    role: "Vice Chairman",
    image: "/trust/ka-raheem.jpeg",
    mobile: "9656440077",
  },
  {
    name: "K K Abdulsalam",
    role: "Trust General Secretary",
    image: "/management/kk-abdulsalam.jpeg",
    mobile: "9633805621",
  },
  {
    name: "P A Noushad Haji",
    role: "Treasurer",
    image: "/management/pa-noushad-haji.jpeg",
    mobile: "9946006106",
  },
  {
    name: "N A Ashraf",
    role: "Joint Secretary",
    image: "/trust/na-ashraf.jpeg",
    mobile: "9741532888",
  },
  {
    name: "C U Saheed Haji",
    role: "Member",
    image: "/trust/cu-saheed-haji.jpeg",
    mobile: "9846277056",
  },
  {
    name: "M A Junaid",
    role: "Member",
    image: "/trust/ma-junaid.jpeg",
    mobile: "9605619896",
  },
  {
    name: "Abdul Jabbar",
    role: "Member",
    image: "/trust/abdul-jabbar.jpeg",
    mobile: "9846965599",
  },
  {
    name: "Khalid Ali",
    role: "Member",
    image: "/trust/khalid-ali.jpeg",
    mobile: "9605773773",
  },
  {
    name: "C M Abdul Lathief",
    role: "Member",
    image: "/trust/cm-abdul-lathief.jpeg",
    mobile: "9633830930",
  },
  {
    name: "Thajudheen K A",
    role: "Member",
    image: "/trust/thajudheen-ka.jpeg",
    mobile: "9895372522",
  },
  {
    name: "T H Ansar",
    role: "Member",
    image: "/trust/th-ansar.jpeg",
    mobile: "9995052922",
  },
  {
    name: "U S Mohammed Ashraf",
    role: "Member",
    image: "/trust/us-mohammed-ashraf.jpeg",
    mobile: "9745240477",
  },
  {
    name: "M M Mahin",
    role: "Member",
    image: "/trust/mm-mahin.jpeg",
    mobile: "8606362787",
  },
  {
    name: "C K Jaffar",
    role: "Member",
    image: "/trust/ck-jaffar.jpeg",
    mobile: "9847753746",
  },
]

export default function TrustMembersPage() {
  return (
    <main className="bg-[#f7f8fc]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6]">
        {/* Glow */}
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
              Educational Trust Members
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Meet the members of the Kaloor Muslim Jamaath Educational &
              Charitable Trust guiding the vision, growth, and development of
              National Public School Kaloor.
            </p>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Intro Banner */}
          <div className="relative mb-12 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-200 blur-3xl" />
            </div>

            <div className="relative max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-medium tracking-wide text-white">
                  Trust Leadership 2026–2027
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Our Trust Members
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Dedicated leaders and community members supporting quality
                education, values, and institutional excellence.
              </p>
            </div>
          </div>

          {/* Member Cards */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {trustMembers.map((member) => (
              <Card
                key={member.name}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Area */}
                <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 px-6 pt-8">
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-[#2c3575] to-[#5564d8]" />

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

      {/* Directory Table */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Table Banner */}
          <div className="relative mb-10 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-200 blur-3xl" />
            </div>

            <div className="relative max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-medium tracking-wide text-white">
                  Official Directory
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Trust Members Directory
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Official contact and designation details of the trust members
                for the academic year 2026–2027.
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-100 hover:bg-slate-100">
                    <TableHead className="w-[90px] py-5 text-center font-black uppercase tracking-wide text-slate-900">
                      Sl.No
                    </TableHead>

                    <TableHead className="py-5 font-black uppercase tracking-wide text-slate-900">
                      Name
                    </TableHead>

                    <TableHead className="py-5 font-black uppercase tracking-wide text-slate-900">
                      Designation
                    </TableHead>

                    <TableHead className="py-5 font-black uppercase tracking-wide text-slate-900">
                      Mobile Number
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {trustMembers.map((member, index) => (
                    <TableRow
                      key={member.name}
                      className="transition-colors hover:bg-slate-50"
                    >
                      <TableCell className="py-5 text-center font-bold text-slate-700">
                        {index + 1}
                      </TableCell>

                      <TableCell className="py-5 font-bold text-slate-900">
                        {member.name}
                      </TableCell>

                      <TableCell className="py-5 text-slate-700">
                        {member.role}
                      </TableCell>

                      <TableCell className="py-5 font-medium text-slate-700">
                        {member.mobile}
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