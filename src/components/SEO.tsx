import { Helmet } from "react-helmet-async";

interface Breadcrumb {
  name: string;
  url: string;
}

interface SEOProps {
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
  "name": "Skogsräv",
  "legalName": "SIA Skogsräv",
  "url": siteUrl,
  "logo": `${siteUrl}/og-image.png`,
  "email": "hello@skogsrav.com",
  "telephone": "+371 26167827",
  "taxID": "LV42103071315",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Aristida Briāna iela 18A-10",
    "addressLocality": "Riga",
    "postalCode": "LV-1001",
    "addressCountry": "LV"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Europe"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "license",
    "name": "Detective Activity Licence No. 4/2018"
  }
};

// Generate BreadcrumbList schema
function generateBreadcrumbSchema(breadcrumbs: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteUrl}${crumb.url}`
    }))
  };
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  type = "website", 
  jsonLd,
  image,
  keywords,
  breadcrumbs
}: SEOProps) {
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
  const ogImage = image || defaultImage;

  const schemas: object[] = [organizationSchema];
  if (jsonLd) schemas.push(jsonLd);
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta name="author" content="Skogsräv" />
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:site_name" content="Skogsräv" />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
