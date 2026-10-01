import Link from "next/link";
import { categories, type Post, visiblePosts } from "@/lib/posts";
import { Container } from "./Container";
import { PostCard } from "./PostCard";

export function BlogIndex({ posts, active }: { posts: Post[]; active?: string }) {
  const used = categories.filter((c) => visiblePosts.some((p) => p.category === c.slug));
  return (
    <Container className="py-12 sm:py-16">
      <nav aria-label="Blog categories">
        <ul className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
          <li>
            <Link
              href="/blog"
              aria-current={!active ? "page" : undefined}
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border-2 border-ink px-4 text-sm font-semibold text-ink aria-[current=page]:bg-ink aria-[current=page]:text-paper"
            >
              All articles
            </Link>
          </li>
          {used.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/blog/category/${c.slug}`}
                aria-current={active === c.slug ? "page" : undefined}
                className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border-2 border-ink px-4 text-sm font-semibold text-ink aria-[current=page]:bg-ink aria-[current=page]:text-paper"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {posts.length ? (
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}><PostCard post={p} headingLevel={2} /></li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 rounded-[var(--radius-ticket)] bg-white p-8">
          <h2 className="font-display text-2xl font-bold text-ink">New guides are on the way</h2>
          <p className="mt-2 font-serif text-muted">
            Have a question about IELTS, TOEFL, PTE or studying abroad?{" "}
            <Link href="/contact#enquire" className="text-sea underline underline-offset-4">Ask us directly</Link>.
          </p>
        </div>
      )}
    </Container>
  );
}
