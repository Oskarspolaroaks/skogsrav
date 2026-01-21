import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import skogsravLogo from "@/assets/skogsrav-logo.svg";
const navItems = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // Handle hash navigation
    if (href.includes('#')) {
      const hash = href.split('#')[1];
      const basePath = href.split('#')[0] || '/';
      
      if (location.pathname === basePath || (basePath === '/' && location.pathname === '/')) {
        // Same page, scroll to section
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const renderNavLink = (item: typeof navItems[0]) => {
    const isExternal = item.href.startsWith('/#');
    const isCurrentPage = location.pathname === item.href;
    
    if (isExternal) {
      return (
        <Link
          key={item.label}
          to={item.href}
          onClick={() => handleNavClick(item.href)}
          className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {item.label}
        </Link>
      );
    }
    
    return (
      <Link
        key={item.label}
        to={item.href}
        className={`text-sm font-semibold transition-colors duration-200 ${
          isCurrentPage 
            ? 'text-orange' 
            : 'text-muted-foreground hover:text-foreground'
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
              src={skogsravLogo} 
              alt="Skogsräv logo" 
              className="h-8 group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map(renderNavLink)}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="corporate" size="lg" asChild>
              <Link to="/#contact">Enquire Now</Link>
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
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="corporate" size="lg" className="mt-4" asChild>
                <Link to="/#contact" onClick={() => setMobileMenuOpen(false)}>
                  Enquire Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
