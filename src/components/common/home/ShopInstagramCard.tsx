"use client";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ShopInstagramCardProps = {
  productSlug: string;
  imageUrl: string;
  title: string;
};

const ShopInstagramCard: React.FC<ShopInstagramCardProps> = ({
  productSlug,
  imageUrl,
  title,
}) => {
  return (
    <div className="flex-col bg-white duration-300 overflow-hidden group">
      <Link
        href={`/products/${productSlug}`}
        className="w-full relative block h-full top-0 left-0 bg-black opacity-100 z-10 transition-opacity duration-300 group-hover:opacity-50"
      >
        <Image
          src={imageUrl}
          alt={title}
          height={300}
          width={300}
          className="object-cover w-full h-full group-hover:opacity-30"
        />

        <div
          className="absolute inset-0 flex items-center justify-center gap-3 
            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-300 z-10"
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("Quick view:", productSlug);
            }}
            className="transition"
            title="Quick View"
          >
            <Instagram size={30} color="#fff"/>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ShopInstagramCard;
