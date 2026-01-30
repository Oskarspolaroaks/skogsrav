import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, X } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";
import { useEffect, useCallback, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactModal() {
  const { isOpen, closeContactModal } = useContactModal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");

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

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", company: "", email: "", message: "" });
      setHoneypot("");
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim()) return "Please enter your email.";
    if (!emailRegex.test(formData.email.trim())) return "Please enter a valid email address.";
    if (!formData.message.trim()) return "Please enter a message.";
    if (formData.message.trim().length < 10) return "Message must be at least 10 characters.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      toast({
        title: "Validation Error",
        description: validationError,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            company: formData.company.trim(),
            email: formData.email.trim(),
            phone: "",
            countryCode: "",
            message: formData.message.trim(),
            website: honeypot,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent",
          description: "Thank you. We will contact you shortly.",
        });
        setFormData({ name: "", company: "", email: "", message: "" });
        setHoneypot("");
        closeContactModal();
      } else {
        toast({
          title: "Unable to Send",
          description: data.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Unable to Send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Honeypot field - hidden from users */}
                      <div className="absolute left-[-9999px]" aria-hidden="true">
                        <label htmlFor="modal-website">Website</label>
                        <input
                          id="modal-website"
                          name="website"
                          type="text"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-foreground mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            maxLength={100}
                            required
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
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            maxLength={200}
                            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors"
                            placeholder="Company name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          maxLength={255}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          maxLength={2000}
                          required
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors resize-none"
                          placeholder="Briefly describe your requirements..."
                        />
                      </div>

                      <Button 
                        type="submit"
                        variant="corporate" 
                        size="xl" 
                        className="w-full group shadow-orange"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Enquiry"}
                        {!isSubmitting && (
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        )}
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
