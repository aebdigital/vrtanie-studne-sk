"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Vŕtanie studní" },
  { href: "/cennik", label: "Cenník" },
  { href: "/galeria", label: "Fotogaléria" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-[90%] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - phone numbers */}
          <div className="hidden lg:flex items-center gap-4 min-w-[200px]">
            <a
              href="tel:+421907872591"
              className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-teal transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0907 872 591
            </a>
            <a
              href="tel:+421915450618"
              className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-teal transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0915 450 618
            </a>
          </div>

          {/* Center - nav links, logo, nav links */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors hover:text-teal ${
                  pathname === link.href
                    ? "text-teal border-b-2 border-teal pb-1"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/" className="flex-shrink-0 mx-4">
              <Image
                src="/images/logo.png"
                alt="Vŕtanie studní - Poseidon works s.r.o."
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors hover:text-teal ${
                  pathname === link.href
                    ? "text-teal border-b-2 border-teal pb-1"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile: logo left */}
          <Link href="/" className="flex-shrink-0 md:hidden">
            <Image
              src="/images/logo.png"
              alt="Vŕtanie studní - Poseidon works s.r.o."
              width={200}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Right side - email */}
          <div className="hidden lg:flex items-center min-w-[200px] justify-end">
            <a
              href="mailto:info@vrtanie-studne.sk"
              className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-teal transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@vrtanie-studne.sk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal hover:bg-gray-100 transition-colors"
            aria-label="Menu"
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-teal bg-teal/10"
                      : "text-gray-700 hover:text-teal hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-1 px-3 pt-2 border-t border-gray-100 mt-1">
                <a
                  href="tel:+421907872591"
                  className="py-1 text-sm text-gray-500 hover:text-teal"
                >
                  0907 872 591
                </a>
                <a
                  href="tel:+421915450618"
                  className="py-1 text-sm text-gray-500 hover:text-teal"
                >
                  0915 450 618
                </a>
                <a
                  href="mailto:info@vrtanie-studne.sk"
                  className="py-1 text-sm text-gray-500 hover:text-teal"
                >
                  info@vrtanie-studne.sk
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
