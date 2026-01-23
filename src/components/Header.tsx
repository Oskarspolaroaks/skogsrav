import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContactModal } from "@/contexts/ContactModalContext";
import skogsravLogo from "@/assets/skogsrav-logo.svg";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "#contact", isContact: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

    if (item.isContact) {
      return (
        <button
          key={item.label}
          onClick={handleContactClick}
          className="text-sm font-semibold text-muted-foreground hover:text-orange transition-colors duration-200 link-underline"
        >
          {item.label}
        </button>
      );
    }

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
            {navItems.map(renderNavLink)}
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
              {navItems.map((item) =>
                item.isContact ? (
                  <button
                    key={item.label}
                    onClick={handleContactClick}
                    className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
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
