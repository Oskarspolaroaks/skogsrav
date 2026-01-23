import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, X } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";
import { useEffect, useCallback } from "react";

export function ContactModal() {
  const { isOpen, closeContactModal } = useContactModal();

  // Handle ESC key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeContactModal();
    }
  }, [closeContactModal]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeContactModal}
            className="fixed inset-0 z-[100] bg-navy-deep/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeContactModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-muted-foreground/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Modal Content */}
              <div className="p-8 lg:p-12">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
                  {/* Left Column - Contact Info */}
                  <div className="mb-10 lg:mb-0">
                    <span className="section-label mb-4">
                      <span className="w-12 h-0.5 bg-orange" />
                      Contact
                    </span>
                    <h2 className="heading-section text-foreground mb-4">
                      Start a Case<span className="text-orange">.</span>
                    </h2>
                    <p className="body-large text-muted-foreground mb-8">
                      Every enquiry is treated confidentially, with a professional response.
                    </p>

                    {/* Contact Details */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-cream border border-border hover:border-orange/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-orange" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</div>
                          <a href="mailto:hello@skogsrav.com" className="text-foreground font-medium hover:text-orange transition-colors">
                            hello@skogsrav.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-xl bg-cream border border-border hover:border-orange/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-orange" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Phone</div>
                          <a href="tel:+37126167827" className="text-foreground font-medium hover:text-orange transition-colors">
                            +371 26167827
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-xl bg-cream border border-border hover:border-orange/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-orange" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">HQ</div>
                          <span className="text-foreground font-medium">Riga, Latvia</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Form */}
                  <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border">
                    <h3 className="heading-card text-foreground mb-2">
                      Request Consultation
                    </h3>
                    <p className="text-muted-foreground font-medium mb-6">
                      Reach out — we're ready to help.
                    </p>

                    <form className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-foreground mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-foreground mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors"
                            placeholder="Company name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors resize-none"
                          placeholder="Briefly describe your requirements..."
                        />
                      </div>

                      <Button variant="corporate" size="xl" className="w-full group shadow-orange">
                        Send Enquiry
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Strict confidentiality guaranteed.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
