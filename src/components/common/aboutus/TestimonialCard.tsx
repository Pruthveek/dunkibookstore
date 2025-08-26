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
    <div className="relative w-full sm:w-[90%] md:w-fit border border-gray-300 m-3 px-6 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12">
      <div className="absolute bottom-8 right-8">
        {/* your svg */}
      </div>

      <div className="relative mx-auto size-[80px] sm:size-[100px] rounded-full overflow-hidden">
        <Image src={image} alt="client" fill className="object-cover" />
      </div>

      <div className="text-center py-6 sm:py-10">
        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-4">{quote}</p>
        <p className="text-sm sm:text-md md:text-lg mb-2 sm:mb-4 uppercase">
          {name} - <span className="text-gray-500 uppercase">{location}</span>
        </p>
      </div>
    </div>
  );
}
