import data from "@/data/data.json";
import PageBanner from "../common/PageBanner";
import BlogSection from "../common/BlogSection";

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;

  return (
    <div>
      <PageBanner title={data.pages.blog.bannerTitle} />
      <BlogSection category={category} />
    </div>
  );
}
