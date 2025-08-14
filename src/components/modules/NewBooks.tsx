"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../common/home/productbookcard";
import productData from "@/data/productList.json";
import NewBookBannerCard from "../common/home/NewBookBannerCard";
import newYearBookData from "@/data/newYearBookData.json";

type NewBooksProp = {
  layout: "homev1" | "homev3";
};

const NewBooks: React.FC<NewBooksProp> = ({ layout }) => {
  const [products, setProducts] = useState<typeof productData>([]);
  const [bannerData, setBannerData] = useState<
    typeof newYearBookData.pagev1 | typeof newYearBookData.pagev2
  >([]);

  useEffect(() => {
    setProducts(productData);
    if (layout === "homev3") {
      setBannerData(newYearBookData.pagev2);
    } else {
      setBannerData(newYearBookData.pagev1);
    }
  }, [layout]);

  return (
    <div className="flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-5 gap-4 my-10 px-10">
      <div className="md:col-span-2">
        {bannerData.length > 0 && (
          <NewBookBannerCard
            bgimage={bannerData[0].bgimage}
            title={bannerData[0].title}
            heading={bannerData[0].heading}
            linkurl={bannerData[0].linkurl}
          />
        )}
      </div>

      <div className="grid lg:col-span-3 grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {products.length > 0 ? (
          products.slice(0, 7).map((product) => (
            <ProductCard key={product.productId} {...product} layout="horizontal" />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default NewBooks;
