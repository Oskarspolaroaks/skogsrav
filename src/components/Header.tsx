import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "@/lib/router-compat";
import { useContactModal } from "@/contexts/ContactModalContext";
import skogsravLogo from "@/assets/skogsrav-logo.svg";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const marketItems = [
  { label: "Germany", href: "/germany" },
  { label: "France", href: "/france" },
  { label: "Netherlands", href: "/netherlands" },
  { label: "Baltics", href: "/baltics" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const location = useLocation();
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    openContactModal();
  };

  const renderNavLink = (item: typeof navItems[0]) => {
    const isCurrentPage = location.pathname === item.href;

    return (
      <Link
        key={item.label}
        to={item.href}
        className={`text-sm font-semibold transition-colors duration-200 link-underline ${
          isCurrentPage ? "text-orange" : "text-muted-foreground hover:text-orange"
        }`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-subtle"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              alt="Skogsräv logo"
              className="h-10 md:h-12 group-hover:scale-105 transition-transform duration-200"
              src="/lovable-uploads/8ba6bfe0-cdb8-428a-8c09-bb1913711f79.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.slice(0, 2).map(renderNavLink)}

            {/* Markets dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMarketsOpen(true)}
              onMouseLeave={() => setMarketsOpen(false)}
            >
              <button
                type="button"
                aria-expanded={marketsOpen}
                onClick={() => setMarketsOpen((open) => !open)}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                  marketItems.some((m) => m.href === location.pathname)
                    ? "text-orange"
                    : "text-muted-foreground hover:text-orange"
                }`}
              >
                Markets
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${marketsOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute left-0 top-full pt-4 transition-opacity duration-150 ${
                  marketsOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
              >
                  <div className="min-w-[180px] bg-card border border-border rounded-xl shadow-lg py-2">
                    {marketItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setMarketsOpen(false)}
                        className={`block px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                          location.pathname === item.href
                            ? "text-orange"
                            : "text-muted-foreground hover:text-orange"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
            </div>

            {navItems.slice(2).map(renderNavLink)}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="corporate" size="lg" onClick={handleContactClick}>
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-6 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                  Markets
                </span>
                <div className="flex flex-col gap-3 mt-3">
                  {marketItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Button
                variant="corporate"
                size="lg"
                className="mt-4"
                onClick={handleContactClick}
              >
                Enquire Now
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
