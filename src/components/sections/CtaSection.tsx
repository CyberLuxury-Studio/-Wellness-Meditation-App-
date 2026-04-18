"use client";

import { motion } from "framer-motion";
import WaitlistInput from "@/components/ui/WaitlistInput";

export default function CtaSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-background border-t border-outline-variant/10">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Radial Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-[-0.02em] text-primary mb-6">
            READY TO UPLOAD?
          </h2>
          <p className="font-body text-lg text-on-surface-variant mb-10">
            The next era of human consciousness is here. Secure your position in the stealth beta before access is permanently restricted.
          </p>

          <div className="max-w-xl mx-auto">
             <WaitlistInput buttonText="UPLOAD" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
