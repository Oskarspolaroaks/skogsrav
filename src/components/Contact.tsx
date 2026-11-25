import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) return t("contact.errName");
    if (!formData.email.trim()) return t("contact.errEmail");
    if (!emailRegex.test(formData.email.trim())) return t("contact.errEmailInvalid");
    if (!formData.message.trim()) return t("contact.errMessage");
    if (formData.message.trim().length < 10) return t("contact.errMessageShort");
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      toast({
        title: t("contact.errValidationTitle"),
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
          title: t("contact.successTitle"),
          description: t("contact.successDesc"),
        });
        setFormData({ name: "", company: "", email: "", message: "" });
        setHoneypot("");
      } else {
        toast({
          title: t("contact.errSendTitle"),
          description: data.error || t("contact.errSendDesc"),
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t("contact.errSendTitle"),
        description: t("contact.errSendDesc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy-deep relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange/5 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="mb-12 lg:mb-0">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              <span className="w-12 h-0.5 bg-orange" />
              {t("contact.eyebrow")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-section text-white mb-6"
            >
              {t("contact.heading")}<span className="text-orange">.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-large text-white/70 mb-10"
            >
              {t("contact.description")}
            </motion.p>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">{t("contact.emailLabel")}</div>
                  <a href="mailto:info@skogsrav.lv" className="text-white font-medium hover:text-orange transition-colors">
                    info@skogsrav.lv
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">{t("contact.phoneLabel")}</div>
                  <span className="text-white font-medium">+371 26167827 </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">{t("contact.hqLabel")}</div>
                  <span className="text-white font-medium">{t("contact.hqValue")}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg"
          >
            <h3 className="heading-card text-foreground mb-2">
              {t("contact.ctaTitle")}
            </h3>
            <p className="text-muted-foreground font-medium mb-8">
              {t("contact.ctaDesc")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field - hidden from users */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="section-website">Website</label>
                <input
                  id="section-website"
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
                    {t("contact.fieldName")}
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
                    {t("contact.fieldCompany")}
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
                  {t("contact.fieldEmail")}
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
                  {t("contact.fieldMessage")}
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
                {isSubmitting ? t("contact.submitSending") : t("contact.submit")}
                {!isSubmitting && (
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t("contact.disclaimer")}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
