import { motion } from "framer-motion";
import lynkCoLogo from "@/assets/partners/lynk-co.png";
import europcarLogo from "@/assets/partners/europcar.png";
import avisLogo from "@/assets/partners/avis.svg";
import mcFinanceLogo from "@/assets/partners/mc-finance.png";
const partners = [{
  name: "AVIS",
  logo: avisLogo
}, {
  name: "Europcar",
  logo: europcarLogo
}, {
  name: "Lynk & Co",
  logo: lynkCoLogo
}, {
  name: "MC' Finance",
  logo: mcFinanceLogo
}];
export function TrustedPartners() {
  return <section className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-6">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/60">
            Trusted Partners
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="text-lg md:text-xl font-medium text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
          Working with Established European Mobility Brands
        </motion.h2>

        {/* Partner Logos */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-28 mb-10">
          {partners.map((partner, index) => <motion.div key={partner.name} initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: 0.3 + index * 0.1
        }} className="flex items-center justify-center" title={partner.name}>
              <img src={partner.logo} alt={partner.name} className={`w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${partner.name === "MC' Finance" ? "h-12 md:h-16" : "h-8 md:h-10"}`} />
            </motion.div>)}
        </motion.div>

        {/* Subtle micro-copy */}
        <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }} className="text-center text-xs text-muted-foreground/50 max-w-md mx-auto">
          Selected clients from the leasing and mobility sector. Client references can be provided upon request.
        </motion.p>
      </div>
    </section>;
}