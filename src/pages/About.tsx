import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustStamps } from "@/components/TrustStamps";
import { Contact } from "@/components/Contact";
import { AboutIntro } from "@/components/AboutIntro";
import { CheckCircle, Eye, Shield, Users, Target, Lock } from "lucide-react";
const whoWeWorkWith = [{
  icon: Users,
  title: "Leasing Companies",
  description: "Supporting asset recovery for vehicle leasing portfolios across European markets."
}, {
  icon: Target,
  title: "Rental & Fleet Operators",
  description: "Recovering rental and fleet vehicles with minimal disruption to ongoing operations."
}, {
  icon: Shield,
  title: "Financial Institutions",
  description: "Trusted partner for banks and finance houses managing secured vehicle assets."
}, {
  icon: Lock,
  title: "Risk & Legal Teams",
  description: "Working alongside internal risk and legal departments to ensure compliant resolution."
}];
const approachPrinciples = [{
  title: "How We Approach Sensitive Cases",
  description: "Every vehicle recovery case involves legal, reputational, and compliance considerations. These are not afterthoughts — they are integral to our methodology. Before any operational action, we assess the complete picture: contractual position, jurisdictional requirements, and potential sensitivities."
}, {
  title: "Why Visibility Is Avoided",
  description: "Unnecessary attention creates unnecessary risk. For our clients, this means protecting relationships with customers and partners. For the individuals involved, it means maintaining dignity. Our methods are designed to resolve situations efficiently while preserving discretion for all parties."
}, {
  title: "Outcome Over Exposure",
  description: "We measure success by resolution, not by activity. A vehicle recovered quietly and compliantly is more valuable than one recovered visibly. In most cases, our involvement remains known only to the client — and that is precisely the point."
}];
function PageHero() {
  return <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-navy-deep overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-medium to-navy-deep opacity-90" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-primary-foreground/20" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.span initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="section-label text-orange-light mb-4">
            <span className="w-10 h-0.5 bg-orange-light" />
            About Skogsrav
          </motion.span>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="heading-page text-primary-foreground mb-6">
            How We Think.
            <br />
            <span className="text-orange-light">How We Operate.</span>
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="body-large text-primary-foreground/70">
            Skogsrav operates with a clear understanding that vehicle recovery 
            requires more than operational capability. Every case is handled with 
            the same structured approach, discretion, and compliance focus.
          </motion.p>
        </div>
      </div>
    </section>;
}
function WhoWeWorkWith() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.span initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="section-label mb-4">
            <span className="w-10 h-0.5 bg-orange" />
            Our Clients
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
          delay: 0.1
        }} className="heading-section text-foreground mb-6">
            Who We Work With
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
          delay: 0.2
        }} className="body-large text-muted-foreground">
            Skogsrav is engaged exclusively by European institutions that require 
            an experienced, discreet partner for vehicle recovery matters.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {whoWeWorkWith.map((item, index) => <motion.div key={item.title} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group p-8 lg:p-10 bg-card rounded-lg border border-border hover:border-bronze/30 hover:shadow-elevated transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-cream flex items-center justify-center mb-6 group-hover:bg-orange/10 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="heading-card text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
function OurApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:col-span-2 mb-12 lg:mb-0">
            <motion.span initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} className="section-label mb-4">
              <span className="w-10 h-0.5 bg-orange" />
              Our Philosophy
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
            delay: 0.1
          }} className="heading-section text-foreground mb-6">
              Principles That Guide Every Case
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
            delay: 0.2
          }} className="p-8 bg-navy-deep rounded-lg">
              <blockquote className="font-serif text-lg text-primary-foreground/90 italic leading-relaxed">
                "Effective vehicle recovery is measured not by visibility, but by outcome."
              </blockquote>
            </motion.div>
          </div>

          {/* Right Column - Principles */}
          <div ref={ref} className="lg:col-span-3 space-y-8">
            {approachPrinciples.map((principle, index) => <motion.div key={principle.title} initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: index * 0.15
          }} className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Eye className="w-5 h-5 text-bronze" />
                  </div>
                  <div>
                    <h3 className="heading-card text-foreground mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
                {index < approachPrinciples.length - 1 && <div className="mt-8 border-b border-border" />}
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}
function BalticFoundation() {
  return <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <motion.span initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} className="section-label mb-4">
              <span className="w-10 h-0.5 bg-orange" />
              Our Foundation
            </motion.span>
            <h2 className="heading-section text-foreground mb-6">
              Baltic Expertise,
              <br />
              European Reach
            </h2>
            <p className="body-large text-muted-foreground mb-6">Based in the Baltics, Skogsrav has built the strongest operational experience in the region. This foundation provides the expertise and local knowledge essential for complex vehicle recovery operations all across Europe.</p>
            <p className="text-muted-foreground leading-relaxed">
              Our work extends beyond local markets. We support clients throughout 
              Europe, navigating jurisdictional complexities and coordinating across 
              borders with consistent execution and reliability.
            </p>
          </motion.div>

          {/* Right Column - Key Points */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="mt-12 lg:mt-0">
            <div className="space-y-6">
              {["Regional operational leadership", "Multi-jurisdictional coordination capability", "Established local relationships and expertise", "Consistent cross-border execution", "Full compliance with EU requirements"].map((point, index) => <motion.div key={point} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3 + index * 0.1
            }} className="flex items-start gap-4 p-4 bg-cream rounded-lg">
                  <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
const About = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero />
        <AboutIntro />
        <TrustStamps />
        <WhoWeWorkWith />
        <OurApproach />
        <BalticFoundation />
        <Contact />
      </main>
      <Footer />
    </div>;
};
export default About;