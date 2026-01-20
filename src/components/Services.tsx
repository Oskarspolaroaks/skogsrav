import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, MapPin, Truck, FileCheck } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Discrete Recovery Operations",
    description:
      "Professionally managed vehicle recovery with minimal visibility. Our methods prioritize voluntary handover and maintain your reputation with customers and partners.",
  },
  {
    icon: MapPin,
    title: "Cross-Border Expertise",
    description:
      "Operational capability across European markets. We navigate complex jurisdictional requirements and coordinate seamlessly across borders.",
  },
  {
    icon: Truck,
    title: "Controlled Transport",
    description:
      "When voluntary handover is not possible, we arrange controlled transport using specialized equipment, ensuring safe and compliant vehicle relocation.",
  },
  {
    icon: FileCheck,
    title: "Full Compliance Management",
    description:
      "Every assignment follows applicable laws and local requirements. Relevant authorities are informed when necessary, protecting all parties involved.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
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
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6"
          >
            Vehicle Recovery Services for European Institutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Skogsrav operates with a clear understanding that vehicle recovery 
            requires more than operational capability. Legal, reputational, and 
            compliance considerations are integral to every case.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 lg:p-10 bg-card rounded-lg border border-border hover:border-bronze/30 hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-cream flex items-center justify-center mb-6 group-hover:bg-bronze/10 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-bronze" />
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
