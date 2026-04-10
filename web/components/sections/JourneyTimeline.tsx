"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  Bell,
  ClipboardList,
  Coffee,
  Flame,
  MousePointerClick,
  Package,
  Recycle,
  Smile,
  Sunrise,
  Truck,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import type { JourneyIcon, JourneyStep } from "@/content/journey";

const iconMap: Record<JourneyIcon, LucideIcon> = {
  Sunrise,
  Coffee,
  Flame,
  Bell,
  MousePointerClick,
  ClipboardList,
  Package,
  Truck,
  Utensils,
  Smile,
  Recycle,
};

type JourneyTimelineProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  steps: JourneyStep[];
};

export function JourneyTimeline({
  eyebrow,
  title,
  sub,
  steps,
}: JourneyTimelineProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 40%"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0.6],
  );

  return (
    <section className="relative overflow-hidden bg-tierra py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,160,32,0.10),_transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aji/30 to-transparent"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="eyebrow inline-flex items-center gap-3 text-aji">
              <span className="h-px w-10 bg-aji" />
              {eyebrow}
              <span className="h-px w-10 bg-aji" />
            </span>
          )}
          <h2 className="display-2 mt-5 text-balance text-arroz">{title}</h2>
          {sub && (
            <p className="mt-6 text-pretty text-lg leading-relaxed text-arroz/70">
              {sub}
            </p>
          )}
        </div>

        <div className="mt-16 hidden grid-cols-[1fr_auto_1fr] gap-8 lg:grid">
          <LaneLabel label="Tu equipo" tone="arroz" align="right" />
          <div className="w-20" />
          <LaneLabel label="Nuestra cocina" tone="aji" align="left" />
        </div>

        <div ref={trackRef} className="relative mt-12 lg:mt-14">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-8 w-px bg-arroz/10 lg:left-1/2 lg:-translate-x-1/2"
          />
          <motion.div
            aria-hidden
            style={{ height: progressHeight, opacity: progressOpacity }}
            className="absolute top-0 left-8 w-px bg-gradient-to-b from-aji via-aji/80 to-aji/20 lg:left-1/2 lg:-translate-x-1/2"
          />

          <ul className="relative space-y-12 lg:space-y-20">
            {steps.map((step, i) => (
              <JourneyRow
                key={`${step.time}-${i}`}
                step={step}
                scrollYProgress={scrollYProgress}
                position={i / Math.max(steps.length - 1, 1)}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function LaneLabel({
  label,
  tone,
  align,
}: {
  label: string;
  tone: "arroz" | "aji";
  align: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-arroz/60",
        align === "right" ? "justify-end" : "justify-start",
      )}
    >
      {align === "right" && (
        <span className="h-px w-10 bg-arroz/20" aria-hidden />
      )}
      <span
        aria-hidden
        className={cn(
          "inline-block h-2 w-2 rounded-full",
          tone === "aji" ? "bg-aji shadow-[0_0_12px_rgba(232,160,32,0.6)]" : "bg-arroz",
        )}
      />
      <span>{label}</span>
      {align === "left" && (
        <span className="h-px w-10 bg-arroz/20" aria-hidden />
      )}
    </div>
  );
}

function JourneyRow({
  step,
  scrollYProgress,
  position,
}: {
  step: JourneyStep;
  scrollYProgress: MotionValue<number>;
  position: number;
}) {
  const Icon = iconMap[step.icon];
  const isKitchen = step.side === "kitchen";

  const markerOpacity = useTransform(
    scrollYProgress,
    [position - 0.08, position, 1],
    [0.35, 1, 1],
  );
  const markerScale = useTransform(
    scrollYProgress,
    [position - 0.08, position, 1],
    [0.9, 1, 1],
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="flex items-start gap-5 lg:hidden">
        <Marker
          Icon={Icon}
          accent={isKitchen}
          style={{ opacity: markerOpacity, scale: markerScale }}
        />
        <StepCard step={step} align="left" />
      </div>

      <div className="relative hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
        <div className="flex justify-end pr-10">
          {!isKitchen && <StepCard step={step} align="right" />}
        </div>
        <div className="flex items-center justify-center">
          <Marker
            Icon={Icon}
            accent={isKitchen}
            large
            style={{ opacity: markerOpacity, scale: markerScale }}
          />
        </div>
        <div className="pl-10">
          {isKitchen && <StepCard step={step} align="left" />}
        </div>
      </div>
    </motion.li>
  );
}

function Marker({
  Icon,
  accent,
  large,
  style,
}: {
  Icon: LucideIcon;
  accent: boolean;
  large?: boolean;
  style?: { opacity: MotionValue<number>; scale: MotionValue<number> };
}) {
  return (
    <motion.div
      style={style}
      className={cn(
        "relative z-10 flex flex-none items-center justify-center rounded-full border backdrop-blur",
        large ? "h-20 w-20" : "h-16 w-16",
        accent
          ? "border-aji/60 bg-tierra-90 text-aji shadow-[0_0_40px_rgba(232,160,32,0.22)]"
          : "border-arroz/25 bg-tierra-90 text-arroz shadow-[0_0_30px_rgba(245,240,224,0.08)]",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-full",
          accent ? "ring-1 ring-aji/30" : "ring-1 ring-arroz/10",
        )}
      />
      <Icon size={large ? 28 : 22} strokeWidth={1.5} />
    </motion.div>
  );
}

function StepCard({
  step,
  align,
}: {
  step: JourneyStep;
  align: "left" | "right";
}) {
  const isKitchen = step.side === "kitchen";
  return (
    <div
      className={cn(
        "group max-w-sm",
        align === "right" && "lg:text-right",
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]",
          isKitchen ? "text-aji" : "text-arroz/55",
        )}
      >
        {align === "right" && (
          <>
            <span className="tabular-nums">{step.time}</span>
            <span className="h-px w-6 bg-current opacity-60" />
            <span>{isKitchen ? "Cocina" : "Tu equipo"}</span>
          </>
        )}
        {align === "left" && (
          <>
            <span>{isKitchen ? "Cocina" : "Tu equipo"}</span>
            <span className="h-px w-6 bg-current opacity-60" />
            <span className="tabular-nums">{step.time}</span>
          </>
        )}
      </div>
      <h3 className="mt-3 font-display text-2xl leading-tight text-arroz lg:text-[28px]">
        {step.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-arroz/70">
        {step.body}
      </p>
    </div>
  );
}
