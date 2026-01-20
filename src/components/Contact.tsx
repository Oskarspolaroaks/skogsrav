import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy-deep">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="mb-12 lg:mb-0">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-bronze-light mb-4"
            >
              <span className="w-8 h-px bg-bronze-light" />
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-6"
            >
              Discuss Your Requirements
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-primary-foreground/70 leading-relaxed mb-10"
            >
              For confidential enquiries regarding vehicle recovery services, 
              our team is available to discuss your specific requirements.
            </motion.p>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-medium flex items-center justify-center">
                  <Mail className="w-5 h-5 text-bronze-light" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/50 mb-1">Email</div>
                  <a
                    href="mailto:enquiries@skogsrav.lv"
                    className="text-primary-foreground hover:text-bronze-light transition-colors"
                  >
                    enquiries@skogsrav.lv
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-medium flex items-center justify-center">
                  <Phone className="w-5 h-5 text-bronze-light" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/50 mb-1">Phone</div>
                  <span className="text-primary-foreground">
                    Available upon request
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-medium flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-bronze-light" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/50 mb-1">Location</div>
                  <span className="text-primary-foreground">
                    Baltic Region, European Operations
                  </span>
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
            className="bg-card rounded-lg p-8 lg:p-12"
          >
            <h3 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-4">
              Request a Confidential Consultation
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Share initial details about your vehicle recovery requirements. 
              All enquiries are handled with complete discretion.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-bronze/20 focus:border-bronze transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-bronze/20 focus:border-bronze transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-bronze/20 focus:border-bronze transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-bronze/20 focus:border-bronze transition-colors resize-none"
                  placeholder="Briefly describe your requirements..."
                />
              </div>

              <Button variant="corporate" size="xl" className="w-full">
                Send Enquiry
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                All information is treated with strict confidentiality.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
