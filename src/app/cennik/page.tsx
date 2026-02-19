import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cenník",
  description:
    "Cenník vŕtania studní - od 65EUR za 1 bm. Doprava, vŕtacie práce, inštalácia rúr a zásyp v cene. Poseidon works s.r.o.",
};

const includedItems = [
  {
    title: "Doprava",
    desc: "Doprava vŕtacej súpravy na miesto realizácie je zahrnutá v cene.",
    icon: (
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
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    title: "Vŕtacie práce",
    desc: "Kompletné vŕtacie práce vrátane vŕtania do požadovanej hĺbky.",
    icon: (
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
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: "Inštalácia rúr",
    desc: "Osadenie potravinárskeho modrého PVC potrubia s priemerom 140 mm.",
    icon: (
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
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    title: "Zásyp",
    desc: "Štrkový zásyp praným dunajským štrkom frakcie 4-8 mm.",
    icon: (
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
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
];

const additionalItems = [
  {
    title: "Technológia",
    desc: "Šachta, čerpadlo, tlaková nádoba, ventily, káble, reduktory a ďalšie komponenty potrebné pre kompletnú studňu.",
  },
  {
    title: "Práce inštalatéra",
    desc: "Odborné zapojenie čerpadla, tlakovej nádoby a pripojenie na existujúci vodovodný systém v dome.",
  },
  {
    title: "Prenájom bagra",
    desc: "V prípade potreby výkopových prác pre prístup k miestu vŕtania alebo pre osadenie šachty (ak je potrebný).",
  },
];

export default function CennikPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/vrtanie_studni06.jpg"
            alt="Vŕtanie studní cenník"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[90%] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cenník
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dlhoročná prax a skúsenosti - transparentné ceny bez skrytých
            poplatkov
          </p>
        </div>
      </section>

      {/* Why Us - Selling Points */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Dlhoročná prax",
                desc: "Skúsenosti sú našou devízou a vašou výhodou.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                title: "Profesionálny servis",
                desc: "Kompletný servis od A po Z na jednom mieste.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: "Ponuka na mieru",
                desc: "Zostavíme vám ponuku šitú presne na vaše potreby.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Doprava v cene",
                desc: "BONUS: doprava je zahrnutá už v cene vŕtania.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price + Included Items */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Price - Left */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-lg mb-2">Cena vŕtania studne</p>
              <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                <span className="text-2xl text-gray-500">od</span>
                <span className="text-6xl md:text-7xl font-bold text-teal">
                  65&euro;
                </span>
                <span className="text-xl text-gray-500">za 1 bm</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                (bm = bežný meter hĺbky vrtu)
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cena kvalitne zrealizovanej studne sa odvíja od viacerých
                faktorov, z ktorých je geologické podložie pozemku tým
                najdôležitejším. Pre presnú cenovú ponuku nás kontaktujte.
              </p>
            </div>

            {/* Included Items - Right, stacked */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Čo je zahrnuté v cene?
              </h2>
              <div className="space-y-4">
                {includedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.desc}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-teal flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Costs - Turnkey */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Studňa na kľúč
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Pre kompletnú studňu na kľúč je potrebné pripočítať nasledujúce
              položky, ktoré sú individuálne podľa potrieb zákazníka.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalItems.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-teal/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-teal/20 text-teal flex items-center justify-center font-bold mb-4">
                  +
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-teal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Potrebujete individuálnu cenovú ponuku?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Každá studňa je unikátna. Kontaktujte nás a pripravíme vám cenovú
            ponuku presne na mieru vašim potrebám a podmienkam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-white text-teal font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Žiadať o ponuku
            </Link>
            <a
              href="tel:+421907872591"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Zavolajte nám
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
