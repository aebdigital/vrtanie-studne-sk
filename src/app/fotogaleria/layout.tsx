import type { Metadata } from "next";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.fotogaleria);

export default function FotogaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        className="aioseo-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.fotogaleria.schema) }}
      />
      {children}
    </>
  );
}

