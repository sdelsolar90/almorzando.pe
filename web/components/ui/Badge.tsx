import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "aji" | "huacatay" | "outline";
  className?: string;
};

const tones = {
  default: "bg-arroz/10 text-arroz border border-arroz/20",
  aji: "bg-aji/15 text-aji border border-aji/30",
  huacatay: "bg-huacatay/15 text-huacatay border border-huacatay/30",
  outline: "bg-transparent text-current border border-current/30",
};

export function Badge({ children, tone = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
