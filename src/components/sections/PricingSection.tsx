"use client";

import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Hacker",
    price: "$0",
    description: "Standard access to the decentralized mesh.",
    features: ["1TB Encrypted Storage", "Basic Neural Sync", "Community Support"],
    highlighted: false,
  },
  {
    name: "Cyber",
    price: "$49",
    description: "Unrestricted bandwidth and priority processing.",
    features: ["Unlimited Storage", "Zero Latency Routing", "Dedicated Operative Node", "Priority Access"],
    highlighted: true,
  },
  {
    name: "God-Mode",
    price: "Custom",
    description: "Full architectural control of your sub-net.",
    features: ["Custom Mainframe Hardware", "Quantum Shielding", "24/7 Elite Support", "Root Access"],
    highlighted: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function PricingSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0c] relative" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
            ACCESS_TIERS
          </h2>
          <div className="w-12 h-1 bg-primary-container rounded mx-auto"></div>
          <p className="mt-4 text-on-surface-variant font-body">
            Select your clearance level.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={`relative group rounded-sm p-8 transition-all duration-300 ${
                tier.highlighted
                  ? "bg-surface-container-high scale-105 shadow-[0_0_40px_rgba(189,0,255,0.15)] z-10"
                  : "bg-surface border border-outline-variant/20 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,243,255,0.05)]"
              }`}
            >
              {/* Highlight Border */}
              {tier.highlighted && (
                <div className="absolute inset-0 rounded-sm p-[1px] bg-gradient-to-b from-primary-container via-purple-500 to-transparent pointer-events-none -z-10">
                  <div className="absolute inset-0 bg-surface-container-high rounded-sm h-full w-full"></div>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="font-headline text-2xl font-semibold text-on-surface mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-headline text-4xl font-bold text-primary">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-on-surface-variant text-sm">/mo</span>
                  )}
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-8 border-b border-outline-variant/20 pb-8">
                  {tier.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-on-surface">
                      <Check className={`w-5 h-5 shrink-0 ${tier.highlighted ? 'text-purple-400' : 'text-primary-container'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-sm font-headline tracking-widest text-sm transition-all active:scale-95 ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-purple-600 to-primary-container text-background font-bold shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]"
                      : "bg-surface-container-low text-primary-container border border-outline-variant/30 hover:border-primary-container hover:bg-primary-container/10"
                  }`}
                >
                  {tier.highlighted ? "INITIALIZE" : "SELECT_PLAN"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
