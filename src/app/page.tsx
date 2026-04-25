import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  const splineSceneUrl = "";

  return (
    <main className="flex flex-col min-h-screen bg-[#050505] text-white">
      <Navbar />
      <HeroSection splineUrl={splineSceneUrl} />
      
      {/* Infinite Gamified Marquee */}
      <section className="py-8 border-y-2 border-cyan-500/20 bg-black overflow-hidden relative z-20">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        <div className="flex w-[200%] animate-[marquee_15s_linear_infinite]">
            <div className="flex gap-24 items-center whitespace-nowrap min-w-full justify-around px-10">
                <span className="text-2xl font-black text-cyan-400/60 uppercase tracking-[0.3em] font-mono">🧘 NEURAL SYNC COMPLETE</span>
                <span className="text-2xl font-black text-pink-500/60 uppercase tracking-[0.3em] font-mono">🧠 COGNITIVE OVERDRIVE</span>
                <span className="text-2xl font-black text-cyan-400/60 uppercase tracking-[0.3em] font-mono">🛡️ ANTI-TILT AURA ACTIVE</span>
                <span className="text-2xl font-black text-pink-500/60 uppercase tracking-[0.3em] font-mono">⚡ APM +500 BOOST</span>
            </div>
            <div className="flex gap-24 items-center whitespace-nowrap min-w-full justify-around px-10">
                <span className="text-2xl font-black text-cyan-400/60 uppercase tracking-[0.3em] font-mono">🧘 NEURAL SYNC COMPLETE</span>
                <span className="text-2xl font-black text-pink-500/60 uppercase tracking-[0.3em] font-mono">🧠 COGNITIVE OVERDRIVE</span>
                <span className="text-2xl font-black text-cyan-400/60 uppercase tracking-[0.3em] font-mono">🛡️ ANTI-TILT AURA ACTIVE</span>
                <span className="text-2xl font-black text-pink-500/60 uppercase tracking-[0.3em] font-mono">⚡ APM +500 BOOST</span>
            </div>
        </div>
      </section>

      <FeaturesSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
