import type { Metadata } from "next";
import Link from "next/link";
import { BoardingPass } from "@/components/BoardingPass";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { LocationBlock } from "@/components/LocationBlock";
import { OnlineBenefits } from "@/components/OnlineBenefits";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { generalFaqs } from "@/lib/faqs";
import { tests } from "@/lib/tests";

export const metadata: Metadata = {
  title: { absolute: "SRD Academy – Online IELTS, TOEFL & PTE Coaching and Study Abroad Guidance, Chennai" },
  description:
    "Prepare for IELTS, TOEFL or PTE with online classes from SRD Academy, Anna Nagar West, Chennai, and get step-by-step guidance on studying abroad. Book a free consultation.",
  alternates: { canonical: "/" },
};

const reasons = [
  {
    title: "Test preparation and study planning in one place",
    text: "Your English test and your applications are connected. We help you see how the two fit together, so neither is left to the last minute.",
  },
  {
    title: "Online-first, so it fits your week",
    text: "Classes are mostly online. Join from home, between college and coaching, or from another city.",
  },
  {
    title: "Straight answers",
    text: "We’re clear about what preparation can and can’t do. Scores, admissions and visas are decided by others, and we’ll always say so.",
  },
  {
    title: "Parents welcome in the conversation",
    text: "Studying abroad is a family decision. Parents are welcome to join consultations and ask their own questions.",
  },
];

const steps = [
  { title: "Send an enquiry", text: "Tell us whether you’re interested in IELTS, TOEFL, PTE or study-abroad guidance." },
  { title: "Free consultation", text: "We talk through your goals, timeline and the schedule that’s currently available." },
  { title: "Prepare online", text: "Join classes from home and practise all the skills your test covers." },
  { title: "Plan your next step", text: "If you’re applying abroad, we guide you through choosing courses and preparing applications." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <svg aria-hidden="true" className="pointer-events-none absolute -right-40 -top-24 h-[640px] w-[640px] text-paper/[0.06]" viewBox="0 0 200 200">
          {[30, 50, 70, 90].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" />
          ))}
        </svg>
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3 py-1 text-sm text-paper/90">
              <span aria-hidden="true" className="size-2 rounded-full bg-marigold" />
              Online classes, based in Anna Nagar West, Chennai
            </p>
            <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-balance xs:text-5xl sm:text-6xl lg:text-[4.25rem]">
              Your English test is the first leg of the journey.
            </h1>
            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-paper/85 sm:text-xl">
              SRD Academy prepares students for IELTS, TOEFL and PTE through online classes, and guides you through
              choosing courses and applying to study abroad.
            </p>
            <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <ButtonLink href="/contact#enquire">Book a free consultation</ButtonLink>
              <ButtonLink href="/test-preparation" variant="light">Enquire about test preparation</ButtonLink>
            </div>
          </div>
          <BoardingPass />
        </div>
      </section>

      {/* Online-first */}
      <section aria-labelledby="online-title" className="py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 id="online-title" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Classes that come to you
            </h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-muted">
              Most of our teaching happens online. You get structured preparation without the daily travel.
            </p>
          </div>
          <OnlineBenefits className="mt-10" />
        </Container>
      </section>

      {/* Services */}
      <section aria-labelledby="services-title" className="bg-white py-16 sm:py-24">
        <Container>
          <h2 id="services-title" className="max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Two kinds of help, often needed together
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16 [&>*]:min-w-0">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">English test preparation</h3>
              <p className="mt-2 font-serif leading-relaxed text-muted">
                Online coaching across listening, reading, writing and speaking, shaped around the test you need.
              </p>
              <ul className="mt-6 border-t-2 border-ink">
                {tests.map((t) => (
                  <li key={t.slug} className="border-b-2 border-mist">
                    <Link href={`/test-preparation/${t.slug}`} className="group flex items-start gap-5 py-5">
                      <span className="w-20 shrink-0 font-display text-2xl font-extrabold tracking-tight text-sea sm:w-24 sm:text-3xl">
                        {t.name}
                      </span>
                      <span className="flex-1">
                        <span className="block font-semibold text-ink group-hover:underline group-hover:underline-offset-4">
                          {t.name} preparation online
                        </span>
                        <span className="mt-1 block font-serif text-[0.95rem] leading-relaxed text-muted">{t.fullName}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col rounded-[var(--radius-ticket)] bg-ink p-7 text-paper sm:p-9">
              <h3 className="font-display text-2xl font-bold">Study-abroad guidance</h3>
              <p className="mt-3 font-serif leading-relaxed text-paper/85">
                Help with thinking through courses and destinations, preparing applications, and keeping track of each step
                of the admissions process.
              </p>
              <ul className="mt-6 space-y-3 text-paper/90">
                {["Course and destination shortlisting", "Application preparation", "Step-by-step admissions guidance"].map((i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-marigold" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <ButtonLink href="/study-abroad" variant="light">Talk to an education consultant</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why */}
      <section aria-labelledby="why-title" className="py-16 sm:py-24">
        <Container>
          <h2 id="why-title" className="max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Why students and parents talk to us
          </h2>
          <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="border-l-4 border-marigold pl-5">
                <dt className="font-display text-xl font-bold text-ink">{r.title}</dt>
                <dd className="mt-2 font-serif leading-relaxed text-muted">{r.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Testimonials className="bg-white" />

      {/* Process */}
      <section aria-labelledby="process-title" className="bg-sea-soft py-16 sm:py-24">
        <Container>
          <h2 id="process-title" className="max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            How it works
          </h2>
          <div className="mt-12">
            <ProcessSteps steps={steps} />
          </div>
          <div className="mt-12">
            <ButtonLink href="/contact#enquire">Book a free consultation</ButtonLink>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 id="faq-title" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Common questions
            </h2>
            <p className="mt-4 font-serif leading-relaxed text-muted">
              Can’t see yours? <Link href="/contact#enquire" className="text-sea underline underline-offset-4">Ask us directly</Link>.
            </p>
          </div>
          <Faq items={generalFaqs} withSchema />
        </Container>
      </section>

      {/* Location */}
      <section aria-labelledby="location-title" className="bg-white py-16 sm:py-24">
        <Container>
          <h2 id="location-title" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Where to find us
          </h2>
          <div className="mt-10">
            <LocationBlock />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
