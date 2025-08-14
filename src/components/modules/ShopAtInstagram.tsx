"use client";
import Link from "next/link";
import productData from "@/data/productList.json";
import { useEffect, useState } from "react";
import ShopInstagramCard from "../common/home/ShopInstagramCard";
export default function ShopAtInstagram() {
  const [bookData, setBookData] = useState<typeof productData>([]);
  useEffect(() => {
    setBookData(productData);
  }, []);
  return (
    <div className="relative group/arrow my-10 px-10">
      <div className="text-center mb-6">
        <div className="text-3xl md:text-5xl mb-4">Shop At Instagram</div>
        <Link href="https://www.instagram.com/pruthvee___2k02/">
          <div className="text-md md:text-lg text-gray-700">
            @ pruthvee___2k02
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 md:flex gap-4 justify-center">
        {bookData.slice(0,6).map((items,index) => (
          <ShopInstagramCard
            key={index}
            productSlug={items.productSlug}
            imageUrl={items.imageUrl}
            title={items.title}
          />
        ))}
      </div>
    </div>
  );
}
