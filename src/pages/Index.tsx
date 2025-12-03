import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StorySection />
      <HighlightsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
