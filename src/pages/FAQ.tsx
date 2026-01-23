import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { TrustStamps } from "@/components/TrustStamps";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-about.jpg";

const faqItems = [
  {
    id: "cross-border-recovery",
    question: "What is cross-border vehicle recovery in Europe and how does it work?",
    answer: "Cross-border vehicle recovery refers to the professional retrieval of vehicles that have crossed international boundaries within Europe, typically under lease, rental, or financing agreements. This process requires coordination across multiple jurisdictions, each with distinct legal frameworks governing asset recovery. Skogsrav operates through a structured methodology that begins with comprehensive debtor location, legal assessment of the applicable jurisdiction, and engagement with local enforcement where necessary. Our approach prioritises voluntary resolution, ensuring that recovery is achieved through compliant, transparent means. The process is managed end-to-end by specialists with expertise in both European transport law and creditor rights enforcement."
  },
  {
    id: "legal-eu-borders",
    question: "Is vehicle recovery legal across EU borders?",
    answer: "Yes, vehicle recovery across EU borders is legal when conducted in accordance with the applicable laws of both the originating and receiving jurisdictions. The European legal framework provides mechanisms for creditors to enforce their rights over movable assets, though these must be exercised through proper channels. Recovery operations must respect local enforcement procedures, data protection regulations, and contractual obligations. Skogsrav ensures that every case is assessed against the specific legal requirements of each jurisdiction involved, engaging local legal counsel where necessary to guarantee full compliance. This disciplined approach protects both the creditor's interests and the integrity of the recovery process."
  },
  {
    id: "jurisdictional-differences",
    question: "How do jurisdictional differences affect vehicle recovery cases?",
    answer: "Jurisdictional differences significantly impact the methodology, timing, and legal pathways available for vehicle recovery across Europe. Each country maintains its own civil enforcement procedures, debtor notification requirements, and rules governing the physical recovery of assets. Some jurisdictions permit self-help remedies under specific conditions, while others require court orders or enforcement officer involvement. Skogsrav maintains a comprehensive understanding of these variations and structures each case accordingly. Our operational protocols are designed to adapt to local requirements while maintaining consistent service standards, ensuring that cross-border complexity does not compromise recovery outcomes or legal standing."
  },
  {
    id: "compliance-assurance",
    question: "How do you ensure full legal and regulatory compliance in each country?",
    answer: "Compliance is fundamental to Skogsrav's operational philosophy and is embedded at every stage of the recovery process. Before initiating any recovery operation, we conduct a thorough legal assessment of the applicable jurisdiction, reviewing relevant creditor rights, enforcement procedures, and data protection obligations. We maintain established relationships with local legal professionals across key European markets, enabling us to obtain jurisdiction-specific guidance when required. All field operations are conducted by trained personnel who understand the legal boundaries of their activities. Comprehensive documentation is maintained throughout, providing a full audit trail that demonstrates compliance and supports the creditor's position in any subsequent proceedings."
  },
  {
    id: "discretion-importance",
    question: "Why is discretion critical in professional vehicle recovery?",
    answer: "Discretion is essential to professional vehicle recovery for both operational and reputational reasons. Visible or confrontational recovery attempts can escalate situations, create safety risks, and damage the ongoing relationship between the creditor and debtor. For institutional clients such as leasing companies and banks, the manner in which recovery is conducted directly reflects on their brand and customer relationship standards. Skogsrav employs a low-profile approach that minimises public exposure and prioritises quiet resolution. This methodology not only reduces operational risk but also preserves the possibility of amicable settlement and protects the debtor's dignity, which in turn supports better long-term outcomes for all parties."
  },
  {
    id: "voluntary-handover",
    question: "What is a voluntary vehicle handover and why is it preferred?",
    answer: "A voluntary vehicle handover occurs when the debtor agrees to surrender the vehicle without the need for enforcement action, typically following structured communication that clarifies the legal position and consequences of non-compliance. This approach is preferred because it eliminates the risks and costs associated with forced recovery, including potential damage to the vehicle, confrontation, or legal disputes. Voluntary resolution also tends to preserve the debtor's credit standing and leaves open the possibility of future business relationships. Skogsrav's communication protocols are designed to encourage voluntary compliance by presenting clear, professional information about the debtor's obligations and the benefits of cooperative resolution."
  },
  {
    id: "timeline",
    question: "How long does a typical cross-border vehicle recovery take?",
    answer: "The duration of a cross-border vehicle recovery varies significantly depending on case complexity, debtor cooperation, and jurisdictional requirements. Straightforward cases where the debtor location is known and voluntary surrender is achieved can be resolved within days. More complex cases involving debtor tracing, multiple jurisdictions, or legal proceedings may extend over several weeks or months. Skogsrav provides clients with realistic timeline assessments based on the specific circumstances of each case and maintains transparent communication throughout the recovery process. Our structured methodology is designed to achieve resolution as efficiently as possible while ensuring full legal compliance at every stage."
  },
  {
    id: "success-based-pricing",
    question: "How does success-based recovery pricing work?",
    answer: "Skogsrav operates on a success-based fee model, meaning that clients are invoiced only upon successful recovery of the vehicle. This structure aligns our interests directly with those of our clients and eliminates the financial risk of engaging recovery services for cases that do not result in asset retrieval. The fee is typically calculated as a percentage of the asset value or a fixed amount agreed in advance, depending on case complexity and jurisdictional requirements. This transparent pricing approach provides cost certainty for clients and demonstrates our confidence in our methodology and operational capabilities."
  },
  {
    id: "who-can-engage",
    question: "Who can engage professional vehicle recovery services?",
    answer: "Skogsrav provides vehicle recovery services exclusively to institutional clients with legitimate legal interests in the assets being recovered. Our typical clients include vehicle leasing companies, rental fleet operators, banks and financial institutions, and corporate fleet managers. We also work with legal professionals and insolvency practitioners managing asset recovery on behalf of creditors. All engagements require proper documentation establishing the client's legal right to recover the vehicle, including the underlying financing or lease agreement and evidence of default or termination. We do not provide services to private individuals or accept cases where the legal basis for recovery is unclear or disputed."
  },
  {
    id: "skogsrav-difference",
    question: "How does Skogsrav differ from traditional debt collection or repossession companies?",
    answer: "Skogsrav distinguishes itself through a fundamentally different operational philosophy and service scope. Unlike traditional debt collection agencies that focus primarily on payment recovery through persistent contact, we specialise in the physical recovery of movable assets across European borders. Our approach emphasises legal compliance, discretion, and voluntary resolution over aggressive tactics or confrontation. We maintain in-house expertise in European transport law, cross-border enforcement, and multi-jurisdictional coordination that generalist collection agencies typically lack. Additionally, our success-based fee model and institutional client focus ensure that our interests remain aligned with sophisticated creditors who value professional execution and reputational protection above all else."
  }
];

