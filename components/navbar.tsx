"use client";

import Image from "next/image";
import Link from "next/link";

import {
  useState,
  useEffect,
} from "react";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },

  {
    label: "Administration",
    dropdown: [
      { label: "Admissions", href: "/administration/admissions" },
      { label: "Fee Structure", href: "/administration/fee-structure" },
      {
        label: "School Management Committee",
        href: "/administration/smc",
      },
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

  const pathname = usePathname();

  const router = useRouter();

  /* FIX SCROLL POSITION ISSUE */
  useEffect(() => {
    window.scrollTo(0, 0);

    setIsOpen(false);
  }, [pathname]);

  /* BODY LOCK */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScrollToEnquiry = () => {
    setIsOpen(false);

    const form = document.getElementById("enquiry-form");

    form?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleNavigate = (href: string) => {
    setIsOpen(false);

    router.push(href);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        {/* Navbar */}
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            scroll={true}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="relative h-14 w-14 overflow-hidden">
              <Image
                src="/favicon.svg"
                alt="National Public School Logo"
                fill
                priority
                className="object-contain p-2"
              />
            </div>

            <div className="hidden sm:block">
              <h2 className="text-lg font-black tracking-tight text-slate-900 lg:text-xl">
                National Public School
              </h2>

              <p className="text-sm font-medium text-slate-500">
                Kaloor, Kochi
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="group relative"
              >
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 rounded-2xl px-5 py-3 text-[15px] font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-[#2c3575]">
                      {item.label}

                      <ChevronDown
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </button>

                    {/* Dropdown */}
                    <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 pointer-events-none transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto">
                      <div className="min-w-[290px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                        {/* Header */}
                        <div className="mb-3 rounded-2xl bg-gradient-to-r from-[#1d2555] to-[#5564d8] p-4 text-white">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                              <GraduationCap className="h-5 w-5" />
                            </div>

                            <div>
                              <h3 className="text-sm font-bold tracking-wide">
                                {item.label}
                              </h3>

                              <p className="mt-1 text-xs text-white/80">
                                Explore sections
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="space-y-1">
                          {item.dropdown.map((subItem) => (
                            <button
                              key={subItem.href}
                              onClick={() =>
                                handleNavigate(subItem.href)
                              }
                              className="group/item flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-[#2c3575]"
                            >
                              <span>{subItem.label}</span>

                              <ChevronDown className="h-4 w-4 -rotate-90 opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:opacity-100" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    scroll={true}
                    className="rounded-2xl px-5 py-3 text-[15px] font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-[#2c3575]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className="h-12 rounded-2xl bg-gradient-to-r from-[#1d2555] to-[#5564d8] px-7 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              onClick={handleScrollToEnquiry}
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-20 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-t border-slate-200 bg-white shadow-2xl lg:hidden">
            {/* Top Banner */}
            <div className="bg-gradient-to-r from-[#1d2555] to-[#5564d8] px-6 py-6 text-white">
              <h2 className="text-xl font-black tracking-tight">
                National Public School
              </h2>

              <p className="mt-1 text-sm text-white/80">
                Kaloor, Kochi
              </p>
            </div>

            {/* Nav Items */}
            <div className="space-y-2 px-5 py-5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50/70"
                >
                  {item.dropdown ? (
                    <div className="p-4">
                      <div className="mb-3 text-base font-black text-slate-900">
                        {item.label}
                      </div>

                      <div className="space-y-1 border-l-2 border-slate-200 pl-4">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.href}
                            onClick={() =>
                              handleNavigate(subItem.href)
                            }
                            className="block w-full py-2 text-left text-sm font-semibold text-slate-600 transition-colors hover:text-[#2c3575]"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() =>
                        handleNavigate(item.href!)
                      }
                      className="block w-full px-4 py-4 text-left text-base font-bold text-slate-900 transition hover:text-[#2c3575]"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 pb-8">
                <Button
                  className="h-14 w-full rounded-2xl bg-gradient-to-r from-[#1d2555] to-[#5564d8] text-base font-bold text-white shadow-lg"
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