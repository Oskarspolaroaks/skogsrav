import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stamps = [
  {
    title: "EU Cross-Border",
    subtitle: "Operations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Compliance-First",
    subtitle: "Partner",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Success-Based",
    subtitle: "Fee Model",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
  {
    title: "Discreet",
    subtitle: "by Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M2 2 22 22" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function TrustStamps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 lg:py-20 bg-cream border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stamps.map((stamp, index) => (
            <motion.div
              key={stamp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Seal Container */}
              <div className="relative mb-4">
                {/* Outer ring */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-navy-deep/20 flex items-center justify-center group-hover:border-bronze/40 transition-colors duration-300">
                  {/* Inner circle */}
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-navy-deep/5 flex items-center justify-center group-hover:bg-bronze/10 transition-colors duration-300">
                    <span className="text-navy-deep group-hover:text-bronze transition-colors duration-300">
                      {stamp.icon}
                    </span>
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-navy-deep/30" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-navy-deep/30" />
              </div>
              
              <h3 className="font-serif text-sm lg:text-base font-medium text-navy-deep tracking-wide">
                {stamp.title}
              </h3>
              <span className="text-xs lg:text-sm text-muted-foreground tracking-wide">
                {stamp.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
