"use client";

import { CirclePlus, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  author: string;
  imageUrl: string;
  price: string;
  productSlug: string;
  productId ?: number;
  layout?: "vertical" | "horizontal";
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  author,
  imageUrl,
  price,
  productSlug,
  layout = "vertical",
}) => {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`flex ${
        isHorizontal ? "flex-row max-w-2xl" : "flex-col"
      } bg-white duration-300 overflow-hidden group`}
    >
      <Link
        href={`/products/${productSlug}`}
        className={`${isHorizontal ? "w-1/3" : "w-full"} relative block`}
      >
        <Image
          src={imageUrl}
          alt={title}
          height={isHorizontal ? 200 : 380}
          width={isHorizontal ? 200 : 320}
          className="object-cover w-full h-full"
        />

        {!isHorizontal &&(
          <div
          className="absolute inset-0 flex items-center justify-center gap-3 
            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-300 z-10"
        >
          <button
            onClick={() => console.log("Quick view:", productSlug)}
            className="p-2 bg-white rounded-md hover:bg-red-600 hover:text-white transition"
            title="Quick View"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={() => console.log("Add to Wishlist:", productSlug)}
            className="p-2 bg-white rounded-md hover:bg-red-600 hover:text-white transition"
            title="Add to Wishlist"
          >
            <Heart className="w-5 h-5" />
          </button>
          <button
            onClick={() => console.log("Add to Cart:", productSlug)}
            className="p-2 bg-white rounded-md hover:bg-red-600 hover:text-white transition"
            title="Add to Cart"
          >
            <CirclePlus className="w-5 h-5" />
          </button>
        </div>
        )}
      </Link>

      {/* Product Info */}
      <div
        className={`p-4 ${isHorizontal ? "w-2/3 text-left" : "text-center"}`}
      >
        <p className="text-sm text-gray-500">{author}</p>
        <h4
          className={`text-base mt-1 line-clamp-1 ${
            isHorizontal ? "hover:underline" : ""
          }`}
        >
          <Link href={`/products/${productSlug}`}>{title}</Link>
        </h4>
        <p className="text-base mt-1 text-red-600">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
