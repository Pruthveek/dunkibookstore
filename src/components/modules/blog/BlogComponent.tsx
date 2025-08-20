"use client";
import SearchBox from "@/components/common/header/SearchBox";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import blogData from "@/data/blogData.json";
import Image from "next/image";
import { CircleFadingArrowUp } from "lucide-react";
import BlogCard from "@/components/common/blog/BlogCard";
export default function BlogComponent() {
  const [blogs, setBlogs] = useState<typeof blogData>([]);
  useEffect(() => {
    setBlogs(blogData);
  }, []);
  const CategoriesLink = [
    "Our Blog",
    "About Our Shop",
    "Secure Shopping",
    "Privacy Policy",
    "Delivery information",
  ];
  return (
    <section className="section-container2 w-full grid grid-cols-1 md:grid-cols-4 md:gap-8 my-10">
      <div className="col-span-3 grid grid-cols-1 md:gap-8 md:grid-cols-2">
        {blogs.map((blog) => (
            <BlogCard blog={blog} readmorebutton={true} key={blog.blogId}/>
        ))}
      </div>
      <div className="col-span-1">
        <div className="mb-8">
          <p className="text-xl sm:text-2xl mb-4">Search</p>
          <SearchBox placeholder="I'm looking for… " />
        </div>
        <div className="mb-8">
          <p className="text-xl sm:text-2xl mb-4">Categories</p>
          <ul className="space-y-2 list-none ">
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
          <div className="space-y-2 list-none ">
            {blogs.slice(0, 4).map((blog) => (
              <Link
                href={`/blogs/news/${blog.slug}`}
                key={blog.slug}
                className="block py-3 border-b border-gray-300"
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={blog.image}
                    alt={blog.slug}
                    height={75}
                    width={75}
                  ></Image>
                  <div className="">
                    <p className=" text-gray-600 text-sm gap-2 hover:text-red-600 cursor-pointer">
                      {blog.date}
                    </p>
                    <p className=" text-gray-600 text-sm gap-2 hover:text-red-600 cursor-pointer">
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
          <div className="space-y-2 list-none ">
            {blogs.slice(0, 4).map((blog) => (
              <Link
                href={`/blogs/news/${blog.slug}`}
                key={blog.slug}
                className="group py-1 block"
              >
                <div className="flex gap-4">
                  <CircleFadingArrowUp size={20} strokeWidth={1} className="group-hover:rotate-90 group-hover:text-red-600 transform ease-in-out duration-500 cursor-pointer"/>
                  <p className=" text-sm gap-2 group-hover:text-red-600 transform ease-in-out duration-1000 cursor-pointer">
                    {blog.title}
                  </p>
                  <br></br>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <p className="text-xl sm:text-2xl mb-4">Tags</p>
          <div className="space-y-2 list-none ">
            book Great history morning Novels shopify Summit
          </div>
        </div>
      </div>  
    </section>
  );
}
