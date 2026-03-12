"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function OptInPopup() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible || closed) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[90] w-[min(92vw,360px)]">
      <div className="relative rounded-2xl border border-teal/30 bg-white p-4 shadow-[0_24px_48px_-28px_rgba(6,31,48,0.8)]">
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="Zavrieť"
          className="absolute right-3 top-2 text-slate-400 hover:text-slate-600"
        >
          ×
        </button>
        <p className="eyebrow text-[11px] text-teal mb-2">Nezáväzná ponuka</p>
        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2">
          Chcete cenovú ponuku na mieru?
        </h3>
        <p className="text-sm text-slate-600 mb-3">
          Nechajte nám kontakt a ozveme sa vám čo najskôr.
        </p>
        <div className="flex flex-col gap-2">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-dark animate-bounce"
          >
            Áno, chcem ponuku
          </Link>
          <button
            type="button"
            onClick={() => setClosed(true)}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            Neskôr
          </button>
        </div>
      </div>
    </div>
  );
}
