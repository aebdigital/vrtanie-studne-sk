import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-[90%] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Vŕtanie studní"
              width={180}
              height={54}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">
              Poseidon works s.r.o.
              <br />
              M.R. Štefánika 911/53
              <br />
              Detva 962 12
              <br />
              IČO: 51 629 771
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Rýchle odkazy
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-teal transition-colors"
                >
                  Vŕtanie studní
                </Link>
              </li>
              <li>
                <Link
                  href="/cennik"
                  className="text-sm hover:text-teal transition-colors"
                >
                  Cenník
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-sm hover:text-teal transition-colors"
                >
                  Fotogaléria
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm hover:text-teal transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+421907872591"
                  className="hover:text-teal transition-colors"
                >
                  0907 872 591
                </a>
              </li>
              <li>
                <a
                  href="tel:+421915450618"
                  className="hover:text-teal transition-colors"
                >
                  0915 450 618
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vrtanie-studne.sk"
                  className="hover:text-teal transition-colors"
                >
                  info@vrtanie-studne.sk
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.facebook.com/Vrtanie-studnesk-100488798718419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-teal transition-colors"
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
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>&copy; www.vrtanie-studne.sk</p>
        </div>
      </div>
    </footer>
  );
}
