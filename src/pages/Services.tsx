import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustStamps } from "@/components/TrustStamps";
import { Contact } from "@/components/Contact";
import { 
  Globe, 
  Building2, 
  Truck, 
  Eye, 
  Shield, 
  MessageSquare,
  X,
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const coreServices = [
  {
    icon: Globe,
    title: "Cross-Border Vehicle Recovery",
    description:
      "Coordinated recovery operations across European jurisdictions. We navigate complex legal frameworks, manage multi-country logistics, and ensure compliance at every border crossing.",
    features: [
      "Multi-jurisdictional coordination",
      "Local legal compliance in each market",
      "Seamless cross-border logistics",
      "Documentation for all territories",
    ],
  },
  {
    icon: Building2,
    title: "Leasing & Rental Asset Recovery",
    description:
      "Specialized recovery for leasing companies and rental operators. We understand the unique requirements of asset-backed financing and the importance of preserving customer relationships.",
    features: [
      "Portfolio-level case management",
      "Relationship-preserving approach",
      "Fleet-specific logistics",
      "Detailed reporting and documentation",
    ],
  },
  {
    icon: Truck,
    title: "Commercial & Fleet Vehicle Recovery",
    description:
      "Recovery of commercial vehicles and fleet assets with specialized handling requirements. From light commercial to heavy goods vehicles, we have the capability and equipment.",
    features: [
      "Specialized transport equipment",
      "Commercial vehicle expertise",
      "Minimal business disruption",
      "Secure storage coordination",
    ],
  },
];

const operationalPrinciples = [
  {
    icon: Eye,
    title: "Discretion",
    description:
      "In most cases, our involvement remains known only to the client. We operate quietly and methodically, avoiding unnecessary attention that could affect relationships or reputation.",
  },
  {
    icon: Shield,
    title: "Compliance",
    description:
      "Every action is carried out in accordance with applicable laws and local requirements. Legal, reputational, and regulatory considerations are integral to our process, not afterthoughts.",
  },
  {
    icon: MessageSquare,
    title: "Voluntary Resolution First",
    description:
      "We communicate directly with the lessee or contractual counterparty, seeking voluntary handover whenever possible. Dialogue and structured communication precede any operational action.",
  },
];

const whatWeDoNot = [
  {
    icon: X,
    title: "No Aggressive Repossession",
    description:
      "We do not employ aggressive tactics. Our approach is structured, professional, and designed to preserve dignity for all parties involved.",
  },
  {
    icon: X,
    title: "No Public Confrontation",
    description:
      "We avoid situations that could create public visibility or confrontation. Discretion is maintained throughout every engagement.",
  },
  {
    icon: X,
    title: "No Unnecessary Visibility",
    description:
      "We do not seek attention for our work. Effective vehicle recovery is measured by outcome, not by the visibility of the operation.",
  },
];

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-navy-deep overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-medium to-navy-deep opacity-90" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-primary-foreground/20" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-bronze-light mb-4"
          >
            <span className="w-8 h-px bg-bronze-light" />
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-tight mb-6"
          >
            Vehicle Recovery Services
            <br />
            <span className="text-bronze-light">for European Institutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed"
          >
            Comprehensive vehicle recovery services designed for leasing companies, 
            rental operators, and financial institutions. Every service is delivered 
            with discretion, compliance, and professional execution.
          </motion.p>
        </div>
      </div>
    </section>
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
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-bronze mb-4"
          >
            <span className="w-8 h-px bg-bronze" />
            Core Service Areas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6"
          >
            Comprehensive Recovery Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Our services address the full spectrum of vehicle recovery requirements 
            faced by European institutions — from single-vehicle cases to complex 
            cross-border portfolios.
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
                  <div className="w-16 h-16 rounded-lg bg-navy-deep/5 flex items-center justify-center mb-6 group-hover:bg-bronze/10 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-bronze" />
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right - Features */}
                <div className="p-8 lg:p-10 lg:col-span-2">
                  <h4 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
                    Key Capabilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-bronze mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
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
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-bronze mb-4"
          >
            <span className="w-8 h-px bg-bronze" />
            Operational Principles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6"
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
                <principle.icon className="w-6 h-6 text-bronze-light" />
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-4">
                {principle.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
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

  return (
    <section className="py-24 lg:py-32 bg-navy-deep">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-bronze-light mb-4"
          >
            <span className="w-8 h-px bg-bronze-light" />
            Clear Boundaries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-6"
          >
            What We Do NOT Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/70 leading-relaxed"
          >
            Understanding what we avoid is as important as understanding what we do. 
            These boundaries define our approach and protect our clients.
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
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-primary-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed">
                {item.description}
              </p>
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
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">
              Discuss Your Requirements
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
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
        <PageHero />
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
