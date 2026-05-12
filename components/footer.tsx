import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="relative h-24 sm:h-28 w-[260px] sm:w-[340px]">
                <Image
                  src="/logo.svg"
                  alt="National Public School Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              Providing quality education and holistic development since 1996.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-slate-900">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/academics"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Academics
                </Link>
              </li>

              <li>
                <Link
                  href="/admissions"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-slate-900">
              Information
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/cbse"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  CBSE Board
                </Link>
              </li>

              <li>
                <Link
                  href="/campus-life"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Campus Life
                </Link>
              </li>

              <li>
                <Link
                  href="/news"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  News & Events
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-slate-900">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-1 text-slate-500 flex-shrink-0"
                />

                <span className="text-slate-600">Kaloor, Kochi, Kerala</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={17} className="text-slate-500 flex-shrink-0" />

                <a
                  href="tel:+91-484-2396789"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  +91-484-2396789
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={17} className="text-slate-500 flex-shrink-0" />

                <a
                  href="mailto:info@npskaloor.edu.in"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  info@npskaloor.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} National Public School, Kaloor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
