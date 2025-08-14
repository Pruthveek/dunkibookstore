"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export type BrandLogo = {
  src: string;
  alt: string;
  link?: string;
};

type BrandLogoSliderProps = {
  logos: BrandLogo[];
  className?: string;
};

export default function BrandLogoSlider({ logos, className = "" }: BrandLogoSliderProps) {
  if (!logos?.length) return null;

  return (
    <div className={`brand-logo-slider bg-[#FAF4EB] py-6 ${className}`}>
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={logo.link || "#"}
                target={logo.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="relative h-20 sm:h-24 w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 400px"
                    priority={idx < 3}
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
