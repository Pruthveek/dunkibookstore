"use client";

import TestimonialCard from "@/components/common/aboutus/TestimonialCard";
import testimonials from "@/data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

export default function Page() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="flex flex-col items-center">
      <div className="md:flex justify-between items-center mb-6">
        <div className="text-3xl md:text-5xl">What Our Clients Say</div>
      </div>

      <div className="section-container relative group/arrow my-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
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
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!h-auto">
              <TestimonialCard
                image={testimonial.image}
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
              />
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
    </section>
  );
}


