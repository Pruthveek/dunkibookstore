"use client";

import { notFound, useParams } from "next/navigation";
import { products } from "@/data/products";
import ProductDetail from "@/components/common/products/ProductDetail";
import BreadCrumb from "@/components/layouts/BreadCrumb";
import ProductDetailBottom from "@/components/common/products/ProductDetailBottom";
import SliderProductComponent from "@/components/modules/home/SliderProductComponent";

export default function ProductPage() {
  const { productSlug } = useParams<{ productSlug: string }>();

  const product = products.find(
    (item) => item.productSlug.toLowerCase() === productSlug.toLowerCase()
  );

  if (!product) return notFound();

  return (
    <>
      <BreadCrumb
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: `${productSlug}`},
        ]}
      />
      <ProductDetail product={product} />
      <ProductDetailBottom/>
      <SliderProductComponent title="You May Also Like" layout="homev2"/>
    </>
  );
}
