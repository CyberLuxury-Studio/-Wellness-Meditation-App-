"use client";

import { motion, Variants } from "framer-motion";
import { BrainCircuit, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Neural Sync",
    description:
      "Direct bi-directional interface with the core mainframe. Bypass physical input limitations.",
  },
  {
    icon: Lock,
    title: "Quantum Encryption",
    description:
      "State-level cryptographic shielding. Your data stream is unreadable to external entities.",
  },
  {
    icon: Zap,
    title: "Zero Latency",
    description:
      "Sub-millisecond response times across the global mesh network. Immediate action execution.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeaturesSection() {
  return (
    <section
      className="py-24 px-6 bg-background relative border-t border-outline-variant/10"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
            SYSTEM_CAPABILITIES
          </h2>
          <div className="w-12 h-1 bg-primary-container rounded"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-surface-container-high border border-outline-variant/20 p-8 rounded-sm hover:-translate-y-2 hover:border-primary-container/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,243,255,0.1)]"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-sm pointer-events-none"></div>
              <feature.icon className="w-10 h-10 text-primary-container mb-6" />
              <h3 className="font-headline text-xl font-semibold text-on-surface mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
