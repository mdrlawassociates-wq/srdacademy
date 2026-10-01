import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/PostCard";
import { ShareLinks } from "@/components/ShareLinks";
import { formatDate, getCategory, getPost, relatedPosts, visiblePosts, type Block } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return visiblePosts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: path },
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url: path,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
    // Drafts are reviewable but kept out of search results.
    ...(post.draft ? { robots: { index: false, follow: true } } : {}),
  };
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "p":
      return <p key={i}>{b.text}</p>;
    case "h2":
      return <h2 key={i}>{b.text}</h2>;
    case "ul":
      return (
        <ul key={i}>
          {b.items.map((it) => <li key={it}>{it}</li>)}
        </ul>
      );
    case "note":
      return (
        <p key={i} className="my-6 rounded-xl border-2 border-dashed border-marigold-deep bg-marigold/10 p-4 font-sans text-sm text-ink">
          {b.text}
        </p>
      );
  }
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const cat = getCategory(post.category);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const related = relatedPosts(post);

  return (
    <>
      <article>
        <header className="bg-ink text-paper">
          <Container className="max-w-4xl pb-14 pt-8 sm:pb-16 sm:pt-12">
            <Breadcrumbs
              tone="light"
              items={[
                { href: "/blog", label: "Blog" },
                ...(cat ? [{ href: `/blog/category/${cat.slug}`, label: cat.name }] : []),
              ]}
            />
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-paper/85">{post.description}</p>
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-paper/60">Written by</dt>
                <dd className="font-semibold">{post.author}</dd>
              </div>
              <div>
                <dt className="text-paper/60">Published</dt>
                <dd className="font-semibold"><time dateTime={post.date}>{formatDate(post.date)}</time></dd>
              </div>
              {post.updated && (
                <div>
                  <dt className="text-paper/60">Updated</dt>
                  <dd className="font-semibold"><time dateTime={post.updated}>{formatDate(post.updated)}</time></dd>
                </div>
              )}
              <div>
                <dt className="text-paper/60">Reading time</dt>
                <dd className="font-semibold">{post.readingMinutes} minutes</dd>
              </div>
            </dl>
          </Container>
        </header>

        <Container className="max-w-4xl py-12 sm:py-16">
          {post.draft && (
            <aside aria-labelledby="review-title" className="mb-10 rounded-xl border-2 border-marigold-deep bg-marigold/15 p-5 text-ink">
              <h2 id="review-title" className="font-display text-lg font-bold">Draft: check before publishing</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                {post.verify.map((v) => <li key={v}>{v}</li>)}
                <li>Replace the author placeholder with a named, consenting author.</li>
              </ul>
            </aside>
          )}
          <div className="prose-srd">{post.body.map(renderBlock)}</div>

          <div className="mt-14 grid gap-8 border-t-2 border-mist pt-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">Have a question about your own plans?</h2>
              <p className="mt-2 font-serif text-muted">A free consultation is the easiest way to get advice for your situation.</p>
              <div className="mt-5">
                <ButtonLink href="/contact#enquire">Book a free consultation</ButtonLink>
              </div>
            </div>
            <ShareLinks url={url} title={post.title} />
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="bg-sea-soft py-14 sm:py-20">
          <Container>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 id="related-title" className="font-display text-3xl font-extrabold tracking-tight text-ink">Related articles</h2>
              <Link href="/blog" className="font-semibold text-sea underline underline-offset-4">All articles</Link>
            </div>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => <li key={p.slug}><PostCard post={p} /></li>)}
            </ul>
          </Container>
        </section>
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@id": `${absoluteUrl("/")}#organization`, name: site.name },
          mainEntityOfPage: url,
          inLanguage: "en-IN",
        }}
      />
    </>
  );
}
