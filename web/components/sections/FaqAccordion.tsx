"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Faq } from "@/content/faqs";

type FaqAccordionProps = {
  items: Faq[];
  tone?: "light" | "dark";
};

export function FaqAccordion({ items, tone = "light" }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const borderColor = tone === "light" ? "border-arroz/15" : "border-tierra/15";
  const textColor = tone === "light" ? "text-arroz" : "text-tierra";
  const bodyColor = tone === "light" ? "text-arroz/70" : "text-tierra/70";

  return (
    <div className="flex flex-col">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q} className={cn("border-t", borderColor, idx === items.length - 1 && "border-b")}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className={cn("font-display text-xl leading-snug lg:text-2xl", textColor)}>
                {item.q}
              </span>
              <span
                className={cn(
                  "mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border transition",
                  tone === "light" ? "border-arroz/30 text-arroz" : "border-tierra/30 text-tierra",
                  isOpen && "rotate-45 border-aji text-aji",
                )}
                aria-hidden
              >
                <Plus size={16} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={cn("max-w-2xl pb-6 text-[15px] leading-relaxed", bodyColor)}>
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
