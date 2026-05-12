"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Academics",
    dropdown: [
      { label: "Courses", href: "/academics/courses" },
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Text Books", href: "/academics/text-books" },
      { label: "Academic Calendar", href: "/academics/calendar" },
      { label: "Annual Report", href: "/academics/annual-report" },
    ],
  },
  {
    label: "Administration",
    dropdown: [
      { label: "Admissions", href: "/administration/admissions" },
      { label: "Fee Structure", href: "/administration/fee-structure" },
      { label: "Students Details", href: "/administration/students-details" },
      { label: "Circulars & Notices", href: "/administration/circulars" },
      { label: "Rules & Regulations", href: "/administration/rules" },
      { label: "School Management Committee", href: "/administration/smc" },
      { label: "PTA", href: "/administration/pta" },
    ],
  },
  {
    label: "Public Disclosure",
    href: "/public-disclosure",
  },
  {
    label: "About Us",
    dropdown: [
      { label: "Our Team", href: "/about/team" },
      { label: "Management", href: "/about/management" },
      { label: "Infrastructure & Facilities", href: "/about/infrastructure" },
      { label: "Gallery", href: "/about/gallery" },
    ],
  },
  {
    label: "Downloads",
    dropdown: [
      { label: "Transfer Certificate", href: "/downloads/tc" },
      { label: "E-Brochure", href: "/downloads/brochure" },
    ],
  },
  {
    label: "More",
    href: "/more",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="flex h-36 items-center justify-between">
          {/* Logo */}
          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-[260px] items-center justify-start"
          >
            <div className="relative h-24 w-[260px] transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/favicon.svg"
                alt="National Public School Logo"
                fill
                priority
                className="object-contain object-right"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 rounded-xl px-5 py-3 text-[15px] font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-blue-600">
                      {item.label}
                      <ChevronDown size={16} />
                    </button>

                    {/* Dropdown */}
                    <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="min-w-[260px] rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="rounded-xl px-3 xl:px-4 py-3 text-[15px] font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              className="h-12 rounded-2xl bg-slate-950 px-6 text-sm font-semibold text-white transition-all hover:bg-blue-700"
              onClick={() => {
                const form = document.getElementById("enquiry-form");
                form?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-slate-800 transition hover:bg-slate-100 lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="border-t border-slate-200 bg-white py-5 lg:hidden">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div className="px-3 py-2">
                      <div className="mb-2 text-base font-semibold text-slate-900">
                        {item.label}
                      </div>

                      <div className="ml-3 space-y-1 border-l border-slate-200 pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="px-3 pt-5">
                <Button
                  className="h-12 w-full rounded-2xl bg-slate-950 text-sm font-semibold text-white hover:bg-blue-700"
                  onClick={() => {
                    setIsOpen(false);

                    const form = document.getElementById("enquiry-form");
                    form?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
