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
    <div className="relative z-10 max-w-[90%] mx-auto px-4 py-14 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center min-h-[260px]">
        {/* Left: heading + subheading */}
        <div className="text-left">
          <h1
            key={active}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.03] animate-[fadeSlideIn_0.5s_ease-out]"
          >
            {slides[active].heading}
          </h1>
          <p
            key={`sub-${active}`}
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl border-l-2 border-white/40 pl-4 animate-[fadeSlideIn_0.5s_ease-out_0.1s_both]"
          >
            {slides[active].subheading}
          </p>
        </div>

        {/* Right: navigation */}
        <nav className="hidden lg:flex flex-col gap-2 text-right">
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
      </div>
    </div>
  );
}
