"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const images = [
  "vrtanie_studni01.jpg",
  "vrtanie_studni04.jpg",
  "vrtanie_studni05.jpg",
  "vrtanie_studni06.jpg",
  "vrtanie_studni07.jpg",
  "vrtanie_studni08.jpg",
  "vrtanie_studni09.jpg",
  "vrtanie_studni10.jpg",
  "vrtanie_studni11.jpg",
  "vrtanie_studni12.jpg",
  "vrtanie_studni13.jpg",
  "vrtanie_studni14.jpg",
  "vrtanie_studni15.jpg",
  "vrtanie_studni16.jpg",
  "vrtanie_studni18.jpg",
  "vrtanie_studni19.jpg",
  "vrtanie_studni20.jpg",
  "vrtanie_studni21.jpg",
  "vrtanie_studni22.jpg",
  "vrtanie_studni23.jpg",
  "vrtanie_studni24.jpg",
  "vrtanie_studni25.jpg",
];

export default function GaleriaPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="max-w-[90%] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fotogaléria
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pozrite si fotografie z našich realizácií vŕtania studní v teréne
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Vŕtanie studní - fotografia ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-[lightbox-zoom-in_0.2s_ease-out]"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Zavrieť"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Predchádzajúca fotografia"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Nasledujúca fotografia"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            key={lightboxIndex}
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16 my-8 animate-lightbox-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/${images[lightboxIndex]}`}
              alt={`Vŕtanie studní - fotografia ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
