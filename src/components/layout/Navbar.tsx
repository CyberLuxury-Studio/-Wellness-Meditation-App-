import { Shield } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131315]/70 backdrop-blur-[30px] border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary-container" />
          <span className="font-headline text-xl font-bold tracking-tighter text-cyan-400">
            NEXUS//CORE
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="font-label text-sm text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 px-3 py-1 rounded"
            href="#features"
          >
            FEATURES
          </Link>
          <Link
            className="font-label text-sm text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 px-3 py-1 rounded"
            href="#pricing"
          >
            PRICING
          </Link>
          <Link
            className="font-label text-sm text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 px-3 py-1 rounded"
            href="#faq"
          >
            FAQ
          </Link>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-label text-sm font-semibold px-6 py-2 rounded shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] transition-all active:scale-95 uppercase tracking-widest">
          JOIN BETA
        </button>
      </div>
    </nav>
  );
}
