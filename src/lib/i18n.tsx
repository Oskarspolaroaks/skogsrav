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
        "Skogsrav ir licencēts uzņēmums, kas piedāvā kustamo mantu atgūšanas pakalpojumus un ārpustiesas parādu atgūšanu Latvijā un ārvalstīs. Mēs esam Patērētāju tiesību aizsardzības centra un Valsts Policijas licencēts uzņēmums.",
      item2Title: "Uzņēmumu juridiskā apkalpošana",
      item2Desc:
        "Līgumi un vienošanās, darba līgumi un uzteikšana, sadarbības partneru pārbaude, procesu audits, dokumentu izstrāde un konsultācijas uzņēmumu ikdienas juridiskos jautājumos.",
      item3Title: "Privātdetektīvu pakalpojumi",
      item3Desc:
        "Licencētu privātdetektīvu pakalpojumi personu, mantas un informācijas meklēšanai Latvijā un ārvalstīs.",
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
      eyebrow: "OUR SERVICES",
      heading: "Vehicle Repossession.",
      viewAll: "View all services",
      cardCtaLink: "Request consultation",
      item1Title: "Asset Repossession",
      item1Desc:
        "Skogsrav is a licensed company providing movable asset repossession and extrajudicial debt collection services in Latvia and abroad.",
      item2Title: "Corporate Legal Services",
      item2Desc:
        "Contracts, employment agreements, partner due diligence, process audits, document drafting and daily legal counsel for businesses.",
      item3Title: "Private Investigator Services",
      item3Desc:
        "Licensed private investigator services for locating persons, assets and information in Latvia and abroad.",
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
      privacyPolicy: "Privacy policy",
      complaints: "Complaints procedure",
      ethicsCode: "Code of ethics",
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
