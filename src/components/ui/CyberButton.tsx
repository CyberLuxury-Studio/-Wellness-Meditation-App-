"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface CyberButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "secondary";
  fullWidth?: boolean;
}

export default function CyberButton({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: CyberButtonProps) {

  const baseClasses = "relative font-headline tracking-widest text-sm uppercase rounded-sm transition-all active:scale-95 flex items-center justify-center whitespace-nowrap overflow-hidden";
  const widthClass = fullWidth ? "w-full" : "w-auto";

  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold px-8 py-4 shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_25px_rgba(0,243,255,0.4)]";
  } else if (variant === "secondary") {
    variantClasses = "bg-gradient-to-r from-purple-600 to-primary-container text-background font-bold shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] px-6 py-3";
  } else if (variant === "ghost") {
    variantClasses = "bg-surface-container-low text-primary-container border border-outline-variant/30 hover:border-primary-container hover:bg-primary-container/10 px-6 py-3";
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${widthClass} ${variantClasses} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
