import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ParallaxHero from "@/components/ParallaxHero";
import HeroSlider from "@/components/HeroSlider";
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
    title: "Úspora",
    desc: "Ekonomické riešenie ohľadne výraznej úspory vody",
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
    title: "Nezávislosť",
    desc: "Nie ste závislí od dodávateľa, svoje úspory máte plne pod kontrolou",
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
    desc: "Čistá a zdravá voda bez chlóru a ostatných pridaných chemických látok",
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
    desc: "Výdatnosť za každých okolností \u2013 a to aj počas sucha a horúcich letných mesiacov",
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

export default function Home() {
  return (
    <>
      <SeoSchema schema={seo.home.schema} />

      {/* Hero Section */}
      <ParallaxHero
        imageSrc="/images/external-new/vrtanie-studni01.jpg"
        imageAlt="Vŕtanie studní"
      >
        <HeroSlider />
      </ParallaxHero>

      {/* O nás Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Voda je jednou z najvzácnejších komodít vôbec, a to kdekoľvek na svete. Ak túžite po vlastnom zdroji čistej vody, vďaka ktorému budete nezávislí a zároveň ušetríte svoje peniaze aj životné prostredie, obráťte sa na nás. Navyše, vďaka našej studni už viac nebudete musieť plytvať vodou, pretože svoju spotrebu budete mať celkom pod kontrolou. Vŕtaná studňa je preto výhodnou investíciou nielen dnes, ale aj do budúcna.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O nás
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Sme firma s dlhoročnými skúsenosťami v oblasti vŕtania studní v Detve a ďalších mestách stredného Slovenska. Počas tohto obdobia sme sa pri práci stretli s rôznymi situáciami a komplikáciami, ktoré sme vždy dotiahli do úspešného konca a k spokojnosti zákazníka.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Našim hlavným zameraním sú vŕtané studne, rovnako však vieme zákazníkovi zabezpečiť technológie cez zapojenie studne, až do konečného užívania.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Našim cieľom je vykonávať prácu na vysoko profesionálnej úrovni, ktorá je šetrná voči životnému prostrediu, pričom kvalita našej práce a vaša spokojnosť sú vždy na prvom mieste.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Naše služby ponúkame predovšetkým v lokalite stredného Slovenska ako{" "}
                <Link href="/mesta2" className="text-teal hover:text-teal-dark underline">
                  Detva, Lučenec, Rimavská Sobota
                </Link>{" "}
                a celé Horehronie, Zvolen, Banská Bystrica,{" "}
                <Link href="/mesta1" className="text-teal hover:text-teal-dark underline">
                  Žiar nad Hronom, Banská Štiavnica, Žarnovica
                </Link>{" "}
                …
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tiež realizujeme{" "}
                <a href="http://www.likvidacia-azbestu.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark underline">
                  likvidáciu azbestu
                </a>{" "}
                v rovnakých lokalitách.
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">U nás nájdete:</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bezplatné poradenstvo</h3>
                <p className="text-gray-600">Jeden z prvých krokov pred vŕtaním studne je obhliadka lokality a jej odborné posúdenie z geologického a hydrogeologického hľadiska.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hľadanie vody prútikárom</h3>
                <p className="text-gray-600">Studňu možno teoreticky vyvŕtať kdekoľvek, avšak len skúsený prútikár vie určiť to správne miesto, kde bude vrt najvýdatnejší.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Realizácia studne na kľúč</h3>
                <p className="text-gray-600">Vyvŕtanie, osadenie rúr, obsyp, založenie čerpadla - až po odovzdanie studne novému majiteľovi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Metóda vŕtania a technológie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Disponujeme dvomi vrtnými súpravami; jedna s vŕtaním do 100m (dostane sa aj na ťažšie prístupné miesta a zvládne aj komplikovanejšie terény) a druhá s vŕtaním do hĺbky až 200m.
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popis vrtu:</h2>
                {[
                  "podľa potreby, vždy je dôležité nájsť najsilnejší prítok spodnej vody a ten podvŕtať",
                  "priemer vrtu – 190mm",
                  "vonkajší priemer osadenej rúry – 140mm (rúra modrá – potravinárska, závitová) certifikovaná slovenská",
                  "používaný obsyp – frakcia 4-8mm, vymývaný dunajský štrk",
                  "Vrtná sústava – zn. Hütte HBR",
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal" />
                    <span className="text-gray-700">{spec}</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Priebeh vŕtania
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Vaša cesta za čistou a zdravotne nezávadnou vodou sa začína práve u nás. Zabezpečíme celý proces počnúc vyhľadaním spodnej vody na základe hydrogeologického prieskumu a za pomoci prútikára, až po odovzdanie studne do vášho užívania.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Po navŕtaní studne sa osadia studničné rúry, nasledovne sa obsypú štrkom frakcie 4-8mm, zaizoluje sa bentonitom kvôli povrchovej vode, začerpá sa čerpadlo a odovzdá sa do užívania konečnému užívateľovi (napr. ako pitná alebo úžitková voda, zavlažovacie systémy, a pod.). Obvyklá dĺžka vŕtania je 1 deň, čo však môže byť ovplyvnené faktormi ako je napr. hĺbka vrtu či podložie.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/external-new/vrtanie-studni07.jpg"
                alt="Priebeh vŕtania studne"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Výhody vŕtanej studne - Full Text */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Výhody vŕtanej studne: Spoľahlivý a úsporný zdroj vody pre váš domov či firmu
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Vŕtaná studňa predstavuje moderný a efektívny spôsob, ako získať vlastný zdroj kvalitnej podzemnej vody priamo na vašom pozemku. Stáva sa čoraz obľúbenejšou voľbou nielen pri rodinných domoch, ale aj v záhradách, chatách či pri priemyselných objektoch. Investícia do vŕtanej studne prináša dlhodobé výhody, ktoré sa prejavia v úspore financií, nezávislosti a komforte. Studne vŕtame v Detve, Zvolene, Banskej Bystrici a celom strednom Slovensku.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Nezávislosť od verejného vodovodu",
                text: "Vlastná studňa vám zabezpečí stály a stabilný prístup k vode bez ohľadu na výpadky či obmedzenia zo strany dodávateľa. Vďaka tomu máte vodu vždy poruke – či už ide o pitie, kúpanie, polievanie záhrady alebo prevádzku domácnosti a technológií.",
                img: "external-new/vrtanie-studni03.jpg",
              },
              {
                title: "Výrazná finančná úspora",
                text: "Poplatky za vodu z verejného vodovodu neustále rastú. S vŕtanou studňou platíte len za elektrickú energiu potrebnú na chod čerpadla. V prípade intenzívneho využívania je návratnosť investície prekvapivo rýchla – často už v priebehu niekoľkých rokov.",
                img: "external-new/vrtanie-studni05.jpg",
              },
              {
                title: "Kvalitná podzemná voda",
                text: "Voda z hlbších vrtov je prirodzene filtrovaná vrstvami hornín, čo jej dodáva vysokú kvalitu a čistotu. Najčastejšie ide o vodu vhodnú na všetky bežné domáce využitia a po úprave často aj na pitie. V mnohých lokalitách je jej kvalita dokonca vyššia ako voda z verejného vodovodu. Vŕtané studne v Detve a okolí sú veľmi obľúbené.",
                img: "external-new/vrtanie-studni06.jpg",
              },
              {
                title: "Vysoká výdatnosť a stabilita",
                text: "Vŕtané studne dosahujú veľkú hĺbku, vďaka čomu sú menej závislé od zrážok. Na rozdiel od kopaných studní poskytujú stabilný prietok počas celého roka a sú spoľahlivé aj v období sucha.",
                img: "external-new/vrtanie-studni10.jpg",
              },
              {
                title: "Minimálne nároky na priestor",
                text: "Vďaka malej vrchnnej konštrukcii vŕtaná studňa nezaberá takmer žiadne miesto. Je vhodná aj na menšie pozemky, kde by klasická kopaná studňa nebola možná.",
                img: "external-new/vrtanie-studni11.jpg",
              },
              {
                title: "Dlhá životnosť",
                text: "Kvalitne zhotovená vŕtaná studňa má životnosť desiatky rokov. S vhodným čerpadlom a základnou údržbou ide o jednorazovú investíciu, ktorá vám bude slúžiť dlhé roky bez výrazných dodatočných nákladov.",
                img: "external-new/vrtanie-studni12.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden min-h-[200px] p-6 flex flex-col justify-end">
                <Image
                  src={`/images/${item.img}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
            <div className="relative rounded-xl overflow-hidden min-h-[200px] p-6 flex flex-col justify-end md:col-span-2">
              <Image
                src="/images/vrtanie_studni07.jpg"
                alt="Ekologické riešenie"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">Ekologické riešenie</h3>
                <p className="text-white/90 leading-relaxed">
                  Vlastný zdroj vody znižuje zaťaženie verejných vodovodných systémov a umožňuje šetrnejšie nakladanie s prírodnými zdrojmi. Pre majiteľov záhrad či fariem je to ideálne riešenie pre udržateľné zavlažovanie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prečo vŕtaná studňa? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prečo vŕtaná studňa?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/external-new/vrtanie-studni04.jpg"
                alt="Prečo vŕtaná studňa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fotogaléria
            </h2>
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-teal">
        <div className="max-w-[90%] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Zavolajte nám!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+421907872591"
              className="inline-flex items-center justify-center bg-white text-teal font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              0907 872 591
            </a>
            <a
              href="mailto:info@vrtanie-studne.sk"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              info@vrtanie-studne.sk
            </a>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
          >
            Kontakt
          </Link>
        </div>
      </section>
    </>
  );
}
