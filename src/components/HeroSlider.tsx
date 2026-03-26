"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    heading: "VŔTANIE STUDNÍ",
    subheading: "Rýchlo a kvalitne",
    nav: "VŔTANIE STUDNÍ",
  },
  {
    heading: "GARANCIA NÁJDENIA VODY",
    subheading:
      "Garantujeme nájdenie vody \u2013 s nami sa Vám nestane že zostanete bez vody.",
    nav: "GARANCIA NÁJDENIA VODY",
  },
  {
    heading: "STUDŇA NA KĽÚČ",
    subheading:
      "Vyvŕtame studňu, urobíme šachtu a tiež prípojku do objektu.",
    nav: "STUDŇA NA KĽÚČ",
  },
  {
    heading: "VŔTANIE UŽ OD 65 EUR",
    subheading: "najlacnejšie touto technológiou na trhu",
    nav: "VŔTANIE UŽ OD 65 EUR",
  },
  {
    heading: "DOPRAVA ZDARMA",
    subheading:
      "Privezieme aj odvezieme všetko potrebné k vŕtaniu zdarma",
    nav: "DOPRAVA ZDARMA",
  },
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next, active]);

  return (
    <>
      {/* Navigation - positioned relative to the ParallaxHero section (nearest positioned ancestor) */}
      <nav className="hidden lg:flex flex-col gap-2 text-right absolute right-[5vw] top-1/2 -translate-y-1/2 z-20">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`text-sm uppercase tracking-wider transition-all duration-300 text-right px-2 py-1 ${
              index === active
                ? "text-white font-bold"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            {slide.nav}
          </button>
        ))}
      </nav>

      {/* Left content - fixed position using viewport units */}
      <div className="relative z-10 pl-[15vw] pr-[5vw] py-14 sm:py-20">
        <div className="text-left max-w-[55vw]">
          <h1
            key={active}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.03] animate-[fadeSlideIn_0.5s_ease-out]"
          >
            {slides[active].heading}
          </h1>
          <p
            key={`sub-${active}`}
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-6 animate-[fadeSlideIn_0.5s_ease-out_0.1s_both]"
          >
            {slides[active].subheading}
          </p>

          {/* Contact bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+421907872591"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-5 py-3 rounded-lg hover:bg-white/25 transition-colors text-base sm:text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0907 872 591
            </a>
            <a
              href="mailto:info@vrtanie-studne.sk"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-5 py-3 rounded-lg hover:bg-white/25 transition-colors text-base sm:text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@vrtanie-studne.sk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
