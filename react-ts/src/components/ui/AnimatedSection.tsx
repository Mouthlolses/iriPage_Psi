import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface AnimatedSectionProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function AnimatedSection({
  children,
  className,
  ...props
}: AnimatedSectionProps) {
  return (
    <section
      className={cn(
        "py-24 lg:py-32",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}