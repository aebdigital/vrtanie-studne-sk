import type { Metadata } from "next";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.kontakt);

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        className="aioseo-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.kontakt.schema) }}
      />
      {children}
    </>
  );
}
