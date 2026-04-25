"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, Trophy } from "lucide-react";

const tiers = [
  {
    name: "Rookie",
    price: "0",
    description: "Basic mental loadout for casual players.",
    icon: <Shield className="w-6 h-6 text-slate-400" />,
    features: [
      "3 Basic Focus Buffs",
      "Anti-Tilt Quick Reset",
      "Standard White Noise",
    ],
  },
  {
    name: "Esports Pro",
    price: "15",
    description: "Advanced routines for ranked grinders.",
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    features: [
      "All Cognitive Overdrive Tracks",
      "Custom APM Warmups",
      "Live Heart-Rate Sync",
      "Detailed Performance Stats",
    ],
    popular: true,
  },
  {
    name: "Zen Master",
    price: "49",
    description: "God-mode focus for tournament champions.",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    features: [
      "Everything in Pro",
      "1-on-1 Mental Coaching",
      "Exclusive Alpha Brainwaves",
      "Team/Guild Sync",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-32 bg-[#050505] relative border-t-2 border-white/5" id="pricing">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-pink-500 font-mono font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Unlock Ranks</span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 font-mono uppercase tracking-tighter text-white">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Class</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium font-mono">
            Upgrade your mental capacity. No pay-to-win, just pure skill enhancement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: tier.popular ? 1.05 : 1.02 }}
              className={`rounded-3xl p-10 border-2 font-mono ${
                tier.popular
                  ? "bg-black border-cyan-500 relative shadow-[0_0_40px_rgba(6,182,212,0.3)] md:-translate-y-6"
                  : "bg-black/50 border-white/10 hover:border-white/30"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-cyan-400 to-blue-600 text-black text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                  Meta Pick
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl border border-white/10 ${tier.popular ? 'bg-cyan-500/20' : 'bg-white/5'}`}>
                  {tier.icon}
                </div>
                <h3 className="text-3xl font-black uppercase text-white">{tier.name}</h3>
              </div>
              
              <p className="text-slate-400 text-sm mb-8 min-h-[40px] font-medium">{tier.description}</p>
              
              <div className="mb-10">
                <span className="text-6xl font-black text-white">${tier.price}</span>
                <span className="text-slate-500 font-bold text-xl">/mo</span>
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${tier.popular ? "text-cyan-400" : "text-slate-500"}`} />
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button 
                whileTap={{ scale: 0.95 }}
                className={`w-full py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm transition-all border-2 ${
                tier.popular
                  ? "bg-cyan-500 text-black border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                  : "bg-transparent text-white border-white/20 hover:bg-white/10"
              }`}>
                Equip Loadout
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
