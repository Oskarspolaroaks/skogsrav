import { CountryPage, type CountryPageData } from "@/components/CountryPage";
import { storageImages } from "@/lib/storage";

export const balticsSEO = {
  title: "Vehicle Repossession Baltics | Latvia, Lithuania and Estonia Asset Recovery",
  description:
    "Vehicle repossession across Latvia, Lithuania and Estonia for leasing companies and banks. Local presence, cross-border capability, success-based fees.",
  canonical: "/baltics",
  keywords:
    "vehicle repossession Baltics, asset recovery Latvia, vehicle repossession Lithuania, repossession Estonia, zvērināts tiesu izpildītājs, antstolis, kohtutäitur",
  image: "https://skogsrav.com/og-image.png",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Markets", url: "/baltics" },
    { name: "Baltics", url: "/baltics" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Repossession in the Baltics",
    serviceType: [
      "Vehicle Repossession",
      "Leasing Asset Recovery",
      "Fleet Vehicle Repossession",
    ],
    provider: {
      "@type": "ProfessionalService",
      name: "Skogsräv",
      url: "https://skogsrav.com",
    },
    description:
      "Vehicle repossession and asset recovery across Latvia, Lithuania and Estonia for leasing companies and banks. Voluntary surrender is prioritised; enforcement runs through the sworn bailiff, the antstolis and the kohtutäitur respectively.",
    areaServed: [
      { "@type": "Country", name: "Latvia" },
      { "@type": "Country", name: "Lithuania" },
      { "@type": "Country", name: "Estonia" },
    ],
    audience: {
      "@type": "Audience",
      audienceType: [
        "Leasing Companies",
        "Fleet Operators",
        "Banks",
        "Legal Departments",
      ],
    },
  },
};

