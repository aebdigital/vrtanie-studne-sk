"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Vŕtanie studní" },
  { href: "/cennik", label: "Cenník" },
  { href: "/fotogaleria", label: "Fotogaléria" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinkClass = (href: string) =>
    `px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded-full transition-all ${
      pathname === href
        ? "bg-teal text-white shadow-[0_10px_24px_-16px_rgba(15,131,151,0.9)]"
        : "text-slate-700 hover:bg-teal/10 hover:text-teal"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl shadow-[0_22px_48px_-36px_rgba(6,31,48,0.8)]">
      <nav className="max-w-[90%] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Vŕtanie studní - MQM stavebno obchodná spoločnosť s.r.o."
              width={200}
              height={60}
              className="h-11 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:+421907872591"
              className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-3 py-1.5 text-sm text-slate-700 hover:border-teal/40 hover:text-teal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0907 872 591
            </a>
            <a
              href="tel:+421902681203"
              className="hidden lg:inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-3 py-1.5 text-sm text-slate-700 hover:border-teal/40 hover:text-teal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0902 681 203
            </a>
            <a
              href="mailto:info@vrtanie-studne.sk"
              className="hidden lg:inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-teal/40 hover:text-teal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@vrtanie-studne.sk
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-teal/25 bg-white text-slate-700 hover:text-teal hover:bg-teal/10"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-sk"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-sk"
        className={`md:hidden fixed inset-0 z-[70] transition-opacity duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-slate-950/50 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Zavrieť menu"
        />

        <aside
          className={`absolute left-0 top-0 h-dvh w-[90vw] max-w-sm bg-[linear-gradient(170deg,#ffffff,#f3fbfd)] border-r border-teal/20 shadow-[0_36px_70px_-42px_rgba(6,31,48,0.9)] transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between border-b border-teal/15 px-5 py-4">
              <Image
                src="/images/logo.png"
                alt="Vŕtanie studní"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-teal/20 bg-white p-2 text-slate-700 hover:text-teal"
                aria-label="Zavrieť menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-5 py-5 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] transition-colors ${
                    pathname === link.href
                      ? "bg-teal text-white"
                      : "text-slate-700 hover:bg-teal/10 hover:text-teal"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto border-t border-teal/15 px-5 py-5 space-y-2">
              <a
                href="tel:+421907872591"
                className="block rounded-xl border border-teal/25 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:text-teal"
              >
                0907 872 591
              </a>
              <a
                href="tel:+421902681203"
                className="block rounded-xl border border-teal/25 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:text-teal"
              >
                0902 681 203
              </a>
              <a
                href="mailto:info@vrtanie-studne.sk"
                className="block rounded-xl border border-teal/25 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:text-teal"
              >
                info@vrtanie-studne.sk
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
