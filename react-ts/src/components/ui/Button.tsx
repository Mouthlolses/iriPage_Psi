import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-emerald-700 text-white hover:bg-emerald-800",

    secondary:
       "bg-stone-700 text-white hover:bg-stone-900",

    outline:
      "border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}