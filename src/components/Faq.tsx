import { JsonLd } from "./JsonLd";

export function Faq({ items, withSchema = false }: { items: { q: string; a: string }[]; withSchema?: boolean }) {
  return (
    <div className="divide-y-2 divide-mist border-y-2 border-mist">
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex min-h-14 items-center justify-between gap-4 py-3 text-left font-display text-lg font-semibold text-ink">
            {item.q}
            <span
              aria-hidden="true"
              className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-sea-soft text-xl leading-none text-sea transition-transform"
            >
              +
            </span>
          </summary>
          <p className="max-w-[65ch] pb-5 font-serif leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          }}
        />
      )}
    </div>
  );
}
