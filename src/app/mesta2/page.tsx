import type { Metadata } from "next";
import Link from "next/link";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.mesta2);

const processSteps = [
  {
    title:
      "Vyhľadanie spodnej vody na základe hydrogeologického prieskumu, ako aj za pomoci prútikára",
  },
  {
    title:
      "Po navŕtaní vrtu a osadení perforovanej rúry nasleduje obsyp štrkom, odkalenie samotného vrtu a odizolovanie od povrchovej vody",
  },
  {
    title: "Odčerpanie spodnej vody",
  },
  {
    title: "Odovzdanie studne do užívania koncovému užívateľovi",
  },
];

export default function Mesta2Page() {
  return (
    <>
      <SeoSchema schema={seo.mesta2.schema} />

      {/* Hero Banner */}
      <section className="bg-teal py-16 pt-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Vŕtanie studne Detva, Lučenec, Rimavská Sobota
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Profesionálne vŕtanie studní v regióne Detva, Lučenec a Rimavská
            Sobota
          </p>
        </div>
      </section>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main content */}
        <section className="mb-16 max-w-4xl mx-auto">
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
              zastancom tohto vydatného zdroja vody patria aj záhradkári či
              chalupári, ktorí takto majú spotrebu pod kontrolou a koniec-koncov
              dokážu ušetriť nemalé financie.
            </p>
            <p className="bg-teal/10 p-4 rounded-md border-l-4 border-teal font-medium">
              Len čistá a zdravá voda bez chlóru a pridaných chemických látok
            </p>
            <p>
              Vŕtané studne sú bezpochyby investíciou do zdravia, ktorú oceníte
              nielen dnes, ale aj neskôr, v budúcnosti. Okrem finančnej úspory vám
              prinesie tiež:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Úplnú nezávislosť — od počasia aj dodávateľov — vlastnú spotrebu
                máte plne pod kontrolou
              </li>
              <li>
                Dostatok vody, vydatnosť za každých okolností, a to aj počas sucha
                a horúcich letných mesiacov
              </li>
            </ul>
            <p>
              Pokiaľ ste z miest ako <strong>Detva, Lučenec, Rimavská
              Sobota</strong>, prípadne blízkeho okolia, neváhajte nás kontaktovať.
              Zabezpečíme vám kompletný servis vŕtania studne za atraktívne ceny.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">
            Proces vŕtania studne v kocke
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow text-center"
              >
                <div className="bg-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm font-medium">
                  {step.title}
                </p>
              </div>
            ))}
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

        {/* CTA */}
        <section className="bg-teal rounded-md p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Máte záujem o vŕtanie studne?
          </h2>
          <p className="text-white/80 mb-6">
            Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku na mieru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+421907872591"
              className="inline-block bg-white text-teal font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
            >
              0907 872 591
            </a>
            <Link
              href="/kontakt"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-teal font-bold py-3 px-8 rounded-md transition-colors"
            >
              Kontaktujte nás
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
