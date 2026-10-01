import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: { absolute: "About SRD Academy – Online English Test Prep, Anna Nagar West, Chennai" },
  description:
    "SRD Academy is an English test-preparation institute and study-abroad consultancy in Anna Nagar West, Chennai, teaching mostly online.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

const values = [
  { title: "Clear advice", text: "We explain options plainly and tell you what is and isn’t within anyone’s control." },
  { title: "Steady preparation", text: "Regular practice and feedback, at a pace that fits alongside school, college or work." },
  { title: "Families included", text: "Parents are welcome in conversations about plans, timelines and costs." },
];

export default function About() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/about", label: "About" }]}
        title="About SRD Academy"
        intro="We help students prepare for English proficiency tests and plan their studies abroad. Our classes are mostly online; our base is in Anna Nagar West, Chennai."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-srd">
            <h2 className="!mt-0">What we do</h2>
            <p>
              SRD Academy brings together two kinds of help that students often need at the same time: preparation for
              English tests such as IELTS, TOEFL and PTE, and guidance on studying abroad, from choosing a course to
              working through the admissions process.
            </p>
            <p>
              Teaching happens mostly online, so students can learn from home and join from different locations.
            </p>
            <h2>Our story</h2>
            <p>
              <Placeholder>To be provided: when and why SRD Academy was founded, in the institute’s own words.</Placeholder>
            </p>
            <h2>Our team</h2>
            <p>
              <Placeholder>To be provided: names, roles and verified qualifications of trainers and counsellors. Photos only with consent.</Placeholder>
            </p>
          </div>
          <aside aria-labelledby="values-title" className="self-start rounded-[var(--radius-ticket)] bg-white p-7">
            <h2 id="values-title" className="font-display text-2xl font-bold text-ink">How we work</h2>
            <dl className="mt-5 space-y-5">
              {values.map((v) => (
                <div key={v.title}>
                  <dt className="font-display font-bold text-sea">{v.title}</dt>
                  <dd className="mt-1 font-serif leading-relaxed text-muted">{v.text}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
