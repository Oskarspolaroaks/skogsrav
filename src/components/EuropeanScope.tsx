import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function EuropeanScope() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-navy-deep overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Abstract Europe Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative mb-16 lg:mb-0"
          >
            {/* Abstract network visualization representing Europe */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background gradient circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy-medium/50 to-transparent" />
              
              {/* Abstract connection lines */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
              >
                {/* Grid lines suggesting map coordinates */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(32 35% 62%)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="hsl(32 35% 62%)" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(32 35% 62%)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Horizontal flowing lines */}
                <motion.path
                  d="M50 150 Q200 130 350 170"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 0.2 }}
                />
                <motion.path
                  d="M30 200 Q180 180 370 220"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 0.4 }}
                />
                <motion.path
                  d="M60 250 Q220 230 340 260"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 0.6 }}
                />
                
                {/* Connection nodes representing key points */}
                {[
                  { cx: 280, cy: 140, delay: 0.8 }, // Nordic
                  { cx: 320, cy: 200, delay: 1.0 }, // Baltic (highlighted)
                  { cx: 200, cy: 180, delay: 1.2 }, // Central
                  { cx: 150, cy: 220, delay: 1.4 }, // Western
                  { cx: 240, cy: 260, delay: 1.6 }, // Southern
                  { cx: 100, cy: 160, delay: 1.8 }, // UK/Ireland
                ].map((node, index) => (
                  <motion.g key={index}>
                    <motion.circle
                      cx={node.cx}
                      cy={node.cy}
                      r={index === 1 ? 8 : 4}
                      fill={index === 1 ? "hsl(32 40% 48%)" : "hsl(32 35% 62%)"}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: index === 1 ? 1 : 0.6, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: node.delay }}
                    />
                    {index === 1 && (
                      <motion.circle
                        cx={node.cx}
                        cy={node.cy}
                        r="16"
                        stroke="hsl(32 40% 48%)"
                        strokeWidth="1"
                        fill="none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: node.delay + 0.2 }}
                      />
                    )}
                  </motion.g>
                ))}
                
                {/* Connection lines between nodes */}
                <motion.path
                  d="M320 200 L280 140 M320 200 L200 180 M320 200 L240 260 M200 180 L150 220 M200 180 L100 160"
                  stroke="hsl(32 35% 62%)"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1.5 }}
                />
              </svg>
              
              {/* Labels */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 2 }}
                className="absolute top-1/3 right-8 lg:right-4"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-bronze-light">
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
