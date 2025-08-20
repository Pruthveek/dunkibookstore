"use client";

import React, { useEffect, useState } from "react";
import blogData from "@/data/blogData.json";
import BlogCard from "@/components/common/blog/BlogCard";
import BlogSidebar from "@/components/common/blog/BlogSidebar";
import { useParams, useRouter } from "next/navigation";
import NavigationBanner from "@/components/common/NavigationBanner";

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

export default function BlogTag() {
  const { tags } = useParams();
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    setBlogs(blogData);
    if (tags) {
      const filtered = blogData.filter((b) => b.tags?.includes(tags as string));
      setFilteredBlogs(filtered);
      setActiveTag(tags as string);
    } else {
      setFilteredBlogs(blogData);
    }
  }, [tags]);

  const handleTagClick = (tag: string | null) => {
    setActiveTag(tag);
    router.push(`/blogs/news/tagged/${tag}`);
  };

  return (
    <>
      <NavigationBanner
        title="News"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
      />
      <section className="section-container2 w-full grid grid-cols-1 md:grid-cols-4 md:gap-8 my-10">
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-8 md:order-last">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard blog={blog} readmorebutton={true} key={blog.blogId} />
            ))
          ) : (
            <p className="col-span-2 text-center">
              No blogs found for this tag.
            </p>
          )}
        </div>
        <BlogSidebar
          blogs={blogs}
          onTagClick={handleTagClick}
          activeTag={activeTag}
        />
      </section>
    </>
  );
}
