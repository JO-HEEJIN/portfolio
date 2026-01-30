import { HeroSection } from "@/components/sections/HeroSection";
import { WhyClaudeSection } from "@/components/sections/WhyClaudeSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DeepDivesSection } from "@/components/sections/DeepDivesSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyClaudeSection />
      <ProductsSection />
      <DeepDivesSection />
      <MetricsSection />
      <JourneySection />
      <ContactSection />
    </main>
  );
}
