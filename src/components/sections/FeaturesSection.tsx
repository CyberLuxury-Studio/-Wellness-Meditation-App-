"use client";

import { motion } from "framer-motion";
import { Crosshair, Shield, Activity, Zap, Brain, Target } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8 text-pink-500" />,
    title: "Cognitive Overdrive",
    description: "Binaural beats engineered to lock you into a flow state during ranked matches.",
  },
  {
    icon: <Shield className="w-8 h-8 text-cyan-400" />,
    title: "Anti-Tilt Aura",
    description: "Guided micro-meditations designed to reset your nervous system after a bad loss.",
  },
  {
    icon: <Crosshair className="w-8 h-8 text-yellow-400" />,
    title: "Clutch Focus",
    description: "1-minute breathing exercises to steady your hands before final circle engagements.",
  },
  {
    icon: <Activity className="w-8 h-8 text-green-400" />,
    title: "APM Booster",
    description: "Warm-up routines for your mind and fingers. Increase reaction time by up to 15%.",
  },
  {
    icon: <Target className="w-8 h-8 text-purple-500" />,
    title: "Tunnel Vision",
    description: "Block out external distractions with dynamic white noise and focus frequencies.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: "Energy Regen",
    description: "Quick 5-minute cool-down sessions to restore stamina between long gaming blocks.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#050505] relative border-b-2 border-white/5" id="features">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-cyan-400 font-mono font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Equippable Perks</span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 font-mono uppercase tracking-tighter text-white">
            Mental <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Buffs</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium font-mono">
            Equip these psychological power-ups to dominate the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-8 rounded-3xl bg-black border-2 border-white/10 hover:border-cyan-500/50 transition-colors group relative overflow-hidden backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-[40px] group-hover:from-cyan-500/20 group-hover:to-pink-500/20 transition-all"></div>
              <div className="w-16 h-16 rounded-2xl bg-[#050505] border-2 border-white/20 flex items-center justify-center mb-8 group-hover:border-cyan-500/50 transition-colors shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 font-mono uppercase tracking-wide text-white">{feature.title}</h3>
              <p className="text-slate-400 font-mono text-base leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                Activate Buff <span className="material-symbols-outlined text-sm">bolt</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
