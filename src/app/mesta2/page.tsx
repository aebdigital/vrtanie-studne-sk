import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.mesta2);

export default function Mesta2Page() {
  return (
    <>
      <SeoSchema schema={seo.mesta2.schema} />

      {/* Hero Banner */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/external-new/vrtanie-studni01.jpg"
            alt="Vŕtanie studní Detva, Lučenec, Rimavská Sobota"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(68,186,197,0.34),transparent_42%),linear-gradient(118deg,rgba(3,17,29,0.94)_0%,rgba(6,31,48,0.86)_45%,rgba(9,50,71,0.68)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Vŕtanie studne Detva, Lučenec, Rimavská Sobota
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90 text-lg">
            <span>Zavolajte nám!</span>
            <a href="tel:+421907872591" className="font-bold text-white hover:text-white/80 transition-colors">
              0907 872 591
            </a>
            <a href="mailto:info@vrtanie-studne.sk" className="text-white hover:text-white/80 transition-colors">
              info@vrtanie-studne.sk
            </a>
          </div>
          <div className="mt-4">
            <Link
              href="/kontakt"
              className="inline-block bg-white text-teal font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main content + big photo side by side */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">
                Vŕtanie studne Detva, Lučenec, Rimavská Sobota
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Bez vody niet života. Voda patrí k najdôležitejším prírodným zdrojom
                  vôbec a jej úloha pre človeka, ako aj poľnohospodárstvo bola
                  významná tak v minulosti, ako aj dnes. V súčasnosti je väčšina
                  domácností napojených na verejné vodovody, no nájdu sa aj takí,
                  ktorí dávajú prednosť studni.
                </p>
                <p>
                  Či je za tým nevyhnutnosť, alebo snaha ušetriť a byť nezávislým od
                  verejného vodovodu, budovanie studní sa teší veľkej obľube. K
                  zástancom tohto výdatného zdroja vody patria aj záhradkári či
                  chalupári, ktorí takto majú spotrebu pod kontrolou a koniec-koncov
                  dokážu ušetriť nemalé financie.
                </p>
                <p className="bg-teal/10 p-4 rounded-md border-l-4 border-teal font-medium italic">
                  „Len čistá a zdravú voda bez chlóru a pridaných chemických látok"
                </p>
                <p>
                  Vŕtané studne sú bezpochyby investíciou do zdravia, ktorú oceníte
                  nielen dnes, ale aj neskôr, v budúcnosti. Okrem finančnej úspory vám
                  prinesie tiež:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    úplnú nezávislosť- od počasia aj dodávateľov – vlastnú spotrebu
                    máte plne pod kontrolou
                  </li>
                  <li>
                    dostatok vody, výdatnosť za každých okolností, a to aj počas sucha
                    a horúcich letných mesiacov
                  </li>
                </ul>
                <p>
                  Pokiaľ ste z miest ako <strong>Detva, Lučenec, Rimavská
                  Sobota</strong>, prípadne blízkeho okolia, neváhajte nás kontaktovať.
                  Zabezpečíme vám kompletný servis vŕtania studne za atraktívne ceny.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/external-new/vrtanie-studni05.jpg"
                alt="Vŕtanie studní realizácia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Process + photos side by side */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">
            Proces vŕtania studne v kocke:
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 items-center">
            <div className="hidden lg:block relative h-[420px] rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/external-new/vrtanie-studni03.jpg" alt="Vŕtanie studní" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm font-medium">
                  Vyhľadanie spodnej vody na základe hydrogeologického prieskumu, ako aj za pomoci prútikára
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm font-medium">
                  Po navŕtaní vrtu a osadení perforovanej rúry nasleduje obsyp štrkom, odkalenie samotného vrtu a odizolovanie od povrchovej vody
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm font-medium">
                  Odčerpanie spodnej vody
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm font-medium">
                  Odovzdanie studne do užívania konečnému užívateľovi
                </p>
              </div>
            </div>
            <div className="hidden lg:block relative h-[420px] rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/external-new/vrtanie-studni10.jpg" alt="Vŕtanie studní" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Company credentials */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Naše dlhoročné skúsenosti a spokojnosť zákazníkov sú našou
              najlepšou vizitkou. Nakoľko príroda je živá a dokáže prekvapiť,
              počas praxe sme sa potýkali s nejedným problémom. Avšak skúsenosti
              sú tou najlepšou školou a všetky komplikácie sme vyriešili k
              spokojnosti vás, zákazníkov. Profesionalita a kvalitne odvedené
              služby sú u nás vždy prioritou.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
