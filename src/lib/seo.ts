export interface Breadcrumb {
  name: string;
  url: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: object;
  image?: string;
  keywords?: string;
  breadcrumbs?: Breadcrumb[];
}

const siteUrl = "https://skogsrav.com";
const defaultImage = `${siteUrl}/og-image.png`;

// Organization schema - included on all pages
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Skogsräv",
  legalName: "SIA Skogsräv",
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
  email: "hello@skogsrav.com",
  telephone: "+371 26167827",
  taxID: "LV42103071315",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aristida Briāna iela 18A-10",
    addressLocality: "Riga",
    postalCode: "LV-1001",
    addressCountry: "LV",
  },
  areaServed: {
    "@type": "Place",
    name: "Europe",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Detective Activity Licence No. 4/2018",
  },
};

function breadcrumbSchema(breadcrumbs: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.url}`,
    })),
  };
}

export function buildHead(seo: SeoConfig) {
  const fullCanonical = seo.canonical ? `${siteUrl}${seo.canonical}` : undefined;
  const ogImage = seo.image ?? defaultImage;

  const schemas: object[] = [organizationSchema];
  if (seo.jsonLd) schemas.push(seo.jsonLd);
  if (seo.breadcrumbs && seo.breadcrumbs.length > 0) {
    schemas.push(breadcrumbSchema(seo.breadcrumbs));
  }

  const meta: Array<Record<string, string>> = [
    { title: seo.title },
    { name: "description", content: seo.description },
    { name: "author", content: "Skogsräv" },
    { property: "og:type", content: seo.type ?? "website" },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:site_name", content: "Skogsräv" },
    { property: "og:image", content: ogImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: ogImage },
  ];

  if (seo.keywords) meta.push({ name: "keywords", content: seo.keywords });
  if (fullCanonical) meta.push({ property: "og:url", content: fullCanonical });

  const links: Array<Record<string, string>> = [];
  if (fullCanonical) links.push({ rel: "canonical", href: fullCanonical });

  return {
    meta,
    links,
    scripts: schemas.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  };
}
