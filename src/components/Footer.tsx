import { motion } from "framer-motion";
import { Link } from "@/lib/router-compat";
import { useContactModal } from "@/contexts/ContactModalContext";
import skogsravLogo from "@/assets/skogsrav-logo.svg";

const navigationLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const marketLinks = [
  { label: "France", href: "/france" },
  { label: "Netherlands", href: "/netherlands" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { openContactModal } = useContactModal();

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
              Registration
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Company Reg. No.</p>
                <p className="text-sm text-foreground">42103071315</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">VAT Number</p>
                <p className="text-sm text-foreground">LV42103071315</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Legal Form</p>
                <p className="text-sm text-foreground">Limited Liability Company (SIA)</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Registered</p>
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
              Business Activities
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-foreground">Legal Services</p>
                <p className="text-xs text-muted-foreground">NACE 69.10</p>
              </div>
              <div>
                <p className="text-sm text-foreground">Debt Collection & Credit Bureau</p>
                <p className="text-xs text-muted-foreground">NACE 82.91</p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">Special Permit (Licence)</p>
                <p className="text-sm text-foreground">Detective Activity: No. 4/2018</p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">Operational Scope</p>
                <p className="text-sm text-foreground">Europe and Baltics</p>
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
              Markets
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
              Contact
            </h4>
            <div className="space-y-3 mb-8">
              <div>
                <a
                  href="mailto:hello@skogsrav.com"
                  className="text-sm text-foreground hover:text-orange transition-colors"
                >
                  hello@skogsrav.com
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
              Navigation
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
              Skogsrav operates in accordance with applicable Latvian and EU regulations. All services are provided to institutional clients only. Registered in the Commercial Register of Latvia.
            </p>

            {/* Copyright & Legal Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-4">
                <p className="text-xs text-muted-foreground">
                  © {currentYear} SIA "Skogsrav". All rights reserved.
                </p>
                <Link 
                  to="/privacy-policy" 
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>VAT Registered</span>
                <span className="hidden sm:inline">·</span>
                <span>EU Cross-Border Operations</span>
                <span className="hidden sm:inline">·</span>
                <span>Compliance-First Partner</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
