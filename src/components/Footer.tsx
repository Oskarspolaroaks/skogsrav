import { motion } from "framer-motion";
import { Link } from "@/lib/router-compat";
import { useContactModal } from "@/contexts/ContactModalContext";
import skogsravLogo from "@/assets/skogsrav-logo.svg";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { openContactModal } = useContactModal();
  const { t } = useLanguage();

  const navigationLinks = [
    { label: t("footer.navServices"), href: "/services" },
    { label: t("footer.navAbout"),    href: "/about" },
    { label: t("footer.navBlog"),     href: "/blog" },
    { label: t("footer.navContact"),  href: "/contact" },
  ];

  const marketLinks = [
    { label: t("reach.marketGermany"),     href: "/germany" },
    { label: t("reach.marketFrance"),      href: "/france" },
    { label: t("reach.marketNetherlands"), href: "/netherlands" },
    { label: t("reach.marketBelgium"),     href: "/belgium" },
    { label: t("reach.marketBaltics"),     href: "/baltics" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Company Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <img
                alt="Skogsräv logo"
                className="h-10 md:h-12"
                src="/lovable-uploads/d8d3e358-a9b9-407c-96d7-33ed692374ca.png"
              />
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">SIA "Skogsrav"</p>
            </div>
          </motion.div>

          {/* Registration & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-5">
              {t("footer.regTitle")}
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">{t("footer.regNoLabel")}</p>
                <p className="text-sm text-foreground">42103071315</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t("footer.vatLabel")}</p>
                <p className="text-sm text-foreground">LV42103071315</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t("footer.legalFormLabel")}</p>
                <p className="text-sm text-foreground">{t("footer.legalFormValue")}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t("footer.registeredLabel")}</p>
                <p className="text-sm text-foreground">12.11.2014</p>
              </div>
            </div>
          </motion.div>

          {/* Business Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-5">
              {t("footer.bizTitle")}
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-foreground">{t("footer.legalServices")}</p>
                <p className="text-xs text-muted-foreground">NACE 69.10</p>
              </div>
              <div>
                <p className="text-sm text-foreground">{t("footer.debtCollection")}</p>
                <p className="text-xs text-muted-foreground">NACE 82.91</p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">{t("footer.specialPermitLabel")}</p>
                <p className="text-sm text-foreground">{t("footer.specialPermitValue")}</p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">{t("footer.scopeLabel")}</p>
                <p className="text-sm text-foreground">{t("footer.scopeValue")}</p>
              </div>
            </div>
          </motion.div>

          {/* Markets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h4 className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-5">
              {t("footer.marketsTitle")}
            </h4>
            <nav className="flex flex-col gap-2">
              {marketLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact & Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-5">
              {t("footer.contactTitle")}
            </h4>
            <div className="space-y-3 mb-8">
              <div>
                <a
                  href="mailto:info@skogsrav.lv"
                  className="text-sm text-foreground hover:text-orange transition-colors"
                >
                  info@skogsrav.lv
                </a>
              </div>
              <div>
                <a
                  href="tel:+37126167827"
                  className="text-sm text-foreground hover:text-orange transition-colors"
                >
                  +371 26167827
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-orange transition-colors"
                  href="https://www.skogsrav.com"
                >
                  www.skogsrav.com
                </a>
              </div>
            </div>

            <h4 className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-4">
              {t("footer.navTitle")}
            </h4>
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>
      </div>

      {/* Compliance Notice & Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Compliance Notice */}
            <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
              {t("footer.complianceNotice")}
            </p>

            {/* Copyright & Legal Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-4">
                <p className="text-xs text-muted-foreground">
                  © {currentYear} SIA "Skogsrav". {t("footer.copyrightSuffix")}
                </p>
                <Link
                  to="/privacy-policy"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.privacyPolicy")}
                </Link>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{t("footer.badgeVat")}</span>
                <span className="hidden sm:inline">·</span>
                <span>{t("footer.badgeCrossBorder")}</span>
                <span className="hidden sm:inline">·</span>
                <span>{t("footer.badgeCompliance")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
