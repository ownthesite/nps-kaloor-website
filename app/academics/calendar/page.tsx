"use client";

import {
  CalendarDays,
  BookOpen,
  Trophy,
  Flag,
  NotebookPen,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const months = [
  {
    month: "May 2026",
    events: [
      { date: "May 1", title: "May Day Holiday", type: "holiday" },
      { date: "May 4", title: "Re-opening of Classes X & XII", type: "academic" },
      { date: "May 22", title: "Open House (X & XII)", type: "event" },
      { date: "May 27", title: "Bakrid Holiday", type: "holiday" },
    ],
  },
  {
    month: "June 2026",
    events: [
      { date: "June 1", title: "Re-opening of UKG & I–IX", type: "academic" },
      { date: "June 5", title: "World Environment Day", type: "event" },
      { date: "June 24", title: "School Parliament Election", type: "event" },
      { date: "June 27", title: "Investiture Ceremony", type: "event" },
    ],
  },
  {
    month: "July 2026",
    events: [
      { date: "July 3", title: "HOD Meeting", type: "academic" },
      { date: "July 6", title: "Term 1 Examination", type: "exam" },
      { date: "July 21", title: "Reading & Public Speaking Challenge", type: "event" },
    ],
  },
  {
    month: "August 2026",
    events: [
      { date: "August 10", title: "Arts Gala", type: "event" },
      { date: "August 15", title: "Independence Day", type: "holiday" },
      { date: "August 25", title: "First Onam / Milad-i-Sharif", type: "holiday" },
      { date: "August 28", title: "Sree Narayana Guru Jayanthi", type: "holiday" },
    ],
  },
  {
    month: "September 2026",
    events: [
      { date: "September 2", title: "Open House I–XII", type: "academic" },
      { date: "September 5", title: "Teacher’s Day", type: "event" },
      { date: "September 7", title: "Term I Examination", type: "exam" },
    ],
  },
  {
    month: "October 2026",
    events: [
      { date: "October 2", title: "Gandhi Jayanthi", type: "holiday" },
      { date: "October 14", title: "Diary Checking", type: "academic" },
      { date: "October 21", title: "Vijayadashami Holiday", type: "holiday" },
    ],
  },
  {
    month: "November 2026",
    events: [
      { date: "November 3", title: "1st Model Examination", type: "exam" },
      { date: "November 14", title: "Children’s Day", type: "event" },
      { date: "November 28", title: "Sports Day", type: "sports" },
    ],
  },
  {
    month: "December 2026",
    events: [
      { date: "December 7", title: "Pre Board Examination", type: "exam" },
      { date: "December 22", title: "Annual Day", type: "event" },
      { date: "December 25", title: "Christmas Holiday", type: "holiday" },
    ],
  },
  {
    month: "January 2027",
    events: [
      { date: "January 1", title: "New Year Holiday", type: "holiday" },
      { date: "January 21", title: "Annual Examination", type: "exam" },
      { date: "January 26", title: "Republic Day", type: "holiday" },
    ],
  },
  {
    month: "February 2027",
    events: [
      { date: "February 4", title: "World Cancer Day", type: "event" },
      { date: "February 21", title: "Mother Language Day", type: "event" },
      { date: "February 28", title: "National Science Day", type: "event" },
    ],
  },
  {
    month: "March 2027",
    events: [
      { date: "March 6", title: "Maha Sivarathri", type: "holiday" },
      { date: "March 15", title: "Term II Examination", type: "exam" },
      { date: "March 28", title: "Easter", type: "holiday" },
    ],
  },
  {
    month: "April 2027",
    events: [
      { date: "April 7", title: "World Health Day", type: "event" },
      { date: "April 14", title: "Ambedkar Jayanthi", type: "holiday" },
      { date: "April 15", title: "Vishu Holiday", type: "holiday" },
    ],
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "holiday":
      return <Flag className="h-5 w-5 text-red-500" />;

    case "exam":
      return <NotebookPen className="h-5 w-5 text-blue-500" />;

    case "sports":
      return <Trophy className="h-5 w-5 text-yellow-500" />;

    default:
      return <BookOpen className="h-5 w-5 text-emerald-500" />;
  }
};

export default function CalendarPage() {
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
              Academic Year 2026–27
            </Badge>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Academic Calendar
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Stay informed about examinations, holidays, celebrations,
              academic milestones, and important school events throughout the
              academic year.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Intro Banner */}
          <div className="relative mb-12 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1d2555] via-[#2c3575] to-[#4b57b6] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-200 blur-3xl" />
            </div>

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <CalendarDays className="h-4 w-4 text-white" />

                  <span className="text-sm font-medium tracking-wide text-white">
                    School Planner 2026–27
                  </span>
                </div>

                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Important Dates & Events
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                  A complete academic planner featuring school activities,
                  examinations, celebrations, open houses, and holidays for the
                  year.
                </p>
              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-sm">
                <CalendarDays className="h-11 w-11 text-white" />
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {months.map((month) => (
              <div
                key={month.month}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#2c3575] to-[#5564d8] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black tracking-tight">
                      {month.month}
                    </h3>

                    <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                      <CalendarDays className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Events */}
                <div className="space-y-4 p-6">
                  {month.events.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-300 hover:border-slate-200 hover:bg-slate-50"
                    >
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                        {getIcon(event.type)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold tracking-wide text-slate-500">
                          {event.date}
                        </p>

                        <h4 className="mt-1 text-base font-bold leading-6 text-slate-900">
                          {event.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 overflow-hidden rounded-[28px] border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6">
            <p className="text-sm leading-7 text-amber-900">
              Note: Dates mentioned above are tentative and may vary based on
              government notifications, examination schedules, and school
              circulars issued during the academic year.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}