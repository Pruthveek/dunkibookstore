"use client";
import { useParams, useRouter } from "next/navigation";
import blogData from "@/data/blogData.json";
import BlogSidebar from "@/components/common/blog/BlogSidebar";
import { useEffect, useState } from "react";
import NavigationBanner from "@/components/common/NavigationBanner";
import BlogDetailCard from "@/components/common/blog/BlogDetailCard"; // ✅ import new component

type Comment = {
  commentId: number;
  author: string;
  text: string;
  date: string;
};

type Blog = {
  blogId: number;
  title: string;
  slug: string;
  discription: string;
  date: string;
  image: string;
  image2: string;
  tags?: string[];
  comments: Comment[];
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const blog = blogs.find((b) => b.slug === slug);

  const handleTagClick = (tag: string | null) => {
    setActiveTag(tag);
    if (tag) router.push(`/blogs/news/tagged/${tag}`);
  };

  if (!blog) {
    return <p className="text-center py-10">Blog not found</p>;
  }

  return (
    <>
      <NavigationBanner
        breadcrumb={[{ label: "Home", href: "/" }, { label: `${slug}` }]}
      />
      <section className="section-container2 w-full grid grid-cols-1 md:grid-cols-4 md:gap-8 my-10 pt-10">
        <BlogDetailCard blog={blog} onTagClick={handleTagClick} />

        <BlogSidebar blogs={blogs} onTagClick={handleTagClick} activeTag={activeTag} />
      </section>
    </>
  );
}
