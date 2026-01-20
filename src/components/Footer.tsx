import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-navy-deep border-t border-navy-medium">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/favicon.svg" 
              alt="Skogsrav logo" 
              className="w-6 h-6 brightness-0 invert"
            />
            <span className="font-serif text-xl font-medium text-primary-foreground tracking-tight">
              Skogsrav
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {["Services", "Process", "Why Skogsrav", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-sm text-primary-foreground/40">
            © {currentYear} Skogsrav. All rights reserved.
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 pt-8 border-t border-navy-medium text-center"
        >
          <p className="text-sm text-primary-foreground/40 max-w-2xl mx-auto">
            European specialist in vehicle recovery services for leasing companies, 
            rental operators, and financial institutions.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
