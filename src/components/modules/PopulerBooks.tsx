'use client';

import React, { useEffect, useState } from "react";
import ProductCard from "../common/home/productbookcard";
import productData from "@/data/productList.json";

export default function Products() {
  const [products, setProducts] = useState<typeof productData>([]);
  const [activeFilter, setActiveFilter] = useState<"FeaturedBooks" | "BestSellers" | "MostViewed">("FeaturedBooks");

  useEffect(() => {
    setProducts(productData);
  }, []);

  const filteredProducts = products.filter((product) => product[activeFilter]);

  const getButtonStyle = (filter: typeof activeFilter) =>
    `px-4 py-2 ${
      activeFilter === filter ? "bg-red-600 text-white" : "bg-gray-200 text-black hover:bg-gray-300"
    }`;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 my-10 px-10 ">
      <div className="md:flex justify-between w-full items-center">
        <div className="text-3xl md:text-5xl">Popular Books</div>
        <div className="flex flex-wrap mt-4 md:mt-0">
          <button className={getButtonStyle("FeaturedBooks")} onClick={() => setActiveFilter("FeaturedBooks")}>
            Featured Books
          </button>
          <button className={getButtonStyle("BestSellers")} onClick={() => setActiveFilter("BestSellers")}>
            Best Sellers
          </button>
          <button className={getButtonStyle("MostViewed")} onClick={() => setActiveFilter("MostViewed")}>
            Most Viewed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-9 w-full">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.productId}
              title={product.title}
              author={product.author}
              imageUrl={product.imageUrl}
              price={product.price}
              productSlug={product.productSlug}
              productId={product.productId}
              layout="vertical"
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No products found.</div>
        )}
      </div>
    </div>
  );
}
