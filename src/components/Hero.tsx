import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactModal } from "@/contexts/ContactModalContext";
import { storageImages } from "@/lib/storage";

export function Hero() {
  const { openContactModal } = useContactModal();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Sharp on right side */}
      <div className="absolute inset-0">
        <img
          src={storageImages.heroVehicleRecovery}
          alt="European financial district skyline at dusk"
          className="w-full h-full object-cover scale-105"
        />

        {/* Premium left-to-right gradient overlay (85% to 0% opacity) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(220 50% 8% / 0.88) 0%, hsl(220 50% 8% / 0.82) 25%, hsl(220 50% 8% / 0.55) 50%, hsl(220 50% 8% / 0.25) 70%, transparent 100%)",
          }}
        />

        {/* Subtle top/bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep/60" />

        {/* Blur overlay on left text area with feathered edge */}
        <div
          className="absolute inset-y-0 left-0 w-[55%]"
          style={{
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            maskImage:
              "linear-gradient(to right, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 60%, transparent 100%)",
          }}
        />

        {/* Animated accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange-light to-transparent opacity-70" />
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
            <span className="section-label">
              ​<span className="w-12 h-0.5 bg-gradient-to-r from-orange to-orange-light" />
              ​WE ACT. WE DELIVER.
            </span>
          </motion.div>

          {/* Bold Headline - Heavy weight with orange accent */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="heading-hero text-white mb-8 drop-shadow-lg"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              Vehicle repossession
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="inline-block bg-clip-text text-transparent drop-shadow-none"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(28 90% 58%) 0%, hsl(24 95% 53%) 50%, hsl(20 95% 48%) 100%)",
              }}
            >
              Across Europe
            </motion.span>
          </motion.h1>

          {/* Short, confident subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="body-large text-white/90 max-w-2xl mb-12 drop-shadow-md"
          >
            Pan-European cross-border vehicle repossession solutions.{" "}
            <br className="hidden md:block" />
            <span className="text-orange font-bold">
              Discreet. Compliant. Results-driven.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              className="group shadow-orange"
              onClick={openContactModal}
            >
              Start a Case
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                { value: "8+", label: "Markets" },
                { value: "2000+", label: "Repossessed" },
                { value: "Success", label: "Based Fees" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.9 + index * 0.12,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="text-center md:text-left group cursor-default"
                >
                  <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-1 group-hover:text-orange transition-colors duration-300 text-glow-hover">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-white/50 tracking-wider uppercase group-hover:text-white/70 transition-colors duration-300">
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
