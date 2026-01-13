import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { AboutSection } from "@/components/AboutSection";
import { HuntersDAOSection } from "@/components/HuntersDAOSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-500">
        <ThemeToggle />
        <main>
          <Hero />
          <ExpertiseSection />
          <AboutSection />
          <HuntersDAOSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
