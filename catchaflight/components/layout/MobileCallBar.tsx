"use client";

import { Phone } from "lucide-react";

export default function MobileCallBar() {
  return (
    <a
      href="tel:+18001234567"
      className="fixed bottom-0 left-0 right-0 z-[9999] flex items-center justify-center gap-2 bg-accent h-14 text-white font-semibold text-base md:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <Phone className="w-5 h-5" />
      Speak With a Specialist
    </a>
  );
}
