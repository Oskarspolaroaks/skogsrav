import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Case Assessment",
    description:
      "We review the contractual situation, vehicle details, and all relevant documentation. This forms the foundation for a compliant and effective recovery strategy.",
  },
  {
    number: "02",
    title: "Structured Communication",
    description:
      "Direct, professional communication with the lessee or contractual counterparty. Our approach prioritizes dialogue and seeks voluntary resolution whenever possible.",
  },
  {
    number: "03",
    title: "Vehicle Location",
    description:
      "Using established methods and local expertise, we locate the vehicle with precision and discretion, ensuring minimal disruption to ongoing operations.",
  },
  {
    number: "04",
    title: "Coordinated Recovery",
    description:
      "Whether through voluntary handover or controlled transport, every recovery is executed in full compliance with applicable laws and local requirements.",
  },
  {
    number: "05",
    title: "Secure Handover",
    description:
      "The vehicle is returned to your designated location with full documentation. Relevant authorities are informed when necessary throughout the process.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-bronze mb-4"
          >
            <span className="w-8 h-px bg-bronze" />
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6"
          >
            A Structured, Transparent Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Every assignment follows a clear methodology designed to resolve 
            situations efficiently while maintaining the highest standards of 
            discretion and compliance.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div ref={ref} className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="lg:flex lg:gap-12 group"
              >
                {/* Step Number */}
                <div className="flex-shrink-0 mb-4 lg:mb-0">
                  <div className="w-[120px] h-[120px] rounded-full bg-card border-2 border-border flex items-center justify-center group-hover:border-bronze transition-colors duration-300">
                    <span className="font-serif text-3xl font-medium text-navy-deep">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 lg:py-8 pb-8 lg:pb-12 border-b border-border lg:border-b-0">
                  <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
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
