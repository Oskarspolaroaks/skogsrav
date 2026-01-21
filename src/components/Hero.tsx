import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
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
          className="w-full h-full object-cover scale-105"
        />
        {/* Bold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/98 via-navy-deep/85 to-navy-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/40" />
        
        {/* Animated accent lines */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange to-transparent opacity-60" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Eyebrow with orange accent */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-orange">
              <span className="w-12 h-0.5 bg-gradient-to-r from-orange to-orange-light" />
              European Vehicle Recovery
            </span>
          </motion.div>

          {/* Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.05] mb-8"
          >
            We Act.
            <br />
            <span className="text-gradient-orange">We Deliver.</span>
          </motion.h1>

          {/* Short, confident subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12 leading-relaxed font-light"
          >
            Cross-border vehicle recovery for European institutions.
            <br className="hidden md:block" />
            <span className="text-orange-light font-medium">Discreet. Compliant. Results-driven.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" className="group shadow-orange" asChild>
              <Link to="/#contact">
                Start a Case
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" className="group" asChild>
              <Link to="/services">
                How We Operate
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators - Bolder, less text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 pt-10 border-t border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "15+", label: "Years" },
                { value: "12", label: "Markets" },
                { value: "100%", label: "Compliant" },
                { value: "Success", label: "Based Fees" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="text-center md:text-left group"
                >
                  <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-1 group-hover:text-orange transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-white/50 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-orange" />
        </motion.div>
      </motion.div>
    </section>
  );
}
