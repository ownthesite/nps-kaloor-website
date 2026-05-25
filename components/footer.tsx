import Link from "next/link";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/administration/admissions" },
  { label: "Fee Structure", href: "/administration/fee-structure" },
  { label: "Academic Calendar", href: "/academics/calendar" },
  { label: "Gallery", href: "/about/gallery" },
];

const informationLinks = [
  { label: "Courses", href: "/academics/courses" },
  { label: "Facilities", href: "/about/infrastructure" },
  { label: "Educational Trust", href: "/about/trust" },
  { label: "Public Disclosure", href: "/public-disclosure" },
  { label: "Rules & Regulations", href: "/administration/rules" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-[#0f172a] via-[#1d2555] to-[#2c3575] text-white">
      {/* Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-300 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="relative h-24 w-[260px] transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/logo.png"
                  alt="National Public School Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Providing quality education, character development, and holistic
              learning experiences for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-black tracking-tight text-white">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="mb-6 text-lg font-black tracking-tight text-white">
              Information
            </h4>

            <ul className="space-y-4">
              {informationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-black tracking-tight text-white">
              Contact
            </h4>

            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <MapPin
                    size={16}
                    className="text-white"
                  />
                </div>

                <span className="leading-7 text-slate-300">
                  Deshabhimani Road,
                  <br />
                  Kaloor, Kochi, Kerala
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Phone
                    size={16}
                    className="text-white"
                  />
                </div>

                <a
                  href="tel:+914842539088"
                  className="font-medium text-slate-300 transition-colors hover:text-white"
                >
                  +91 484 253 9088
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Phone
                    size={16}
                    className="text-white"
                  />
                </div>

                <a
                  href="tel:+917560981234"
                  className="font-medium text-slate-300 transition-colors hover:text-white"
                >
                  +91 75609 81234
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Mail
                    size={16}
                    className="text-white"
                  />
                </div>

                <a
                  href="mailto:nps.kaloor@gmail.com"
                  className="font-medium text-slate-300 transition-colors hover:text-white"
                >
                  nps.kaloor@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-slate-400">
              © {currentYear} National Public School, Kaloor.
              All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link
                href="/public-disclosure"
                className="transition-colors hover:text-white"
              >
                Public Disclosure
              </Link>

              <Link
                href="/administration/admissions"
                className="transition-colors hover:text-white"
              >
                Admissions
              </Link>

              <Link
                href="/about/gallery"
                className="transition-colors hover:text-white"
              >
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}