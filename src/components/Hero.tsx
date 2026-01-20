import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-deep overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-medium to-navy-deep opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-primary-foreground/20" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full border border-primary-foreground/10" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-bronze-light">
              <span className="w-8 h-px bg-bronze-light" />
              European Vehicle Recovery Specialists
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-tight mb-8"
          >
            Discreet. Professional.
            <br />
            <span className="text-bronze-light">Results-Driven.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-12 leading-relaxed"
          >
            Trusted by European leasing companies, rental operators, and financial 
            institutions to resolve sensitive vehicle recovery matters with precision, 
            compliance, and minimal visibility.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl">
              Discuss Your Requirements
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="hero-outline" size="xl">
              View Our Process
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 pt-12 border-t border-primary-foreground/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "12", label: "European Markets" },
                { value: "100%", label: "Compliance Focus" },
                { value: "Success", label: "Based Fees" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-serif font-medium text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/50 tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
