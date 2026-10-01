import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

export function CtaBand({
  title = "Not sure where to start?",
  text = "Book a free consultation. We’ll talk through your goals, the right test for your plans, and the class schedule that’s currently available.",
  primary = { href: "/contact#enquire", label: "Book a free consultation" },
  secondary = { href: "/study-abroad", label: "Talk to an education consultant" },
}: {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string } | null;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-sea text-paper">
      <Container className="grid gap-8 py-16 sm:py-20 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
        <div>
          <h2 id="cta-title" className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed text-paper/85">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch lg:flex-row lg:justify-end">
          <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
          {secondary && <ButtonLink href={secondary.href} variant="light">{secondary.label}</ButtonLink>}
        </div>
      </Container>
    </section>
  );
}
