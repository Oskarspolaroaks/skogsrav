import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const differentiators = [
  {
    title: "Success-Based Fee Model",
    description:
      "Clients are invoiced only after a vehicle has been successfully recovered. If the vehicle is not returned, no invoice is issued. This structure reflects our confidence and ensures alignment with your objectives.",
  },
  {
    title: "Baltic Expertise, European Reach",
    description:
      "Based in the Baltics with the region's strongest operational experience, we are trusted by European clients to handle complex cases across borders with consistent execution.",
  },
  {
    title: "Minimal Visibility",
    description:
      "In most cases, our involvement remains known only to the client. We believe effective vehicle recovery is measured not by visibility, but by outcome.",
  },
  {
    title: "Compliance-First Approach",
    description:
      "Legal, reputational, and compliance considerations are integral to every case. All actions are carried out in accordance with applicable laws and local requirements.",
  },
];

export function WhySkogsrav() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-skogsrav" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left Column - Header */}
          <div className="mb-12 lg:mb-0 lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-bronze mb-4"
            >
              <span className="w-8 h-px bg-bronze" />
              Why Skogsrav
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6"
            >
              Trusted by European Institutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Skogsrav is engaged by European institutions that require an 
              experienced, discreet, and results-driven partner for vehicle 
              recovery matters — delivered professionally, compliantly, and 
              without unnecessary attention.
            </motion.p>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 p-8 bg-navy-deep rounded-lg"
            >
              <blockquote className="font-serif text-xl text-primary-foreground/90 italic leading-relaxed">
                "We work quietly and methodically. Effective vehicle recovery 
                is measured not by visibility, but by outcome."
              </blockquote>
            </motion.div>
          </div>

          {/* Right Column - Differentiators */}
          <div ref={ref} className="space-y-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 lg:p-8 bg-card rounded-lg border border-border hover:border-bronze/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-bronze mt-1" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg lg:text-xl font-medium text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
