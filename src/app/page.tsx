import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ParallaxHero from "@/components/ParallaxHero";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.home);

const benefits = [
  {
    icon: (
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
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Ekonomické riešenie",
    desc: "Výrazná úspora vody a financií. Vlastná studňa vám zníži náklady na vodu až o 100%.",
  },
  {
    icon: (
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
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Nezávislosť od dodávateľa",
    desc: "Nie ste závislí od dodávateľa vody. Vaša vlastná studňa vám zabezpečí stály prístup k vode.",
  },
  {
    icon: (
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
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Čistá a zdravá voda",
    desc: "Čistá a zdravá voda bez chlóru priamo z podzemných zdrojov. Prírodná kvalita bez chemickej úpravy.",
  },
  {
    icon: (
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
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    title: "Dostatok vody",
    desc: "Celoročný dostatok vody bez obmedzení. Vŕtaná studňa poskytuje stabilný a dostatočný zdroj vody.",
  },
];

const advantages = [
  {
    title: "Nezávislosť od verejného vodovodu",
    desc: "Vlastná vŕtaná studňa vám zabezpečí úplnú nezávislosť od verejného vodovodu a jeho prípadných výpadkov či obmedzení.",
  },
  {
    title: "Výrazná finančná úspora",
    desc: "Po počiatočnej investícii už neplatíte za vodné a stočné. Úspora môže byť až niekoľko stoviek eur ročne.",
  },
  {
    title: "Kvalitná podzemná voda",
    desc: "Podzemná voda je prírodne filtrovaná cez vrstvy hornín a je často kvalitnejšia ako voda z verejného vodovodu.",
  },
  {
    title: "Vysoká výdatnosť a stabilita",
    desc: "Vŕtané studne dosahujú väčšiu hĺbku a tým aj vyššiu výdatnosť a stabilitu dodávky vody počas celého roka.",
  },
  {
    title: "Minimálne priestorové nároky",
    desc: "Vŕtaná studňa zaberá minimálny priestor na vašom pozemku - priemer vrtu je len 190 mm.",
  },
  {
    title: "Dlhá životnosť",
    desc: "Správne zhotovená vŕtaná studňa môže slúžiť niekoľko desaťročí bez nutnosti väčších opráv.",
  },
  {
    title: "Ekologické výhody",
    desc: "Využívanie podzemnej vody je ekologické a šetrné k životnému prostrediu. Znížite svoju ekologickú stopu.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Hydrogeologický prieskum",
    desc: "Odborný prieskum lokality a určenie optimálneho miesta pre vrt.",
  },
  {
    step: "2",
    title: "Prútikárenie",
    desc: "Tradícia prútikárstva na overenie prítomnosti podzemnej vody.",
  },
  {
    step: "3",
    title: "Vŕtanie",
    desc: "Profesionálne vŕtanie pomocou modernej techniky Hutte HBR.",
  },
  {
    step: "4",
    title: "Inštalácia rúr",
    desc: "Osadenie potravinárskeho modrého PVC potrubia s priemerom 140 mm.",
  },
  {
    step: "5",
    title: "Štrkovanie",
    desc: "Zasypanie priestoru medzi rúrami a vrtom praným dunajským štrkom 4-8 mm.",
  },
  {
    step: "6",
    title: "Bentonitové tesnenie",
    desc: "Utesnenie vrchnej časti vrtu bentonitom proti vtekaniu povrchovej vody.",
  },
  {
    step: "7",
    title: "Inštalácia čerpadla",
    desc: "Osadenie ponorného čerpadla a pripojenie na vodovodný systém.",
  },
  {
    step: "8",
    title: "Odovzdanie",
    desc: "Odskúšanie studne, odovzdanie dokumentácie a inštruktáž.",
  },
];

const galleryPreview = [
  "external-new/vrtanie-studni11.jpg",
  "vrtanie_studni16.jpg",
  "external-new/vrtanie-studni05.jpg",
  "vrtanie_studni14.jpg",
  "external-new/vrtanie-studni01.jpg",
  "vrtanie_studni07.jpg",
  "vrtanie_studni25.jpg",
  "vrtanie_studni08.jpg",
  "vrtanie_studni18.jpg",
];

const serviceAreas = [
  "Detva",
  "Lučenec",
  "Rimavská Sobota",
  "Zvolen",
  "Banská Bystrica",
  "Žiar nad Hronom",
  "Banská Štiavnica",
  "Žarnovica",
  "Brezno",
  "Horehronie",
];

export default function Home() {
  return (
    <>
      <SeoSchema schema={seo.home.schema} />

      {/* Hero Section */}
      <ParallaxHero
        imageSrc="/images/external-new/vrtanie-studni01.jpg"
        imageAlt="Vŕtanie studní"
      >
        <div className="relative z-10 max-w-[90%] mx-auto px-4 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] gap-8 lg:gap-10 items-end">
            <div className="text-center lg:text-left">
              <p className="eyebrow inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs text-white/90 mb-5">
                MQM stavebno obchodná spoločnosť s.r.o.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.03]">
                Profesionálne vŕtanie studní
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-teal-light font-semibold mb-5 uppercase tracking-[0.09em]">
                Banská Bystrica, Zvolen, Brezno a celé stredné Slovensko
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-7 max-w-3xl mx-auto lg:mx-0">
                Dlhoročné skúsenosti, moderná technika a fér ceny. Zabezpečíme
                vám vlastný zdroj čistej podzemnej vody. Garancia nájdenia
                vody, bezplatné poradenstvo a doprava zdarma.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-7">
                <a
                  href="tel:+421907872591"
                  className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm sm:text-base font-semibold text-white hover:bg-white/20"
                >
                  0907 872 591
                </a>
                <a
                  href="mailto:info@vrtanie-studne.sk"
                  className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm sm:text-base font-semibold text-white hover:bg-white/20"
                >
                  info@vrtanie-studne.sk
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  Nezáväzná ponuka
                </Link>
                <a
                  href="tel:+421902681203"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg border border-white/30"
                >
                  0902 681 203
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/25 bg-[linear-gradient(150deg,rgba(6,31,48,0.82),rgba(11,47,68,0.72))] p-5 sm:p-6 shadow-[0_28px_52px_-28px_rgba(0,0,0,0.85)] backdrop-blur-sm">
              <p className="eyebrow text-teal-light text-xs mb-3">Rýchly kontakt</p>
              <h2 className="text-2xl sm:text-3xl text-white mb-4 leading-tight">
                Dohodnime termín obhliadky
              </h2>
              <div className="space-y-2 text-white">
                <a
                  href="tel:+421902681203"
                  className="block rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-semibold hover:bg-white/20"
                >
                  0902 681 203
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-200">
                Dostupní po celom strednom Slovensku. Odpovedáme rýchlo.
              </p>
            </div>
          </div>
        </div>
      </ParallaxHero>

      {/* O nás Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O nás
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Voda je jednou z najvzácnejších komodít vôbec. Ak túžite po vlastnom zdroji čistej vody, vďaka ktorému budete nezávislí a zároveň ušetríte svoje peniaze aj životné prostredie, obráťte sa na nás.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Sme firma s dlhoročnými skúsenosťami v oblasti vŕtania studní v Detve a ďalších mestách stredného Slovenska. Počas tohto obdobia sme sa pri práci stretli s rôznymi situáciami a komplikáciami, ktoré sme vždy dotiahli do úspešného konca a k spokojnosti zákazníka.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Našim hlavným zameraním sú vŕtané studne, rovnako však vieme zákazníkovi zabezpečiť technológie cez zapojenie studne, až do konečného užívania.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Našim cieľom je vykonávať prácu na vysoko profesionálnej úrovni, ktorá je šetrná voči životnému prostrediu, pričom kvalita našej práce a vaša spokojnosť sú vždy na prvom mieste.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  "external-new/vrtanie-studni12.jpg",
                  "external-new/vrtanie-studni03.jpg",
                  "external-new/vrtanie-studni06.jpg",
                ].map((img, index) => (
                  <div
                    key={index}
                    className="relative h-40 rounded-xl overflow-hidden shadow-sm"
                  >
                    <Image
                      src={`/images/${img}`}
                      alt={`Vŕtanie studní - detail realizácie ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bezplatné poradenstvo</h3>
                <p className="text-gray-600">Obhliadka lokality a jej odborné posúdenie z geologického a hydrogeologického hľadiska.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hľadanie vody prútikárom</h3>
                <p className="text-gray-600">Len skúsený prútikár vie určiť to správne miesto, kde bude vrt najvýdatnejší.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Realizácia studne na kľúč</h3>
                <p className="text-gray-600">Vyvŕtanie, osadenie rúr, obsyp, založenie čerpadla — až po odovzdanie studne novému majiteľovi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prečo vlastná studňa?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vlastná vŕtaná studňa prináša mnoho výhod pre vašu domácnosť aj
              podnikanie.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              "external-new/vrtanie-studni07.jpg",
              "external-new/vrtanie-studni01.jpg",
              "external-new/vrtanie-studni04.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-44 rounded-xl overflow-hidden shadow-sm"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Vŕtanie studní - ukážka ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-teal/5 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal/10 text-teal mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Výhody vŕtanej studne
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Investícia do vlastnej vŕtanej studne sa vám mnohokrát vráti.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              "external-new/vrtanie-studni10.jpg",
              "external-new/vrtanie-studni04.jpg",
              "external-new/vrtanie-studni07.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-44 rounded-xl overflow-hidden border border-white/10"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Vŕtanie studní - referencia ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-teal/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technické parametre
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Používame modernú vŕtaciu techniku a kvalitné materiály.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/external-new/vrtanie-studni01.jpg"
                alt="Vŕtanie studní - technické parametre"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="space-y-4">
                {[
                  {
                    label: "Vŕtacie súpravy",
                    value: "2 profesionálne vŕtacie súpravy",
                  },
                  {
                    label: "Hĺbka vŕtania",
                    value: "do 100 m a 200 m",
                  },
                  { label: "Priemer vrtu", value: "190 mm" },
                  {
                    label: "Priemer rúr",
                    value: "140 mm (potravinárske modré PVC)",
                  },
                  {
                    label: "Štrkový zásyp",
                    value: "4-8 mm praný dunajský štrk",
                  },
                  {
                    label: "Vŕtací systém",
                    value: "Hutte HBR",
                  },
                  {
                    label: "Doba vŕtania",
                    value: "Typicky 1 deň",
                  },
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal" />
                    <div>
                      <span className="font-semibold text-gray-900">
                        {spec.label}:
                      </span>{" "}
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Postup prác
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Od prieskumu až po odovzdanie hotovej studne - kompletný servis na
              jednom mieste.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              "external-new/vrtanie-studni11.jpg",
              "external-new/vrtanie-studni12.jpg",
              "external-new/vrtanie-studni10.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-44 rounded-xl overflow-hidden shadow-sm"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Vŕtanie studní - postup ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 text-teal z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Z našich realizácií
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Pozrite si ukážky našej práce z terénu.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((img, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Vŕtanie studní - realizácia ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/fotogaleria"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Zobraziť celú galériu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oblasti pôsobnosti
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Poskytujeme služby vŕtania studní v širokej oblasti stredného
              Slovenska.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "external-new/vrtanie-studni06.jpg",
              "external-new/vrtanie-studni03.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-52 rounded-xl overflow-hidden shadow-sm"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Vŕtanie studní - oblasť pôsobnosti ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-teal/5 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium text-gray-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Azbest Services + CTA */}
      <section className="py-16 md:py-24 bg-teal">
        <div className="max-w-[90%] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Máte záujem o vlastnú studňu?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Kontaktujte nás pre bezplatnú konzultáciu a nezáväznú cenovú ponuku.
            Radi vám poradíme s výberom najlepšieho riešenia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-white text-teal font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Kontaktujte nás
            </Link>
            <a
              href="tel:+421907872591"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              0907 872 591
            </a>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/80 text-sm">
              Okrem vŕtania studní ponúkame aj služby v oblasti likvidácie
              azbestu.{" "}
              <a
                href="http://www.likvidacia-azbestu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-white/80 transition-colors"
              >
                Viac informácií o odstraňovaní azbestu
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
