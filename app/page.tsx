import { CardsSection } from "./components/CardsSection";
import { FinalSection } from "./components/FinalSection";
import Footer from "./components/Footer";
import { FoundationSection } from "./components/FoundationSection";
import { HeroSection } from "./components/HeroSection";
import { InsightsSection } from "./components/InsightsSection";
import { QuoteSection } from "./components/QuotesSection";

export default function Home() {
  return (
    <div className="relative text-[#8D1A1B]">
      <HeroSection />
      <CardsSection />
      <QuoteSection />
      <FoundationSection />
      <InsightsSection />
      <FinalSection />
      <Footer />
    </div>
  );
}
