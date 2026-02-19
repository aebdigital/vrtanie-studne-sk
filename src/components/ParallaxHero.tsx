"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ParallaxHeroProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function ParallaxHero({
  imageSrc,
  imageAlt,
  children,
}: ParallaxHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    let rafId: number;

    function onScroll() {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const offset = scrollY * 0.2;
        image!.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] flex items-center overflow-hidden"
    >
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
      </div>
      {children}
    </section>
  );
}
