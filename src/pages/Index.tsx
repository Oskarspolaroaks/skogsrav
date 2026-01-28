import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedPartners } from "@/components/TrustedPartners";
import { TrustStamps } from "@/components/TrustStamps";
import { Services } from "@/components/Services";
import { EuropeanScope } from "@/components/EuropeanScope";
import { Process } from "@/components/Process";
import { WhySkogsrav } from "@/components/WhySkogsrav";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const indexSEO = {
  title: "Asset Recovery Europe | Cross-Border Vehicle Recovery",
  description: "European asset recovery for leasing and rental companies. Cross-border vehicle recovery across 8+ markets. Compliance-first. Success-based fees. Discreet operations.",
  canonical: "/",
  keywords: "asset recovery Europe, vehicle recovery Europe, leasing asset recovery, cross-border asset recovery, rental vehicle recovery, fleet recovery services",
  image: "https://skogsrav.com/og-image.png",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Skogsräv",
    "description": "European asset recovery services for leasing and rental companies. Cross-border vehicle recovery across 8+ markets.",
    "url": "https://skogsrav.com",
    "logo": "https://skogsrav.com/og-image.png",
    "areaServed": {
      "@type": "Place",
      "name": "Europe"
    },
    "serviceType": ["Asset Recovery", "Vehicle Recovery", "Cross-Border Recovery", "Leasing Asset Recovery", "Rental Vehicle Recovery"],
    "audience": {
      "@type": "Audience",
      "audienceType": ["Leasing Companies", "Rental Operators", "Financial Institutions", "Fleet Operators", "Legal Departments"]
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Detective Activity Licence No. 4/2018"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riga",
      "addressCountry": "LV"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@skogsrav.com",
      "contactType": "customer service"
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={indexSEO.title}
        description={indexSEO.description}
        canonical={indexSEO.canonical}
        keywords={indexSEO.keywords}
        image={indexSEO.image}
        jsonLd={indexSEO.jsonLd}
      />
      <Header />
      <main>
        <Hero />
        <TrustStamps />
        <Services />
        <EuropeanScope />
        <TrustedPartners />
        <Process />
        <WhySkogsrav />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
