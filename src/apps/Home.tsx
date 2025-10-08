import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { DemoSection } from "../components/DemoSection";
import { AdvantagesSection } from "../components/AdvantagesSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProcessSection } from "../components/ProcessSection";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <DemoSection />
      <AdvantagesSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
