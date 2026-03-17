import type { Metadata } from "next";
import Image from "next/image";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.cennik);

const cennikHighlights = [
  "external-new/vrtanie-studni06.jpg",
  "external-new/vrtanie-studni03.jpg",
  "external-new/vrtanie-studni10.jpg",
];

export default function CennikPage() {
  return (
    <>
      <SeoSchema schema={seo.cennik.schema} />

      {/* Hero */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/external-new/vrtanie-studni01.jpg"
            alt="Vŕtanie studní cenník"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(68,186,197,0.34),transparent_42%),linear-gradient(118deg,rgba(3,17,29,0.94)_0%,rgba(6,31,48,0.86)_45%,rgba(9,50,71,0.68)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[90%] mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cenník
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            zaplatíte od 60€
          </p>
        </div>
      </section>

      {/* Why Us - Selling Points */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center uppercase">
              Prečo sa obrátiť na naše služby?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Bez vody niet života. Voda patrí k najdôležitejším prírodným zdrojom vôbec a jej úloha pre človeka, ako aj poľnohospodárstvo bola významná tak v minulosti, ako aj dnes. V súčasnosti je väčšina domácností napojených na verejné vodovody, no nájdu sa aj takí, ktorí dávajú prednosť studni.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Či je za tým nevyhnutnosť, alebo snaha ušetriť a byť nezávislým od verejného vodovodu, budovanie studní sa teší veľkej obľube. K zástancom tohto výdatného zdroja vody patria aj záhradkári či chalupári, ktorí takto majú spotrebu pod kontrolou a koniec-koncov dokážu ušetriť nemalé financie.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed italic">
                  „Len čistá a zdravú voda bez chlóru a pridaných chemických látok"
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Vŕtané studne sú bezpochyby investíciou do zdravia, ktorú oceníte nielen dnes, ale aj neskôr, v budúcnosti. Okrem finančnej úspory vám prinesie tiež:
                </p>
                <ul className="text-lg text-gray-600 mb-4 leading-relaxed list-disc pl-6 space-y-2">
                  <li>úplnú nezávislosť- od počasia aj dodávateľov – vlastnú spotrebu máte plne pod kontrolou</li>
                  <li>dostatok vody, výdatnosť za každých okolností, a to aj počas sucha a horúcich letných mesiacov</li>
                </ul>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Pokiaľ ste z miest ako Detva, Lučenec, Rimavská Sobota, prípadne blízkeho okolia, neváhajte nás kontaktovať. Zabezpečíme vám kompletný servis vŕtania studne za atraktívne ceny.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/external-new/vrtanie-studni05.jpg"
                  alt="Prečo sa obrátiť na naše služby"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                text: "Dlhoročná prax a skúsenosti sú našou devízou a vašou výhodou",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                text: "Profesionálny servis od A po Z",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                text: "Zostavíme vám ponuku šitú na mieru",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                text: "Atraktívne ceny - BONUS: doprava je zahrnutá už v cene",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                  {item.icon}
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cennikHighlights.map((img, index) => (
              <div
                key={img}
                className="relative h-48 rounded-xl overflow-hidden shadow-sm"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Vŕtanie studní - cenník ukážka ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Náš cenník */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/external-new/vrtanie-studni12.jpg"
                alt="Náš cenník - vŕtanie studní"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Náš cenník:
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Cena kvalitne zrealizovanej studne sa odvíja od viacerých faktorov, z ktorých je geologické podložie pozemku tým najdôležitejším.
              </p>
              <p className="text-3xl font-bold text-teal mb-8">
                Za 1 bm u nás zaplatíte už od 65€
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nasa cena zahŕňa:
              </h3>
              <ul className="text-xl text-gray-600 mb-8 leading-relaxed space-y-2">
                <li>– dopravu</li>
                <li>– vŕtanie</li>
                <li>– osadenie rúry</li>
                <li>– obsyp</li>
              </ul>
              <p className="text-xl text-gray-600 leading-relaxed">
                V prípade realizácie studne na kľúč je potrebné ku konečnej cene služieb započítať tiež použité technológie (šachta, čerpadlo, tlaková nádoba, ventily, káble, redukcie, atď.), ako aj prácu vodára; prípadne použitie bagra.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
