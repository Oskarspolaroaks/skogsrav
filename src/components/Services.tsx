import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, MapPin, Truck, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const services = [{
  icon: Shield,
  title: "Discrete Repossession",
  description: "Professional operations with minimal visibility. Voluntary handover prioritized."
}, {
  icon: MapPin,
  title: "Cross-Border",
  description: "Pan-European capability. Complex jurisdictions handled seamlessly."
}, {
  icon: Truck,
  title: "Controlled Transport",
  description: "Specialized equipment. Safe and compliant vehicle relocation."
}, {
  icon: FileCheck,
  title: "Full Compliance",
  description: "Every assignment follows applicable laws. Authorities informed when required."
}];
export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
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
              What We Do
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
          }} className="heading-section text-foreground">
              Vehicle Repossession
              <span className="text-orange">.</span>
            </motion.h2>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <Link to="/services" className="group inline-flex items-center gap-2 text-lg font-bold text-foreground hover:text-orange transition-colors">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -8,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }} className="group relative p-8 bg-card rounded-xl border-2 border-border hover:border-orange/50 hover:shadow-lg transition-all duration-300">
              {/* Number indicator */}
              <motion.div initial={{
            opacity: 0,
            scale: 0.5
          }} animate={isInView ? {
            opacity: 1,
            scale: 1
          } : {}} transition={{
            duration: 0.4,
            delay: 0.3 + index * 0.1
          }} className="absolute top-4 right-4 text-5xl font-bold text-muted/30 font-serif">
                0{index + 1}
              </motion.div>
              
              <motion.div whileHover={{
            scale: 1.1,
            rotate: 5
          }} transition={{
            duration: 0.3
          }} className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-orange" />
              </motion.div>
              
              <h3 className="heading-card text-foreground mb-3 group-hover:text-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
