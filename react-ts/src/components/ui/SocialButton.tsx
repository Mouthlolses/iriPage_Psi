import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SocialButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
  children: ReactNode;
}

export default function SocialButton({
  icon,
  children,
  className,
  ...props
}: SocialButtonProps) {
  return (
    <a
      className={cn(
        "flex items-center gap-3 rounded-full border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}