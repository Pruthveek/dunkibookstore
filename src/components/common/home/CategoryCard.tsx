"use client";

import CustomButton from "@/components/ui/Buttons";
import Image from "next/image";
import Link from "next/link";

export type CategoryCardProps = {
  slug: string;
  title: string;
  price: string;
  bgImage: string;
  size?: "large" | "small";
};

export default function CategoryCard({
  slug,
  title,
  price,
  bgImage,
  size = "large",
}: CategoryCardProps) {
  const heightClass =
    size === "large"
      ? "h-48 sm:h-60 lg:h-80"
      : "h-48 sm:h-60 lg:h-60";

  return (
    <Link
      href={`/${slug}`}
      className={`group relative overflow-hidden h- shadow-md hover:shadow-lg transition-all duration-500 ${heightClass}`}
    >
      <Image
        src={bgImage}
        alt={title}
        fill
        className="bg-fit group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 transition-colors duration-500" />
      <div className="absolute bottom-6 left-4 text-white">
        <h3 className="text-lg sm:text-3xl mb-4">{title}</h3>
        <CustomButton variant={"price"}>{price}</CustomButton>
      </div>
    </Link>
  );
}
