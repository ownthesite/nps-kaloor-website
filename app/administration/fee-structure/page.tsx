"use client";

import { BadgeIndianRupee } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeeStructurePage() {
  return (
    <main className="bg-[#f7f8fc]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6]">
        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 border border-white/20 bg-white/10 px-4 py-1 text-white backdrop-blur-sm hover:bg-white/10">
              Academic Year 2026–27
            </Badge>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fee Structure
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Detailed quarterly fee structure applicable for the academic year
              2026–27, including tuition fees and academic-related charges for
              all classes.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Structure Table */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Intro Card */}
          <div className="relative mb-10 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-200 blur-3xl" />
            </div>

            <div className="relative max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <BadgeIndianRupee className="h-4 w-4 text-white" />

                <span className="text-sm font-medium tracking-wide text-white">
                  Academic Year 2026–27
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Quarterly Fee Structure
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                The following fee structure is applicable for the current
                academic year and is payable in quarterly terms.
              </p>
            </div>
          </div>

          {/* Table */}
          <Card className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <CardContent className="overflow-x-auto p-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="border-r border-slate-200 px-6 py-5 text-left text-sm font-bold uppercase tracking-wide text-slate-900">
                      Class
                    </th>

                    <th className="border-r border-slate-200 px-6 py-5 text-center text-sm font-bold uppercase tracking-wide text-slate-900">
                      I Term
                    </th>

                    <th className="border-r border-slate-200 px-6 py-5 text-center text-sm font-bold uppercase tracking-wide text-slate-900">
                      II, III & IV Term
                    </th>

                    <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wide text-slate-900">
                      Total Annual Fees
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      className: "I – IV",
                      firstTerm: 6550,
                      otherTerms: 4200,
                      total: 19150,
                    },
                    {
                      className: "V – VIII",
                      firstTerm: 6850,
                      otherTerms: 4500,
                      total: 20350,
                    },
                    {
                      className: "IX – X",
                      firstTerm: 7400,
                      otherTerms: 4750,
                      total: 21650,
                    },
                    {
                      className: "XI – XII",
                      firstTerm: 7700,
                      otherTerms: 5200,
                      total: 23300,
                    },
                  ].map((item, index) => (
                    <tr
                      key={item.className}
                      className={`border-b border-slate-200 transition-colors hover:bg-slate-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                      }`}
                    >
                      <td className="border-r border-slate-200 px-6 py-6 text-sm font-bold text-slate-900">
                        {item.className}
                      </td>

                      <td className="border-r border-slate-200 px-6 py-6 text-center text-sm font-medium text-slate-700">
                        ₹{item.firstTerm.toLocaleString()}
                      </td>

                      <td className="border-r border-slate-200 px-6 py-6 text-center text-sm font-medium text-slate-700">
                        ₹{item.otherTerms.toLocaleString()}
                      </td>

                      <td className="px-6 py-6 text-center text-base font-black text-[#2c3575]">
                        ₹{item.total.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}