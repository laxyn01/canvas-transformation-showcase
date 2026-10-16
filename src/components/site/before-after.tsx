import { ChevronsLeftRight } from "lucide-react";
import { useRef, useState, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  before: string;
  after: string;
  title: string;
  className?: string;
  initial?: number;
};

/** Draggable before/after comparison. Mouse, touch and keyboard (range input). */
export function BeforeAfter({ before, after, title, className, initial = 50 }: Props) {
  const [pos, setPos] = useState(initial);
  const wrap = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const fromPointer = (e: PointerEvent<HTMLInputElement>) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r || r.width === 0) return;
    setPos(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)));
  };

  return (
    <figure className={cn("m-0", className)}>
      <div ref={wrap} className="relative aspect-[16/10] select-none overflow-hidden rounded-xl border border-border bg-card">
        <img src={after} alt={`${title}: after`} loading="lazy" decoding="async" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
        <img
          src={before}
          alt={`${title}: before`}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover grayscale"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-primary" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-background/40">
            <ChevronsLeftRight className="h-5 w-5" />
          </span>
        </div>

        <span aria-hidden className="pointer-events-none absolute left-3 top-3 rounded-md bg-background/85 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-foreground">Before</span>
        <span aria-hidden className="pointer-events-none absolute right-3 top-3 rounded-md bg-primary px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">After</span>
        <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 rounded bg-background/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Sample image</span>
        <span aria-hidden className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground">← Drag to compare →</span>

        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            fromPointer(e);
          }}
          onPointerMove={(e) => dragging.current && fromPointer(e)}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
          aria-label="Drag to compare before and after"
          aria-valuetext={`${Math.round(pos)}% before`}
          className="absolute inset-0 m-0 h-full w-full cursor-ew-resize touch-pan-y appearance-none opacity-0"
        />
      </div>
      <figcaption className="mt-3 font-display text-2xl font-bold uppercase">{title}</figcaption>
    </figure>
  );
}
