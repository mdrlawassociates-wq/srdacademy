import Link from "next/link";
import { formatDate, getCategory, type Post } from "@/lib/posts";

export function PostCard({ post, headingLevel = 3 }: { post: Post; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as "h2" | "h3";
  const cat = getCategory(post.category);
  return (
    <article className="group relative flex h-full flex-col border-t-4 border-ink bg-white p-6">
      <p className="flex flex-wrap items-center gap-2 text-sm">
        <span className="font-semibold text-sea">{cat?.name}</span>
        {post.draft && (
          <span className="rounded-full bg-marigold/25 px-2 py-0.5 text-xs font-semibold text-ink">Draft for review</span>
        )}
      </p>
      <H className="mt-3 font-display text-xl font-bold leading-snug text-ink">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4">
          {post.title}
        </Link>
      </H>
      <p className="mt-3 flex-1 font-serif leading-relaxed text-muted">{post.description}</p>
      <p className="mt-5 text-sm text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>, {post.readingMinutes} min read
      </p>
    </article>
  );
}
