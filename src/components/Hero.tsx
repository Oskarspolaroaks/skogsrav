import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-frankfurt.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="European financial district skyline at dusk"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-navy-deep/30" />
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
            <span className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-bronze">
              <span className="w-10 h-px bg-bronze" />
              European Vehicle Recovery Specialists
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-primary-foreground leading-tight mb-8"
          >
            Discreet. Professional.
            <br />
            <span className="text-bronze">Results-Driven.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-12 leading-relaxed"
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
            <Button variant="hero" size="xl" asChild>
              <Link to="/#contact">
                Discuss Your Requirements
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/#process">View Our Process</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 pt-12 border-t border-primary-foreground/20"
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
                  className="text-center md:text-left"
                >
                  <div className="text-3xl md:text-4xl font-serif font-medium text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60 tracking-wide">
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
