"use client";

import {
  Download,
  ExternalLink,
  FileText,
} from "lucide-react";

export default function BrochurePage() {
  return (
    <main className="min-h-screen bg-slate-100 py-4 sm:py-8">

      <div className="mx-auto max-w-7xl px-2 sm:px-6">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div className="flex items-start gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0c2d83]/10 text-[#0c2d83]">
              <FileText className="h-7 w-7" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                School Brochure
              </h1>

              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                National Public School, Kaloor
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">

            <a
              href="/brochure.pdf"
              download
              className="
                inline-flex items-center gap-2
                rounded-2xl bg-[#0c2d83]
                px-5 py-3 text-sm font-semibold
                text-white shadow-lg transition
                hover:bg-[#163b9c]
              "
            >
              <Download className="h-4 w-4" />
              Download
            </a>

            <a
              href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-2xl border border-slate-200
                bg-white px-5 py-3 text-sm font-semibold
                text-slate-700 transition
                hover:bg-slate-100
              "
            >
              <ExternalLink className="h-4 w-4" />
              Open PDF
            </a>

          </div>
        </div>

        {/* A4 PDF Viewer */}
        <div className="flex justify-center">

          <div
            className="
              w-full
              max-w-[210mm]
              overflow-hidden
              rounded-xl
              bg-white
              shadow-2xl
            "
          >

            {/* Real A4 Ratio */}
            <div
              className="
                relative
                aspect-[1/1.4142]
                w-full
                bg-slate-200
              "
            >

              <iframe
                src="/brochure.pdf#toolbar=0"
                className="absolute inset-0 h-full w-full"
              />

            </div>
          </div>
        </div>

      </div>
    </main>
  );
}