import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Shield, Target, EyeOff } from "lucide-react";

const stamps = [
  {
    title: "EU Cross-Border",
    icon: Globe,
  },
  {
    title: "Compliance-First",
    icon: Shield,
  },
  {
    title: "Success-Based",
    icon: Target,
  },
  {
    title: "Discreet",
    icon: EyeOff,
  },
];

export function TrustStamps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-8 lg:py-10 bg-navy-deep border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stamps.map((stamp, index) => (
            <motion.div
              key={stamp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-3 py-4 px-5 rounded-lg border border-white/10 bg-white/5 hover:border-orange/50 hover:bg-orange/10 transition-all duration-300 group cursor-default"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center group-hover:bg-orange/30 transition-colors">
                <stamp.icon className="w-5 h-5 text-orange" />
              </div>
              
              {/* Text */}
              <span className="font-semibold text-sm lg:text-base text-white tracking-wide">
                {stamp.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
