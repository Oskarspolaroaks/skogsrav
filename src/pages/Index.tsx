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

export const indexSEO = {
  title: "Asset Repossession Europe | Cross-Border Vehicle Repossession",
  description: "European asset repossession for leasing and rental companies. Cross-border vehicle repossession across 8+ markets. Compliance-first. Success-based fees. Discreet operations.",
  canonical: "/",
  keywords: "asset repossession Europe, vehicle repossession Europe, leasing asset repossession, cross-border asset repossession, rental vehicle repossession, fleet repossession services",
  image: "https://skogsrav.com/og-image.png",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Skogsräv",
    "description": "European asset repossession services for leasing and rental companies. Cross-border vehicle repossession across 8+ markets.",
    "url": "https://skogsrav.com",
    "logo": "https://skogsrav.com/og-image.png",
    "areaServed": {
      "@type": "Place",
      "name": "Europe"
    },
    "serviceType": ["Asset Repossession", "Vehicle Repossession", "Cross-Border Repossession", "Leasing Asset Repossession", "Rental Vehicle Repossession"],
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
