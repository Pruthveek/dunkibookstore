"use client";

import { useState } from "react";
import CustomButton from "@/components/ui/Buttons";
import Timer from "@/components/ui/Timer";
import { CirclePlus, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/lib/features/cartSlice";
import { useAppDispatch } from "@/lib/store";
import ProductQuickViewModal from "@/components/models/ProductQuickViewModal";

type ProductCardProps = {
  title: string;
  author: string;
  imageUrl: string;
  price: number;
  productSlug: string;
  description?: string;
  productId?: number;
  sale?: boolean;
  color?: string[];
  layout?: "vertical" | "horizontal" | "detailhorizontal";
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  author,
  imageUrl,
  price,
  productSlug,
  description,
  sale,
  productId,
  color=[],
  layout = "vertical",
}) => {
  const dispatch = useAppDispatch();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const isVertical = layout === "vertical";
  const isHorizontal = layout === "horizontal";
  const isDetailHorizontal = layout === "detailhorizontal";

  const buildCartItem = () => ({
    id: String(productId ?? productSlug),
    title,
    author,
    imageUrl,
    price: Number(price),
    productSlug,
    quantity: 1,
    variant: "",
  });

  const handleQuickViewOpen = () => {
    setIsQuickViewOpen(true);
  };

  return (
    <>
      <div
        className={`group flex ${
          isHorizontal || isDetailHorizontal ? "flex-col sm:max-w-3xl sm:flex-row" : "flex-col"
        } w-full overflow-hidden bg-white duration-300`}
      >
        <div
          className={`${
            isHorizontal || isDetailHorizontal ? "w-full sm:w-1/3" : "w-full"
          } relative block`}
        >
          <div className="relative h-full w-full">
            <Image
              src={imageUrl}
              alt={title}
              height={isHorizontal || isDetailHorizontal ? 220 : 380}
              width={isHorizontal || isDetailHorizontal ? 220 : 320}
              className="h-auto w-full object-cover sm:h-full"
            />
            {sale && (isVertical || isDetailHorizontal) && (
              <>
                <div className="absolute right-2 top-2 rounded-full bg-red-600 px-2 text-sm text-white">
                  SALE
                </div>
                <div className="absolute inset-0 m-2 hidden items-end justify-center group-hover:flex">
                  <Timer variant="secondary" />
                </div>
              </>
            )}
          </div>
          {!isHorizontal && !isDetailHorizontal && (
            <div
              className="absolute opacity-0 inset-0 z-10 flex translate-y-4 items-center justify-center gap-3
            transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 "
            >
              <button
                onClick={handleQuickViewOpen}
                className="cursor-pointer rounded-md bg-white p-2 transition hover:bg-red-600 hover:text-white"
                title="Quick View"
              >
                <Eye className="h-5 w-5" />
              </button>
              <button
                onClick={() => console.log("Add to Wishlist:", productSlug)}
                className="cursor-pointer rounded-md bg-white p-2 transition hover:bg-red-600 hover:text-white"
                title="Add to Wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>
              <button
                onClick={() => dispatch(addToCart(buildCartItem()))}
                className="cursor-pointer rounded-md bg-white p-2 transition hover:bg-red-600 hover:text-white"
                title="Add to Cart"
              >
                <CirclePlus className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
        <Link href={`/products/${productSlug}`}>
          <div
            className={`p-4 ${
              isHorizontal || isDetailHorizontal
                ? "w-full text-left sm:w-2/3"
                : "text-center"
            }`}
          >
            <p className="text-sm text-gray-500">{author}</p>
            <h4
              className={`mt-1 line-clamp-1 text-base ${
                isHorizontal || isDetailHorizontal ? "hover:underline" : ""
              }`}
            >
              {title}
            </h4>

            {isDetailHorizontal ? (
              <>
                <p className="mb-2 text-sm">{description}</p>
                <p className="text-lg font-semibold text-red-600">
                  &pound;{price}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3 sm:flex-nowrap">
                  <CustomButton variant="secondary" size="lg">
                    <Heart size={26} />
                  </CustomButton>
                  <CustomButton
                    variant="secondary"
                    size="lg"
                    onClick={() => dispatch(addToCart(buildCartItem()))}
                  >
                    Add To Cart
                  </CustomButton>
                </div>
              </>
            ) : (
              <>
                <p className="mt-1 text-base text-red-600">&pound;{price}</p>
              </>
            )}
          </div>
        </Link>
      </div>
      <ProductQuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={{
          id: productId ?? productSlug,
          title,
          author,
          imageUrl,
          price,
          color,
          description: description,
          productSlug,
        }}
      />
    </>
  );
};

export default ProductCard;