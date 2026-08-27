import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { storageImages } from "@/lib/storage";
import { MapPin } from "lucide-react";
import { Link } from "@/lib/router-compat";
const markets: { name: string; href?: string }[] = [{
  name: "Germany"
}, {
  name: "France",
  href: "/france"
}, {
  name: "Poland"
}, {
  name: "Netherlands",
  href: "/netherlands"
}, {
  name: "Belgium"
}, {
  name: "Austria"
}, {
  name: "Czech Republic"
}, {
  name: "Baltics"
}];
export function EuropeanScope() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="european-scope" className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="mb-12 lg:mb-0">
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
              Our Reach
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
          }} className="heading-section text-foreground mb-6">Pan-European<span className="text-orange">.</span>
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
            duration: 0.5,
            delay: 0.2
          }} className="body-large text-muted-foreground mb-10">
              Extensive experience handling vehicle repossession cases across European markets. 
            </motion.p>

            {/* Markets Grid */}
            <motion.div ref={ref} initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="grid grid-cols-2 gap-3">
              {markets.map((market, index) => <motion.div key={market.name} initial={{
              opacity: 0,
              x: -20
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.3,
              delay: 0.4 + index * 0.05
            }} whileHover={{
              x: 5,
              color: "hsl(24 95% 53%)",
              transition: {
                duration: 0.2
              }
            }} className="flex items-center gap-2 text-foreground font-semibold cursor-default">
                  <MapPin className="w-4 h-4 text-orange flex-shrink-0" />
                  {market.href ? <Link to={market.href} className="hover:text-orange transition-colors">{market.name}</Link> : <span>{market.name}</span>}
                </motion.div>)}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src={storageImages.europeNetwork} alt="European operational network" className="w-full h-auto object-cover" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-5 py-3 shadow-lg">
                  <div className="text-3xl font-bold text-orange font-serif">8+</div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wide">Markets</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-5 py-3 shadow-lg">
                  <div className="text-3xl font-bold text-orange font-serif">2000+ </div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wide">VEHICLES REPOSSESSED</div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-orange/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-navy-deep/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>;
}
