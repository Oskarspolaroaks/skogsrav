import { createContext, useContext, useState, useEffect, ReactNode } from "react";

/**
 * Lightweight i18n for Skogsräv — no external libs.
 *
 * Primary language: LV (Latvian, for SIA Skogsrav, Latvia-first market).
 * Secondary language: EN (international / existing content).
 *
 * Preference persisted in localStorage.
 */

export type Language = "lv" | "en";

type TranslationTree = Record<string, Record<string, unknown>>;

/* ======================================================================
   TRANSLATIONS
   ---------------------------------------------------------------------- */

export const translations: Record<Language, TranslationTree> = {
  lv: {
    nav: {
      about: "Par mums",
      services: "Pakalpojumi",
      blog: "Blogs",
      contact: "Kontakti",
      markets: "Tirgi",
      cta: "Saņemt konsultāciju",
    },
    hero: {
      eyebrow: "SKOGSRÄV · LATVIJĀ UN ĀRVALSTĪS",
      titleLine1: "Kustamas mantas",
      titleAccent: "atgūšana",
      subtitle:
        'SIA "Skogsrav" ir licencēts uzņēmums, kas piedāvā kustamo mantu atgūšanas pakalpojumus un ārpustiesas parādu atgūšanu Latvijā un ārvalstīs. Mēs esam PTAC (Patērētāju tiesību aizsardzības centra) un Valsts Policijas licencēts uzņēmums, kas nodrošina pilnīgu juridisko atbalstu un risinājumus saistībā ar parādu atgūšanu, kustamo mantu meklēšanu un atgūšanu.',
      ctaPrimary: "Sazinies ar mums",
      ctaSecondary: "Uzzināt vairāk",
    },
    heroStats: {
      stamp1Pre: "Latvija",
      stamp1Post: "UN ĀRVALSTIS",
      stamp2Pre: "Juridisks",
      stamp2Post: "ATBALSTS",
      stamp3Pre: "Individuāli",
      stamp3Post: "RISINĀJUMI",
      stamp4Pre: "Reputācija",
      stamp4Post: "MŪSU VĒRTĪBA",
    },
    trustPills: {
      pill1: "Latvijā un ārvalstīs",
      pill2: "Juridiskais atbalsts",
      pill3: "Individuāla pieeja",
      pill4: "Konfidencialitāte",
    },
    services: {
      eyebrow: "MŪSU PAKALPOJUMI",
      heading: "Pieredze. Risinājumi. Rezultāts.",
      viewAll: "Visi pakalpojumi",
      cardCtaLink: "Pieteikties konsultācijai",
      item1Title: "Kustamu mantu atgūšana",
      item1Desc:
        "Licencēta ārpustiesas kustamu mantu atgūšana Latvijā un ārvalstīs. PTAC un Valsts Policijas uzraudzībā.",
      item2Title: "Pārrobežu lietas",
      item2Desc:
        "Visā Eiropā. Sarežģītas jurisdikcijas risinātas droši un efektīvi.",
      item3Title: "Kontrolēta transportēšana",
      item3Desc:
        "Specializēts aprīkojums. Droša un atbilstoša transportlīdzekļa pārvietošana.",
      item4Title: "Pilnīga atbilstība",
      item4Desc:
        "Katrs uzdevums atbilst spēkā esošajiem likumiem. Iestādes informētas, kad nepieciešams.",
    },
    reach: {
      eyebrow: "MŪSU DARBĪBA",
      heading: "Visā Eiropā",
      description: "Plaša pieredze transportlīdzekļu atgūšanas lietās Eiropas tirgos.",
      statMarkets: "TIRGI",
      statRecovered: "ATGŪTI TRANSPORTLĪDZEKĻI",
      marketGermany: "Vācija",
      marketFrance: "Francija",
      marketPoland: "Polija",
      marketNetherlands: "Nīderlande",
      marketBelgium: "Beļģija",
      marketAustria: "Austrija",
      marketCzech: "Čehija",
      marketBaltics: "Baltija",
    },
    partners: {
      eyebrow: "SADARBĪBAS PARTNERI",
      heading: "Strādājam ar Eiropas mobilitātes zīmoliem",
      microCopy: "Atlasīti klienti no līzinga un mobilitātes nozares. Klientu atsauces pēc pieprasījuma.",
    },
    process: {
      eyebrow: "KĀ MĒS STRĀDĀJAM",
      heading: "Strukturēti. Diskrēti. Efektīvi.",
      description: "Katra lieta iet caur skaidru metodoloģiju. Diskrētums un efektivitāte katrā solī.",
      step1Title: "Izvērtēšana",
      step1Desc: "Līguma pārskatīšana. Transportlīdzekļa dati. Stratēģija.",
      step2Title: "Komunikācija",
      step2Desc: "Tiešs, profesionāls dialogs. Brīvprātīga risinājuma priekšroka.",
      step3Title: "Atrašanās",
      step3Desc: "Precīza izsekošana. Vietējā pieredze. Minimāla iejaukšanās.",
      step4Title: "Atgūšana",
      step4Desc: "Koordinēta izpilde. Pilnīga juridiskā atbilstība.",
      step5Title: "Nodošana",
      step5Desc: "Droša atgriešana. Pilna dokumentācija.",
    },
    why: {
      eyebrow: "KĀPĒC MĒS",
      heading1: "Mums uzticas",
      heading2: "tirgus līderi",
      quote: "Mēs strādājam klusu. Rezultāts ir svarīgāks par publicitāti.",
      item1Title: "Uz rezultātu balstīta samaksa",
      item1Desc: "Nav atgūšanas, nav rēķina. Vispirms rezultāts.",
      item2Title: "Baltijas galvenā mītne, Eiropas sasniedzamība",
      item2Desc: "Reģionāla pieredze. Kontinentāla izpilde.",
      item3Title: "Minimāla pamanāmība",
      item3Desc: "Zina tikai klients. Tāda ir mūsu pieeja.",
      item4Title: "Atbilstība pirmajā vietā",
      item4Desc: "Juridiski. Reputācijai. Vienmēr.",
    },
    reach: {
      eyebrow: "DARBĪBAS TERITORIJA",
      heading1: "Latvijā.",
      heading2: "Visā Eiropā.",
      description:
        "Galvenie uzņēmuma darbības virzieni ir saistīti ar kustamo mantu meklēšanu un atgūšanu — vieglie transportlīdzekļi, komercauto, kravas automašīnas, celtniecības un lauksaimniecības tehnika, iekārtas un aprīkojums.",
      ctaLink: "Par Skogsrav",
    },
    partners: {
      eyebrow: "SADARBĪBAS PARTNERI",
    },
    contactCta: {
      eyebrow: "SAZINIETIES AR MUMS",
      heading: "Sazinieties ar mums",
      description:
        "Mūsu speciālisti Jums atbildēs tikai 15 minūšu laikā un sniegs visu nepieciešamo informāciju.",
      ctaLink: "Spiediet šeit",
    },
    contact: {
      eyebrow: "KONTAKTI",
      heading: "Pieteikt lietu",
      description: "Katrs pieprasījums tiek izskatīts konfidenciāli un ar profesionālu atbildi.",
      emailLabel: "E-pasts",
      phoneLabel: "Tālrunis",
      hqLabel: "Birojs",
      hqValue: "Rīga, Latvija",
      ctaTitle: "Pieteikt konsultāciju",
      ctaDesc: "Sazinieties ar mums, esam gatavi palīdzēt.",
      fieldName: "Vārds *",
      fieldCompany: "Uzņēmums",
      fieldEmail: "E-pasts *",
      fieldMessage: "Ziņojums *",
      submit: "Nosūtīt pieprasījumu",
      submitSending: "Sūta...",
      disclaimer: "Stingra konfidencialitāte garantēta.",
      errName: "Lūdzu ievadi vārdu.",
      errEmail: "Lūdzu ievadi e-pastu.",
      errEmailInvalid: "Lūdzu ievadi derīgu e-pasta adresi.",
      errMessage: "Lūdzu ievadi ziņojumu.",
      errMessageShort: "Ziņojumam jābūt vismaz 10 rakstzīmēm garam.",
      errValidationTitle: "Datu pārbaudes kļūda",
      successTitle: "Ziņojums nosūtīts",
      successDesc: "Paldies. Mēs ar jums drīz sazināsimies.",
      errSendTitle: "Nevarēja nosūtīt",
      errSendDesc: "Lūdzu mēģini vēlreiz vēlāk.",
    },
    contactForm: {
      eyebrow: "SAZINIETIES AR MUMS",
      heading1: "Jautājumi un",
      heading2: "konsultācijas.",
      description:
        "Lai saņemtu konsultāciju vai atbildes uz jautājumiem, lūdzu aizpildīt zemāk pievienoto formu. Mēs ar Jums sazināsimies 15 minūšu laikā.",
      emailLabel: "E-pasts",
      phoneLabel: "Tālrunis",
      formTitle: "Pieteikt konsultāciju",
      formSubtitle: "Katrs pieprasījums tiek izskatīts konfidenciāli.",
      fieldName: "Vārds / Nosaukums *",
      fieldPhone: "Tālrunis",
      fieldEmail: "E-pasts *",
      fieldMessage: "Ziņojums *",
      consentLabel: "Piekrītu personas datu apstrādei saskaņā ar",
      consentLink: "privātuma politiku",
      submit: "Nosūtīt ziņojumu",
    },
    footer: {
      tagline: "Kustamo mantu atgūšana un juridiskie pakalpojumi Latvijā un ārvalstīs.",
      colCompany: "Uzņēmums",
      colServices: "Pakalpojumi",
      colContact: "Sazinieties ar mums",
      address: "Elvīras iela 18 - 49, Rīga, LV-1083",
      copyright: "© Skogsräv · SIA Skogsrav · Reģ. Nr. 42103071315",
      privacyPolicy: "Privātuma politika",
      complaints: "Sūdzību izskatīšanas kārtība",
      ethicsCode: "Ētikas kodekss",
      regTitle: "Reģistrācija",
      regNoLabel: "Reģ. Nr.",
      vatLabel: "PVN Nr.",
      legalFormLabel: "Juridiskā forma",
      legalFormValue: "Sabiedrība ar ierobežotu atbildību (SIA)",
      registeredLabel: "Reģistrēts",
      bizTitle: "Darbības veidi",
      legalServices: "Juridiskie pakalpojumi",
      debtCollection: "Parādu atgūšana un kredītinformācija",
      specialPermitLabel: "Īpaša atļauja (licence)",
      specialPermitValue: "Detektīvdarbība: Nr. 4/2018",
      scopeLabel: "Darbības teritorija",
      scopeValue: "Eiropa un Baltija",
      marketsTitle: "Tirgi",
      contactTitle: "Kontakti",
      navTitle: "Navigācija",
      navAbout: "Par mums",
      navServices: "Pakalpojumi",
      navBlog: "Blogs",
      navContact: "Kontakti",
      complianceNotice:
        "Skogsrav darbojas saskaņā ar spēkā esošajiem Latvijas un ES normatīvajiem aktiem. Visi pakalpojumi tiek sniegti tikai institucionāliem klientiem. Reģistrēts Latvijas Komercreģistrā.",
      copyrightSuffix: "Visas tiesības aizsargātas.",
      badgeVat: "PVN maksātājs",
      badgeCrossBorder: "ES pārrobežu darbības",
      badgeCompliance: "Atbilstības partneris",
    },
    common: {
      email: "info@skogsrav.lv",
      phone: "+371 26167827",
      phoneDisplay: "+371 26167827",
    },
  },

  en: {
    nav: {
      about: "About",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
      markets: "Markets",
      cta: "Enquire Now",
    },
    hero: {
      eyebrow: "WE ACT. WE DELIVER.",
      titleLine1: "Vehicle Repossession",
      titleAccent: "Across Europe",
      subtitle: "Pan-European cross-border vehicle recovery solutions.",
      ctaPrimary: "Start a Case",
      ctaSecondary: "How We Operate",
    },
    heroStats: {
      stamp1Pre: "15+",
      stamp1Post: "YEARS",
      stamp2Pre: "8+",
      stamp2Post: "MARKETS",
      stamp3Pre: "2000+",
      stamp3Post: "RECOVERED",
      stamp4Pre: "Success",
      stamp4Post: "BASED FEES",
    },
    trustPills: {
      pill1: "EU Cross-Border",
      pill2: "Compliance-First",
      pill3: "Success-Based",
      pill4: "Discreet",
    },
    services: {
      eyebrow: "WHAT WE DO",
      heading: "Vehicle Repossession.",
      viewAll: "View All Services",
      cardCtaLink: "Request consultation",
      item1Title: "Discrete Repossession",
      item1Desc: "Professional operations with minimal visibility. Voluntary handover prioritized.",
      item2Title: "Cross-Border",
      item2Desc: "Pan-European capability. Complex jurisdictions handled seamlessly.",
      item3Title: "Controlled Transport",
      item3Desc: "Specialized equipment. Safe and compliant vehicle relocation.",
      item4Title: "Full Compliance",
      item4Desc: "Every assignment follows applicable laws. Authorities informed when required.",
    },
    reach: {
      eyebrow: "OUR REACH",
      heading: "Pan-European",
      description: "Extensive experience handling vehicle repossession cases across European markets.",
      statMarkets: "MARKETS",
      statRecovered: "VEHICLES REPOSSESSED",
      marketGermany: "Germany",
      marketFrance: "France",
      marketPoland: "Poland",
      marketNetherlands: "Netherlands",
      marketBelgium: "Belgium",
      marketAustria: "Austria",
      marketCzech: "Czech Republic",
      marketBaltics: "Baltics",
    },
    partners: {
      eyebrow: "TRUSTED PARTNERS",
      heading: "Working with Established European Mobility Brands",
      microCopy: "Selected clients from the leasing and mobility sector. Client references can be provided upon request.",
    },
    process: {
      eyebrow: "HOW WE WORK",
      heading: "Structured. Discreet. Efficient.",
      description: "Every case follows a clear methodology. Discretion and efficiency at every step.",
      step1Title: "Assessment",
      step1Desc: "Contract review. Vehicle details. Strategy formation.",
      step2Title: "Communication",
      step2Desc: "Direct, professional dialogue. Voluntary resolution prioritized.",
      step3Title: "Location",
      step3Desc: "Precision tracking. Local expertise. Minimal disruption.",
      step4Title: "Repossession",
      step4Desc: "Coordinated execution. Full legal compliance.",
      step5Title: "Handover",
      step5Desc: "Secure return. Complete documentation.",
    },
    why: {
      eyebrow: "WHY US",
      heading1: "Trusted by",
      heading2: "Market leaders",
      quote: "We work quietly. Outcome over exposure.",
      item1Title: "Success-Based Fees",
      item1Desc: "No repossession, no invoice. We deliver first.",
      item2Title: "Baltic HQ, European Reach",
      item2Desc: "Regional expertise. Continental execution.",
      item3Title: "Minimal Visibility",
      item3Desc: "Only the client knows. That's the point.",
      item4Title: "Compliance-First",
      item4Desc: "Legal. Reputational. Always.",
    },
    reach: {
      eyebrow: "OPERATIONAL REACH",
      heading1: "Pan-European.",
      heading2: "",
      description:
        "Extensive experience handling vehicle repossession cases across European markets.",
      ctaLink: "About Skogsrav",
    },
    partners: {
      eyebrow: "TRUSTED PARTNERS",
    },
    contactCta: {
      eyebrow: "CONTACT US",
      heading: "Get in touch",
      description:
        "Our specialists will respond within 15 minutes and provide all the information you need.",
      ctaLink: "Click here",
    },
    contact: {
      eyebrow: "CONTACT",
      heading: "Start a Case",
      description: "Every enquiry is treated confidentially, with a professional response.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hqLabel: "HQ",
      hqValue: "Riga, Latvia",
      ctaTitle: "Request Consultation",
      ctaDesc: "Reach out — we're ready to help.",
      fieldName: "Name *",
      fieldCompany: "Company",
      fieldEmail: "Email *",
      fieldMessage: "Message *",
      submit: "Send Enquiry",
      submitSending: "Sending...",
      disclaimer: "Strict confidentiality guaranteed.",
      errName: "Please enter your name.",
      errEmail: "Please enter your email.",
      errEmailInvalid: "Please enter a valid email address.",
      errMessage: "Please enter a message.",
      errMessageShort: "Message must be at least 10 characters.",
      errValidationTitle: "Validation Error",
      successTitle: "Message Sent",
      successDesc: "Thank you. We will contact you shortly.",
      errSendTitle: "Unable to Send",
      errSendDesc: "Please try again later.",
    },
    contactForm: {
      eyebrow: "CONTACT US",
      heading1: "Questions &",
      heading2: "consultations.",
      description:
        "To receive a consultation or answers to your questions, please fill out the form below. We will contact you within 15 minutes.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      formTitle: "Request consultation",
      formSubtitle: "Every enquiry is handled confidentially.",
      fieldName: "Name / Company *",
      fieldPhone: "Phone",
      fieldEmail: "Email *",
      fieldMessage: "Message *",
      consentLabel: "I consent to personal data processing according to the",
      consentLink: "privacy policy",
      submit: "Send message",
    },
    footer: {
      tagline: "Vehicle repossession and legal services in Latvia and abroad.",
      colCompany: "Company",
      colServices: "Services",
      colContact: "Contact us",
      address: "Elvīras iela 18 - 49, Riga, LV-1083",
      copyright: "© Skogsräv · SIA Skogsrav · Reg. No. 42103071315",
      privacyPolicy: "Privacy Policy",
      complaints: "Complaints procedure",
      ethicsCode: "Code of ethics",
      regTitle: "Registration",
      regNoLabel: "Company Reg. No.",
      vatLabel: "VAT Number",
      legalFormLabel: "Legal Form",
      legalFormValue: "Limited Liability Company (SIA)",
      registeredLabel: "Registered",
      bizTitle: "Business Activities",
      legalServices: "Legal Services",
      debtCollection: "Debt Collection & Credit Bureau",
      specialPermitLabel: "Special Permit (Licence)",
      specialPermitValue: "Detective Activity: No. 4/2018",
      scopeLabel: "Operational Scope",
      scopeValue: "Europe and Baltics",
      marketsTitle: "Markets",
      contactTitle: "Contact",
      navTitle: "Navigation",
      navAbout: "About",
      navServices: "Services",
      navBlog: "Blog",
      navContact: "Contact",
      complianceNotice:
        "Skogsrav operates in accordance with applicable Latvian and EU regulations. All services are provided to institutional clients only. Registered in the Commercial Register of Latvia.",
      copyrightSuffix: "All rights reserved.",
      badgeVat: "VAT Registered",
      badgeCrossBorder: "EU Cross-Border Operations",
      badgeCompliance: "Compliance-First Partner",
    },
    common: {
      email: "info@skogsrav.lv",
      phone: "+371 26167827",
      phoneDisplay: "+371 26167827",
    },
  },
};

/* ======================================================================
   CONTEXT + HOOKS
   ---------------------------------------------------------------------- */

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "skogsrav_language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "lv";
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "lv" || stored === "en") return stored;
    } catch {
      /* localStorage may be unavailable */
    }
    return "lv";
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.setAttribute("lang", language);
    } catch {
      /* ignore */
    }
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);

  const t = (path: string): string => {
    const parts = path.split(".");
    let current: unknown = translations[language];
    for (const part of parts) {
      if (current && typeof current === "object" && part in (current as Record<string, unknown>)) {
        current = (current as Record<string, unknown>)[part];
      } else {
        // Fallback to EN if LV key missing
        if (language !== "en") {
          let fallback: unknown = translations.en;
          for (const p of parts) {
            if (fallback && typeof fallback === "object" && p in (fallback as Record<string, unknown>)) {
              fallback = (fallback as Record<string, unknown>)[p];
            } else {
              fallback = path;
              break;
            }
          }
          return typeof fallback === "string" ? fallback : path;
        }
        return path;
      }
    }
    return typeof current === "string" ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
