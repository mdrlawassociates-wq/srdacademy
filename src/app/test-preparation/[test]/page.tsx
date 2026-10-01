import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { OnlineBenefits } from "@/components/OnlineBenefits";
import { PageHeader } from "@/components/PageHeader";
import { Testimonials } from "@/components/Testimonials";
import { absoluteUrl, site } from "@/lib/site";
import { getTest, tests } from "@/lib/tests";

export function generateStaticParams() {
  return tests.map((t) => ({ test: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/test-preparation/[test]">): Promise<Metadata> {
  const { test: slug } = await params;
  const test = getTest(slug);
  if (!test) return {};
  const path = `/test-preparation/${test.slug}`;
  return {
    title: test.seoTitle,
    description: test.seoDescription,
    alternates: { canonical: path },
    openGraph: { url: path, title: `${test.seoTitle} | ${site.name}`, description: test.seoDescription },
  };
}

export default async function TestPage({ params }: PageProps<"/test-preparation/[test]">) {
  const { test: slug } = await params;
  const test = getTest(slug);
  if (!test) notFound();
  const others = tests.filter((t) => t.slug !== test.slug);

  return (
    <>
      <PageHeader
        crumbs={[
          { href: "/test-preparation", label: "Test preparation" },
          { href: `/test-preparation/${test.slug}`, label: test.name },
        ]}
        title={`${test.name} preparation, online`}
        intro={test.summary}
      >
        <ButtonLink href="#enquire">Enquire about {test.name} classes</ButtonLink>
      </PageHeader>

      <section aria-labelledby="who-title" className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="who-title" className="font-display text-3xl font-extrabold tracking-tight text-ink">
              Who {test.name} is for
            </h2>
            <ul className="mt-6 space-y-4 font-serif text-lg leading-relaxed">
              {test.whoFor.map((w) => (
                <li key={w} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-marigold-deep" />
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-sea-soft p-4 text-[0.95rem] leading-relaxed text-ink">
              {test.name} is run by {test.owner}. For current test format, fees and dates, check the{" "}
              <a href={test.officialUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
                official {test.name} website<span className="sr-only"> (opens in a new tab)</span>
              </a>.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink">Skills we practise</h2>
            <dl className="mt-6 divide-y-2 divide-mist border-y-2 border-ink">
              {test.skills.map((s) => (
                <div key={s.name} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="font-display text-lg font-bold text-sea">{s.name}</dt>
                  <dd className="font-serif leading-relaxed text-muted">{s.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section aria-labelledby="help-title" className="bg-white py-16 sm:py-24">
        <Container>
          <h2 id="help-title" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            How we help you prepare
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {test.howWeHelp.map((h) => (
              <li key={h} className="rounded-xl border-2 border-mist p-5 font-serif leading-relaxed">{h}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl font-serif leading-relaxed text-muted">
            Your result depends on your own performance on test day. We focus on steady, honest preparation rather than promising a score.
          </p>
          <OnlineBenefits className="mt-10" />
        </Container>
      </section>

      <section aria-labelledby="faq-title" className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <h2 id="faq-title" className="font-display text-3xl font-extrabold tracking-tight text-ink">
            {test.name} questions
          </h2>
          <Faq items={test.faqs} withSchema />
        </Container>
      </section>

      <Testimonials service={test.slug} title={`What ${test.name} students say`} className="bg-white" />

      <section id="enquire" aria-label="Enquiry form" className="scroll-mt-24 bg-sea-soft py-16 sm:py-24">
        <Container className="max-w-3xl">
          <EnquiryForm heading={`Enquire about ${test.name} classes`} defaultInterest={test.slug} tone="card" />
        </Container>
      </section>

      <section aria-labelledby="other-title" className="py-12">
        <Container>
          <h2 id="other-title" className="font-display text-xl font-bold text-ink">Other tests</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/test-preparation/${o.slug}`} className="inline-flex min-h-11 items-center rounded-full border-2 border-ink px-5 font-semibold text-ink hover:bg-ink hover:text-paper">
                  {o.name} preparation
                </Link>
              </li>
            ))}
            <li>
              <Link href="/study-abroad" className="inline-flex min-h-11 items-center rounded-full border-2 border-ink px-5 font-semibold text-ink hover:bg-ink hover:text-paper">
                Study-abroad guidance
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${test.name} preparation (online)`,
          serviceType: "English language test preparation",
          provider: { "@id": `${absoluteUrl("/")}#organization` },
          url: absoluteUrl(`/test-preparation/${test.slug}`),
          description: test.seoDescription,
        }}
      />
    </>
  );
}
