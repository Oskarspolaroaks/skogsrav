import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: object;
}

export function SEO({ title, description, canonical, type = "website", jsonLd }: SEOProps) {
  const siteUrl = "https://skogsrav.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:site_name" content="Skogsräv" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
