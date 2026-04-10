"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, RotateCcw, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/cn";
import {
  entradas,
  segundos,
  postres,
  bebidas,
  courseMeta,
  courseCategories,
  type MenuItem,
  type Course,
} from "@/content/menus";
import { formats, type Format } from "@/content/formats";

type Selection = Partial<Record<Course, string>>;

const itemsByCourse: Record<Course, MenuItem[]> = {
  entrada: entradas,
  segundo: segundos,
  postre: postres,
  bebida: bebidas,
};

const defaultFilters: Record<Course, string> = {
  entrada: courseCategories.entrada[0],
  segundo: courseCategories.segundo[0],
  postre: courseCategories.postre[0],
  bebida: courseCategories.bebida[0],
};

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 56 : -56,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -56 : 56,
    opacity: 0,
  }),
};

export function MenuGrid() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [format, setFormat] = useState<Format | null>(null);
  const [selected, setSelected] = useState<Selection>({});
  const [filters, setFilters] = useState<Record<Course, string>>(defaultFilters);

  const activeCourses = format?.courses ?? [];
  const totalSteps = 1 + activeCourses.length;
  const atFormat = step === 0;
  const atSummary = !atFormat && step === totalSteps;
  const currentCourse: Course | null =
    atFormat || atSummary ? null : activeCourses[step - 1];

  const pick = (course: Course, id: string) =>
    setSelected((s) => ({ ...s, [course]: id }));

  const chooseFormat = (f: Format) => {
    setFormat(f);
    const keep: Selection = {};
    for (const c of f.courses) {
      if (selected[c]) keep[c] = selected[c];
    }
    setSelected(keep);
    setDirection(1);
    setStep(1);
  };

  const goTo = (targetStep: number) => {
    if (targetStep === step) return;
    if (!format && targetStep > 0) return;
    if (targetStep > step && !atFormat) {
      const previous = activeCourses.slice(0, targetStep - 1);
      const missing = previous.find((c) => !selected[c]);
      if (missing) return;
    }
    setDirection(targetStep > step ? 1 : -1);
    setStep(targetStep);
  };

  const goNext = () => goTo(step + 1);
  const goBack = () => goTo(step - 1);

  const changeFormat = () => {
    setDirection(-1);
    setStep(0);
  };

  const restart = () => {
    setDirection(-1);
    setStep(0);
    setFormat(null);
    setSelected({});
    setFilters(defaultFilters);
  };

  const filteredItems = useMemo(() => {
    if (!currentCourse) return [] as MenuItem[];
    const list = itemsByCourse[currentCourse];
    const active = filters[currentCourse];
    const firstCat = courseCategories[currentCourse][0];
    if (active === firstCat) return list;
    return list.filter((item) => item.category === active);
  }, [currentCourse, filters]);

  const canAdvance = atFormat
    ? !!format
    : currentCourse
      ? !!selected[currentCourse]
      : true;
  const isLastPick = !atFormat && !atSummary && step === activeCourses.length;

  return (
    <section className="relative overflow-hidden bg-tierra py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-20 h-[540px] w-[540px] rounded-full bg-aji/[0.07] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-24 h-[560px] w-[560px] rounded-full bg-huacatay/[0.08] blur-[140px]"
      />

      <Container className="relative">
        <SectionTitle
          eyebrow="Arma tu menú"
          title="Elige tu formato y arma tu almuerzo."
          sub="Primero decide qué tan grande quieres tu almuerzo, después eliges cada plato. Tú mandas, nosotros cocinamos fresco."
          align="center"
        />

        <Stepper
          currentStep={step}
          format={format}
          activeCourses={activeCourses}
          selected={selected}
          onJump={goTo}
        />

        <div className="relative mt-14 min-h-[640px]">
          <AnimatePresence mode="wait" custom={direction}>
            {atFormat && (
              <motion.div
                key="format"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <FormatStep
                  selectedId={format?.id}
                  onChoose={chooseFormat}
                />
              </motion.div>
            )}

            {currentCourse && (
              <motion.div
                key={currentCourse}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <StepHeading course={currentCourse} />
                <CategoryFilter
                  course={currentCourse}
                  active={filters[currentCourse]}
                  onChange={(cat) =>
                    setFilters((f) => ({ ...f, [currentCourse]: cat }))
                  }
                />
                <ItemGrid
                  course={currentCourse}
                  items={filteredItems}
                  selectedId={selected[currentCourse]}
                  onPick={(id) => pick(currentCourse, id)}
                />
              </motion.div>
            )}

            {atSummary && format && (
              <motion.div
                key="summary"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Summary
                  format={format}
                  selected={selected}
                  onRestart={restart}
                  onChangeFormat={changeFormat}
                  onJump={goTo}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!atSummary && (
          <Navigation
            step={step}
            total={totalSteps}
            canAdvance={canAdvance}
            isFormatStep={atFormat}
            isLastPick={isLastPick}
            onBack={goBack}
            onNext={goNext}
          />
        )}
      </Container>
    </section>
  );
}

