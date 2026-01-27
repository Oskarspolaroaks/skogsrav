import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { TrustStamps } from "@/components/TrustStamps";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-about.jpg";
const faqItems = [{
  id: "what-is-vehicle-recovery",
  question: "What is vehicle recovery?",
  answer: "Vehicle recovery is a professional service in which Skogsrav retrieves a vehicle or other movable asset from a debtor or lessee and returns it to its rightful owner. Our services are typically required when a client's internal recovery procedures have failed—for example, when a debtor ignores return demands, refuses to cooperate, or unlawfully retains the vehicle."
}, {
  id: "is-recovery-legal",
  question: "Is vehicle and asset recovery legal?",
  answer: "Yes. All recoveries carried out by Skogsrav are conducted in full compliance with applicable laws and regulations. Before accepting any case, our team performs a thorough legal assessment to ensure that the lessor or creditor has a clear and legitimate right to recover the asset. This protects both our clients and Skogsrav from potential legal disputes and safeguards reputational integrity."
}, {
  id: "discretion-importance",
  question: "Why is discretion important in professional vehicle recovery?",
  answer: "Discretion is a cornerstone of our recovery operations. We recognize that asset recovery is a sensitive situation for all parties involved. Every recovery is conducted with a respectful, professional, and controlled approach—firm where necessary, but never confrontational. We prioritise outcomes over visibility and take active steps to minimise reputational risk for our clients. If a recovery poses excessive reputational exposure, we will suspend the operation and pursue an alternative strategy."
}, {
  id: "voluntary-handover",
  question: "What is a voluntary vehicle handover and why is it preferred?",
  answer: "A voluntary vehicle handover occurs when the debtor or lessee willingly transfers possession of the vehicle to Skogsrav. This includes handing over the keys, any available documentation, and signing a formal handover report. The report documents vehicle condition, mileage, date and location of recovery, and confirms that no personal belongings remain in the vehicle. This approach is preferred as it avoids unnecessary confrontation and provides clear written confirmation of the vehicle's condition at the time of recovery."
}, {
  id: "cross-border-recovery",
  question: "What is cross-border vehicle recovery?",
  answer: "Cross-border vehicle recovery refers to the retrieval of vehicles that have crossed international borders within Europe under leasing, rental, or financing agreements. This process requires coordination across multiple jurisdictions with differing legal frameworks. Skogsrav applies a structured methodology involving debtor location, legal jurisdiction analysis, and cooperation with local authorities or partners where required to ensure lawful and efficient recovery."
}, {
  id: "timeline",
  question: "How long does a typical vehicle recovery take?",
  answer: "Recovery timelines vary depending on case complexity, debtor cooperation, geographic distances, and volume of cases. For clients providing 10–20 cases per month, recoveries are typically completed within the same month, often averaging one recovered vehicle per day. Timing may also depend on vehicle locations and designated storage facilities."
}, {
  id: "success-based-pricing",
  question: "How does success-based recovery work?",
  answer: "Skogsrav operates on a success-based fee model. Clients are invoiced only after a vehicle has been successfully recovered. Fees are agreed in advance as a fixed amount, providing full cost transparency and eliminating financial risk for unsuccessful cases. This model ensures our interests are fully aligned with those of our clients."
}, {
  id: "who-can-engage",
  question: "Who can engage professional vehicle recovery services?",
  answer: "Skogsrav works exclusively with institutional clients that have a legitimate legal interest in the assets being recovered. These include leasing companies, rental fleet operators, banks and financial institutions, corporate fleet managers, legal professionals, and insolvency practitioners. All engagements require documented proof of ownership or recovery rights, such as lease or financing agreements and evidence of default or termination. We do not provide services to private individuals or accept cases with unclear or disputed legal standing."
}, {
  id: "skogsrav-difference",
  question: "How does Skogsrav differ from traditional debt collection or repossession companies?",
  answer: "Unlike traditional debt collection agencies that focus on payment recovery, Skogsrav specialises in the physical recovery of movable assets across European borders. Our approach prioritises legal compliance, discretion, and voluntary resolution over aggressive tactics. Combined with our success-based fee structure and exclusive focus on institutional clients, we deliver a recovery service designed to protect both assets and reputation."
}];
export default function FAQ() {
  const {
    openContactModal
  } = useContactModal();
  return <div className="min-h-screen bg-background">
      <Header />
      <PageHero label="Expert FAQ" title="Cross-Border" titleAccent="Vehicle Recovery" description="Authoritative answers to critical questions about European vehicle recovery operations, legal compliance, and institutional engagement." backgroundImage={heroImage} backgroundAlt="European vehicle recovery expertise" />

      <TrustStamps />

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
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
        }} className="text-center mb-16">
            <div className="section-label mb-6">
              <span className="w-8 h-px bg-orange" />
              Understanding Our Work
            </div>
            <h2 className="heading-section text-foreground mb-6">
              Frequently Asked <span className="text-gradient-orange">Questions</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Expert guidance on legal, operational, and compliance aspects of professional vehicle recovery across Europe.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => <motion.div key={item.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.05
            }}>
                  <AccordionItem value={item.id} className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <AccordionTrigger className="text-left font-serif text-lg font-semibold text-foreground hover:text-orange hover:no-underline py-6">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pr-8">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>)}
            </Accordion>
          </motion.div>

          {/* CTA Section */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="mt-20 text-center">
            <div className="bg-gradient-to-br from-navy-deep to-navy-medium rounded-2xl p-10 md:p-14 text-center shadow-lg">
              <h3 className="heading-card text-primary-foreground mb-4">
                Have a specific question about your case?
              </h3>
              <p className="body-medium text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Our specialists are available to discuss complex recovery scenarios and provide tailored guidance. 
              </p>
              <Button variant="corporate" size="lg" onClick={openContactModal} className="shadow-orange">
                Discuss Your Requirements
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schema.org FAQ Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      })
    }} />
      <Footer />
    </div>;
}