"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlideContent from "@/components/common/home/slideContent";
import slides from "@/data/heroSectionData.json";

import "swiper/css";
import "swiper/css/navigation";

type HeroSectionProps = {
  layout?: "homev1" | "homev2" | "homev3";
};

const HeroSection: React.FC<HeroSectionProps> = ({ layout = "homev1" }) => {
  const ishomev2 = layout === "homev2";
  const ishomev3 = layout === "homev3";

  const slideData =
    layout === "homev2" ? slides.v2 :
    layout === "homev3" ? slides.v3 :
    slides.v1;

  return (
    <div
      className={`relative w-full ${
        ishomev2 ? "bg-[#FCECEC]" : "bg-[#00453E]"
      } ${ishomev3 ? "bg-red-600" : ""}`}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="group"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent {...slide} layout={layout} />
          </SwiperSlide>
        ))}
        <button className={`hero-prev absolute left-4 top-1/2 -translate-y-1/2 text-white  p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition  z-10 ${ishomev3 ? "bg-black hover:bg-white hover:text-red-600" : "bg-black hover:bg-red-600"}`}>
          <ChevronLeft size={24} />
        </button>
        <button className={`hero-next absolute right-4 top-1/2 -translate-y-1/2 text-white  p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition  z-10 ${ishomev3 ? "bg-black hover:bg-white hover:text-red-600" : "bg-black hover:bg-red-600"}`}>
          <ChevronRight size={24} />
        </button>
      </Swiper>
    </div>
  );
};

export default HeroSection;
