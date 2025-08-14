"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../common/home/productbookcard";
import productData from "@/data/productList.json";
import CustomButton from "../ui/Buttons";

type SliderProductComponentProps = {
  title: string;
  layout ?: "homev1" | "homev2" | "homev3" | "homev4";
};

const SliderProductComponent: React.FC<SliderProductComponentProps> = ({
  title,
  layout,
}) => {
  const [products, setProducts] = useState<typeof productData>([]);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const ishomev4 = layout === "homev4";

  useEffect(() => {
    setProducts(productData);
  }, []);

  const filteredProducts = products.filter((product) => product.DealsOfTheWeek);

  return (
    <div className="relative group/arrow my-10 px-10">
      <div className="md:flex justify-between items-center mb-6">
        <div className="text-3xl md:text-5xl">{title}</div>
        <div className="flex mt-4 md:mt-0">
          {ishomev4 ? (
            <CustomButton variant="normal">
              00 Days 00 Hours 00 Min 00 Sec
            </CustomButton>
          ) : (
            <CustomButton variant="secondary">View All Books</CustomButton>
          )}
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
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
              // @ts-ignore - mutate internal params then re-init navigation
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              // re-init navigation to pick up the new elements
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }, 0);
        }}
      >
        {filteredProducts.map((product) => (
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
                   opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 hover:text-white hover:cursor-pointer z-10 "
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

export default SliderProductComponent;