export default function FAQ() {
  const { openContactModal } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Expert FAQ"
        title="Cross-Border"
        titleAccent="Vehicle Recovery"
        description="Authoritative answers to critical questions about European vehicle recovery operations, legal compliance, and institutional engagement."
        backgroundImage={heroImage}
        backgroundAlt="European vehicle recovery expertise"
      />

      <TrustStamps />

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="section-label mb-6">
              <span className="w-8 h-px bg-orange" />
              Knowledge Centre
            </div>
            <h2 className="heading-section text-foreground mb-6">
              Frequently Asked <span className="text-gradient-orange">Questions</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Expert guidance on legal, operational, and compliance aspects of professional vehicle recovery across Europe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={item.id}
                    className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <AccordionTrigger className="text-left font-serif text-lg font-semibold text-foreground hover:text-orange hover:no-underline py-6">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pr-8">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-navy-deep to-navy-medium rounded-2xl p-10 md:p-14 text-center shadow-lg">
              <h3 className="heading-card text-primary-foreground mb-4">
                Have a specific question about your case?
              </h3>
              <p className="body-medium text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Our specialists are available to discuss complex recovery scenarios and provide tailored guidance for institutional clients.
              </p>
              <Button
                variant="corporate"
                size="lg"
                onClick={openContactModal}
                className="shadow-orange"
              >
                Discuss Your Requirements
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schema.org FAQ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </div>
  );
}
