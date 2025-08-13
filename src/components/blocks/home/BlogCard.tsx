"use client";

import React from "react";
import Image from "next/image";

type Comment = {
  commentId: number;
  author: string;
  text: string;
  date: string;
};

type Blog = {
  blogId: number;
  title: string;
  date: string;
  image: string;
  comments: Comment[];
};

type BlogCardProps = {
  blog: Blog;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="group">
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="bg-cover group-hover:scale-110 ease-in-out duration-1000"
        />
      </div>

      <div className="mt-4 text-gray-600 text-sm flex items-center gap-2">
        <span>{blog.date}</span>
        <span>—</span>
        <span>{blog.comments.length} comments</span>
      </div>

      <h3 className="mt-2 text-xl ">{blog.title}</h3>
    </div>
  );
};

export default BlogCard;
