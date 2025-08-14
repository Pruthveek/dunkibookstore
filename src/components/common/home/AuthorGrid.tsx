"use client";

import React from "react";
import AuthorCard from "./AuthorCard";

interface Author {
  autherID: number;
  authorName: string;
  authorImage: string;
  publishedBooksNum: number;
}

interface AuthorGridProps {
  authors: Author[];
  limit?: number;
  className?: string;
}

export default function AuthorGrid({
  authors,
  limit,
  className,
}: AuthorGridProps) {
  const displayedAuthors = limit ? authors.slice(0, limit) : authors;

  return (
    <div
      className={`section-container ${
        className || ""
      }`}
    >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {displayedAuthors.length ? (
          displayedAuthors.map((author) => (
            <AuthorCard
              key={author.autherID}
              authorName={author.authorName}
              authorImage={author.authorImage}
              publishedBooksNum={author.publishedBooksNum}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No authors found.
          </p>
        )}
      </div>
    </div>
  );
}
