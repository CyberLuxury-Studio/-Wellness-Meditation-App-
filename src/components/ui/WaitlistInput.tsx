"use client";

import { useState } from "react";

interface WaitlistInputProps {
  buttonText?: string;
  placeholder?: string;
  onSubmitAction?: (email: string) => void;
}

export default function WaitlistInput({
  buttonText = "EXECUTE",
  placeholder = "ENTER_OPERATIVE_EMAIL",
  onSubmitAction
}: WaitlistInputProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Mock API call based on the architecture plan
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!response.ok) throw new Error("Network error");

      setStatus("success");
      setEmail("");
      if (onSubmitAction) onSubmitAction(email);

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="w-full relative group">
      <div className="absolute inset-0 bg-primary-container/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <form className="flex relative z-10 w-full flex-col sm:flex-row" onSubmit={handleSubmit}>
        <div className="relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-headline text-primary-container opacity-50">
            &gt;_
          </span>
          <input
            className="w-full bg-surface-container-low border-b border-outline-variant/30 text-on-surface font-label text-sm sm:text-base px-10 py-4 focus:outline-none focus:border-primary-container focus:bg-primary-container/5 transition-all rounded-t-sm sm:rounded-l-sm sm:rounded-tr-none disabled:opacity-50"
            placeholder={status === "success" ? "ACCESS_GRANTED" : placeholder}
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
          />
        </div>

        <button
          className={`w-full sm:w-auto mt-2 sm:mt-0 whitespace-nowrap bg-surface text-primary-container border border-outline-variant/30 px-6 py-4 sm:py-2 text-xs sm:text-sm font-headline tracking-widest hover:border-primary-container hover:bg-primary-container/10 hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all rounded-b-sm sm:rounded-r-sm sm:rounded-bl-none active:scale-95 disabled:pointer-events-none ${
             status === "loading" ? "animate-pulse" : ""
          } ${
            status === "success" ? "border-primary-container bg-primary-container/20 text-primary shadow-[0_0_15px_rgba(0,243,255,0.4)]" : ""
          }`}
          type="submit"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "PROCESSING..." : status === "success" ? "VERIFIED" : buttonText}
        </button>
      </form>
    </div>
  );
}
