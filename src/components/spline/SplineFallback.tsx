import { Network } from "lucide-react";

export default function SplineFallback() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 rounded-full border border-primary-container/30 border-dashed animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute inset-4 rounded-full border border-on-tertiary-container/40 border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-primary-container/20 to-tertiary-container/10 backdrop-blur-md border border-primary-container/50 shadow-[0_0_40px_rgba(0,243,255,0.3)] flex items-center justify-center">
          <Network className="w-16 h-16 text-primary-container opacity-80 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
