"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsapp() {
  return (
    <Link
      href="https://wa.me/917560981234"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-green-500 text-white
        shadow-lg transition hover:scale-110 hover:bg-green-600
      "
    >
      <FaWhatsapp size={30} />
    </Link>
  );
}