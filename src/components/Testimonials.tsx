import { showDrafts } from "@/lib/posts";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import { Container } from "./Container";
import { Placeholder } from "./Placeholder";

function Quote({ t, featured = false }: { t: Testimonial; featured?: boolean }) {
  return (
    <figure className={featured ? "" : "border-t-2 border-mist pt-6"}>
      <blockquote
        className={`font-serif leading-relaxed text-ink ${featured ? "text-2xl sm:text-[1.75rem] sm:leading-snug" : "text-lg"}`}
      >
        <p>
          <span aria-hidden="true" className="mr-1 font-display font-extrabold text-marigold-deep">“</span>
          {t.quote}
          <span aria-hidden="true" className="ml-0.5 font-display font-extrabold text-marigold-deep">”</span>
        </p>
      </blockquote>
      <figcaption className="mt-4">
        <span className="font-display font-bold text-ink">{t.name}</span>
        {t.context && <span className="block text-sm text-muted">{t.context}</span>}
      </figcaption>
    </figure>
  );
}

/**
 * Renders real testimonials only. Pass `service` to show those relevant to
 * one page (falls back to all when none match).
 */
export function Testimonials({
  service,
  title = "In our students’ words",
  className = "",
}: {
  service?: Testimonial["service"];
  title?: string;
  className?: string;
}) {
  const matching = service ? testimonials.filter((t) => t.service === service) : testimonials;
  const items = matching.length ? matching : testimonials;

  if (items.length === 0) {
    if (!showDrafts) return null;
    return (
      <section aria-labelledby="testimonials-title" className={`py-16 sm:py-24 ${className}`}>
        <Container>
          <h2 id="testimonials-title" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <div className="mt-8 rounded-[var(--radius-ticket)] border-2 border-dashed border-marigold-deep bg-white p-6 sm:p-8">
            <Placeholder>Testimonials to be added</Placeholder>
            <p className="mt-3 max-w-2xl font-serif leading-relaxed text-muted">
              Add real quotes from students or parents, with their permission, in{" "}
              <code className="font-sans text-sm text-ink">src/lib/testimonials.ts</code>. This section stays hidden on the
              live site until at least one is added.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  const [featured, ...rest] = items;
  return (
    <section aria-labelledby="testimonials-title" className={`py-16 sm:py-24 ${className}`}>
      <Container>
        <h2 id="testimonials-title" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <div className={`mt-10 grid gap-10 ${rest.length ? "lg:grid-cols-[1.3fr_1fr] lg:gap-16" : ""}`}>
          <div className="border-l-4 border-marigold pl-6 sm:pl-8">
            <Quote t={featured} featured />
          </div>
          {rest.length > 0 && (
            <div className="space-y-8">
              {rest.slice(0, 3).map((t) => (
                <Quote key={`${t.name}-${t.quote.slice(0, 20)}`} t={t} />
              ))}
            </div>
          )}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-muted">
          Shared with permission. Individual experiences vary; results depend on each student’s own preparation and circumstances.
        </p>
      </Container>
    </section>
  );
}
