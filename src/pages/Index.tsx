import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import Certificates from "@/components/Certificates";
import LogisticsTimeline from "@/components/LogisticsTimeline";
import Testimonials from "@/components/Testimonials";
import FooterCTA from "@/components/FooterCTA";
import FloatingCTA from "@/components/FloatingCTA";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <Certificates />
      <LogisticsTimeline />
      <Testimonials />
      <FooterCTA />
      <FloatingCTA />
      <WhatsAppCTA />
    </div>
  );
};

export default Index;
