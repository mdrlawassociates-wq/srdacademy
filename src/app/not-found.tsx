import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-display text-lg font-bold text-sea">Page not found</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        This page has taken a different route.
      </h1>
      <p className="mt-5 max-w-xl font-serif text-lg text-muted">
        The link may be out of date. Try the <Link href="/" className="text-sea underline underline-offset-4">home page</Link>, or tell us what you were looking for.
      </p>
      <div className="mt-8">
        <ButtonLink href="/contact#enquire">Book a free consultation</ButtonLink>
      </div>
    </Container>
  );
}
