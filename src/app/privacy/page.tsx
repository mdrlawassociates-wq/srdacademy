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
          <p>
            This website does not collect or store the details you type into the enquiry form. When you use it, your
            phone opens WhatsApp with a message containing what you entered: your name, the service you’re interested
            in, your preferred class format if given, and any note you add. Nothing is sent until you press send in
            WhatsApp.
          </p>
          <p>
            If you message, call or email us, we receive your name, phone number or email address, and whatever you
            choose to tell us. Please don’t send documents, identity numbers or financial details unless we ask for
            them for a specific purpose.
          </p>

          <h2>How we use it</h2>
          <p>
            Only to reply to you and talk about the courses or guidance you asked about. We do not sell your
            information.
          </p>

          <h2>Who handles it</h2>
          <p>
            Messages sent by WhatsApp go through WhatsApp, a service run by Meta, and email goes through our email
            provider (Google Gmail). Each has its own privacy policy. The website is hosted by Vercel. Links to Google
            Maps take you to a Google service.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep enquiry messages only as long as needed to respond and follow up, and for{" "}
            <Placeholder>retention period to be confirmed by SRD Academy</Placeholder> at most. After that, we delete them.
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
