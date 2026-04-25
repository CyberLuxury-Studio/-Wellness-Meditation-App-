"use client";

import { motion } from "framer-motion";
import HeroSplineScene from "@/components/spline/HeroSplineScene";
import WaitlistInput from "@/components/ui/WaitlistInput";

interface HeroSectionProps {
  splineUrl?: string;
}

export default function HeroSection({ splineUrl }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-black">
      {/* Gamified Background Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none"></div>

      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/4 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-pink-500/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-col items-start gap-6 mt-10"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border-2 border-cyan-400/50 bg-black/50 backdrop-blur-md cursor-pointer"
          >
            <span className="w-3 h-3 rounded-sm bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></span>
            <span className="font-mono text-xs font-black text-cyan-400 tracking-[0.2em] uppercase">
              ZEN_PROTOCOL v2.4
            </span>
          </motion.div>

          <h1 className="font-mono text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            HACK YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 drop-shadow-none">
              BRAINWAVES
            </span>
          </h1>

          <p className="font-mono text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
            Activate Zen Mode. Reduce mental latency, eliminate tilt, and boost your APM with scientifically-tuned cognitive buffs.
          </p>

          <div className="flex gap-4 mt-4 w-full max-w-md">
            <motion.button 
               whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.6)" }}
               whileTap={{ scale: 0.95 }}
               className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black font-mono text-lg uppercase tracking-widest rounded-xl border-2 border-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
               Enter Flow State
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Visual (Gamified Breathing Orb) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center w-full"
        >
          {splineUrl ? (
            <HeroSplineScene sceneUrl={splineUrl} />
          ) : (
             <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div 
                   animate={{ 
                     scale: [1, 1.5, 1],
                     opacity: [0.5, 1, 0.5],
                     boxShadow: [
                       "0 0 50px rgba(6,182,212,0.2)", 
                       "0 0 150px rgba(236,72,153,0.6)", 
                       "0 0 50px rgba(6,182,212,0.2)"
                     ]
                   }}
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                   className="w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-500 to-pink-500 blur-sm relative z-10 flex items-center justify-center border-4 border-white/20"
                >
                   <div className="absolute inset-0 rounded-full bg-black/20 backdrop-blur-md"></div>
                   <span className="font-mono text-white font-black tracking-[0.3em] uppercase relative z-20">Breathe</span>
                </motion.div>
                
                <div className="absolute top-10 right-10 border-2 border-cyan-500/30 bg-black/60 backdrop-blur-md p-4 rounded-xl font-mono text-xs">
                   <div className="text-cyan-400 font-bold uppercase mb-2">Mental Stats</div>
                   <div className="flex justify-between gap-8 mb-1"><span className="text-slate-400">Focus:</span><span className="text-white font-black">98%</span></div>
                   <div className="flex justify-between gap-8"><span className="text-slate-400">Stress:</span><span className="text-green-400 font-black text-shadow-glow">LOW</span></div>
                </div>
             </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
