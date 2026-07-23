// components/brochure-popup.tsx
"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";

export function BrochurePopup() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const hasSeenBrochure = sessionStorage.getItem("brochure_seen");

    if (!hasSeenBrochure) {
      setIsOpen(true);
      sessionStorage.setItem("brochure_seen", "true");
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        variant="fullscreen"
        showCloseButton={false}
        overlayClassName="bg-black/80 backdrop-blur-sm"
        className="p-0 overflow-hidden bg-background rounded-xl border-0 shadow-2xl w-[calc(100vw-1rem)] h-[calc(100dvh-1rem)] sm:w-[95vw] sm:h-[95dvh]"
      >
        <DialogTitle className="sr-only">School Brochure</DialogTitle>

        <DialogClose className="absolute right-3 top-3 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-6 sm:top-6">
          <XIcon className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="relative flex-1 w-full h-full -webkit-overflow-scrolling-touch overflow-y-auto">
          <iframe
            src="/brochure/brochure.pdf#toolbar=0"
            className="absolute inset-0 h-full w-full border-0 min-h-[500px] sm:min-h-full"
            title="School Brochure"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
