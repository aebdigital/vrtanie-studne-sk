import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotogaléria",
  description:
    "Fotogaléria z realizácií vŕtania studní. Pozrite si naše referencie a práce v teréne. Poseidon works s.r.o.",
};

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
