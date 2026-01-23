import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Shield, Clock, Users, Quote } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent",
      description: "Thank you for your enquiry. We will respond within 24-48 business hours.",
    });
    
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section - Simple & Calm */}
        <section className="py-16 md:py-20 bg-cream border-b border-border">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="section-label mb-4">
                <span className="w-8 h-px bg-orange" />
                Get in Touch
              </div>
              <h1 className="heading-page text-foreground mb-4">
                Contact <span className="text-gradient-orange">Skogsräv</span>
              </h1>
              <p className="body-large text-muted-foreground">
                Confidential communication for institutional clients
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              
              {/* Contact Form - Left Column (3/5) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-3"
              >
                <div className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-sm">
                  <h2 className="heading-card text-foreground mb-2">
                    Send an Enquiry
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    All fields marked with * are required
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="bg-background border-border focus:border-orange focus:ring-orange/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-foreground font-medium">
                          Company / Organisation *
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="bg-background border-border focus:border-orange focus:ring-orange/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">
                          Business Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@company.com"
                          className="bg-background border-border focus:border-orange focus:ring-orange/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+371 ..."
                          className="bg-background border-border focus:border-orange focus:ring-orange/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your requirements or enquiry..."
                        rows={5}
                        className="bg-background border-border focus:border-orange focus:ring-orange/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="corporate"
                      size="lg"
                      className="w-full md:w-auto shadow-orange"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Enquiry"}
                    </Button>
                  </form>
                </div>

                {/* Trust Statements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8 grid sm:grid-cols-3 gap-4"
                >
                  <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                    <Users className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Services provided to institutional clients only
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                    <Shield className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      All enquiries are handled confidentially
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                    <Clock className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Typical response time: within 24–48 business hours
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Trust & Contact Info - Right Column (2/5) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Company Statement */}
                <div className="bg-gradient-to-br from-navy-deep to-navy-medium rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="w-8 h-8 text-orange flex-shrink-0 rotate-180" />
                  </div>
                  <blockquote className="font-serif text-lg text-primary-foreground/95 leading-relaxed mb-6">
                    "We understand that vehicle recovery is not just about retrieving an asset — it's about protecting your business relationships, your reputation, and ensuring full legal compliance at every step."
                  </blockquote>
                  <p className="text-primary-foreground/70 text-sm">
                    Every case is handled with the same level of professionalism, discretion, and structured methodology that institutional clients expect from a trusted European partner.
                  </p>
                  <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                    <p className="text-primary-foreground font-medium">Skogsräv Team</p>
                    <p className="text-primary-foreground/60 text-sm">European Vehicle Recovery Specialists</p>
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                  <h3 className="heading-card text-foreground mb-6">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@skogsrav.lv"
                      className="flex items-center gap-4 p-4 bg-cream rounded-lg hover:bg-cream-dark transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center group-hover:bg-orange/10 transition-colors">
                        <Mail className="w-5 h-5 text-orange" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                        <p className="text-foreground font-medium">info@skogsrav.lv</p>
                      </div>
                    </a>
                    <a
                      href="tel:+37126167827"
                      className="flex items-center gap-4 p-4 bg-cream rounded-lg hover:bg-cream-dark transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center group-hover:bg-orange/10 transition-colors">
                        <Phone className="w-5 h-5 text-orange" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                        <p className="text-foreground font-medium">+371 26167827</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Why Contact Us */}
                <div className="bg-cream rounded-xl p-8">
                  <h3 className="font-semibold text-foreground mb-4">
                    What to expect
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                      Initial assessment of your case requirements
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                      Clear explanation of our methodology and approach
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                      Transparent discussion of timelines and success-based pricing
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                      No obligation — just professional guidance
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
