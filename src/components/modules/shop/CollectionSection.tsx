"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import CollectionData from "@/data/collectionData.json";
import CollectionCard from "@/components/common/shop/CollectionCard";

export default function CollectionSection() {
  const [collections, setCollections] = useState<typeof CollectionData>([]);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setCollections(CollectionData);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 my-10">
      <div className="relative group/arrow">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(() => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
        >
          {collections.map((col) => (
            <SwiperSlide key={col.id}>
              <CollectionCard
                image={col.image}
                title={col.title}
                link={col.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev / Next buttons */}
        <button
          ref={prevRef}
          type="button"
          aria-label="Previous"
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white 
                     opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 hover:text-white hover:cursor-pointer z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          ref={nextRef}
          type="button"
          aria-label="Next"
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white 
                     opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 hover:text-white hover:cursor-pointer z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

