"use client";

import CustomButton from "@/components/ui/Buttons";
import Image from "next/image";
import Link from "next/link";

export type CategoryCardProps = {
  slug?: string;
  title: string;
  price: string;
  bgImage: string;
  size?: "large" | "small";
};

export default function CategoryCard({
  title,
  price,
  bgImage,
  size = "large",
}: CategoryCardProps) {
  const heightClass =
    size === "large"
      ? "h-64 sm:h-80 lg:h-80"
      : "h-60 sm:h-60 lg:h-60";
  const textClass =
    size === "large"
      ? "absolute top-6 left-4"
      : "absolute bottom-6 left-4";

  return (
    <Link
      // href={`/${slug}`}
      href={`/collections/all`}
      className={`group relative overflow-hidden h-shadow-md hover:shadow-lg transition-all duration-500 ${heightClass}`}
    >
      <Image
        src={bgImage}
        alt={title}
        fill
        className="group-hover:scale-105 transition-all ease-in-out  duration-500"
      />
      <div className={` text-white ${textClass}`}>
        <h3 className="text-lg sm:text-3xl mb-4 ">{title}</h3>
        <CustomButton variant={"price"}>{price}</CustomButton>
      </div>
    </Link>
  );
}
