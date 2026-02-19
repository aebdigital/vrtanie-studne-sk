import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Vŕtanie studní | Poseidon works s.r.o. - Profesionálne vŕtanie studní",
    template: "%s | Vŕtanie studní - Poseidon works s.r.o.",
  },
  description:
    "Profesionálne vŕtanie studní v oblasti Banská Bystrica, Zvolen, Brezno, Detva. Kvalitné vŕtané studne s dlhoročnou praxou. Poseidon works s.r.o.",
  keywords: [
    "vŕtanie studní",
    "vŕtaná studňa",
    "studňa",
    "Banská Bystrica",
    "Zvolen",
    "Detva",
    "Brezno",
    "vŕtanie studní cena",
    "Poseidon works",
  ],
  authors: [{ name: "Poseidon works s.r.o." }],
  openGraph: {
    title: "Vŕtanie studní | Poseidon works s.r.o.",
    description:
      "Profesionálne vŕtanie studní v oblasti Banská Bystrica, Zvolen, Brezno, Detva.",
    url: "https://www.vrtanie-studne.sk",
    siteName: "Vŕtanie studní",
    locale: "sk_SK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${robotoCondensed.variable} antialiased`}>
        <SmoothScroll>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
