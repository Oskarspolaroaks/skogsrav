import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { TrustStamps } from "@/components/TrustStamps";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, MapPin, ArrowRight } from "lucide-react";

export interface CountryPageData {
  country: string;
  heroLabel: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroDescription: string;
  heroImage: string;
  heroAlt: string;
  legalIntro: string;
  legalPoints: { title: string; description: string }[];
  process: { number: string; title: string; description: string }[];
  coverageIntro: string;
  cities: string[];
  reasons: { title: string; description: string }[];
  faq: { id: string; question: string; answer: string }[];
}

export function CountryPage({ data }: { data: CountryPageData }) {
  const { openContactModal } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          label={data.heroLabel}
          title={data.heroTitle}
          titleAccent={data.heroTitleAccent}
          description={data.heroDescription}
          backgroundImage={data.heroImage}
          backgroundAlt={data.heroAlt}
        />

        <section className="bg-navy-deep py-10">
          <div className="container mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="body-medium text-white/80 max-w-2xl">
              Instruct a case in {data.country} and receive a structured assessment before any operational step is taken.
            </p>
            <Button variant="corporate" size="lg" onClick={openContactModal} className="shadow-orange shrink-0">
              Start a Case
            </Button>
          </div>
        </section>

        <TrustStamps />

        {/* Legal framework */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="section-label mb-6">
                <span className="w-8 h-px bg-orange" />
                Legal Framework
              </div>
              <h2 className="heading-section text-foreground mb-6">
                How repossession works in <span className="text-gradient-orange">{data.country}</span>
              </h2>
              <p className="body-large text-muted-foreground">{data.legalIntro}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {data.legalPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="heading-card text-foreground mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 lg:py-32 bg-navy-deep">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="section-label mb-4">
                <span className="w-12 h-0.5 bg-orange" />
                Our Process
              </span>
              <h2 className="heading-section text-white mb-6">
                From instruction to handover in {data.country}
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
              {data.process.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-20 h-20 mb-6 rounded-full border-2 border-orange/30 bg-navy-medium flex items-center justify-center group-hover:border-orange transition-all duration-300">
                    <span className="font-serif text-2xl font-bold text-orange">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="section-label mb-6">
                <span className="w-8 h-px bg-orange" />
                Coverage
              </div>
              <h2 className="heading-section text-foreground mb-6">
                Operational coverage across <span className="text-gradient-orange">{data.country}</span>
              </h2>
              <p className="body-large text-muted-foreground">{data.coverageIntro}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.cities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-orange shrink-0" />
                  <span className="font-semibold text-foreground text-sm">{city}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="section-label mb-6">
                <span className="w-8 h-px bg-orange" />
                Why Skogsräv
              </div>
              <h2 className="heading-section text-foreground">
                Why leasing companies choose Skogsräv in {data.country}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {data.reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-orange shrink-0 mt-1" />
                  <div>
                    <h3 className="heading-card text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <div className="section-label mb-6 justify-center">
                <span className="w-8 h-px bg-orange" />
                {data.country} FAQ
              </div>
              <h2 className="heading-section text-foreground">
                Questions about repossession in <span className="text-gradient-orange">{data.country}</span>
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              {data.faq.map((item) => (
                <AccordionItem
                  key={item.id}
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
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 lg:pb-32 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="bg-gradient-to-br from-navy-deep to-navy-medium rounded-2xl p-10 md:p-14 text-center shadow-lg">
              <h2 className="heading-card text-primary-foreground mb-4">
                Instruct a case in {data.country}
              </h2>
              <p className="body-medium text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Send us the contract details and vehicle information. You receive an assessment and a fixed, success-based fee before any action is taken.
              </p>
              <Button variant="corporate" size="lg" asChild className="shadow-orange">
                <Link to="/contact">
                  Contact Skogsräv
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
