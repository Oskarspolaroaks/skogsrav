import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Assessment",
    description: "Contract review. Vehicle details. Strategy formation.",
  },
  {
    number: "02",
    title: "Communication",
    description: "Direct, professional dialogue. Voluntary resolution prioritized.",
  },
  {
    number: "03",
    title: "Location",
    description: "Precision tracking. Local expertise. Minimal disruption.",
  },
  {
    number: "04",
    title: "Recovery",
    description: "Coordinated execution. Full legal compliance.",
  },
  {
    number: "05",
    title: "Handover",
    description: "Secure return. Complete documentation.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 lg:py-32 bg-navy-deep overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-orange mb-4"
          >
            <span className="w-10 h-0.5 bg-orange" />
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Structured<span className="text-orange">.</span> Efficient<span className="text-orange">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed"
          >
            Every case follows a clear methodology. Discretion and compliance at every step.
          </motion.p>
        </div>

        {/* Process Steps - Horizontal on desktop */}
        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-orange/20 via-orange/50 to-orange/20" />

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-32 h-32 lg:w-28 lg:h-28 mx-auto rounded-full border-2 border-orange/30 bg-navy-medium flex items-center justify-center group-hover:border-orange group-hover:shadow-orange transition-all duration-300">
                    <span className="font-serif text-4xl lg:text-3xl font-bold text-orange">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center px-2">
                  <h3 className="font-serif text-xl lg:text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
