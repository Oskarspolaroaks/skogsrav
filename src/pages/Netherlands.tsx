import { CountryPage, type CountryPageData } from "@/components/CountryPage";
import { storageImages } from "@/lib/storage";

export const netherlandsSEO = {
  title: "Vehicle Repossession Netherlands | Lease Asset Recovery",
  description:
    "Lease vehicle repossession across the Netherlands for leasing and fleet operators. Retention of title recovery, discreet work, success-based fees.",
  canonical: "/netherlands",
  keywords:
    "vehicle repossession Netherlands, eigendomsvoorbehoud recovery, revindicatie vehicle, lease asset recovery Netherlands, deurwaarder vehicle repossession",
  image: "https://skogsrav.com/og-image.png",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Markets", url: "/netherlands" },
    { name: "Netherlands", url: "/netherlands" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Repossession in the Netherlands",
    serviceType: [
      "Vehicle Repossession",
      "Lease Asset Recovery",
      "Retention of Title Recovery",
    ],
    provider: {
      "@type": "ProfessionalService",
      name: "Skogsräv",
      url: "https://skogsrav.com",
    },
    description:
      "Lease vehicle repossession across the Netherlands for leasing companies and fleet operators, including recovery under retention of title (eigendomsvoorbehoud) and revindicatie.",
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
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

const netherlandsData: CountryPageData = {
  country: "the Netherlands",
  heroLabel: "Market · Netherlands",
  heroTitle: "Vehicle Repossession in the",
  heroTitleAccent: "Netherlands",
  heroDescription:
    "Lease asset recovery across the Netherlands for leasing companies and fleet operators. Where title is retained, recovery can move quickly — and we build every file around that advantage.",
  heroImage: storageImages.heroAbout,
  heroAlt: "Commercial vehicles on a Dutch motorway",
  legalIntro:
    "The Dutch market is unusually favourable to lessors, because ownership of the vehicle typically never leaves the lessor during the contract. That single structural fact changes the recovery route: instead of building towards enforcement of a monetary claim, the owner is asserting an existing property right. Knowing which contract type applies, and evidencing ownership correctly, is what determines how fast a Dutch file closes.",
  legalPoints: [
    {
      title: "Operational lease: the lessor remains owner",
      description:
        "In an operational lease the lessor remains the legal owner of the vehicle throughout the contract. The lessee holds possession and use, not title. When the contract ends or is terminated, the owner is reclaiming its own property rather than enforcing a debt — a materially stronger starting position than in markets where the vehicle has already passed into the debtor's estate.",
    },
    {
      title: "Financial lease: eigendomsvoorbehoud is standard",
      description:
        "In financial lease, eigendomsvoorbehoud — retention of title — is standard, so the lessor keeps ownership until final payment. The clause has to be present and verifiable in the documentation. Verifying it is the first step we take on every Dutch instruction, because it dictates the entire recovery route that follows.",
    },
    {
      title: "Revindicatie: reclaiming without a full court procedure",
      description:
        "Where title is retained, the owner can reclaim the vehicle through revindicatie, without a full court procedure. This is the fastest lawful route available in the Dutch market and the one we pursue by default. It rests on clean evidence of ownership and on correct, documented contact with the party holding the vehicle.",
    },
    {
      title: "The deurwaarder handles judicial enforcement",
      description:
        "A deurwaarder — a bailiff — handles judicial enforcement when a court route is genuinely needed. That route exists as a fallback for files where the counterparty disputes the position or cannot be brought to a handover. We prepare files so that this escalation, if it happens, starts from a complete and documented record.",
    },
    {
      title: "Regulated extrajudicial collection costs",
      description:
        "Extrajudicial collection costs in the Netherlands are regulated and are commonly set at around 15 percent of the outstanding claim. Because the cost side is predictable, the commercial decision for a lessor turns mainly on speed of recovery and on the condition of the vehicle at handover.",
    },
    {
      title: "Separatist rights in insolvency",
      description:
        "In insolvency, a lessor holding retained title has separatist rights over the vehicle. The asset is treated as the lessor's, not as part of the general estate available to all creditors. This is why documentation of retained title should be in order before a counterparty's financial position deteriorates, not after.",
    },
  ],
  process: [
    {
      number: "01",
      title: "Instruction and title check",
      description:
        "You send the lease documentation. We establish whether the file runs on operational lease ownership or on eigendomsvoorbehoud, and confirm the ownership evidence.",
    },
    {
      number: "02",
      title: "Location",
      description:
        "The vehicle and the holder are located across Dutch territory, including vehicles that have been sub-let, moved between sites or taken across a border.",
    },
    {
      number: "03",
      title: "Contact and voluntary handover",
      description:
        "Direct contact with the lessee. Where title is retained, revindicatie is explained clearly, which in practice moves most counterparties towards a voluntary handover.",
    },
    {
      number: "04",
      title: "Handover documentation",
      description:
        "Keys, documents and a signed handover report recording mileage, condition, date and location, and confirming no personal belongings remain in the vehicle.",
    },
    {
      number: "05",
      title: "Transport, or escalation to a deurwaarder",
      description:
        "The vehicle is delivered to your storage or remarketing location. Where a court route is unavoidable, the prepared file is handed to a deurwaarder for judicial enforcement.",
    },
  ],
  coverageIntro:
    "The Netherlands is a compact, dense market with heavy vehicle movement across its borders into Germany and Belgium. We cover the Randstad and the regional centres alike, and because we operate in 8+ European markets, a vehicle that leaves Dutch territory stays inside our operating area rather than becoming a new instruction elsewhere.",
  cities: [
    "Amsterdam",
    "Rotterdam",
    "The Hague",
    "Utrecht",
    "Eindhoven",
    "Groningen",
    "Tilburg",
    "Almere",
  ],
  reasons: [
    {
      title: "Recovery built around retained title",
      description:
        "We structure Dutch files around the ownership position first. Where title is retained, revindicatie avoids a full court procedure entirely — but only if ownership evidence is clean, which is what we verify before any operational step.",
    },
    {
      title: "Scale across 8+ European markets",
      description:
        "15+ years of experience and 2000+ vehicles recovered across Europe. Dutch lease fleets travel; cross-border movement is a routine part of our work rather than an exception that stalls a file.",
    },
    {
      title: "Success-based fees",
      description:
        "A fixed fee, agreed in advance, invoiced only after the vehicle has been recovered. No recovery, no fee — so adding Dutch files to a recovery programme carries no cost risk.",
    },
    {
      title: "Discreet, lawful execution",
      description:
        "Operations run with minimal visibility and every assignment follows applicable law. Voluntary handover is always prioritised over enforcement, protecting both the asset's condition and the lessor's reputation.",
    },
  ],
  faq: [
    {
      id: "nl-who-owns",
      question: "Who owns the vehicle during a Dutch lease contract?",
      answer:
        "In an operational lease the lessor remains the legal owner of the vehicle throughout the contract. In a financial lease, eigendomsvoorbehoud — retention of title — is standard, so the lessor keeps ownership until final payment. In both structures the lessee holds use and possession, not title.",
    },
    {
      id: "nl-revindicatie",
      question: "Is a court procedure required to recover the vehicle?",
      answer:
        "Not necessarily. Where title is retained, the owner can reclaim the vehicle through revindicatie without a full court procedure. This is the route we pursue by default. A judicial route is used only where the counterparty disputes the position or refuses any handover.",
    },
    {
      id: "nl-deurwaarder",
      question: "What is the role of a deurwaarder?",
      answer:
        "A deurwaarder is a bailiff who handles judicial enforcement when a court route is needed. Where a Dutch file escalates that far, we hand over a complete case record — contract, ownership evidence, contact history and vehicle location — so the enforcement step is not delayed by missing documentation.",
    },
    {
      id: "nl-costs",
      question: "What collection costs apply outside court?",
      answer:
        "Extrajudicial collection costs in the Netherlands are regulated and are commonly set at around 15 percent of the outstanding claim. Skogsräv's own fee is separate and success-based: fixed, agreed in advance and invoiced only after the vehicle has been recovered.",
    },
    {
      id: "nl-insolvency",
      question: "What happens if the lessee becomes insolvent?",
      answer:
        "In insolvency, a lessor holding retained title has separatist rights over the vehicle, meaning the asset is treated as the lessor's rather than as part of the general estate. Acting quickly and with documented ownership evidence is decisive in these files.",
    },
  ],
};

export default function Netherlands() {
  return <CountryPage data={netherlandsData} />;
}
