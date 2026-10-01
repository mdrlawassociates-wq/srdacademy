export function ProcessSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <div className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink font-display text-lg font-bold text-marigold">
              {i + 1}
            </span>
            {i < steps.length - 1 && <span aria-hidden="true" className="hidden h-0.5 flex-1 border-t-2 border-dashed border-sea/40 lg:block" />}
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-ink">{s.title}</h3>
          <p className="mt-2 font-serif leading-relaxed text-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
