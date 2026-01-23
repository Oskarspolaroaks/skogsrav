import { motion } from "framer-motion";
export function AboutIntro() {
  return <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-8">
            {/* Section Label */}
            <span className="section-label">
              <span className="w-10 h-0.5 bg-orange" />
              About Skogsrav
            </span>

            {/* Main Heading */}
            <h2 className="heading-section text-foreground">
              A Recovery Partner Built for Fast-Moving Markets
            </h2>

            {/* Content */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="body-large">
                Skogsrav was founded by legal and credit specialists with a clear purpose: 
                to deliver personalised, high-quality recovery solutions tailored to each 
                client's specific situation.
              </p>

              <p>
                We specialise in the search and recovery of movable assets across Europe, 
                with a strong focus on leasing and rental assets. These primarily include 
                vehicles, commercial trucks, agricultural machinery, and construction equipment.
              </p>

              <p>
                With extensive cross-border experience, Skogsrav has successfully resolved 
                recovery cases for European partners across multiple jurisdictions — with 
                consistency and discretion at every stage.
              </p>

              <p>
                Our approach is transparent, ethical, and methodical. We prioritise clear 
                communication, flexible service models, and the protection of reputation — 
                both for our clients and for Skogsrav itself — in every engagement.
              </p>

              <p>By combining deep legal expertise with modern communication tools, structured coordination, and flexible operational planning, we make complex cross-border recovery processes more efficient, predictable, and accessible for clients.</p>
            </div>

            {/* Divider with key differentiators */}
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="pt-8 border-t border-border">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Legal Foundation</h3>
                  <p className="text-sm text-muted-foreground">Founded by legal and credit specialists with deep regulatory understanding.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">European Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Multi-jurisdictional capability with consistent cross-border execution.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Discretion First</h3>
                  <p className="text-sm text-muted-foreground">
                    Reputation protection for all parties through methodical, ethical practice.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}