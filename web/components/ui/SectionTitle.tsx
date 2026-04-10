import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  size?: "md" | "lg";
};

export function SectionTitle({
  eyebrow,
  title,
  sub,
  align = "left",
  tone = "light",
  className,
  size = "md",
}: SectionTitleProps) {
  const isCenter = align === "center";
  const subColor = tone === "light" ? "text-arroz/70" : "text-tierra/70";
  const eyebrowColor = tone === "light" ? "text-aji" : "text-aji-deep";
  return (
    <div className={cn("flex flex-col gap-5", isCenter && "items-center text-center", className)}>
      {eyebrow && (
        <span className={cn("eyebrow flex items-center gap-3", eyebrowColor)}>
          <span className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          size === "lg" ? "display-2" : "display-3",
          "max-w-3xl text-balance",
          isCenter && "mx-auto",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p className={cn("max-w-2xl text-lg leading-relaxed text-pretty", subColor, isCenter && "mx-auto")}>
          {sub}
        </p>
      )}
    </div>
  );
}
