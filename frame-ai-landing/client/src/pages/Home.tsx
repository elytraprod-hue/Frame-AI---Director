import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ToolsSection from "@/components/ToolsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Design: Landing page cinematográfica com seções bem definidas
 * Estrutura: Nav > Hero > Tools > Pricing > Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <ToolsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
