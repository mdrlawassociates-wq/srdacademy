import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndex } from "@/components/BlogIndex";
import { PageHeader } from "@/components/PageHeader";
import { categories, getCategory, visiblePosts } from "@/lib/posts";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  const path = `/blog/category/${cat.slug}`;
  const empty = !visiblePosts.some((p) => p.category === cat.slug);
  return {
    title: `${cat.name} Articles`,
    description: `${cat.description} Guides from SRD Academy, Chennai.`,
    alternates: { canonical: path },
    openGraph: { url: path },
    ...(empty ? { robots: { index: false } } : {}),
  };
}

export default async function CategoryPage({ params }: PageProps<"/blog/category/[category]">) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/blog", label: "Blog" }, { href: `/blog/category/${cat.slug}`, label: cat.name }]}
        title={`${cat.name} articles`}
        intro={cat.description}
      />
      <BlogIndex posts={visiblePosts.filter((p) => p.category === cat.slug)} active={cat.slug} />
    </>
  );
}
