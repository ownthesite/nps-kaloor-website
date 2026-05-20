"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Administration",
    dropdown: [
      { label: "Admissions", href: "/administration/admissions" },
      { label: "Fee Structure", href: "/administration/fee-structure" },
      { label: "School Management Committee", href: "/administration/smc" },
      { label: "PTA", href: "/administration/pta" },
      { label: "Circulars & Notices", href: "/administration/circulars" },
      { label: "Rules & Regulations", href: "/administration/rules" },
    ],
  },
  {
    label: "Academics",
    dropdown: [
      { label: "Courses", href: "/academics/courses" },
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Textbooks", href: "/academics/text-books" },
      { label: "Academic Calendar", href: "/academics/calendar" },
    ],
  },
  {
    label: "About Us",
    dropdown: [
      { label: "Our Team", href: "/about/team" },
      { label: "Management", href: "/about/management" },
      { label: "Educational Trust", href: "/about/trust" },
      { label: "Facilities", href: "/about/infrastructure" },
      { label: "Gallery", href: "/about/gallery" },
    ],
  },
  {
    label: "Public Disclosure",
    href: "/public-disclosure",
  },
  {
    label: "Downloads",
    dropdown: [
      { label: "Brochure", href: "/downloads/brochure" },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleScrollToEnquiry = () => {
    setIsOpen(false);
    const form = document.getElementById("enquiry-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-12">
        {/* Adjusted height for mobile vs desktop */}
        <div className="flex h-20 items-center justify-between lg:h-36">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex w-[200px] shrink-0 items-center justify-start lg:w-[260px]"
          >
            <div className="relative h-12 w-full transition-transform duration-300 hover:scale-[1.02] lg:h-24">
              <Image
                src="/favicon.svg"
                alt="National Public School Logo"
                fill
                priority
                className="object-contain object-left lg:object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 rounded-xl px-4 py-3 text-[15px] font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-blue-600 xl:px-5">
                      {item.label}
                      <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown - Added focus-within for accessibility and pointer-events logic */}
                    <div className="invisible absolute left-0 top-full pt-3 opacity-0 pointer-events-none transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto focus-within:visible focus-within:opacity-100 focus-within:pointer-events-auto">
                      <div className="min-w-[260px] rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600 focus:bg-slate-50 focus:text-blue-600 focus:outline-none"
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
                    className="rounded-xl px-3 py-3 text-[15px] font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-blue-600 xl:px-4"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              className="h-12 rounded-2xl bg-slate-950 px-6 text-sm font-semibold text-white transition-all hover:bg-blue-700"
              onClick={handleScrollToEnquiry}
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-slate-800 transition hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav - Added max-height and scrollability */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-20 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain border-b border-t border-slate-200 bg-white py-5 shadow-2xl lg:hidden">
            <div className="space-y-1 px-4 sm:px-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div className="px-2 py-2">
                      <div className="mb-2 text-base font-semibold text-slate-900">
                        {item.label}
                      </div>
                      <div className="ml-3 space-y-1 border-l-2 border-slate-100 pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
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
                      className="block rounded-xl px-2 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="px-2 pt-6 pb-8">
                <Button
                  className="h-12 w-full rounded-2xl bg-slate-950 text-base font-semibold text-white hover:bg-blue-700"
                  onClick={handleScrollToEnquiry}
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