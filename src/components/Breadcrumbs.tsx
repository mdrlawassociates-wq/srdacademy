import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { absoluteUrl } from "@/lib/site";

export type Crumb = { href: string; label: string };

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const all = [{ href: "/", label: "Home" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${tone === "light" ? "text-paper/75" : "text-muted"}`}>
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === all.length - 1 ? (
              <span aria-current="page" className={tone === "light" ? "text-paper" : "text-ink"}>
                {c.label}
              </span>
            ) : (
              <Link href={c.href} className="underline-offset-4 hover:underline">
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: absoluteUrl(c.href),
          })),
        }}
      />
    </nav>
  );
}
