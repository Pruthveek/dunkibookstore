"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Comment = {
  commentId: number;
  author: string;
  text: string;
  date: string;
};

type Blog = {
  blogId: number;
  title: string;
  slug:string;
  date: string;
  image: string;
  comments: Comment[];
};

type BlogCardProps = {
  blog: Blog;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/news/${blog.slug}`} className="group block">
      <div className="relative w-full h-60 md:h-80 overflow-hidden cursor-pointer">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="bg-cover group-hover:scale-110 ease-in-out duration-1000"
        />
      </div>

      <div className="mt-4 text-gray-800 text-sm flex items-center gap-2 ">
        <span className="hover:text-red-600 cursor-pointer">{blog.date}</span>
        <span>—</span>
        <span className="hover:text-red-600 cursor-pointer">{blog.comments.length} comments</span>
      </div>

      <h3 className="mt-2 text-xl hover:text-red-600 cursor-pointer">{blog.title}</h3>
    </Link>
  );
};

export default BlogCard;
