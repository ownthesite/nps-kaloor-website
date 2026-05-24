"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const brochurePages = [
  "/brochure/page-1.webp",
  "/brochure/page-2.webp",
];

export function BrochurePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("brochure-popup");

    if (!shown) {
      setOpen(true);
      sessionStorage.setItem("brochure-popup", "true");
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        className="
          fixed inset-0
          h-screen
          w-screen
          max-w-none
          translate-x-0
          translate-y-0
          rounded-none
          border-0
          bg-black/80
          p-0
          shadow-none
        "
      >
        <DialogTitle className="sr-only">
          School Brochure
        </DialogTitle>

        {/* 1. Wrapper: Clicking anywhere in this background closes the popup */}
        <div 
          className="flex min-h-screen w-screen items-center justify-center overflow-y-auto p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >

          {/* Floating Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="
              fixed right-4 top-4 z-50
              flex h-12 w-12 items-center justify-center
              rounded-none
              bg-black/60
              text-3xl text-white
              backdrop-blur-md
              transition
              hover:bg-black/80
            "
          >
            ×
          </button>

          {/* 2. Brochure Container: stopPropagation prevents accidental closing when clicking the images */}
          <div
            className="
              relative
              w-full
              max-w-[95vw]
              md:max-w-[90vw]
              lg:max-w-[1000px]
              xl:max-w-[1200px]
              bg-white
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* 3. Layout Optimization: Stack on mobile, Side-by-side on desktop */}
            <div className="flex flex-col md:flex-row w-full">
              {brochurePages.map((page, index) => (
                <a
                  key={index}
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full md:w-1/2 overflow-hidden group"
                >
                  <img
                    src={page}
                    alt={`Brochure Page ${index + 1}`}
                    className="
                      w-full
                      h-auto
                      object-contain
                      transition duration-500
                      group-hover:scale-[1.02]
                    "
                  />
                </a>
              ))}
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}