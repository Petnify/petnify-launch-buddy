import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EmailSignup from "@/components/EmailSignup";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <EmailSignup />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
