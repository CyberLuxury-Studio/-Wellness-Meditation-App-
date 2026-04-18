import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-[#0e0e10] border-t border-cyan-900/20 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-cyan-400 font-bold font-headline text-lg tracking-tighter">
        NEXUS//CORE
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {["PROTOCOL", "ENCRYPTION", "LOGS", "SYSTEM STATUS"].map((item) => (
          <Link
            key={item}
            href="#"
            className="font-label text-[12px] tracking-widest uppercase text-slate-500 hover:text-pink-500 hover:underline decoration-purple-500 underline-offset-4 transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="font-label text-[12px] tracking-widest uppercase text-slate-500">
        © {new Date().getFullYear()} NEXUS//CORE. OPERATIVE ACCESS ONLY.
      </div>
    </footer>
  );
}
