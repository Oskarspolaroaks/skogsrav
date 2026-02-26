import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const steps = [{
  number: "01",
  title: "Assessment",
  description: "Contract review. Vehicle details. Strategy formation."
}, {
  number: "02",
  title: "Communication",
  description: "Direct, professional dialogue. Voluntary resolution prioritized."
}, {
  number: "03",
  title: "Location",
  description: "Precision tracking. Local expertise. Minimal disruption."
}, {
  number: "04",
  title: "Repossession",
  description: "Coordinated execution. Full legal compliance."
}, {
  number: "05",
  title: "Handover",
  description: "Secure return. Complete documentation."
}];
export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="process" className="py-24 lg:py-32 bg-navy-deep overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
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
            How We Work
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
        }} className="heading-section text-white mb-6">​Structurizd. Discreet. Efficient.    ​         
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="body-large text-white/70">Every case follows a clear methodology. Discretion and efficiency at every step.</motion.p>
        </div>

        {/* Process Steps - Horizontal on desktop */}
        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-orange/20 via-orange/50 to-orange/20" />

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => <motion.div key={step.number} initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }} className="relative group cursor-default">
                {/* Step Number Circle */}
                <motion.div whileHover={{
              scale: 1.08
            }} transition={{
              duration: 0.3
            }} className="relative z-10 mb-6">
                  <div className="w-32 h-32 lg:w-28 lg:h-28 mx-auto rounded-full border-2 border-orange/30 bg-navy-medium flex items-center justify-center group-hover:border-orange group-hover:shadow-orange transition-all duration-300">
                    <motion.span initial={{
                  scale: 0.5,
                  opacity: 0
                }} animate={isInView ? {
                  scale: 1,
                  opacity: 1
                } : {}} transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                  type: "spring"
                }} className="font-serif text-4xl lg:text-3xl font-bold text-orange">
                      {step.number}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Step Content */}
                <div className="text-center px-2">
                  <h3 className="font-serif text-xl lg:text-lg font-bold text-white mb-2 group-hover:text-orange transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}
