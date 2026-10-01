import { Container } from "./Container";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHeader({
  title,
  intro,
  crumbs,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <header className="bg-ink text-paper">
      <Container className="pb-14 pt-8 sm:pb-20 sm:pt-12">
        <Breadcrumbs items={crumbs} tone="light" />
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <div className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-paper/85">{intro}</div>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </header>
  );
}
