'use client';

import React, { useEffect, useState } from "react";
import CustomButton from "../ui/Buttons";
import authorData from "@/data/authorData.json"
import AuthorGrid from "../common/home/AuthorGrid";


export default function FavoriteAuthors() {
  const [authors, setAuthors] = useState<typeof authorData>([]);

  useEffect(() => {
    setAuthors(authorData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 my-10 px-10 ">
      <div className="md:flex justify-between w-full items-center">
        <div className="text-3xl md:text-5xl">Favorite Authors</div>
        <div className="flex flex-wrap mt-4 md:mt-0">
          <CustomButton variant="secondary">View All Authors</CustomButton>
        </div>
      </div>

      <AuthorGrid
      authors={authors}
      limit={4}
    />
    </div>
  );
}
