import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-navy-deep border-t border-navy-medium">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/favicon.svg" 
                alt="Skogsrav logo" 
                className="w-7 h-7 brightness-0 invert"
              />
              <span className="font-serif text-xl font-medium text-primary-foreground tracking-tight">
                Skogsrav
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
              European specialist in vehicle recovery services for leasing companies, 
              rental operators, and financial institutions.
            </p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-medium tracking-widest uppercase text-primary-foreground/40 mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-medium tracking-widest uppercase text-primary-foreground/40 mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:enquiries@skogsrav.lv"
                className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                enquiries@skogsrav.lv
              </a>
              <p className="text-sm text-primary-foreground/50">
                Baltic Region, European Operations
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-medium pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-xs text-primary-foreground/40">
              © {currentYear} Skogsrav. All rights reserved.
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6">
              <span className="text-xs text-primary-foreground/30">
                EU Cross-Border Operations
              </span>
              <span className="text-xs text-primary-foreground/30">•</span>
              <span className="text-xs text-primary-foreground/30">
                Compliance-First Partner
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
