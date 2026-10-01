import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { EnquiryForm } from "@/components/EnquiryForm";
import { OnlineBenefits } from "@/components/OnlineBenefits";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/ButtonLink";
import { tests } from "@/lib/tests";

export const metadata: Metadata = {
  title: "IELTS, TOEFL & PTE Preparation Online – Chennai",
  description:
    "Online English test preparation for IELTS, TOEFL and PTE from SRD Academy in Anna Nagar West, Chennai. Compare the tests and enquire about class schedules.",
  alternates: { canonical: "/test-preparation" },
  openGraph: { url: "/test-preparation" },
};

export default function TestPreparation() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/test-preparation", label: "Test preparation" }]}
        title="English test preparation, online"
        intro="Structured online classes for IELTS, TOEFL and PTE. Start by checking which test your university or programme accepts, then we’ll help you prepare for it."
      >
        <ButtonLink href="#enquire">Enquire about test preparation</ButtonLink>
      </PageHeader>

      <section aria-labelledby="tests-title" className="py-16 sm:py-24">
        <Container>
          <h2 id="tests-title" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Choose your test
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tests.map((t) => (
              <article key={t.slug} className="relative flex flex-col rounded-[var(--radius-ticket)] bg-white p-7">
                <p className="font-display text-4xl font-extrabold tracking-tight text-sea">{t.name}</p>
                <p className="mt-1 text-sm text-muted">{t.fullName}</p>
                <p className="mt-4 flex-1 font-serif leading-relaxed text-text">{t.summary}</p>
                <h3 className="mt-6">
                  <Link
                    href={`/test-preparation/${t.slug}`}
                    className="font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4 after:absolute after:inset-0"
                  >
                    About {t.name} preparation
                  </Link>
                </h3>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl font-serif leading-relaxed text-muted">
            Not sure which test to take? Read our guide on{" "}
            <Link href="/blog/ielts-toefl-or-pte" className="text-sea underline underline-offset-4">choosing between IELTS, TOEFL and PTE</Link>,
            or ask us in a free consultation.
          </p>
        </Container>
      </section>

      <section aria-labelledby="online-title" className="bg-white py-16 sm:py-24">
        <Container>
          <h2 id="online-title" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            How classes work
          </h2>
          <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-muted">
            Classes are mostly online. When you enquire, we’ll share the current schedule, class format, duration and fees.
          </p>
          <OnlineBenefits className="mt-10" />
        </Container>
      </section>

      <section id="enquire" aria-label="Enquiry form" className="scroll-mt-24 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <EnquiryForm heading="Enquire about test preparation" tone="card" />
        </Container>
      </section>

      <CtaBand title="Planning to study abroad as well?" text="Test preparation and applications go hand in hand. Talk to us about both." secondary={null} primary={{ href: "/study-abroad", label: "Talk to an education consultant" }} />
    </>
  );
}
