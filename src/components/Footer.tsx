import Link from "next/link";
import { fullAddress, mapsUrl, nav, site } from "@/lib/site";
import { tests } from "@/lib/tests";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Placeholder } from "./Placeholder";

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="bg-ink pb-28 pt-16 text-paper sm:pb-12">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-sm font-serif leading-relaxed text-paper/80">
              Online English test preparation and study-abroad guidance, from our base in Anna Nagar West, Chennai.
            </p>
            <address className="mt-6 not-italic leading-relaxed text-paper/90">
              {fullAddress.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-marigold underline underline-offset-4">
              Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <div>
            <h2 className="font-display text-base font-bold text-paper">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-paper/85">
              {tests.map((t) => (
                <li key={t.slug}>
                  <Link href={`/test-preparation/${t.slug}`} className="hover:text-marigold">{t.name} preparation</Link>
                </li>
              ))}
              {nav.filter((n) => n.href !== "/test-preparation").map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-marigold">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-bold text-paper">Get in touch</h2>
            <dl className="mt-4 space-y-3 text-paper/85">
              <div>
                <dt className="text-sm text-paper/60">Phone</dt>
                <dd>{site.phone ? <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a> : <Placeholder>Phone to be added</Placeholder>}</dd>
              </div>
              {site.whatsapp && (
                <div>
                  <dt className="text-sm text-paper/60">WhatsApp</dt>
                  <dd>
                    <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      Message us on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-sm text-paper/60">Email</dt>
                <dd>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <Placeholder>Email to be added</Placeholder>}</dd>
              </div>
            </dl>
            {socials.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-4">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a href={url!} target="_blank" rel="noopener noreferrer" className="capitalize underline underline-offset-4">{name}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-6 text-sm text-paper/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. We help you prepare and plan; test scores, admissions and visa
            decisions rest with test owners, institutions and authorities.
          </p>
          <Link href="/privacy" className="shrink-0 underline underline-offset-4 hover:text-paper">Privacy notice</Link>
        </div>
      </Container>
    </footer>
  );
}
