import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import CtaSection from "@/components/sections/CtaSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";



export default function Home() {
  // Replace this with the actual Spline URL when provided by the user.
  // Example: "https://prod.spline.design/your-scene-id/scene.splinecode"
  const splineSceneUrl = "";

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection splineUrl={splineSceneUrl} />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
