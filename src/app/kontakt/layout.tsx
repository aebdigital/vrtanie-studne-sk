import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku. Poseidon works s.r.o., Detva. Telefón: 0907 872 591, 0915 450 618.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
