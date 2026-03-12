import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(145deg,#032331,#0c3f54)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(79,200,214,0.3),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(8,28,42,0.45),transparent_40%)]" />
      <div className="relative max-w-[90%] mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] gap-12">
          <div>
            <div className="inline-flex items-center rounded-2xl bg-white px-4 py-3 mb-6 shadow-[0_14px_34px_-24px_rgba(0,0,0,0.8)]">
              <Image
                src="/images/logo.png"
                alt="Vŕtanie studní"
                width={180}
                height={54}
                className="h-9 w-auto"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              MQM stavebno obchodná spoločnosť s.r.o.
            </h3>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">
              Vimperská 938/5, 962 12 Detva, Slovenská republika. Profesionálne
              vŕtanie studní s dôrazom na kvalitu realizácie, bezpečnosť a čistý
              výsledok.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+421907872591"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
              >
                0907 872 591
              </a>
              <a
                href="tel:+421902681203"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
              >
                0902 681 203
              </a>
              <a
                href="mailto:info@vrtanie-studne.sk"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
              >
                info@vrtanie-studne.sk
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-[0.16em] text-teal-light">
                Navigácia
              </h3>
              <ul className="space-y-3 text-sm text-white/85">
                <li>
                  <Link href="/" className="hover:text-teal-light">
                    Vŕtanie studní
                  </Link>
                </li>
                <li>
                  <Link href="/cennik" className="hover:text-teal-light">
                    Cenník
                  </Link>
                </li>
                <li>
                  <Link href="/fotogaleria" className="hover:text-teal-light">
                    Fotogaléria
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-teal-light">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-[0.16em] text-teal-light">
                Sociálne siete
              </h3>
              <a
                href="https://www.facebook.com/Vrtanie-studnesk-100488798718419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Facebook
              </a>
              <p className="mt-5 text-xs text-white/70">IČO: 51 629 771</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} www.vrtanie-studne.sk</p>
          <p>Všetky práva vyhradené</p>
        </div>
      </div>
    </footer>
  );
}
