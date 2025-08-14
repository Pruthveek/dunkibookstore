"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType, NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";

import BlogCard from "../common/home/BlogCard";
import BlogData from "@/data/blogData.json";
import CustomButton from "../ui/Buttons";

type BlogListProps = {
  title: string;
  buttontext: string;
};

const BlogList: React.FC<BlogListProps> = ({ title, buttontext }) => {
  const [blogs, setBlogs] = useState<typeof BlogData>([]);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setBlogs(BlogData);
  }, []);

  return (
    <div className="relative group/arrow my-10 px-10">
      {/* Header */}
      <div className="md:flex justify-between items-center mb-6">
        <div className="text-3xl md:text-5xl">{title}</div>
        <div className="flex mt-4 md:mt-0">
          <CustomButton variant="secondary">{buttontext}</CustomButton>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          const navigation = swiper.params.navigation as NavigationOptions | undefined;
          if (navigation && typeof navigation !== "boolean") {
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            const navigation = swiper.params.navigation as NavigationOptions | undefined;
            if (navigation && typeof navigation !== "boolean") {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }, 0);
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.blogId}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev Button */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous"
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white 
                   opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 hover:text-white z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        ref={nextRef}
        type="button"
        aria-label="Next"
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white 
                   opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 hover:text-white z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default BlogList;
