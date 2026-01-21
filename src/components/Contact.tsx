import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
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
              className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-orange mb-4"
            >
              <span className="w-10 h-0.5 bg-orange" />
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Start a Case<span className="text-orange">.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 leading-relaxed mb-10"
            >
              Confidential enquiries. Professional response.
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
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Email</div>
                  <a
                    href="mailto:enquiries@skogsrav.lv"
                    className="text-white font-medium hover:text-orange transition-colors"
                  >
                    enquiries@skogsrav.lv
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Phone</div>
                  <span className="text-white font-medium">Available upon request</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">HQ</div>
                  <span className="text-white font-medium">Baltic Region, European Operations</span>
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
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Request Consultation
            </h3>
            <p className="text-muted-foreground mb-8">
              All enquiries handled with complete discretion.
            </p>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
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
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
