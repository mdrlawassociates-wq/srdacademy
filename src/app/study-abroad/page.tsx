import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { PageHeader } from "@/components/PageHeader";
import { Testimonials } from "@/components/Testimonials";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Study Abroad Consultancy in Chennai",
  description:
    "Study-abroad guidance from SRD Academy, Anna Nagar West, Chennai: shortlisting courses and destinations, preparing applications and following the admissions process step by step.",
  alternates: { canonical: "/study-abroad" },
  openGraph: { url: "/study-abroad" },
};

const steps = [
  {
    title: "Understand your goals",
    text: "We start with a conversation about what you want to study, why, your academic background and your budget. Parents are welcome to join.",
  },
  {
    title: "Shortlist courses and destinations",
    text: "We help you compare options against your goals and constraints, using each institution’s own published information.",
  },
  {
    title: "Plan your English test",
    text: "We check which tests your shortlisted programmes accept and work back from deadlines. If you need preparation, our online classes can help.",
  },
  {
    title: "Prepare your applications",
    text: "Guidance on gathering documents, writing statements and keeping each application organised.",
  },
  {
    title: "Follow through on admissions",
    text: "We help you keep track of responses, next steps and what each institution asks you to do.",
  },
];

const faqs = [
  {
    q: "Which countries do you help with?",
    a: "Tell us where you’re thinking of studying when you enquire, and we’ll let you know how we can help.",
  },
  {
    q: "Do you help with visas?",
    a: "Please ask us about this directly. Visa decisions are made by the relevant authorities, and requirements change, so always check official government sources.",
  },
  {
    q: "Can you guarantee an admission?",
    a: "No. Admission decisions are made by universities and colleges. We help you prepare strong, well-organised applications.",
  },
];

export default function StudyAbroad() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/study-abroad", label: "Study abroad" }]}
        title="Study-abroad guidance, one step at a time"
        intro="Planning to study abroad involves many connected decisions. We help you work through them in order, from choosing a course to following up on applications."
      >
        <ButtonLink href="#enquire">Talk to an education consultant</ButtonLink>
      </PageHeader>

      <section aria-labelledby="process-title" className="py-16 sm:py-24">
        <Container>
          <h2 id="process-title" className="max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            How we support you
          </h2>
          <ol className="mt-12 max-w-3xl">
            {steps.map((s, i) => (
              <li key={s.title} className="relative grid grid-cols-[3rem_1fr] gap-5 pb-10 last:pb-0">
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-0 left-[1.4rem] top-12 border-l-2 border-dashed border-sea/40" />
                )}
                <span className="grid size-12 place-items-center rounded-full bg-ink font-display text-lg font-bold text-marigold">
                  {i + 1}
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 font-serif leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="online-title" className="bg-white py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="online-title" className="font-display text-3xl font-extrabold tracking-tight text-ink">
              Consultations online
            </h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-muted">
              Most conversations happen online, so students and parents can join from home, even from different places. If
              you’d prefer to meet in person, mention it in your enquiry and we’ll confirm what’s available.
            </p>
          </div>
          <div className="rounded-[var(--radius-ticket)] bg-sea-soft p-6">
            <h3 className="font-display text-lg font-bold text-ink">Destinations and services</h3>
            <p className="mt-2 font-serif leading-relaxed text-muted">
              <Placeholder>Confirmed destinations and service list to be added by SRD Academy</Placeholder>
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-title" className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 id="faq-title" className="font-display text-3xl font-extrabold tracking-tight text-ink">Good to know</h2>
            <p className="mt-4 font-serif leading-relaxed text-muted">
              New to planning? Start with{" "}
              <Link href="/blog/starting-your-study-abroad-plan" className="text-sea underline underline-offset-4">the questions to answer first</Link>.
            </p>
          </div>
          <Faq items={faqs} withSchema />
        </Container>
      </section>

      <Testimonials service="study-abroad" title="What students and parents say" className="bg-white" />

      <section id="enquire" aria-label="Enquiry form" className="scroll-mt-24 bg-sea-soft py-16 sm:py-24">
        <Container className="max-w-3xl">
          <EnquiryForm heading="Talk to an education consultant" defaultInterest="study-abroad" tone="card" />
        </Container>
      </section>
    </>
  );
}
