import { CountryPage, type CountryPageData } from "@/components/CountryPage";
import { storageImages } from "@/lib/storage";

export const germanySEO = {
  title: "Vehicle Repossession Germany | Skogsräv",
  description:
    "Vehicle repossession across Germany for leasing companies, banks and fleet operators. Sicherungsubereignung recovery, discreet work, success-based fees.",
  canonical: "/germany",
  keywords:
    "vehicle repossession Germany, Sicherungsübereignung recovery, leasing asset recovery Germany, Gerichtsvollzieher vehicle seizure, fleet repossession Berlin",
  image: "https://skogsrav.com/og-image.png",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Markets", url: "/germany" },
    { name: "Germany", url: "/germany" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Repossession in Germany",
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
      "Vehicle repossession and asset recovery across Germany for leasing companies, banks and fleet operators. Recovery is based on Sicherungsübereignung or on leasing ownership; voluntary handover is prioritised, and judicial enforcement runs through a Gerichtsvollzieher.",
    areaServed: {
      "@type": "Country",
      name: "Germany",
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

const germanyData: CountryPageData = {
  country: "Germany",
  heroLabel: "Market · Germany",
  heroTitle: "Vehicle Repossession in",
  heroTitleAccent: "Germany",
  heroDescription:
    "Asset recovery across Germany for leasing companies, banks and fleet operators. Ownership of the vehicle usually already sits with you; our work is to establish where it is, engage the counterparty and secure a documented handover.",
  heroImage: storageImages.heroServices,
  heroAlt: "Vehicle on a German autobahn",
  legalIntro:
    "German vehicle financing is unusual in one respect that works strongly in the creditor's favour: in most structures the financing party is already the legal owner of the vehicle. Under Sicherungsübereignung, the security transfer of ownership that is standard in German vehicle financing, the lender or lessor becomes legal owner while the borrower keeps possession. In leasing, the lessor simply remains owner for the whole term of the contract. In both cases, recovery after default is not a question of creating a right to the asset — the right already exists. It is a question of establishing that the security case has occurred, locating the vehicle, and bringing the counterparty to a lawful return. Skogsräv works on exactly that operational layer, and prepares the file so that judicial enforcement, if it becomes necessary, starts from a documented position.",
  legalPoints: [
    {
      title: "Sicherungsübereignung transfers ownership to the financier",
      description:
        "In German vehicle financing, Sicherungsübereignung — security transfer of ownership — is standard. The lender or lessor becomes the legal owner of the vehicle while the borrower keeps possession and continues to use it day to day. The practical consequence is that the creditor's claim after default is an ownership claim, not merely a contractual claim for damages. That distinction shapes every step that follows.",
    },
    {
      title: "Default triggers the security case",
      description:
        "When the borrower defaults, the security case occurs. At that point the borrower loses the right of possession and must return the vehicle. The obligation to return is not something that has to be negotiated into existence; it follows from the structure of the financing itself. Establishing clearly and in writing that the security case has occurred is therefore the first substantive step in any German file.",
    },
    {
      title: "Herausgabeanspruch: the owner's claim for return",
      description:
        "Once possession is no longer justified, the owner has a Herausgabeanspruch — a claim for return based on ownership. This is the legal foundation on which a German recovery rests. Because it is grounded in ownership rather than in a general money claim, it is directed at the specific vehicle and is a considerably stronger starting position than a creditor holds in many other jurisdictions.",
    },
    {
      title: "Judicial enforcement runs through the Gerichtsvollzieher",
      description:
        "Where the counterparty will not return the vehicle voluntarily, judicial enforcement is carried out by a Gerichtsvollzieher, the court bailiff, through Zwangsvollstreckung. That route is available and effective, but it carries cost, formality and a calendar that the creditor does not control. Everything resolved before the Gerichtsvollzieher is instructed is resolved faster and more cheaply.",
    },
    {
      title: "Third-party rights must be examined carefully",
      description:
        "A third party holding rights in a seized object can raise a release claim, and the seizing creditor must examine such a claim carefully. Vehicles pass through workshops, sub-lessees, employees and second-hand buyers, and each of those situations can generate a competing position. Checking for third-party rights before an operational step, rather than after one, is what keeps a file clean.",
    },
    {
      title: "Leasing recovery rests on ownership, not on security",
      description:
        "In leasing, the lessor remains owner throughout the contract. Recovery is therefore based on ownership rather than on a security interest, and there is no security construction to establish or contest. For a leasing portfolio this simplifies the legal analysis considerably and shifts the workload onto the operational side: identifying the holder, locating the vehicle and organising the handover.",
    },
  ],
  process: [
    {
      number: "01",
      title: "Instruction and ownership check",
      description:
        "You send the financing or leasing contract, the default or termination documentation and the vehicle details. We confirm whether the file rests on Sicherungsübereignung or on leasing ownership before any operational step is taken.",
    },
    {
      number: "02",
      title: "Location across Germany",
      description:
        "The vehicle and the holder are located across German territory. Where the vehicle has moved into a neighbouring market, the file continues under the same coordination rather than being restarted locally.",
    },
    {
      number: "03",
      title: "Contact and voluntary return",
      description:
        "Direct, professional contact with the borrower or lessee. The position is set out plainly: the security case has occurred, the right of possession has ended, and returning the vehicle avoids Zwangsvollstreckung entirely.",
    },
    {
      number: "04",
      title: "Handover or escalation",
      description:
        "Keys, documents and a signed handover report recording mileage, condition and location. Where the counterparty refuses, the file is prepared for enforcement through a Gerichtsvollzieher with the ownership position fully documented.",
    },
    {
      number: "05",
      title: "Transport and reporting",
      description:
        "The vehicle is moved to your designated storage or dealer location, and you receive a complete case record with photographs and a condition report.",
    },
  ],
  coverageIntro:
    "We operate across the whole of Germany, from the northern port regions through the Rhine-Ruhr and Rhine-Main conurbations to Bavaria and Baden-Württemberg. Coverage is coordinated centrally, so a portfolio spread across several Länder is handled as one set of files rather than as separate local instructions. Cross-border cases — vehicles registered in Germany and located elsewhere in Europe, or the reverse — run under the same coordination.",
  cities: [
    "Berlin",
    "Hamburg",
    "Munich",
    "Cologne",
    "Frankfurt",
    "Stuttgart",
    "Dusseldorf",
    "Leipzig",
    "Dortmund",
    "Hanover",
  ],
  reasons: [
    {
      title: "Fifteen years of European recovery practice",
      description:
        "Skogsräv has 15+ years of experience and operates in 8+ European markets, with 2000+ vehicles recovered. German files benefit directly from that base: a vehicle driven out of Germany does not leave our operating area.",
    },
    {
      title: "Success-based fees",
      description:
        "You are invoiced only when a vehicle is recovered, at a fee agreed in advance. Unsuccessful files carry no fee, so instructing a German case adds no fixed cost to a portfolio.",
    },
    {
      title: "Voluntary handover before enforcement",
      description:
        "Voluntary handover is always prioritised. In the German context that means using the strength of the ownership position to obtain a return without the cost and calendar of Zwangsvollstreckung.",
    },
    {
      title: "Discreet operations and lawful conduct",
      description:
        "Operations are conducted with minimal visibility, and every assignment follows applicable law. Where a step would create disproportionate exposure for the client, we stop and propose an alternative route.",
    },
  ],
  faq: [
    {
      id: "de-sicherungsuebereignung",
      question: "Who owns the vehicle under German financing?",
      answer:
        "In German vehicle financing, Sicherungsübereignung — security transfer of ownership — is standard. The lender or lessor becomes the legal owner of the vehicle while the borrower keeps possession and uses it. In leasing, the lessor simply remains owner throughout the contract. In both structures the financing party holds ownership at the moment of default.",
    },
    {
      id: "de-security-case",
      question: "What happens when the borrower defaults?",
      answer:
        "When the borrower defaults, the security case occurs. The borrower loses the right of possession and must return the vehicle. The owner then has a Herausgabeanspruch, a claim for return based on ownership, directed at that specific vehicle rather than at the debtor's assets in general.",
    },
    {
      id: "de-enforcement",
      question: "What if the counterparty refuses to return the vehicle?",
      answer:
        "Judicial enforcement is carried out by a Gerichtsvollzieher, the court bailiff, through Zwangsvollstreckung. That route is available, but it costs money and time the creditor does not control. Our work is to reach a documented voluntary return before it becomes necessary, and to prepare the file properly if it does.",
    },
    {
      id: "de-third-party",
      question: "What if someone else claims rights in the vehicle?",
      answer:
        "A third party with rights in a seized object can raise a release claim, and the seizing creditor must examine that claim carefully. We check for competing positions — workshops, sub-lessees, purchasers — before an operational step rather than after one, because an unexamined third-party right is the most common source of avoidable exposure.",
    },
    {
      id: "de-leasing",
      question: "Is leasing recovery different from financing recovery?",
      answer:
        "Yes, in its legal basis. In leasing the lessor remains owner throughout the contract, so recovery is based on ownership rather than on a security interest. There is no security construction to establish, which usually makes the legal analysis shorter and shifts the effort onto locating the vehicle and organising the handover.",
    },
    {
      id: "de-cost",
      question: "How is a German file priced?",
      answer:
        "On a success-based fee model. The fee is agreed in advance and invoiced only after the vehicle has been recovered. Unsuccessful files carry no fee.",
    },
  ],
};

export default function Germany() {
  return <CountryPage data={germanyData} />;
}
