"use client";

import { motion } from "framer-motion";

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

          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative w-full">
               <span className="absolute left-4 top-1/2 -translate-y-1/2 font-headline text-primary-container opacity-50">
                &gt;_
              </span>
              <input
                className="w-full bg-surface-container-low border-b border-outline-variant/30 text-on-surface font-label px-10 py-4 focus:outline-none focus:border-primary-container focus:bg-primary-container/5 transition-all rounded-sm"
                placeholder="ENTER_OPERATIVE_EMAIL"
                required
                type="email"
              />
            </div>
            <button
              className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-headline font-bold px-8 py-4 rounded-sm shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] transition-all active:scale-95 uppercase tracking-widest whitespace-nowrap"
              type="submit"
            >
              EXECUTE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
