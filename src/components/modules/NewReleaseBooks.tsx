"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import ProductCard from "../common/home/productbookcard";
import productData from "@/data/productList.json";

type SliderProductComponentProps = {
  title: string;
};

const NewReleaseBooks: React.FC<SliderProductComponentProps> = ({ title }) => {
  const [products, setProducts] = useState<typeof productData>([]);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <div className="relative group/arrow my-10 px-10">
      <div className="text-center mb-6">
        <div className="text-3xl md:text-5xl">{title}</div>
      </div>

      <Swiper
        modules={[Navigation, Grid]}
        spaceBetween={20}
        slidesPerView={1}
        grid={{ rows: 2, fill: "row" }}
        breakpoints={{
          640: { slidesPerView: 2, grid: { rows: 2, fill: "row" } },
          768: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
          1024: { slidesPerView: 4, grid: { rows: 2, fill: "row" } },
        }}
        onBeforeInit={(swiper: any) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (prevRef.current && nextRef.current) {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }, 0);
        }}
      >
        {products.slice(0,8).map((product) => (
          <SwiperSlide key={product.productId}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        type="button"
        aria-label="Previous"
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white 
                   opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 hover:text-white hover:cursor-pointer z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        ref={nextRef}
        type="button"
        aria-label="Next"
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white 
                   opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 hover:text-white hover:cursor-pointer z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default NewReleaseBooks;