function Stepper({
  currentStep,
  format,
  activeCourses,
  selected,
  onJump,
}: {
  currentStep: number;
  format: Format | null;
  activeCourses: Course[];
  selected: Selection;
  onJump: (step: number) => void;
}) {
  const stops: { key: string; label: string; index: number }[] = [
    { key: "format", label: "Formato", index: 0 },
    ...activeCourses.map((c, i) => ({
      key: c,
      label: courseMeta[c].label,
      index: i + 1,
    })),
  ];
  const totalStops = stops.length;
  const maxIndex = Math.max(totalStops - 1, 1);
  const progress = (Math.min(currentStep, totalStops - 1) / maxIndex) * 100;

  const formatDone = !!format && currentStep > 0;

  return (
    <div className="mx-auto mt-14 max-w-3xl">
      <div className="relative">
        <div className="absolute left-0 right-0 top-4 h-px bg-arroz/10 lg:top-5" />
        <motion.div
          className="absolute left-0 top-4 h-px bg-aji lg:top-5"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <ol className="relative flex items-start justify-between gap-2">
          {stops.map((stop) => {
            const isFormat = stop.key === "format";
            const isActive = stop.index === currentStep;
            const isDone = isFormat
              ? formatDone
              : !!selected[stop.key as Course] && stop.index < currentStep;
            const previousReady = isFormat
              ? true
              : !!format &&
                activeCourses
                  .slice(0, stop.index - 1)
                  .every((c) => !!selected[c]);
            const isReachable = stop.index <= currentStep || previousReady;
            return (
              <li
                key={stop.key}
                className="flex flex-1 flex-col items-center gap-3"
              >
                <button
                  type="button"
                  onClick={() => isReachable && onJump(stop.index)}
                  disabled={!isReachable}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border font-mono text-xs transition lg:h-11 lg:w-11 lg:text-sm",
                    isActive &&
                      "border-aji bg-aji text-tierra shadow-[0_0_0_6px_rgba(232,160,32,0.12)]",
                    isDone && "border-huacatay bg-huacatay text-arroz",
                    !isActive && !isDone && "border-arroz/25 bg-tierra text-arroz/60",
                    !isReachable && "cursor-not-allowed opacity-50",
                  )}
                >
                  {isDone ? (
                    <Check size={16} strokeWidth={3} />
                  ) : isFormat ? (
                    <Sparkles size={15} strokeWidth={2.5} />
                  ) : (
                    stop.index
                  )}
                </button>
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.14em] transition lg:text-[11px]",
                    isActive
                      ? "text-aji"
                      : isDone
                        ? "text-huacatay"
                        : "text-arroz/45",
                  )}
                >
                  {stop.label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function FormatStep({
  selectedId,
  onChoose,
}: {
  selectedId?: string;
  onChoose: (format: Format) => void;
}) {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="eyebrow text-aji">Paso 00</span>
        <h3 className="display-3 text-arroz">¿Qué tan grande lo quieres?</h3>
        <p className="max-w-xl text-base text-arroz/65 lg:text-lg">
          Cada formato define cuántos platos armas. Puedes cambiarlo en cualquier
          momento antes de enviar tu pedido.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {formats.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <FormatCard
              format={f}
              selected={selectedId === f.id}
              onClick={() => onChoose(f)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FormatCard({
  format,
  selected,
  onClick,
}: {
  format: Format;
  selected: boolean;
  onClick: () => void;
}) {
  const courseCount = format.courses.length;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "group relative flex h-full w-full flex-col gap-5 rounded-[var(--radius-lg)] border p-7 text-left transition",
        selected
          ? "border-aji bg-aji/10 ring-1 ring-aji shadow-[0_0_0_6px_rgba(232,160,32,0.08)]"
          : "border-arroz/10 bg-tierra-90 hover:border-arroz/25 hover:-translate-y-0.5",
      )}
    >
      {format.highlight && (
        <span className="absolute -top-3 left-6 rounded-full bg-aji px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-tierra">
          Más pedido
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-arroz/45">
            {format.tagline}
          </span>
          <h4 className="mt-2 font-display text-2xl leading-tight text-arroz">
            {format.name}
          </h4>
        </div>
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition",
            selected ? "border-aji bg-aji text-tierra" : "border-arroz/25",
          )}
        >
          {selected && <Check size={14} strokeWidth={3} />}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-arroz/65">{format.description}</p>

      <div className="flex items-baseline gap-2">
        <span className="font-mono text-sm text-arroz/50">S/</span>
        <span className="font-display text-5xl leading-none text-arroz">
          {format.price}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-arroz/45">
          / persona
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-arroz/10 pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-arroz/50">
          {courseCount} {courseCount === 1 ? "plato" : "platos"} a elegir
        </span>
        <div className="flex gap-1">
          {format.courses.map((c) => (
            <span
              key={c}
              className="rounded-full border border-arroz/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-arroz/60"
            >
              {courseMeta[c].label}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

function StepHeading({ course }: { course: Course }) {
  const meta = courseMeta[course];
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <span className="eyebrow text-aji">{meta.eyebrow}</span>
      <h3 className="display-3 text-arroz">{meta.title}</h3>
      <p className="max-w-xl text-base text-arroz/65 lg:text-lg">{meta.hint}</p>
    </div>
  );
}

function CategoryFilter({
  course,
  active,
  onChange,
}: {
  course: Course;
  active: string;
  onChange: (cat: string) => void;
}) {
  const categories = courseCategories[course];
  return (
    <div className="no-scrollbar mx-auto mt-10 flex max-w-4xl gap-2 overflow-x-auto px-2 pb-2 lg:justify-center lg:px-0">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2.5 font-sans text-sm transition",
              isActive
                ? "border-aji bg-aji text-tierra"
                : "border-arroz/15 text-arroz/65 hover:border-arroz/40 hover:text-arroz",
            )}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

function ItemGrid({
  course,
  items,
  selectedId,
  onPick,
}: {
  course: Course;
  items: MenuItem[];
  selectedId?: string;
  onPick: (id: string) => void;
}) {
  const isSegundo = course === "segundo";

  if (items.length === 0) {
    return (
      <div className="mx-auto mt-10 max-w-md rounded-[var(--radius-lg)] border border-arroz/15 bg-tierra-90 p-10 text-center">
        <p className="font-display text-xl text-arroz">Nada en esta categoría hoy.</p>
        <p className="mt-2 text-sm text-arroz/60">
          Prueba con otro filtro, cambia todos los días.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mt-10 grid gap-5",
        isSegundo
          ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          : "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <DishCard
            item={item}
            selected={selectedId === item.id}
            onClick={() => onPick(item.id)}
          />
        </motion.div>
      ))}
    </div>
  );
}

function DishCard({
  item,
  selected,
  onClick,
}: {
  item: MenuItem;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-[var(--radius-lg)] border text-left transition",
        selected
          ? "border-aji bg-aji/10 ring-1 ring-aji"
          : "border-arroz/10 bg-tierra-90 hover:border-arroz/25 hover:-translate-y-0.5",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-tierra/80 via-tierra/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-4">
          <Badge tone="default">{item.category}</Badge>
          {item.tag && <Badge tone="aji">{item.tag}</Badge>}
        </div>
        {selected && (
          <div className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-aji text-tierra shadow-[var(--shadow-soft)]">
            <Check size={18} strokeWidth={3} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h4 className="font-display text-xl leading-tight text-arroz">{item.name}</h4>
        <p className="text-sm leading-relaxed text-arroz/65">{item.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {item.diets?.map((d) => (
            <Badge key={d} tone="huacatay">
              {d}
            </Badge>
          ))}
          {item.allergens.map((a) => (
            <Badge key={a} tone="outline" className="text-arroz/55">
              {a}
            </Badge>
          ))}
        </div>
      </div>
    </button>
  );
}

function Navigation({
  step,
  total,
  canAdvance,
  isFormatStep,
  isLastPick,
  onBack,
  onNext,
}: {
  step: number;
  total: number;
  canAdvance: boolean;
  isFormatStep: boolean;
  isLastPick: boolean;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mt-14 flex flex-col-reverse items-center justify-between gap-5 sm:flex-row">
      <button
        type="button"
        onClick={onBack}
        disabled={step === 0}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-arroz/20 px-5 py-3 font-sans text-sm text-arroz/80 transition",
          step === 0
            ? "cursor-not-allowed opacity-30"
            : "hover:border-arroz/50 hover:text-arroz",
        )}
      >
        <ArrowLeft size={16} />
        Volver
      </button>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-arroz/40">
        {step + 1} / {total}
      </span>
      <button
        type="button"
        onClick={onNext}
        disabled={!canAdvance}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm transition",
          canAdvance
            ? "bg-aji text-tierra hover:bg-aji-soft"
            : "cursor-not-allowed bg-arroz/10 text-arroz/40",
        )}
      >
        {isFormatStep
          ? "Empezar a elegir"
          : isLastPick
            ? "Ver mi menú"
            : "Siguiente"}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

function Summary({
  format,
  selected,
  onRestart,
  onChangeFormat,
  onJump,
}: {
  format: Format;
  selected: Selection;
  onRestart: () => void;
  onChangeFormat: () => void;
  onJump: (step: number) => void;
}) {
  const getItem = (list: MenuItem[], id?: string) =>
    id ? list.find((i) => i.id === id) : undefined;

  const rows = format.courses.map((course, i) => ({
    course,
    stepIndex: i + 1,
    item: getItem(itemsByCourse[course], selected[course]),
  }));

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-aji text-tierra shadow-[var(--shadow-soft)]">
          <Check size={28} strokeWidth={3} />
        </span>
        <span className="eyebrow text-aji">Listo</span>
        <h3 className="display-2 text-arroz">Así se ve tu almuerzo.</h3>
        <p className="max-w-xl text-base text-arroz/65 lg:text-lg">
          Formato <span className="text-arroz">{format.name}</span>, armado a tu gusto.
          Envíanos este menú y lo tenemos en tu oficina mañana al mediodía.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-[var(--radius-xl)] border border-aji/30 bg-arroz text-tierra shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between gap-4 border-b border-tierra/10 px-8 py-6 lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-huacatay">
              Formato elegido
            </span>
            <h4 className="mt-1 font-display text-2xl leading-tight lg:text-3xl">
              {format.name}
            </h4>
            <p className="mt-1 text-sm text-tierra/60">{format.tagline}</p>
          </div>
          <button
            type="button"
            onClick={onChangeFormat}
            className="shrink-0 rounded-full border border-tierra/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-tierra/70 transition hover:border-tierra/60 hover:text-tierra"
          >
            Cambiar
          </button>
        </div>

        <ul className="divide-y divide-tierra/10">
          {rows.map(({ course, stepIndex, item }) => (
            <li
              key={course}
              className="flex items-center gap-5 px-8 py-6 lg:px-12"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-tierra/20 font-mono text-xs text-tierra/70">
                {stepIndex}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-huacatay">
                    {courseMeta[course].label}
                  </span>
                  {item && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-tierra/40">
                      · {item.category}
                    </span>
                  )}
                </div>
                <h4 className="mt-1 font-display text-xl leading-tight lg:text-2xl">
                  {item ? item.name : "Sin elegir"}
                </h4>
                {item && (
                  <p className="mt-1 text-sm text-tierra/60">{item.description}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => onJump(stepIndex)}
                className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-huacatay transition hover:text-tierra sm:inline"
              >
                Cambiar
              </button>
            </li>
          ))}
        </ul>

        <div className="grid gap-8 border-t border-tierra/10 bg-arroz/60 px-8 py-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-tierra/50">
              Precio por persona
            </span>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="font-display text-5xl leading-none lg:text-6xl">
                S/ {format.price}.00
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-tierra/50">
                IGV incluido
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <button
              type="button"
              onClick={onRestart}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-tierra/30 px-6 py-3 font-sans text-sm text-tierra transition hover:border-tierra/60"
            >
              <RotateCcw size={16} />
              Empezar de nuevo
            </button>
            <Button href="/contacto" size="lg">
              Pedir para mi oficina
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
