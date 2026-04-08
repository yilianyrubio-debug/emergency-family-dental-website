"use client";

import { useState } from "react";

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-brand-red text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-sm font-medium">
        <span className="animate-pulse">🚨</span>
        <span>Dental Emergency?</span>
        <a
          href="tel:2016203920"
          className="underline underline-offset-2 font-bold hover:text-white/90 transition"
        >
          Call Now: (201) 620-3920
        </a>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition"
          aria-label="Close banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
