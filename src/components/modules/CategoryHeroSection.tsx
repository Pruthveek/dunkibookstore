"use client";

import categoryData from "@/data/categoryData.json";
import CategoryCard from "@/components/common/home/CategoryCard";

export default function CategoryHeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 px-10">
      <div className="flex flex-col gap-4 md:gap-6">
        <CategoryCard {...categoryData[0]} size="large" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <CategoryCard {...categoryData[1]} size="small" />
          <CategoryCard {...categoryData[2]} size="small" />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <CategoryCard {...categoryData[3]} size="small" />
          <CategoryCard {...categoryData[4]} size="small" />
        </div>
        <CategoryCard {...categoryData[5]} size="large" />
      </div>
    </div>
  );
}
