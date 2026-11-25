import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function WhySkogsrav() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const differentiators = [
    { title: t("why.item1Title"), description: t("why.item1Desc") },
    { title: t("why.item2Title"), description: t("why.item2Desc") },
    { title: t("why.item3Title"), description: t("why.item3Desc") },
    { title: t("why.item4Title"), description: t("why.item4Desc") },
  ];
  return <section id="why-skogsrav" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Header */}
          <div className="mb-12 lg:mb-0">
            <motion.span initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="section-label mb-4">
              <span className="w-12 h-0.5 bg-orange" />
              {t("why.eyebrow")}
            </motion.span>
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="heading-section text-foreground mb-8">
              {t("why.heading1")}
              <br />
              <span className="text-orange">{t("why.heading2")}</span>
            </motion.h2>

            {/* Quote Block */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="relative p-8 bg-navy-deep rounded-xl shadow-lg">
              <div className="absolute -top-3 left-8 w-8 h-8 bg-orange rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-serif">"</span>
              </div>
              <blockquote className="font-serif text-xl lg:text-2xl text-white italic leading-relaxed">
                {t("why.quote")}
              </blockquote>
            </motion.div>
          </div>

          {/* Right Column - Differentiators */}
          <div ref={ref} className="space-y-4">
            {differentiators.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            x: 30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} whileHover={{
            x: 8,
            transition: {
              duration: 0.2
            }
          }} className="group flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-transparent hover:border-orange/30 hover:shadow-md transition-all duration-300 cursor-default">
                <motion.div whileHover={{
              scale: 1.2,
              rotate: 10
            }} transition={{
              duration: 0.3
            }} className="flex-shrink-0 w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange transition-all duration-300">
                  <Check className="w-5 h-5 text-orange group-hover:text-white transition-colors" />
                </motion.div>
                <div>
                  <h3 className="heading-card text-foreground mb-1 group-hover:text-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}
