"use client";

import Image from "next/image";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { SlSocialPintarest } from "react-icons/sl";
import AuthForm from "@/components/common/auth/AuthForm";

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
  image2?: string;
  tags?: string[];
  comments: Comment[];
};

type BlogDetailCardProps = {
  blog: Blog;
  onTagClick: (tag: string) => void;
};

export default function BlogDetailCard({ blog, onTagClick }: BlogDetailCardProps) {
  return (
    <div className="col-span-3 md:order-last">
      {/* Main image */}
      <div className="w-full h-[400px] md:h-[500px] relative mb-8">
        <Image src={blog.image} alt={blog.title} fill className="object-cover" />
      </div>

      {/* Title and meta */}
      <h1 className="text-2xl md:text-5xl mb-4">{blog.title}</h1>
      <div className="mb-4 text-gray-800 flex items-center gap-2">
        {blog.date} — Store Admin
      </div>

      {/* Content */}
      <p className="text-xl mb-8">{blog.discription}</p>
      <p className="text-xl mb-8">
        Moreover, if you bought one of our rings and the size does not suit
        you, you can always come and exchange it for another size in our shop! ...
      </p>

      <p className="text-xl mb-8 border-l-4 ml-6 pl-2 border-red-600">
        Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.
        Phasellus accumsan cursus velitid ante tempus hendrerit. Donec
        interdum, metus et hendrerit aliquet”
      </p>

      <p className="text-xl mb-8">
        Partili enem amir. Cum soluta alteru, novut dicam te velid, vix ut des ...
      </p>

      {blog.image2 && (
        <div className="w-full h-[400px] relative mb-8">
          <Image src={blog.image2} alt={blog.title} fill className="object-cover" />
        </div>
      )}

      <p className="text-xl mb-8">
        deserui dissentiet at. Mei facete pertinax, at meliore sapientem
        deterruisset nam sumi tantas de nilidi. Vel case alterum senserit...
      </p>

      {/* List */}
      <ul className="list-disc list-inside mb-6">
        <li>Measure your finger with a tape or thread.</li>
        <li>Measure the diameter of one of your rings...</li>
        <li>Fly make saw creeping evening...</li>
      </ul>

      {/* Tags & Share */}
      {blog.tags && (
        <div className="mb-8 md:flex justify-between items-center">
          <div className="flex flex-wrap gap-2 mt-4">
            <p>Post Tags :</p>
            {blog.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagClick(tag)}
                className="px-3 py-1 bg-red-600 text-white"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-4 text-red-600">
            <p className="text-black">Share :</p>
            <FiFacebook /> <FiTwitter /> <SlSocialPintarest />
          </div>
        </div>
      )}

      {/* Comments */}
      <div className="mt-10 text-xl">
        {blog.comments.length > 0 && (
          <ul className="space-y-4">
            <h3 className="text-2xl mb-4">{blog.comments.length} Comments</h3>
            {blog.comments.map((c) => (
              <li key={c.commentId} className="block md:flex gap-4 mb-6">
                <div className="size-[75px] md:size-[100px] relative">
                  <Image
                    src="/Images/diego-hernandez-MSepzbKFz10-unsplash.jpg"
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p>{c.author}</p>
                  <p className="text-sm text-gray-500">{c.date}</p>
                  <p className="mt-1">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Comment form */}
      <div className="mt-10">
        <h3 className="text-2xl mb-4">Leave a comment</h3>
        <AuthForm
          fields={[
            { label: "Name", type: "text", name: "name" },
            { label: "Email", type: "email", name: "email" },
          ]}
          textarea={[{ label: "Message", name: "textarea" }]}
          submitLabel="Send Message"
          bg="withoutbg"
          variantStyles="outlined"
        />
      </div>
    </div>
  );
}
