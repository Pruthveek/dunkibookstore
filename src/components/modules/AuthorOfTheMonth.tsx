"use client";
import React, { useEffect, useState } from "react";
import BookData from "@/data/productList.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../common/home/productbookcard";
import Image from "next/image";

export default function AuthorOfTheMonth() {
  const [bookData, setBookData] = useState<typeof BookData>([]);

  useEffect(() => {
    setBookData(BookData);
  }, []);

  return (
    <section className="my-12 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl">Author of the Month</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {bookData.map((product) => (
              <SwiperSlide key={product.productId}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative w-full h-80 md:h-auto overflow-hidden">
          <Image
            src="/Images/at4.png"
            alt="Author"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
