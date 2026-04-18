"use client";

import { motion } from "framer-motion";
import { Network } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-surface-container-lowest">
      {/* Abstract Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-secondary-container/10 border border-secondary-container/20">
            <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_8px_rgba(255,82,92,0.8)] animate-pulse"></span>
            <span className="font-label text-xs font-semibold text-secondary-container tracking-widest uppercase">
              [ STEALTH_BETA_V1.0 ]
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-[-0.02em] leading-[1.1] text-primary">
            ENTER THE <br className="hidden md:block" /> NEXT ERA.
          </h1>

          <p className="font-body text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Initiate full neural sync. Upload your consciousness to the secure
            decentralized network. Zero latency, infinite potential.
          </p>

          {/* Terminal Input */}
          <div className="w-full max-w-md mt-4 relative group">
            <div className="absolute inset-0 bg-primary-container/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <form className="flex relative z-10" onSubmit={(e) => e.preventDefault()}>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-headline text-primary-container opacity-50">
                &gt;_
              </span>
              <input
                className="w-full bg-surface-container-low border-b border-outline-variant/30 text-on-surface font-label text-sm px-10 py-4 focus:outline-none focus:border-primary-container focus:bg-primary-container/5 transition-all rounded-t-sm"
                placeholder="ENTER_OPERATIVE_EMAIL"
                required
                type="email"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface text-primary-container border border-outline-variant/30 px-4 py-2 text-xs font-headline tracking-widest hover:border-primary-container hover:bg-primary-container/10 hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all rounded-sm active:scale-95"
                type="submit"
              >
                EXECUTE
              </button>
            </form>
          </div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center"
        >
          {/* CSS Orb/Holo representation */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border border-primary-container/30 border-dashed animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-on-tertiary-container/40 border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-primary-container/20 to-tertiary-container/10 backdrop-blur-md border border-primary-container/50 shadow-[0_0_40px_rgba(0,243,255,0.3)] flex items-center justify-center">
              <Network className="w-16 h-16 text-primary-container opacity-80" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
