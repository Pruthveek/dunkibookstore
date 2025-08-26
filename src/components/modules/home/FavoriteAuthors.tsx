'use client';

import React, { useEffect, useState } from "react";
import authorData from "@/data/authorData.json"
import CustomButton from "@/components/ui/Buttons";
import AuthorGrid from "@/components/common/home/AuthorGrid";
import Link from "next/link";


export default function FavoriteAuthors() {
  const [authors, setAuthors] = useState<typeof authorData>([]);

  useEffect(() => {
    setAuthors(authorData);
  }, []);

  return (
    <div className="section-container2 flex flex-col items-center justify-center space-y-4 my-10 ">
      <div className="md:flex justify-between w-full items-center">
        <div className="text-3xl md:text-5xl">Favorite Authors</div>
        <div className="flex flex-wrap mt-4 md:mt-0">
          <Link href="/pages/authors-list"><CustomButton variant="secondary">View All Authors</CustomButton></Link>
          
        </div>
      </div>

      <AuthorGrid
      authors={authors}
      limit={4}
    />
    </div>
  );
}
