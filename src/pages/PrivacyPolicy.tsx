import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export const privacyPolicySEO = {
  title: "Privacy Policy | Skogsräv",
  description: "Privacy Policy for Skogsräv asset recovery services. Learn how we collect, process, store and protect your personal data in accordance with GDPR.",
  canonical: "/privacy-policy",
  keywords: "privacy policy, GDPR, data protection, personal data, Skogsräv",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" }
  ]
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="heading-page text-foreground mb-8">Privacy Policy</h1>
            
            <p className="text-muted-foreground text-sm mb-12">
              Last updated: January 2025
            </p>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Data Controller</h2>
              <p className="text-foreground/80 leading-relaxed">
                The controller of personal data processing is SIA "Skogsrav", Registration No. 42103071315, 
                legal address: Eduarda Veidenbauma iela 4A-3, Liepāja, LV-3401, Latvia, 
                phone: <a href="tel:+37126167827" className="text-orange hover:underline">+371 26167827</a>, 
                email: <a href="mailto:info@skogsrav.lv" className="text-orange hover:underline">info@skogsrav.lv</a> (hereinafter – "Skogsrav").
              </p>
              <p className="text-foreground/80 leading-relaxed mt-2">
                Website: <a href="https://www.skogsrav.lv" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">www.skogsrav.lv</a>
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Data Processor</h2>
              <p className="text-foreground/80 leading-relaxed">
                The data processor is SIA "Skogsrav", Registration No. 42103071315, acting in accordance with 
                the instructions of Skogsrav and applying appropriate technical and organisational data protection measures.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Personal data are processed only to the extent permitted and required by the laws of the Republic of Latvia 
                and the European Union.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Personal data may also be processed by other authorised data processors engaged by Skogsrav.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Applicable Legislation</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Personal data processing is carried out in accordance with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Regulation (EU) 2016/679 of the European Parliament and of the Council (General Data Protection Regulation – GDPR);</li>
                <li>The Personal Data Processing Law of the Republic of Latvia.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. What is this Privacy Policy?</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>4.1.</strong> This Privacy Policy (hereinafter – the "Policy") explains how Skogsrav collects, 
                processes, stores, transfers, deletes and protects personal data, ensuring lawful and fair data processing.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>4.2.</strong> Any updates to this Policy will be published on the Skogsrav website under the section "Privacy Policy".
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. What are Personal Data?</h2>
              <p className="text-foreground/80 leading-relaxed">
                Personal data means any information relating to an identified or identifiable natural person ("data subject"), 
                including but not limited to name, identification number, location data, online identifiers or other factors 
                specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that person.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Sources of Personal Data</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Skogsrav may obtain personal data from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Data subjects;</li>
                <li>Creditors of data subjects;</li>
                <li>Representatives of data subjects;</li>
                <li>Guarantors of obligations;</li>
                <li>Persons related to the data subject;</li>
                <li>Law enforcement authorities, insolvency administrators, sworn bailiffs, notaries;</li>
                <li>Official publications, including VSIA "Latvijas Vēstnesis".</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Legal Basis and Purpose of Processing</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">7.1. Legal basis:</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Consent of the data subject;</li>
                <li>Performance or conclusion of a contract;</li>
                <li>Compliance with legal obligations;</li>
                <li>Legitimate interests of Skogsrav.</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">7.2. Purpose of processing:</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Identification of the data subject;</li>
                <li>Out-of-court debt recovery;</li>
                <li>Judicial debt recovery;</li>
                <li>Assignment of claims (cession);</li>
                <li>Communication with the data subject;</li>
                <li>Case and document management;</li>
                <li>Payment administration;</li>
                <li>Complaint handling;</li>
                <li>Evidence obtained during recovery procedures;</li>
                <li>Reporting to credit information bureaus;</li>
                <li>Fulfilment of legal obligations;</li>
                <li>Creation of debt history databases;</li>
                <li>Monitoring of public registers;</li>
                <li>Ensuring service quality;</li>
                <li>Cooperation with partners related to debt recovery;</li>
                <li>Prevention of money laundering and terrorist financing;</li>
                <li>Fulfilment of requests from law enforcement authorities.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Explanation of Data Processing</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If a data subject fails to fulfil contractual obligations to a credit institution, Skogsrav may be 
                engaged to recover the debt and lawfully receive the relevant personal data.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Personal data may also be acquired through assignment of claims.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Processing is conducted only when legally justified and in line with Skogsrav's legitimate interests, 
                even if consent is not provided, where permitted by law.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Transfer of Personal Data</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Skogsrav may transfer personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>To ensure its legitimate interests;</li>
                <li>For service provision (printing, postal services, legal representation, etc.);</li>
                <li>In cooperation with credit information bureaus.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Data Retention Period</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Personal data are stored as long as at least one of the following applies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>There is a legal obligation to retain the data;</li>
                <li>The data subject's consent remains valid;</li>
                <li>Legitimate interests of Skogsrav or the data subject may be exercised or defended.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Rights of the Data Subject</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The data subject has the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Access personal data;</li>
                <li>Rectify inaccurate data;</li>
                <li>Request erasure ("right to be forgotten");</li>
                <li>Restrict processing;</li>
                <li>Data portability;</li>
                <li>Object to processing based on personal circumstances.</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Complaints</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>12.1.</strong> If you have concerns regarding personal data processing, please contact us at{" "}
                <a href="mailto:info@skogsrav.lv" className="text-orange hover:underline">info@skogsrav.lv</a>.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If the response is unsatisfactory, you may submit a complaint to the Data State Inspectorate of Latvia.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                More information:{" "}
                <a 
                  href="http://www.dvi.gov.lv/lv/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange hover:underline"
                >
                  www.dvi.gov.lv
                </a>
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>12.2.</strong> Information regarding complaint handling procedures is available upon request.
              </p>
            </section>

          </motion.article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
