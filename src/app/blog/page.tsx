import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { visiblePosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog – IELTS, TOEFL, PTE and Study Abroad Guides",
  description:
    "Practical guides from SRD Academy on preparing for IELTS, TOEFL and PTE, studying online, and planning to study abroad.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

export default function Blog() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/blog", label: "Blog" }]}
        title="Guides for test takers and future students"
        intro="Plain-language articles on English tests and study-abroad planning. Always check official sources for current rules, fees and dates."
      />
      <BlogIndex posts={visiblePosts} />
      <CtaBand />
    </>
  );
}
