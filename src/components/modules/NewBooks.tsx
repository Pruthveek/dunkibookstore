"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from '../blocks/home/productbookcard';
import productData from "@/data/productList.json";
import NewBookBannerCard from '../blocks/home/NewBookBannerCard';
export default function NewBooks() {
  const [product, setProduct]=useState<typeof productData>([]);
  useEffect(()=>{
    setProduct(productData)
  })
  return (
    <div className='flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-5 gap-4 justify-center space-y-4 my-10 px-10 '>
      <div className='md:col-span-2'>
        <NewBookBannerCard bgimage={'/Images/bnr-img-w-prod_260687a6-3a3b-4a43-93f2-c88e96cb1076_2048x2048.png'} title={'NEW YEAR - NEW BOOKS'} heading={'The 19 Best New Books of January'} linkurl={'/collections/best-sellers'}/>
      </div>
      <div className="grid lg:col-span-3 grid-cols-1 sm:grid-cols-2 gap-4  w-full">
        {product.length > 0  ? (
          product.slice(0, 7).map((product) => (
            <ProductCard
              key={product.productId}
              title={product.title}
              author={product.author}
              imageUrl={product.imageUrl}
              price={product.price}
              productSlug={product.productSlug}
              productId={product.productId}
              layout="horizontal"
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No products found.</div>
        )}
      </div>
    </div>
  )
}
