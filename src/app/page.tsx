import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
