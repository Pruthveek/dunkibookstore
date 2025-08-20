import React from "react";
import Image from "next/image";
interface TestimonialCardProps {
  image: string;
  quote: string;
  name: string;
  location: string;
}

export default function TestimonialCard({
  image,
  quote,
  name,
  location,
}: TestimonialCardProps) {
  return (
    <div className="relative border border-gray-200 m-5 px-12 pt-12 ">
      <div className="absolute bottom-8 right-8">
        <svg
          width="58"
          height="50"
          viewBox="0 0 58 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z"
            fill="#ECE9E9"
          ></path>
        </svg>
      </div>
      <div className="relative mx-auto size-[100px] rounded-full overflow-hidden ">
        <Image src={image} alt="client" fill className="bg-fill"></Image>
      </div>
      <div className="text-center py-10">
        <p className="text-lg sm:text-xl mb-2 sm:mb-4">{quote}</p>
        <p className="text-md sm:text-lg mb-2 sm:mb-4 uppercase ">
          {name} - <span className="text-gray-500 uppercase">{location}</span>
        </p>
      </div>
    </div>
  );
}
