import type { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  children,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-16 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-neutral-500">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}