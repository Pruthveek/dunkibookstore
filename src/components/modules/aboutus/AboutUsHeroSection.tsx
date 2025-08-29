import React from "react";
import Image from "next/image";
import CustomButton from "@/components/ui/Buttons";
import Link from "next/link";

export default function AboutUsHeroSection() {
  return (
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/Images/aboutus/library.png"
            alt="library"
            fill
            className="object-cover"
          />

          <div
            className="
      absolute 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      bg-black
      md:top-auto md:left-auto md:-bottom-10 md:-right-16 md:translate-x-0 md:translate-y-0 
      md:bg-red-600 grid justify-center items-center text-center rounded-full
      w-40 h-40 sm:w-56 sm:h-56 transform ease-in-out duration-500
    "
          >
            <p className="text-white text-sm sm:text-base leading-tight">
              Good Experience <br /> In Last <br />
              <span className="font-mono text-5xl sm:text-7xl text-outline">
                10
              </span>
              <br /> Years
            </p>
          </div>
        </div>

        <div className="md:pr-10 md:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-4xl mb-4 sm:mb-8">
            Since 1987, We have established ourselves with a strong reputation.
          </h2>
          <p className="text-lg sm:text-xl mb-2 sm:mb-4">
            Win best Book Shop Award At 2023.
          </p>
          <p className="text-sm sm:text-base mb-6 sm:mb-8">
            Accepting the award Dunki visionary founder expressed gratitude for
            the team&apos;s dedication and the patronage of discerning clients who
            appreciate the finer things in life. This win marks a milestone in
            Dunki&apos;s journey, solidifying its position as a trailblazer in the
            realm of exquisite adornments.
          </p>
          <Link href={"/"}><CustomButton variant="secondary" size="xl">
            Explore More
          </CustomButton></Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="md:pr-10 md:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-4xl mb-4 sm:mb-8">
            “Dunki Are Such Joy To Be Cherished Handled With Pleasure”
          </h2>
          <p className="text-sm sm:text-base mb-6 sm:mb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <p className="text-lg sm:text-xl mb-2 sm:mb-4">
            - JOHN SMITH / FOUNDER
          </p>
        </div>
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/Images/aboutus/ceo.jpg"
            alt="library"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
