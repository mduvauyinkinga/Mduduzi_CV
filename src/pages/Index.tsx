import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
        <p>© {new Date().getFullYear()} Mduduzi Destiny Nwobodo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
