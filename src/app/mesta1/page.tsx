import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.mesta1);

export default function Mesta1Page() {
  return (
    <>
      <SeoSchema schema={seo.mesta1.schema} />

      {/* Hero Banner */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/external-new/vrtanie-studni01.jpg"
            alt="Vŕtanie studní Žiar nad Hronom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(68,186,197,0.34),transparent_42%),linear-gradient(118deg,rgba(3,17,29,0.94)_0%,rgba(6,31,48,0.86)_45%,rgba(9,50,71,0.68)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Vŕtanie studní Žiar nad Hronom, Žarnovica a Banská Štiavnica
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
                Vŕtanie studní Žiar nad Hronom, Žarnovica a Banská Štiavnica
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Voda, životodarná tekutina a jedna z najcennejších komodít vo svete.
                  Hoci väčšinu zemského povrchu tvorí práve voda, len malé percento
                  z tohto množstva možno využívať aj pre bežnú spotrebu.
                </p>
                <p>
                  Súčasný trend ochrany životného prostredia a snaha vyhnúť sa
                  zbytočnému plytvaniu prírodných zdrojov sa dotýka aj vody. Jedným zo
                  spôsobov, ako ušetriť svoju peňaženku a zároveň ochrániť prostredie
                  je vlastná studňa. Vŕtané studne sú nielenže výdatným zdrojom tejto
                  vzácnej tekutiny, ale tiež ideálnym riešením, ako mať kontrolu nad
                  vlastnou spotrebou.
                </p>
                <p>
                  Vlastný zdroj vody je výrazným ekonomickým riešením, avšak to, akú
                  návratnosť bude mať samotná studňa, závisí od viacerých faktorov.
                  Podložie, náročnosť prevedenia a kvalitne odvedené služby sú
                  základom. Len odborníci s dlhoročnou praxou vám vedia zabezpečiť
                  kvalitný servis.
                </p>
                <p>
                  Naša firma má s vŕtaním studní bohaté skúsenosti. Ak hľadáte
                  niekoho, kto vám zabezpečí kompletný servis od služieb prútikára až
                  po realizáciu studne na kľúč, ste na správnej adrese. Vŕtanie studní
                  zabezpečujeme aj v mestách <strong>Žiar nad Hronom, Žarnovica a Banská
                  Štiavnica</strong>, avšak okrem vyššie spomenutých lokalít vieme
                  zabezpečiť rovnaké služby aj v okolitých obciach.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/external-new/vrtanie-studni06.jpg"
                alt="Vŕtanie studní realizácia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services + photos side by side */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">
            U nás nájdete:
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 items-center">
            <div className="hidden lg:block relative h-[420px] rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/external-new/vrtanie-studni03.jpg" alt="Vŕtanie studní" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">Bezplatné poradenstvo</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">Hydrogeologický prieskum</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">Realizácie studne na kľúč</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">Atraktívne ceny /doprava už v cene/</p>
              </div>
            </div>
            <div className="hidden lg:block relative h-[420px] rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/external-new/vrtanie-studni10.jpg" alt="Vŕtanie studní" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Closing statement */}
        <section className="mb-16 max-w-4xl mx-auto">
          <p className="bg-teal/10 p-4 rounded-md border-l-4 border-teal font-medium text-gray-700">
            Pretože vy si zaslúžite čistú a zdravotne nezávadnú vodu bez
            pridania chémie.
          </p>
        </section>
      </div>
    </>
  );
}
