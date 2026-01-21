import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedPartners } from "@/components/TrustedPartners";
import { TrustStamps } from "@/components/TrustStamps";
import { Services } from "@/components/Services";
import { EuropeanScope } from "@/components/EuropeanScope";
import { Process } from "@/components/Process";
import { WhySkogsrav } from "@/components/WhySkogsrav";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustedPartners />
        <TrustStamps />
        <Services />
        <EuropeanScope />
        <Process />
        <WhySkogsrav />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
