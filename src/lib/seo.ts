import type { Metadata } from "next";
import homeSchema from "@/lib/seo-schemas/home.json";
import cennikSchema from "@/lib/seo-schemas/cennik.json";
import fotogaleriaSchema from "@/lib/seo-schemas/fotogaleria.json";
import kontaktSchema from "@/lib/seo-schemas/kontakt.json";
import mesta1Schema from "@/lib/seo-schemas/mesta1.json";
import mesta2Schema from "@/lib/seo-schemas/mesta2.json";

export type SeoConfig = {
  title: string;
  description?: string;
  robots: string;
  canonical: string;
  ogLocale: string;
  ogSiteName: string;
  ogType: "website" | "article";
  ogTitle: string;
  ogDescription?: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription?: string;
  schema: Record<string, unknown>;
};

const shared = {
  robots: "max-image-preview:large",
  ogLocale: "sk_SK",
  ogSiteName: "Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
  ogType: "website",
  twitterCard: "summary",
} as const;

export const seo = {
  home: {
    ...shared,
    title: "Vŕtanie studne Detva Banská Bystrica Zvolen Brezno",
    canonical: "https://www.vrtanie-studne.sk/",
    ogTitle: "Vŕtanie studne Detva Banská Bystrica Zvolen Brezno",
    ogUrl: "https://www.vrtanie-studne.sk/",
    twitterTitle: "Vŕtanie studne Detva Banská Bystrica Zvolen Brezno",
    schema: homeSchema as Record<string, unknown>,
  },
  cennik: {
    ...shared,
    title: "Cenník | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    canonical: "https://www.vrtanie-studne.sk/cennik/",
    ogTitle: "Cenník | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    ogUrl: "https://www.vrtanie-studne.sk/cennik/",
    twitterTitle: "Cenník | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    schema: cennikSchema as Record<string, unknown>,
  },
  fotogaleria: {
    ...shared,
    title: "Fotogaléria | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    canonical: "https://www.vrtanie-studne.sk/fotogaleria/",
    ogTitle: "Fotogaléria | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    ogUrl: "https://www.vrtanie-studne.sk/fotogaleria/",
    twitterTitle: "Fotogaléria | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    schema: fotogaleriaSchema as Record<string, unknown>,
  },
  kontakt: {
    ...shared,
    title: "Kontakt | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    canonical: "https://www.vrtanie-studne.sk/kontakt/",
    ogTitle: "Kontakt | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    ogUrl: "https://www.vrtanie-studne.sk/kontakt/",
    twitterTitle: "Kontakt | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    schema: kontaktSchema as Record<string, unknown>,
  },
  mesta1: {
    ...shared,
    title: "Vŕtanie studne Žiar nad Hronom, Žarnovica, Banská Štiavnica | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    canonical: "https://www.vrtanie-studne.sk/mesta1/",
    ogTitle: "Vŕtanie studne Žiar nad Hronom, Žarnovica, Banská Štiavnica | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    ogUrl: "https://www.vrtanie-studne.sk/mesta1/",
    twitterTitle: "Vŕtanie studne Žiar nad Hronom, Žarnovica, Banská Štiavnica | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    schema: mesta1Schema as Record<string, unknown>,
  },
  mesta2: {
    ...shared,
    title: "Vŕtanie studne Detva, Lučenec, Rimavská Sobota | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    canonical: "https://www.vrtanie-studne.sk/mesta2/",
    ogTitle: "Vŕtanie studne Detva, Lučenec, Rimavská Sobota | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    ogUrl: "https://www.vrtanie-studne.sk/mesta2/",
    twitterTitle: "Vŕtanie studne Detva, Lučenec, Rimavská Sobota | Vŕtanie studne Banská Bystrica, Zvolen, Brezno",
    schema: mesta2Schema as Record<string, unknown>,
  },
} as const satisfies Record<string, SeoConfig>;

export function toMetadata(config: SeoConfig): Metadata {
  const resolvedOgType = config.ogType === "article" ? "article" : "website";

  return {
    title: config.title,
    description: config.description || undefined,
    robots: config.robots,
    alternates: {
      canonical: config.canonical,
    },
    openGraph: {
      locale: config.ogLocale,
      siteName: config.ogSiteName,
      type: resolvedOgType,
      title: config.ogTitle,
      description: config.ogDescription || undefined,
      url: config.ogUrl,
    },
    twitter: {
      card: config.twitterCard as "summary",
      title: config.twitterTitle,
      description: config.twitterDescription || undefined,
    },
  };
}
