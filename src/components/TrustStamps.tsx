import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Shield, Target, EyeOff } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function TrustStamps() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  const stamps = [
    { title: t("trustPills.pill1"), icon: Globe },
    { title: t("trustPills.pill2"), icon: Shield },
    { title: t("trustPills.pill3"), icon: Target },
    { title: t("trustPills.pill4"), icon: EyeOff },
  ];
  return <section className="py-8 lg:py-10 bg-navy-deep border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stamps.map((stamp, index) => <motion.div key={stamp.title} initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          scale: 1.03,
          y: -2,
          transition: {
            duration: 0.2
          }
        }} className="flex items-center justify-center gap-3 py-4 px-5 rounded-lg border border-white/10 bg-white/5 hover:border-orange/50 hover:bg-orange/10 transition-all duration-300 group cursor-default">
              {/* Icon */}
              <motion.div whileHover={{
            rotate: 10
          }} className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center group-hover:bg-orange/30 transition-colors">
                <stamp.icon className="w-5 h-5 text-orange" />
              </motion.div>
              
              {/* Text */}
              <span className="font-bold text-sm lg:text-base text-white tracking-wide group-hover:text-orange transition-colors duration-300">
                {stamp.title}
              </span>
            </motion.div>)}
        </div>
      </div>
    </section>;
}