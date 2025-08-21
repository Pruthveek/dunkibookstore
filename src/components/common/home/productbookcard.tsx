"use client";

import CustomButton from "@/components/ui/Buttons";
import Timer from "@/components/ui/Timer";
import { CirclePlus, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  author: string;
  imageUrl: string;
  price: string;
  productSlug: string;
  discription?: string;
  productId?: number;
  sale?: boolean;
  layout?: "vertical" | "horizontal" | "detailhorizontal";
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  author,
  imageUrl,
  price,
  productSlug,
  discription,
  sale,
  layout = "vertical",
}) => {
  const isVertical = layout === "vertical";
  const isHorizontal = layout === "horizontal";
  const isDetailHorizontal = layout === "detailhorizontal";

  return (
    <div
      className={`flex ${
        isHorizontal || isDetailHorizontal
          ? "flex-col sm:flex-row sm:max-w-3xl"
          : "flex-col"
      } bg-white duration-300 overflow-hidden group w-full`}
    >
      <Link
        href={`/products/${productSlug}`}
        className={`${
          isHorizontal || isDetailHorizontal
            ? "w-full sm:w-1/3"
            : "w-full"
        } relative block`}
      >
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={title}
            height={isHorizontal || isDetailHorizontal ? 220 : 380}
            width={isHorizontal || isDetailHorizontal ? 220 : 320}
            className="object-cover w-full h-auto sm:h-full"
          />

          {/* SALE + Timer */}
          {sale && (isVertical || isDetailHorizontal) && (
            <>
              <div className="bg-red-600 text-sm px-2 rounded-full text-white absolute top-2 right-2">
                SALE
              </div>
              <div className="absolute inset-0 flex justify-center items-end m-2 group-hover:hidden">
                <Timer variant="secondary" />
              </div>
            </>
          )}
        </div>

        {/* Hover actions only for vertical */}
        {!isHorizontal && !isDetailHorizontal && (
          <div
            className="absolute inset-0 flex items-center justify-center gap-3 
            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-300 z-10"
          >
            <button
              onClick={() => console.log("Quick view:", productSlug)}
              className="p-2 rounded-md bg-white hover:bg-red-600 hover:text-white transition"
              title="Quick View"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={() => console.log("Add to Wishlist:", productSlug)}
              className="p-2 rounded-md bg-white hover:bg-red-600 hover:text-white transition"
              title="Add to Wishlist"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              onClick={() => console.log("Add to Cart:", productSlug)}
              className="p-2 rounded-md bg-white hover:bg-red-600 hover:text-white transition"
              title="Add to Cart"
            >
              <CirclePlus className="w-5 h-5" />
            </button>
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div
        className={`p-4 ${
          isHorizontal || isDetailHorizontal
            ? "w-full sm:w-2/3 text-left"
            : "text-center"
        }`}
      >
        <p className="text-sm text-gray-500">{author}</p>
        <h4
          className={`text-base mt-1 line-clamp-1 ${
            isHorizontal || isDetailHorizontal ? "hover:underline" : ""
          }`}
        >
          <Link href={`/products/${productSlug}`}>{title}</Link>
        </h4>

        {/* LAYOUTS */}
        {isDetailHorizontal ? (
          <>
            <p className="text-sm mb-2">{discription}</p>
            <p className="text-lg font-semibold text-red-600">{price}</p>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mt-3">
              <CustomButton
                variant="secondary"
                size="lg"
                
              >
                <Heart size={26} />
              </CustomButton>
              <CustomButton
                variant="secondary"
                size="lg"
                
              >
                Add To Cart
              </CustomButton>
            </div>
          </>
        ) : (
          <>
            <p className="text-base mt-1 text-red-600">{price}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
