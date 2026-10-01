import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { EnquiryForm } from "@/components/EnquiryForm";
import { LocationBlock } from "@/components/LocationBlock";
import { PageHeader } from "@/components/PageHeader";
import { Placeholder } from "@/components/Placeholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact SRD Academy – Anna Nagar West, Chennai" },
  description:
    "Contact SRD Academy, Anna Nagar West, Chennai, on WhatsApp, phone or email to book a free consultation about online IELTS, TOEFL or PTE classes or study-abroad guidance.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function Contact() {
  const socials = Object.entries(site.social).filter(([, u]) => u);
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/contact", label: "Contact" }]}
        title="Book a free consultation"
        intro="Message us on WhatsApp, call or email. Classes and consultations are mostly online, so you can talk to us from wherever you are."
      />

      <section className="py-12 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div id="enquire" className="scroll-mt-24">
            <EnquiryForm heading="Message us on WhatsApp" tone="card" />
          </div>

          <aside aria-labelledby="direct-title" className="space-y-8">
            <div>
              <h2 id="direct-title" className="font-display text-2xl font-bold text-ink">Contact us directly</h2>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-sm text-muted">Phone</dt>
                  <dd className="mt-1 font-semibold">
                    {site.phone ? <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sea underline underline-offset-4">{site.phone}</a> : <Placeholder>Phone number to be added</Placeholder>}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">WhatsApp</dt>
                  <dd className="mt-1 font-semibold">
                    {site.whatsapp ? <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sea underline underline-offset-4">Message us on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a> : <Placeholder>WhatsApp number to be added</Placeholder>}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Email</dt>
                  <dd className="mt-1 font-semibold">
                    {site.email ? <a href={`mailto:${site.email}`} className="text-sea underline underline-offset-4">{site.email}</a> : <Placeholder>Email address to be added</Placeholder>}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Social</dt>
                  <dd className="mt-1">
                    {socials.length ? (
                      <ul className="flex flex-wrap gap-3">
                        {socials.map(([n, u]) => (
                          <li key={n}><a href={u!} target="_blank" rel="noopener noreferrer" className="capitalize text-sea underline underline-offset-4">{n}</a></li>
                        ))}
                      </ul>
                    ) : (
                      <Placeholder>Social media links to be added</Placeholder>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </Container>
      </section>

      <section aria-labelledby="address-title" className="bg-white py-16 sm:py-20">
        <Container>
          <h2 id="address-title" className="font-display text-3xl font-extrabold tracking-tight text-ink">Our address</h2>
          <div className="mt-8">
            <LocationBlock />
          </div>
        </Container>
      </section>
    </>
  );
}
