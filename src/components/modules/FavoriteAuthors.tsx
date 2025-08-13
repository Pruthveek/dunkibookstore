'use client';

import React, { useEffect, useState } from "react";
import CustomButton from "../ui/Buttons";
import AuthorCard from "../blocks/home/AuthorCard";
import authorData from "@/data/authorData.json"


export default function FavoriteAuthors() {
  const [authors, setAuthors] = useState<typeof authorData>([]);

  useEffect(() => {
    setAuthors(authorData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 my-10 px-10 ">
      <div className="md:flex justify-between w-full items-center">
        <div className="text-3xl">Favorite Authors</div>
        <div className="flex flex-wrap mt-4 md:mt-0">
          <CustomButton variant="secondary">View All Authors</CustomButton>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-9 w-full">
        {authors.length > 0 ? (
          authors.map((author) => (
            <AuthorCard 
            key={author.autherID}
            authorName={author.authorName}
            authorImage={author.authorImage}
            publishedBooksNum={author.publishedBooksNum}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No authors found.</div>
        )}
      </div>
    </div>
  );
}
