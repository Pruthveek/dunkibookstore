"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/ui/Buttons";

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
  description?: string;
  date: string;
  image: string;
  comments: Comment[];
};

type BlogCardProps = {
  blog: Blog;
  readmorebutton?: boolean;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog, readmorebutton }) => {
  const router = useRouter();
  const isreadmorebutton = readmorebutton;

  const handleClick = () => {
    router.push(`/blogs/news/${blog.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group block cursor-pointer"
    >
      <div className="relative w-full h-60 md:h-80 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="bg-cover group-hover:scale-110 ease-in-out duration-500"
        />
      </div>

      <div className="mt-4 text-gray-800 text-sm flex items-center gap-2">
        <span className="hover:text-red-600">{blog.date}</span>
        <span>—</span>
        <span className="hover:text-red-600">
          {blog.comments.length} comments
        </span>
      </div>

      {isreadmorebutton ? (
        <div className="mb-8">
          <h3 className="mt-2 mb-4 text-xl hover:text-red-600 transform ease-in-out duration-500">
            {blog.title}
          </h3>
          <h3 className="my-2 text-sm gap-2">
            {blog.description?.slice(0, 190)}
          </h3>
          <CustomButton
            variant="secondary"
            size="xl"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            Read More
          </CustomButton>
        </div>
      ) : (
        <div>
          <h3 className="mb-4 text-xl hover:text-red-600 transform ease-in-out duration-500">
            {blog.title}
          </h3>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
