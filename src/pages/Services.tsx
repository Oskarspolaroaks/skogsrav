import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustStamps } from "@/components/TrustStamps";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { Globe, Building2, Truck, Eye, Shield, MessageSquare, X, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import servicesHero from "@/assets/hero-services.jpg";

const coreServices = [
  {
    icon: Building2,
    title: "Leasing & Rental Asset Recovery",
    description: "Specialized recovery for leasing companies and rental operators. We understand the unique requirements of asset-backed financing and the importance of preserving customer relationships.",
    features: ["Portfolio-level case management", "Relationship-preserving approach", "Fleet-specific logistics", "Detailed reporting and documentation", "Photo and incident reporting", "End-to-end case traceability", "Condition documentation at takeover", "Scalable operational capacity"],
  },
  {
    icon: Globe,
    title: "Cross-Border Vehicle Recovery",
    description: "Coordinated vehicle recovery operations across Europe, managing complex cross-border cases with a structured and controlled approach.",
    features: ["Centralized coordination across European markets", "Condition documentation at point of recovery", "Operational continuity across jurisdictions", "Cross-border case planning and execution", "Experience with diverse European market environments", "Territory-specific operational knowledge"],
  },
  {
    icon: Truck,
    title: "Commercial & Fleet Vehicle Recovery",
    description: "Recovery of commercial vehicles and fleet assets with specialized handling requirements. From light commercial to heavy goods vehicles, we have the capability and equipment.",
    features: ["Specialized transport equipment", "Commercial vehicle expertise", "Minimal business disruption", "Secure storage coordination"],
  },
];

const operationalPrinciples = [
  {
    icon: Eye,
    title: "Discretion",
    description: "In most cases, our involvement remains known only to the client. We operate quietly and methodically, avoiding unnecessary attention that could affect relationships or reputation.",
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Every action is carried out in accordance with applicable laws and local requirements. Legal, reputational, and regulatory considerations are integral to our process, not afterthoughts.",
  },
  {
    icon: MessageSquare,
    title: "Voluntary Resolution First",
    description: "We communicate directly with the lessee or contractual counterparty, seeking voluntary handover whenever possible. Dialogue and structured communication precede any operational action.",
  },
];

const whatWeDoNot = [
  {
    icon: X,
    title: "No Aggressive Repossession",
    description: "We do not employ aggressive tactics. Our approach is structured, professional, and designed to preserve dignity for all parties involved.",
  },
  {
    icon: X,
    title: "No Public Confrontation",
    description: "We avoid situations that could create public visibility or confrontation. Discretion is maintained throughout every engagement.",
  },
  {
    icon: X,
    title: "No Unnecessary Visibility",
    description: "We do not seek attention for our work. Effective vehicle recovery is measured by outcome, not by the visibility of the operation.",
  },
  {
    icon: X,
    title: "No Unexpected Costs",
    description: "Costs are agreed in advance and linked to successful outcomes. Clients receive transparent reporting with no hidden charges.",
  },
];

function ServicesPageHero() {
  return (
    <PageHero
      label="Our Services"
      title="European Cross-Border"
      titleAccent="Vehicle Recovery Services"
      description="Comprehensive vehicle recovery services designed for leasing companies, rental operators, and financial institutions. Every service is delivered with discretion and professional execution."
      backgroundImage={servicesHero}
      backgroundAlt="European logistics control room with route monitoring"
    />
  );
}

function CoreServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            <span className="w-10 h-0.5 bg-orange" />
            Core Service Areas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-foreground mb-6"
          >
            Comprehensive Recovery Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-large text-muted-foreground"
          >
            We specialize in cases where standard internal processes have not delivered results or where reputational considerations are critical. Our approach is structured, calm, and focused on achieving outcomes with minimal visibility.
          </motion.p>
        </div>

        <div ref={ref} className="space-y-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-lg border border-border hover:border-bronze/30 hover:shadow-elevated transition-all duration-300 overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-3 lg:gap-0">
                {/* Left - Icon and Title */}
                <div className="p-8 lg:p-10 bg-cream/50 lg:bg-transparent lg:border-r lg:border-border">
                  <div className="w-16 h-16 rounded-lg bg-navy-deep/5 flex items-center justify-center mb-6 group-hover:bg-orange/10 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-orange" />
                  </div>
                  <h3 className="heading-card text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                {/* Right - Features */}
                <div className="p-8 lg:p-10 lg:col-span-2">
                  <h4 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
                    Key Capabilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperationalPrinciples() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            <span className="w-10 h-0.5 bg-orange" />
            Operational Principles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-foreground mb-6"
          >
            How Every Case Is Handled
          </motion.h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {operationalPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 lg:p-10 bg-card rounded-lg border border-border hover:border-bronze/30 hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-navy-deep flex items-center justify-center mb-6">
                <principle.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="heading-card text-foreground mb-4">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDoNot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openContactModal } = useContactModal();

  return (
    <section className="py-24 lg:py-32 bg-navy-deep">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label text-orange-light mb-4"
          >
            <span className="w-10 h-0.5 bg-orange-light" />
            Clear Boundaries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-primary-foreground mb-6"
          >
            What We Do NOT Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-large text-primary-foreground/70"
          >
            Understanding what we avoid is as important as understanding what we do. These boundaries define our approach and protect our clients.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {whatWeDoNot.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 lg:p-10 bg-navy-medium/50 rounded-lg border border-primary-foreground/10 hover:border-bronze/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="heading-card text-primary-foreground mb-4">{item.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button variant="hero" size="xl" onClick={openContactModal}>
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesPageHero />
        <TrustStamps />
        <CoreServices />
        <OperationalPrinciples />
        <WhatWeDoNot />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
