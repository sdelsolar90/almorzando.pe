import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function Logo({ className, tone = "light" }: LogoProps) {
  const fg = tone === "light" ? "text-arroz" : "text-tierra";
  return (
    <div className={cn("flex items-baseline gap-[2px] font-display text-2xl leading-none", fg, className)}>
      <span className="font-medium tracking-[-0.03em]">almorzando</span>
      <span className="text-aji font-medium tracking-[-0.02em]">.pe</span>
    </div>
  );
}
