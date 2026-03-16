import type { Metadata } from "next";
import Link from "next/link";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.mesta1);

const services = [
  {
    title: "Bezplatné poradenstvo",
    description:
      "Poskytneme vám odborné poradenstvo a konzultáciu úplne zadarmo.",
  },
  {
    title: "Hydrogeologický prieskum",
    description:
      "Zhodnotíme geologické podmienky na vašom pozemku a určíme optimálne miesto na vŕtanie.",
  },
  {
    title: "Realizácie studne na kľúč",
    description:
      "Kompletné riešenie od vŕtania až po napojenie na budovu.",
  },
  {
    title: "Atraktívne ceny, doprava už v cene",
    description:
      "Ponúkame najvýhodnejšie ceny vŕtania studní na trhu. Dopravu neúčtujeme.",
  },
];

export default function Mesta1Page() {
  return (
    <>
      <SeoSchema schema={seo.mesta1.schema} />

      {/* Hero Banner */}
      <section className="bg-teal py-16 pt-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Vŕtanie studní Žiar nad Hronom, Žarnovica a Banská Štiavnica
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Profesionálne vŕtanie studní v regióne Žiar nad Hronom a okolí
          </p>
        </div>
      </section>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main content */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Voda, životodárna tekutina a jedna z najcennejších komodít vo svete.
              Hoci väčšinu zemského povrchu tvorí práve voda, len malé percento
              z tohto množstva možno využívať aj pre bežnú spotrebu.
            </p>
            <p>
              Súčasný trend ochrany životného prostredia a snaha vyhnúť sa
              zbytočnému plytvaniu prírodných zdrojov sa dotýka aj vody. Jedným zo
              spôsobov, ako ušetriť svoju peňaženku a zároveň ochrániť prostredie
              je vlastná studňa. Vŕtané studne sú nielenže vydatným zdrojom tejto
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
            <p className="bg-teal/10 p-4 rounded-md border-l-4 border-teal font-medium">
              Pretože vy si zaslúžite čistú a zdravotne nezávadnú vodu bez
              pridania chémie.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">
            U nás nájdete
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow text-center"
              >
                <div className="bg-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
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
