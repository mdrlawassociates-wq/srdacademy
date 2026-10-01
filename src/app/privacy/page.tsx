import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Placeholder } from "@/components/Placeholder";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How SRD Academy handles the personal information you share through enquiries on this website.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

export default function Privacy() {
  return (
    <>
      <PageHeader crumbs={[{ href: "/privacy", label: "Privacy notice" }]} title="Privacy notice" intro="A short explanation of what we collect when you contact us, and why." />
      <Container className="py-14 sm:py-20">
        <div className="prose-srd">
          <p className="rounded-xl bg-marigold/15 p-4 font-sans text-sm text-ink">
            This notice is a starting draft for review. It is not legal advice. SRD Academy should confirm the details
            marked below, and may wish to have it reviewed for compliance with India’s Digital Personal Data Protection
            Act, 2023 and related rules.
          </p>

          <h2>Who we are</h2>
          <p>
            This website is operated by {site.name}{" "}
            <Placeholder>registered legal name of the business, if different</Placeholder>, {fullAddress.join(", ")}.
          </p>

          <h2>What we collect</h2>
          <p>When you send an enquiry, we collect the details you choose to give us:</p>
          <ul>
            <li>your name</li>
            <li>your phone number and/or email address</li>
            <li>the service you’re interested in and, if given, your preferred class format</li>
            <li>anything you write in the message box</li>
          </ul>
          <p>
            We don’t ask for sensitive information through this website, and we ask that you don’t include documents,
            identity numbers or financial details in the form.
          </p>

          <h2>How we use it</h2>
          <p>
            Only to reply to your enquiry and talk to you about the courses or guidance you asked about. We do not sell
            your information.
          </p>

          <h2>Who handles it</h2>
          <p>
            Enquiries are delivered to us by email using a third-party email delivery service{" "}
            <Placeholder>name of provider, e.g. Resend, once confirmed</Placeholder>, and the website is hosted by{" "}
            <Placeholder>hosting provider, e.g. Vercel, once confirmed</Placeholder>. Links to Google Maps take you to a
            Google service, which has its own privacy policy.
          </p>

          <h2>How long we keep it</h2>
          <p>
            <Placeholder>Retention period to be confirmed by SRD Academy</Placeholder>. After that, enquiry details are deleted.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to tell you what information we hold about you, correct it, or delete it, and you can withdraw
            your consent to be contacted at any time. Contact us at{" "}
            {site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <Placeholder>contact email for privacy requests</Placeholder>}.
          </p>

          <h2>Cookies</h2>
          <p>
            This website does not currently use advertising or analytics cookies. If that changes, we will update this
            notice <Placeholder>and add a consent banner if required</Placeholder>.
          </p>

          <h2>Changes</h2>
          <p>
            Last updated: <Placeholder>date of publication</Placeholder>. Questions? <Link href="/contact">Contact us</Link>.
          </p>
        </div>
      </Container>
    </>
  );
}
