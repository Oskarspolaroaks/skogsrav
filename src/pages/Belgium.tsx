import { CountryPage, type CountryPageData } from "@/components/CountryPage";
import { storageImages } from "@/lib/storage";

export const belgiumSEO = {
  title: "Vehicle Repossession Belgium | Skogsräv",
  description:
    "Vehicle repossession across Belgium for leasing companies and fleet operators. Retention of title recovery, pledge register checks, success-based fees.",
  canonical: "/belgium",
  keywords:
    "vehicle repossession Belgium, gerechtsdeurwaarder vehicle recovery, huissier de justice Belgium, eigendomsvoorbehoud, reserve de propriete, Nationaal Pandregister, fleet repossession Brussels",
  image: "https://skogsrav.com/og-image.png",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Markets", url: "/belgium" },
    { name: "Belgium", url: "/belgium" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Repossession in Belgium",
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
      "Vehicle repossession and asset recovery across Belgium for leasing companies, fleet operators and banks. Recovery rests on leasing ownership or retention of title under eigendomsvoorbehoud or réserve de propriété, supported by checks in the federal pledge register and, where required, proceedings before the attachment judge.",
    areaServed: {
      "@type": "Country",
      name: "Belgium",
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

const belgiumData: CountryPageData = {
  country: "Belgium",
  heroLabel: "Market · Belgium",
  heroTitle: "Vehicle Repossession in",
  heroTitleAccent: "Belgium",
  heroDescription:
    "Asset recovery across Belgium for leasing companies, fleet operators and banks. Files are prepared in the correct regional language, the creditor position is verified in the federal pledge register, and voluntary handover is pursued before any enforcement step.",
  heroImage: storageImages.heroServices,
  heroAlt: "Vehicle on a Belgian motorway",
  legalIntro:
    "Belgium is a strong jurisdiction for a vehicle creditor, but it is a procedurally demanding one. The country has three language regions, and the enforcement officer is called gerechtsdeurwaarder in Flanders and huissier de justice in Wallonia and Brussels. Files must be prepared in the correct language for the region where the vehicle is located, which means the language decision is taken at the moment the vehicle is traced, not at the moment a lawyer is instructed. On the substantive side, the position is favourable: in leasing, the lessor remains legal owner of the vehicle for the whole term of the contract, and where title is retained under eigendomsvoorbehoud or réserve de propriété, the owner keeps ownership until final payment. Belgium also maintains a publicly accessible federal pledge register, so the creditor position can be verified before any operational step. Skogsräv works on that operational layer — verifying position, tracing the vehicle, engaging the counterparty and securing a documented handover — and prepares the file so that, if court involvement becomes necessary, it starts from an established position rather than from an assumption.",
  legalPoints: [
    {
      title: "Three language regions, two names for the same officer",
      description:
        "Belgium has three language regions, and the enforcement officer is called gerechtsdeurwaarder in Flanders and huissier de justice in Wallonia and Brussels. Files must be prepared in the correct language for the region where the vehicle is located. Getting that wrong is not a cosmetic error: it delays the file and can require documents to be redone before anything can move.",
    },
    {
      title: "In leasing, the lessor remains the legal owner",
      description:
        "In leasing, the lessor remains legal owner of the vehicle for the whole term of the contract. Recovery after default is therefore an ownership matter rather than a general money claim directed at the debtor's assets, and it is directed at the specific vehicle. That is a considerably stronger starting position than a creditor holds where only a contractual claim exists.",
    },
    {
      title: "Retention of title keeps ownership until final payment",
      description:
        "Where title is retained under eigendomsvoorbehoud in Dutch or réserve de propriété in French, the owner keeps ownership until final payment. Until that last payment is made, the counterparty holds the vehicle but does not own it, and a default leaves the owner with an ownership position rather than a queue place among unsecured creditors.",
    },
    {
      title: "The attachment judge hears refusals to return",
      description:
        "If the counterparty refuses to return goods subject to retained title, the owner can bring the matter before the beslagrechter in Dutch or juge des saisies in French, a dedicated attachment judge who sits within the court of first instance. Because this judge is specialised in attachment and enforcement matters, the route is more predictable than general civil litigation — but it is still slower and more expensive than a negotiated return.",
    },
    {
      title: "The federal pledge register is publicly accessible",
      description:
        "Belgium operates a federal pledge register, the Nationaal Pandregister or Registre national des gages, which is publicly accessible and records pledges and retention of title over movable assets. Checking it before an operational step confirms the creditor position and reveals competing claims. In practice this is the single most useful preparatory check available in a Belgian file, and it costs nothing but time.",
    },
    {
      title: "Pledge enforcement without prior court authorisation",
      description:
        "A pledgee may enforce a pledge over movable assets without prior court authorisation. The pledgee must notify the debtor by registered letter, and after a waiting period of ten days — which can be shortened to three days in certain circumstances — may proceed to sale or lease if no objection is filed. The notification and the waiting period are not formalities to be compressed; they are what makes the enforcement lawful.",
    },
    {
      title: "Conservatory attachment where recovery is at risk",
      description:
        "A conservatory attachment, saisie conservatoire or bewarend beslag, can be levied where there is a risk that recovery would otherwise be jeopardised. It does not require an enforceable title, only a claim that is certain, definite and due, and it is obtained by ex parte petition to the attachment judge. That makes it a genuine option where a vehicle is about to be moved, sold or dismantled.",
    },
    {
      title: "Voluntary surrender remains the cheapest outcome",
      description:
        "Voluntary surrender negotiated before enforcement avoids court cost, language complications and delay. In Belgium those three factors compound: a file that crosses a language boundary and then goes to court absorbs both time and fees that a documented handover simply does not generate.",
    },
  ],
  process: [
    {
      number: "01",
      title: "Instruction and position check",
      description:
        "You send the leasing or financing contract, the default or termination documentation and the vehicle details. We confirm whether the file rests on leasing ownership or on retained title, and check the federal pledge register for competing claims before any operational step.",
    },
    {
      number: "02",
      title: "Location and language routing",
      description:
        "The vehicle and the holder are located across Belgian territory. Once the region is known, the file is routed to the correct language — Dutch in Flanders, French in Wallonia and Brussels — so that any later court or enforcement step is prepared correctly from the outset.",
    },
    {
      number: "03",
      title: "Contact and voluntary surrender",
      description:
        "Direct, professional contact with the lessee or debtor. The ownership position is set out plainly, and voluntary surrender is presented as what it is: the outcome that avoids court cost, language complications and delay for both sides.",
    },
    {
      number: "04",
      title: "Handover or escalation",
      description:
        "Keys, documents and a signed handover report recording mileage, condition and location. Where the counterparty refuses, the file is prepared for the beslagrechter or juge des saisies, or for pledge enforcement with the registered notification and waiting period observed.",
    },
    {
      number: "05",
      title: "Transport and reporting",
      description:
        "The vehicle is moved to your designated storage or dealer location, and you receive a complete case record with photographs and a condition report.",
    },
  ],
  coverageIntro:
    "We operate across the whole of Belgium — Flanders, Wallonia and the Brussels-Capital Region — with coverage coordinated centrally so a portfolio spread across language regions is handled as one set of files rather than as separate local instructions. Belgium's size and density mean vehicles move easily into the Netherlands, Germany, France and Luxembourg; cross-border cases run under the same coordination rather than being restarted in the neighbouring market.",
  cities: [
    "Brussels",
    "Antwerp",
    "Ghent",
    "Charleroi",
    "Liege",
    "Bruges",
    "Namur",
    "Leuven",
  ],
  reasons: [
    {
      title: "Fifteen years of European repossession practice",
      description:
        "Skogsräv has 15+ years of experience and operates in 8+ European markets, with 2000+ vehicles recovered. Belgian files benefit directly from that base: a vehicle driven across a nearby border does not leave our operating area.",
    },
    {
      title: "Success-based fees",
      description:
        "You are invoiced only when a vehicle is recovered, at a fee agreed in advance. Unsuccessful files carry no fee, so instructing a Belgian case adds no fixed cost to a portfolio.",
    },
    {
      title: "Voluntary handover before enforcement",
      description:
        "Voluntary handover is always prioritised. In Belgium that means using the ownership or retained-title position to obtain a return before court cost, language complications and delay enter the file.",
    },
    {
      title: "Discreet operations and lawful conduct",
      description:
        "Operations are conducted with minimal visibility, and every assignment follows applicable law. Where a step would create disproportionate exposure for the client, we stop and propose an alternative route.",
    },
  ],
  faq: [
    {
      id: "be-language",
      question: "Does language matter in a Belgian repossession file?",
      answer:
        "Yes. Belgium has three language regions, and the enforcement officer is called gerechtsdeurwaarder in Flanders and huissier de justice in Wallonia and Brussels. Files must be prepared in the correct language for the region where the vehicle is located, so we fix the language routing as soon as the vehicle's location is known.",
    },
    {
      id: "be-ownership",
      question: "Who owns the vehicle in a Belgian leasing contract?",
      answer:
        "In leasing, the lessor remains legal owner of the vehicle for the whole term of the contract. Where title is retained instead under eigendomsvoorbehoud or réserve de propriété, the owner keeps ownership until final payment. In both structures the creditor holds an ownership position at the moment of default.",
    },
    {
      id: "be-refusal",
      question: "What if the counterparty refuses to return the vehicle?",
      answer:
        "If the counterparty refuses to return goods subject to retained title, the owner can bring the matter before the beslagrechter or juge des saisies, a dedicated attachment judge sitting within the court of first instance. Our work is to reach a documented voluntary surrender before that becomes necessary, and to prepare the file properly if it does.",
    },
    {
      id: "be-pledge-register",
      question: "What is the Nationaal Pandregister?",
      answer:
        "Belgium operates a federal pledge register, the Nationaal Pandregister or Registre national des gages, which is publicly accessible and records pledges and retention of title over movable assets. Checking it before an operational step confirms the creditor position and reveals competing claims.",
    },
    {
      id: "be-pledge-enforcement",
      question: "Can a pledge be enforced without going to court?",
      answer:
        "A pledgee may enforce a pledge over movable assets without prior court authorisation. The pledgee must notify the debtor by registered letter, and after a waiting period of ten days, which can be shortened to three days in certain circumstances, may proceed to sale or lease if no objection is filed.",
    },
    {
      id: "be-conservatory",
      question: "What can be done if the vehicle is about to disappear?",
      answer:
        "A conservatory attachment, saisie conservatoire or bewarend beslag, can be levied where there is a risk that recovery would otherwise be jeopardised. It does not require an enforceable title, only a claim that is certain, definite and due, and it is obtained by ex parte petition to the attachment judge.",
    },
    {
      id: "be-cost",
      question: "How is a Belgian file priced?",
      answer:
        "On a success-based fee model. The fee is agreed in advance and invoiced only after the vehicle has been recovered. Unsuccessful files carry no fee.",
    },
  ],
};

export default function Belgium() {
  return <CountryPage data={belgiumData} />;
}
