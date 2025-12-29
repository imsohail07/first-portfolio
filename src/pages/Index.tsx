import HeroSection from "@/components/portfolio/HeroSection";
import CertificatesSection from "@/components/portfolio/CertificatesSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ReferencesSection from "@/components/portfolio/ReferencesSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CertificatesSection />
      <ProjectsSection />
      <ReferencesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
