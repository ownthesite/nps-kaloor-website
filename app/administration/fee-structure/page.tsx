"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  CalendarDays,
  Download,
  FileText,
  Info,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const feeCategories = [
  {
    title: "Admission Fee",
    description: "One-time admission fee applicable during enrollment.",
  },
  {
    title: "Tuition Fee",
    description: "Monthly tuition fee applicable for the academic year.",
  },
  {
    title: "Annual Fee",
    description: "Annual institutional and academic facility charges.",
  },
  {
    title: "Transport Fee",
    description: "Applicable for students availing school transportation.",
  },
];

export default function FeeStructurePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      {/* Fee Structure Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-3 mb-5">
              <BadgeIndianRupee className="h-6 w-6 text-slate-700" />

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Fee Structure (2026–27)
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
              Quarterly fee structure applicable for the academic year 2026–27.
            </p>
          </div>

          <Card className="rounded-3xl border border-slate-200 shadow-none overflow-hidden">
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-5 text-left text-sm font-semibold text-slate-900 border-r border-slate-200">
                      Class
                    </th>

                    <th className="px-6 py-5 text-left text-sm font-semibold text-slate-900 border-r border-slate-200">
                      Fee Type
                    </th>

                    {["I", "II", "III", "IV"].map((term) => (
                      <th
                        key={term}
                        className="px-6 py-5 text-center text-sm font-semibold text-slate-900 border-r border-slate-200 last:border-r-0"
                      >
                        {term}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      className: "LKG – UKG",
                      tuition: 3650,
                      other: 1400,
                      total: 5050,
                    },
                    {
                      className: "I – IV",
                      tuition: 3800,
                      other: 1550,
                      total: 5350,
                    },
                    {
                      className: "V – VIII",
                      tuition: 4100,
                      other: 1450,
                      total: 5550,
                    },
                    {
                      className: "IX – X",
                      tuition: 4250,
                      other: 1650,
                      total: 5900,
                    },
                    {
                      className: "XI – XII",
                      tuition: 4700,
                      other: 1500,
                      total: 6200,
                    },
                  ].flatMap((item) => [
                    /* Tuition */
                    <tr
                      key={`${item.className}-tuition`}
                      className="border-b border-slate-200"
                    >
                      <td
                        rowSpan={3}
                        className="px-6 py-5 text-sm font-semibold text-slate-900 border-r border-slate-200 align-middle bg-slate-50"
                      >
                        {item.className}
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-slate-700 border-r border-slate-200">
                        Tuition Fee
                      </td>

                      {[1, 2, 3, 4].map((term) => (
                        <td
                          key={`${item.className}-tuition-${term}`}
                          className="px-6 py-4 text-center text-sm text-slate-700 border-r border-slate-200 last:border-r-0"
                        >
                          ₹{item.tuition}
                        </td>
                      ))}
                    </tr>,

                    /* Other */
                    <tr
                      key={`${item.className}-other`}
                      className="border-b border-slate-200"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-700 border-r border-slate-200">
                        Other Fee
                      </td>

                      {[1, 2, 3, 4].map((term) => (
                        <td
                          key={`${item.className}-other-${term}`}
                          className="px-6 py-4 text-center text-sm text-slate-700 border-r border-slate-200 last:border-r-0"
                        >
                          ₹{item.other}
                        </td>
                      ))}
                    </tr>,

                    /* Total */
                    <tr
                      key={`${item.className}-total`}
                      className="border-b border-slate-200 bg-slate-50"
                    >
                      <td className="px-6 py-4 text-sm font-bold text-slate-900 border-r border-slate-200">
                        Total
                      </td>

                      {[1, 2, 3, 4].map((term) => (
                        <td
                          key={`${item.className}-total-${term}`}
                          className="px-6 py-4 text-center text-sm font-bold text-slate-900 border-r border-slate-200 last:border-r-0"
                        >
                          ₹{item.total}
                        </td>
                      ))}
                    </tr>,
                  ])}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