const balticsData: CountryPageData = {
  country: "the Baltics",
  heroLabel: "Market · Baltics",
  heroTitle: "Vehicle Repossession in the",
  heroTitleAccent: "Baltics",
  heroDescription:
    "Asset recovery across Latvia, Lithuania and Estonia for leasing companies and banks. Skogsräv is based in the region, which means local presence in all three jurisdictions combined with full cross-border capability into the wider European market.",
  heroImage: storageImages.heroAbout,
  heroAlt: "Commercial vehicles on a Baltic highway",
  legalIntro:
    "The three Baltic states are frequently treated as one market by leasing portfolios, and commercially that is reasonable: the distances are short, the vehicle population moves freely between them, and counterparties routinely operate across all three. Legally, however, each state runs its own enforcement system with its own officer, its own procedural code and its own sequence of steps. A file handled as though Latvia, Lithuania and Estonia were interchangeable will stall at the first formal stage. Skogsräv is headquartered in the region and works across all three jurisdictions, prioritising voluntary surrender in every case, because pre-trial recovery is consistently faster and cheaper than full enforcement in each of them.",
  legalPoints: [
    {
      title: "Latvia: the sworn bailiff and the Civil Procedure Law",
      description:
        "In Latvia, enforcement is carried out by a sworn bailiff — zvērināts tiesu izpildītājs — acting on an enforcement document at the creditor's written application. The bailiff holds broad powers under the Civil Procedure Law to identify and seize movable property, which includes vehicles. The system is effective, but it starts only once the creditor has an enforcement document and has filed the application, so the timeline is set by the formal route rather than by the creditor's commercial need.",
    },
    {
      title: "Estonia: the Code of Enforcement Procedure and the two-week summons",
      description:
        "Estonian enforcement follows the Code of Enforcement Procedure and is handled by a bailiff, the kohtutäitur. The bailiff must first summon the debtor in writing to satisfy the claim voluntarily within two weeks. That mandatory voluntary window is a structural feature of the Estonian system: the debtor is given a defined period to resolve the matter before compulsory measures begin, and a well-prepared file frequently concludes inside it.",
    },
    {
      title: "Lithuania: the antstolis and the writ of execution",
      description:
        "In Lithuania, enforcement is carried out by a bailiff — antstolis — on the basis of a writ of execution issued by the court, usually in electronic form. Once the writ is in place, the bailiff can seize and sell the debtor's property. The electronic issuance of the writ makes the Lithuanian route comparatively quick to start, but it still requires a court decision behind it, so the pre-trial phase remains the fastest available path to a vehicle.",
    },
    {
      title: "Three systems, three officers, one commercial market",
      description:
        "Latvia's sworn bailiff, Estonia's kohtutäitur and Lithuania's antstolis are distinct offices operating under distinct procedural rules. A vehicle that crosses from Riga to Vilnius or Tallinn moves into a different enforcement framework. Handling a Baltic portfolio well means tracking which jurisdiction each file actually sits in at any given moment, and preparing documentation to that system's requirements rather than to a generic template.",
    },
    {
      title: "EU membership enables cross-border instruments",
      description:
        "All three states are EU member states, so cross-border enforcement instruments and mutual recognition apply between them and the rest of the European Union. A vehicle financed in one member state and located in another remains within reach. For creditors this is the decisive structural fact about the region: relocation across a Baltic border, or onward into Central or Western Europe, does not place the asset beyond recovery.",
    },
    {
      title: "Pre-trial recovery outperforms enforcement in all three",
      description:
        "Pre-trial recovery and voluntary surrender are consistently faster and cheaper than full enforcement in all three jurisdictions. That is not a preference; it follows from the procedural structure of each system, where the formal route requires a document or a decision, an application, and an officer's calendar. Skogsräv's work is concentrated in the phase before those steps, and files are documented so that if enforcement follows, nothing has to be reconstructed.",
    },
  ],
  process: [
    {
      number: "01",
      title: "Instruction and jurisdiction check",
      description:
        "You send the contract, the default or termination documentation and the vehicle details. We confirm which of the three jurisdictions the file actually sits in, because that determines the documentation and the escalation route.",
    },
    {
      number: "02",
      title: "Location across the region",
      description:
        "The vehicle and the counterparty are located across Latvia, Lithuania and Estonia. Movement across an internal Baltic border does not restart the file; it is tracked and handled under the same instruction.",
    },
    {
      number: "03",
      title: "Contact and voluntary surrender",
      description:
        "Direct, professional contact with the lessee or debtor. Voluntary surrender is presented as what it is in all three systems: the faster and cheaper outcome for both sides compared with full enforcement.",
    },
    {
      number: "04",
      title: "Handover or escalation",
      description:
        "Keys, documents and a signed handover report recording mileage, condition and location. Where the counterparty refuses, the file is prepared for the local enforcement route — sworn bailiff, antstolis or kohtutäitur — with complete documentation.",
    },
    {
      number: "05",
      title: "Transport and reporting",
      description:
        "The vehicle is moved to your designated storage or dealer location anywhere in the region or onward into Europe, and you receive a full report with photographs and a complete case record.",
    },
  ],
  coverageIntro:
    "We operate across all three Baltic states with local presence rather than remote coordination, covering the capital regions, the port cities and the eastern border areas. A portfolio spread across Latvia, Lithuania and Estonia is managed as a single set of files, and onward movement into Poland, Germany or the wider European market is handled under the same instruction rather than as a new case.",
  cities: [
    "Riga",
    "Vilnius",
    "Tallinn",
    "Kaunas",
    "Tartu",
    "Liepaja",
    "Klaipeda",
    "Daugavpils",
    "Narva",
    "Panevezys",
  ],
  reasons: [
    {
      title: "Local presence across all three states",
      description:
        "Skogsräv has 15+ years of experience and operates in 8+ European markets, with 2000+ vehicles recovered. The Baltics is our home region, so files here combine genuine local presence with the cross-border capability of a European operation.",
    },
    {
      title: "Success-based fees",
      description:
        "You are invoiced only when a vehicle is recovered, at a fee agreed in advance. Unsuccessful files carry no fee, which makes instructing a Baltic case a decision without fixed cost.",
    },
    {
      title: "Voluntary handover before enforcement",
      description:
        "Voluntary handover is always prioritised. Given that pre-trial recovery is faster and cheaper than full enforcement in Latvia, Lithuania and Estonia alike, this is also the commercially correct default in every file.",
    },
    {
      title: "Discreet operations and lawful conduct",
      description:
        "Operations are conducted with minimal visibility, and every assignment follows applicable law in the jurisdiction where it is carried out. Where a step would create disproportionate exposure for the client, we stop and propose an alternative route.",
    },
  ],
  faq: [
    {
      id: "bt-latvia",
      question: "How does enforcement work in Latvia?",
      answer:
        "Enforcement is carried out by a sworn bailiff, the zvērināts tiesu izpildītājs, acting on an enforcement document at the creditor's written application. The bailiff has broad powers under the Civil Procedure Law to identify and seize movable property, including vehicles. The process begins only once the enforcement document and the written application are in place.",
    },
    {
      id: "bt-estonia",
      question: "What is the procedure in Estonia?",
      answer:
        "Estonian enforcement follows the Code of Enforcement Procedure and is handled by a bailiff, the kohtutäitur. The bailiff must first summon the debtor in writing to satisfy the claim voluntarily within two weeks. That two-week voluntary period is built into the system, and a properly documented file is often resolved during it.",
    },
    {
      id: "bt-lithuania",
      question: "What is required to enforce in Lithuania?",
      answer:
        "Enforcement is carried out by a bailiff, the antstolis, on the basis of a writ of execution issued by the court, usually in electronic form. With the writ in place the bailiff can seize and sell the debtor's property. A court decision is still required behind the writ, so pre-trial resolution remains the quicker route.",
    },
    {
      id: "bt-cross-border",
      question: "What if the vehicle is moved to another country?",
      answer:
        "Latvia, Lithuania and Estonia are all EU member states, so cross-border enforcement instruments and mutual recognition apply between them and the rest of the EU. A vehicle moved across a Baltic border, or onward into Central or Western Europe, stays within reach — and within our operating area of 8+ European markets.",
    },
    {
      id: "bt-pre-trial",
      question: "Is it worth pursuing voluntary surrender first?",
      answer:
        "Yes. Pre-trial recovery and voluntary surrender are consistently faster and cheaper than full enforcement in all three jurisdictions. Every formal route requires a document or a court decision, an application, and an officer's calendar. Resolving the file before that stage removes all three constraints.",
    },
    {
      id: "bt-cost",
      question: "How is a Baltic file priced?",
      answer:
        "On a success-based fee model, identical to our other markets. The fee is agreed in advance and invoiced only after the vehicle has been recovered. Unsuccessful files carry no fee.",
    },
  ],
};

export default function Baltics() {
  return <CountryPage data={balticsData} />;
}
