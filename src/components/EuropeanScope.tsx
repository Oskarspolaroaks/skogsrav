import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import europeNetwork from "@/assets/europe-network.jpg";

export function EuropeanScope() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-navy-deep overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Europe Network Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative mb-16 lg:mb-0"
          >
            <div className="relative aspect-square max-w-lg mx-auto overflow-hidden rounded-2xl">
              <img 
                src={europeNetwork} 
                alt="European network visualization"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
              
              {/* Label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-6 left-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy-deep/80 backdrop-blur-sm rounded-full text-xs font-medium tracking-widest uppercase text-bronze">
                  <span className="w-2 h-2 rounded-full bg-bronze animate-pulse" />
                  Baltic HQ
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-bronze-light mb-4"
            >
              <span className="w-8 h-px bg-bronze-light" />
              European Reach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-6"
            >
              Baltic Foundation,
              <br />
              <span className="text-bronze-light">Continental Scope</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-primary-foreground/70 leading-relaxed mb-8"
            >
              Based in the Baltics, Skogsrav has built the strongest operational 
              experience in the region. We are trusted by European clients to handle 
              sensitive and complex vehicle recovery cases across borders with 
              consistent execution, discretion, and reliability.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-primary-foreground/60 leading-relaxed"
            >
              Our work extends beyond local markets, supporting clients throughout 
              Europe. We navigate complex jurisdictional requirements and coordinate 
              seamlessly across borders, ensuring compliance at every step.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-primary-foreground/10"
            >
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: "12+", label: "EU Markets" },
                  { value: "100%", label: "Cross-Border Capable" },
                  { value: "24/7", label: "Coordination" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl lg:text-3xl font-serif font-medium text-bronze-light mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-sm text-primary-foreground/50 tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
