import { cn } from "../../lib/utils";

interface BadgeProps {
  children: string;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700",
        className
      )}
    >
      {children}
    </span>
  );
}