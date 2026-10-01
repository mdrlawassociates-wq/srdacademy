import type { MetadataRoute } from "next";
import { categories, posts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";
import { tests } from "@/lib/tests";

export default function sitemap(): MetadataRoute.Sitemap {
  const published = posts.filter((p) => !p.draft);
  const staticPaths = ["/", "/test-preparation", "/study-abroad", "/about", "/blog", "/contact", "/privacy"];
  return [
    ...staticPaths.map((p) => ({ url: absoluteUrl(p), priority: p === "/" ? 1 : 0.8 })),
    ...tests.map((t) => ({ url: absoluteUrl(`/test-preparation/${t.slug}`), priority: 0.9 })),
    ...categories
      .filter((c) => published.some((p) => p.category === c.slug))
      .map((c) => ({ url: absoluteUrl(`/blog/category/${c.slug}`), priority: 0.5 })),
    ...published.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: p.updated ?? p.date, priority: 0.6 })),
  ];
}
