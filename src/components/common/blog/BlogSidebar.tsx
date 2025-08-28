"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { CircleFadingArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";
import SearchBox from "@/components/common/header/SearchBox";

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

type BlogSidebarProps = {
  blogs: Blog[];
  onTagClick: (tag: string | null) => void;
  activeTag: string | null;
};

export default function BlogSidebar({ blogs, onTagClick, activeTag }: BlogSidebarProps) {
  const router=useRouter();
  const CategoriesLink = [
    "Our Blog",
    "About Our Shop",
    "Secure Shopping",
    "Privacy Policy",
    "Delivery information",
  ];

  const allTags = Array.from(new Set(blogs.flatMap((b) => b.tags || [])));

  return (
    <aside className="col-span-1 md:order-first">
      <div className="mb-8">
        <p className="text-xl sm:text-2xl mb-4">Search</p>
        <SearchBox placeholder="I'm looking for… " />
      </div>

      <div className="mb-8">
        <p className="text-xl sm:text-2xl mb-4">Categories</p>
        <ul className="space-y-2 list-none">
          {CategoriesLink.map((item, index) => (
            <li key={index}>
              <Link
                href="/"
                className="hover:text-red-600 hover:pl-2 transform ease-in-out duration-500 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <p className="text-xl sm:text-2xl mb-4">Recent Post</p>
        <div className="space-y-2 list-none">
          {blogs.slice(0, 4).map((blog) => (
            <Link
              href={`/blogs/news/${blog.slug}`}
              key={blog.slug}
              className="block py-3 border-b border-gray-300"
            >
              <div className="flex gap-2 items-center">
                <Image src={blog.image} alt={blog.slug} height={75} width={75} />
                <div>
                  <p className="text-gray-600 text-sm hover:text-red-600 cursor-pointer">
                    {blog.date}
                  </p>
                  <p className="text-gray-600 text-sm hover:text-red-600 cursor-pointer">
                    {blog.title?.slice(0, 25)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-xl sm:text-2xl mb-4">Archive</p>
        <p className="mb-4">October 2023</p>
        <div className="space-y-2 list-none">
          {blogs.slice(0, 4).map((blog) => (
            <Link
              href={`/blogs/news/${blog.slug}`}
              key={blog.slug}
              className="group py-1 block"
            >
              <div className="flex gap-4">
                <CircleFadingArrowUp
                  size={20}
                  strokeWidth={1}
                  className="group-hover:rotate-90 group-hover:text-red-600 transform ease-in-out duration-500 cursor-pointer"
                />
                <p className="text-sm group-hover:text-red-600 cursor-pointer">
                  {blog.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-xl sm:text-2xl mb-4">Tags</p>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick(tag)}
              className={`px-3 py-1 text-sm transition ${
                activeTag === tag
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 hover:bg-red-500 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
          {activeTag && (
            <button
              onClick={() => router.push(`/blogs/news`)}
              className="px-3 py-1 text-sm transition bg-gray-200 hover:bg-red-500 hover:text-white"
            >
              All
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
