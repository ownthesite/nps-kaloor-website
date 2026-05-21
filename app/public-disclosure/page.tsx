import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Download,
  FileText,
  GraduationCap,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Mandatory Public Disclosure | NPS Kaloor",
  description:
    "CBSE mandatory public disclosure information for National Public School Kaloor.",
};

const statutoryDocuments = [
  {
    title: "Affiliation Letter",
    file: "/disclosures/statutory/affiliation.pdf",
    status: "Active",
  },
  {
    title: "No Objection Certificate (NOC)",
    file: "/disclosures/statutory/noc.pdf",
    status: "Active",
  },
  {
    title: "Trust Registration Certificate",
    file: "/disclosures/statutory/trust.pdf",
    status: "Permanent",
  },
  {
    title: "Recognition Certificate",
    file: "/disclosures/statutory/recognition.pdf",
    status: "Active",
  },
  {
    title: "DEO Certificate",
    file: "/disclosures/statutory/deo-certificate.pdf",
    status: "Active",
  },
];

const safetyDocuments = [
  {
    title: "Fire Safety Certificate",
    file: "/disclosures/safety/fire-safety.pdf",
    status: "To Be Updated",
  },
  {
    title: "Building Safety Certificate",
    file: "/disclosures/safety/building-safety.pdf",
    status: "To Be Updated",
  },
  {
    title: "Health & Sanitation Certificate",
    file: "/disclosures/safety/health-sanitation.pdf",
    status: "To Be Updated",
  },
];

const academicDocuments = [
  {
    title: "Academic Calendar (2026–27)",
    file: "#",
    status: "Updating",
  },
  {
    title: "Fee Structure (2026–27)",
    file: "#",
    status: "Updating",
  },
  {
    title: "Last Three Year Board Results",
    file: "/disclosures/academics/board-results.pdf",
    status: "Active",
  },
  {
    title: "Parent Teacher Association (PTA)",
    file: "/disclosures/committees/pta.pdf",
    status: "Active",
  },
  {
    title: "School Management Committee (SMC)",
    file: "/disclosures/committees/smc.pdf",
    status: "Active",
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "Active") {
    return (
      <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
        {status}
      </Badge>
    );
  }

  if (status === "Permanent") {
    return (
      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
        {status}
      </Badge>
    );
  }

  return (
    <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
      {status}
    </Badge>
  );
}

function DocumentCard({
  title,
  file,
  status,
}: {
  title: string;
  file: string;
  status: string;
}) {
  return (
    <Card className="border border-slate-200 shadow-none rounded-2xl">
      <CardContent className="p-5 flex items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center">
            <FileText className="h-5 w-5 text-slate-700" />
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              {title}
            </h3>

            <div className="mt-2">
              <StatusBadge status={status} />
            </div>
          </div>
        </div>

        {file !== "#" ? (
          <Link
            href={file}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            <Download className="h-4 w-4" />
            View
          </Link>
        ) : (
          <span className="text-sm text-slate-400">Updating for Academic Year 2026–27</span>
        )}
      </CardContent>
    </Card>
  );
}

export default function PublicDisclosurePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-slate-100 text-slate-700 hover:bg-slate-100">
              CBSE Appendix IX
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Mandatory Public Disclosure
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">
              Public disclosure information published in accordance with CBSE
              affiliation and transparency guidelines.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Last Updated: May 2026
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="rounded-2xl border border-slate-200 shadow-none">
              <CardContent className="p-6">
                <BadgeCheck className="h-6 w-6 text-slate-700 mb-4" />

                <p className="text-sm text-slate-500">Affiliation Number</p>

                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  931245
                </h3>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-slate-200 shadow-none">
              <CardContent className="p-6">
                <GraduationCap className="h-6 w-6 text-slate-700 mb-4" />

                <p className="text-sm text-slate-500">Classes</p>

                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  I – XII
                </h3>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-slate-200 shadow-none">
              <CardContent className="p-6">
                <Building2 className="h-6 w-6 text-slate-700 mb-4" />

                <p className="text-sm text-slate-500">Curriculum</p>

                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  CBSE
                </h3>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-slate-200 shadow-none">
              <CardContent className="p-6">
                <Users className="h-6 w-6 text-slate-700 mb-4" />

                <p className="text-sm text-slate-500">UDISE Code</p>

                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  32080301517
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* General Information */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              General Information
            </h2>

            <p className="mt-3 text-slate-600">
              Basic school information as required under CBSE public disclosure
              norms.
            </p>
          </div>

          <Card className="mt-8 rounded-2xl border border-slate-200 shadow-none overflow-hidden">
            <CardContent className="p-0">
              <div className="divide-y divide-slate-200">
                {[
                  ["School Name", "National Public School, Kaloor"],
                  ["Affiliation Number", "931245"],
                  ["School Code", "To Be Updated"],
                  ["UDISE Code", "32080301517"],
                  ["Classes", "I – XII"],
                  ["Board", "Central Board of Secondary Education (CBSE)"],
                  ["Address", "Deshabhimani Road, Kaloor, Kochi, Kerala"],
                  ["Principal Name", "To Be Updated"],
                  ["Principal Qualification", "To Be Updated"],
                  ["Website", "www.npskaloor.com"],
                  ["Email", "nps.kaloor@gmail.com"],
                  ["Contact Number", "+91-7560 981 234"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid sm:grid-cols-3 gap-4 px-6 py-5"
                  >
                    <div className="text-sm font-medium text-slate-500">
                      {label}
                    </div>

                    <div className="sm:col-span-2 text-sm sm:text-base text-slate-900">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Documents */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="h-6 w-6 text-slate-700" />

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Documents & Certificates
            </h2>
          </div>

          <div className="space-y-12">
            {/* Statutory */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-5">
                Statutory Documents
              </h3>

              <div className="grid gap-4">
                {statutoryDocuments.map((doc) => (
                  <DocumentCard key={doc.title} {...doc} />
                ))}
              </div>
            </div>

            <Separator />

            {/* Safety */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-5">
                Safety & Compliance
              </h3>

              <div className="grid gap-4">
                {safetyDocuments.map((doc) => (
                  <DocumentCard key={doc.title} {...doc} />
                ))}
              </div>
            </div>

            <Separator />

            {/* Academics */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <CalendarDays className="h-5 w-5 text-slate-700" />

                <h3 className="text-lg font-semibold text-slate-900">
                  Academic Information
                </h3>
              </div>

              <div className="grid gap-4">
                {academicDocuments.map((doc) => (
                  <DocumentCard key={doc.title} {...doc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-3xl border border-slate-200 shadow-none">
            <CardContent className="p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Staff Details
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Staff information and teaching details for the academic year
                2026–27 will be updated shortly.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {["PGT", "TGT", "PRT", "Counsellor"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <p className="text-sm text-slate-500">{item}</p>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      To Be Updated
                    </h3>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-3xl border border-slate-200 shadow-none">
            <CardContent className="p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Infrastructure Details
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Infrastructure information for the current academic year is
                being updated.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Campus Area",
                  "Classrooms",
                  "Laboratories",
                  "Library",
                  "Smart Classrooms",
                  "Sports Facilities",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <p className="text-sm text-slate-500">{item}</p>

                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      To Be Updated
                    </h3>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}