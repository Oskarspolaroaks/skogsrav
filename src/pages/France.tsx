import { CountryPage, type CountryPageData } from "@/components/CountryPage";
import { storageImages } from "@/lib/storage";

export const franceSEO = {
  title: "Vehicle Repossession France | Cross-Border Asset Recovery for Leasing Companies",
  description:
    "Vehicle repossession and asset recovery across France for leasing companies, fleet operators and banks. Compliance-first, success-based fees, voluntary surrender prioritised.",
  canonical: "/france",
  keywords:
    "vehicle repossession France, huissier de justice repossession, leasing asset recovery France, fleet repossession Paris, titre executoire vehicle seizure",
  image: "https://skogsrav.com/og-image.png",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Markets", url: "/france" },
    { name: "France", url: "/france" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Repossession in France",
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
      "Vehicle repossession and asset recovery across France for leasing companies, fleet operators and banks. Voluntary surrender is prioritised; enforcement follows the French Code des procédures civiles d'exécution through a huissier de justice.",
    areaServed: {
      "@type": "Country",
      name: "France",
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

const franceData: CountryPageData = {
  country: "France",
  heroLabel: "Market · France",
  heroTitle: "Vehicle Repossession in",
  heroTitleAccent: "France",
  heroDescription:
    "Asset recovery across France for leasing companies, fleet operators and banks. Voluntary surrender is always pursued first; where enforcement is required, the case is prepared to the standard French procedure demands.",
  heroImage: storageImages.heroServices,
  heroAlt: "Vehicle on a French motorway at dusk",
  legalIntro:
    "France has one of the most clearly delineated enforcement systems in Europe. Execution of court decisions is reserved for a single profession, and seizure of movable property such as vehicles follows a codified procedure. Understanding where the boundary lies between contractual recovery and formal enforcement is what determines whether a file is resolved in weeks or in months. Skogsräv works on the contractual and voluntary side of that boundary, and prepares files so that, if enforcement becomes unavoidable, the client's position is documented and ready.",
  legalPoints: [
    {
      title: "The huissier de justice holds the enforcement monopoly",
      description:
        "Enforcement in France is handled by a huissier de justice, a judicial officer who holds a legal monopoly on executing court decisions. No private party may substitute itself for that officer when a decision is being executed. This makes early, structured contact with the debtor commercially decisive: everything achieved before enforcement is achieved without the cost and calendar of the judicial route.",
    },
    {
      title: "Enforcement requires an enforceable title",
      description:
        "Enforcement generally requires a titre exécutoire, an enforceable title, which in practice is usually a court judgment. Until such a title exists, the creditor's route to the vehicle runs through the lease or credit contract and through negotiation with the counterparty. A significant portion of files never needs a title at all, provided the counterparty is located and engaged correctly.",
    },
    {
      title: "Seizure of movable property is codified",
      description:
        "The Code des procédures civiles d'exécution governs seizure of movable property, including vehicles. The code sets out the steps, the formalities and the protections attached to each stage. Because the procedure is codified rather than discretionary, deviations are visible and contestable — which is precisely why documentation of every contact and every condition report matters from the first day of a file.",
    },
    {
      title: "Opposition on the certificat d'immatriculation",
      description:
        "A creditor can register an opposition blocking transfer of the certificat d'immatriculation, the vehicle registration. Once registered, the debtor cannot sell the vehicle on. This is one of the most effective protective measures available in the French market, because it removes the incentive to dissipate the asset while a resolution is being negotiated.",
    },
    {
      title: "Commandement de payer and the eight-day window",
      description:
        "After immobilisation, a commandement de payer gives the debtor eight days to settle. That window is short and it concentrates the counterparty's attention. Files that have been properly prepared — contract verified, vehicle located, condition documented — can be resolved inside it rather than drifting into further procedural steps.",
    },
    {
      title: "Voluntary surrender avoids cost and delay",
      description:
        "Voluntary surrender negotiated before enforcement avoids court cost and delay. For a leasing portfolio, the difference is measured not only in fees but in the depreciation and risk carried by a vehicle that remains in the hands of a non-paying counterparty. This is the outcome Skogsräv works towards in every French file.",
    },
  ],
  process: [
    {
      number: "01",
      title: "Instruction and legal check",
      description:
        "You send the contract, the termination or default documentation and the vehicle details. We verify that a clear right to the asset exists before anything operational begins.",
    },
    {
      number: "02",
      title: "Location",
      description:
        "The vehicle and the counterparty are located across French territory. Where relevant, we advise on registering an opposition so the vehicle cannot be transferred while the file is open.",
    },
    {
      number: "03",
      title: "Contact and negotiation",
      description:
        "Direct, professional contact with the lessee or debtor. Voluntary surrender is presented as the outcome that avoids court cost and delay for both sides.",
    },
    {
      number: "04",
      title: "Handover or escalation",
      description:
        "Keys, documents and a signed handover report with mileage, condition and location. Where the counterparty refuses, the file is prepared for the enforcement route via a huissier de justice.",
    },
    {
      number: "05",
      title: "Transport and reporting",
      description:
        "The vehicle is moved to your designated storage or dealer location and you receive a full report with photographs and a complete case record.",
    },
  ],
  coverageIntro:
    "We operate across mainland France, from the Île-de-France conurbation to the Atlantic and Mediterranean corridors. Coverage is coordinated centrally, so a portfolio spread across several regions is managed as one file set rather than as separate local instructions. Cross-border files — vehicles registered in France and located elsewhere in Europe, or the reverse — are handled under the same coordination.",
  cities: [
    "Paris",
    "Lyon",
    "Marseille",
    "Toulouse",
    "Lille",
    "Bordeaux",
    "Nantes",
    "Strasbourg",
  ],
  reasons: [
    {
      title: "Fifteen years of European recovery practice",
      description:
        "Skogsräv has 15+ years of experience and operates in 8+ European markets, with 2000+ vehicles recovered. French files benefit from that cross-border base: counterparties who move a vehicle out of France do not move it out of reach.",
    },
    {
      title: "Success-based fees",
      description:
        "You are invoiced only when a vehicle is recovered, at a fixed fee agreed in advance. Unsuccessful files carry no fee, which keeps our incentives aligned with the recovery outcome rather than with activity.",
    },
    {
      title: "Voluntary handover before enforcement",
      description:
        "Voluntary handover is always prioritised over enforcement. In the French context that also means avoiding the judicial calendar wherever the counterparty can be brought to a negotiated surrender.",
    },
    {
      title: "Discreet operations and lawful conduct",
      description:
        "Operations are conducted with minimal visibility, and every assignment follows applicable law. Where a recovery would create disproportionate exposure for the client, we stop and propose an alternative route.",
    },
  ],
  faq: [
    {
      id: "fr-who-can-seize",
      question: "Who is allowed to seize a vehicle in France?",
      answer:
        "Execution of court decisions is reserved for a huissier de justice, a judicial officer holding a legal monopoly on enforcement. Skogsräv does not substitute for that officer. Our work sits before that stage: locating the vehicle and counterparty, negotiating voluntary surrender, and documenting the file so that if enforcement is required the client's position is fully prepared.",
    },
    {
      id: "fr-titre-executoire",
      question: "Do we need a court judgment before recovering a vehicle?",
      answer:
        "Enforcement generally requires a titre exécutoire, an enforceable title, usually a court judgment. A voluntary surrender agreed with the counterparty does not require one. That is why a large share of French files is resolved through negotiation: the surrender is contractual, immediate and avoids the cost and delay of obtaining a title.",
    },
    {
      id: "fr-opposition",
      question: "Can the debtor sell the vehicle while the case is open?",
      answer:
        "A creditor can register an opposition blocking transfer of the certificat d'immatriculation, the vehicle registration. Once that block is in place, the debtor cannot pass the vehicle on to a new owner. Registering it early is one of the most effective protective steps available in the French market.",
    },
    {
      id: "fr-commandement",
      question: "What happens after a vehicle is immobilised?",
      answer:
        "After immobilisation, a commandement de payer gives the debtor eight days to settle. It is a short and concentrated window. Files that are already documented — contract verified, vehicle located, condition recorded — are frequently resolved within it.",
    },
    {
      id: "fr-cost",
      question: "How is the work priced for French files?",
      answer:
        "On a success-based fee model. The fee is fixed and agreed in advance, and it is invoiced only after the vehicle has been recovered. Unsuccessful files carry no fee, so a French instruction adds no cost risk to a portfolio.",
    },
  ],
};

export default function France() {
  return <CountryPage data={franceData} />;
}
