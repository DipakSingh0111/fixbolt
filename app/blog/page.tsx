import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "../common/PageBanner";
import BlogSection from "../common/BlogSection";

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;

  return (
    <div>
      <PageBanner title={site.pages.blog.bannerTitle} />
      <BlogSection category={category} />
    </div>
  );
}
