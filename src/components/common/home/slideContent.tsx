import CustomButton from "@/components/ui/Buttons";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface SlideProps {
  tag?: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonHref: string;
  isreverse?: boolean;
  layout: "homev1" | "homev2" | "homev3";
}

const Slide: React.FC<SlideProps> = ({
  tag,
  title,
  description,
  image,
  buttonText,
  buttonHref,
  isreverse = false,
  layout,
}) => {
  const ishomev2 = layout === "homev2";
  const ishomev3 = layout === "homev3";

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 h-full w-full px-4 md:px-30 gap-6
        ${ishomev3 ? "py-0" : "py-10"}
      `}
    >
      {/* Text Section */}
      <div
        className={`text-center flex flex-col justify-center space-y-4 max-w-md
          ${ishomev2 ? "md:text-center" : "md:text-left"}
          ${ishomev3 ? (isreverse ? "md:text-left" : "md:text-right") : ""}
          ${isreverse ? "md:order-2" : "md:order-1"}
        `}
      >
        {tag && <p className="text-white text-2xl">{tag}</p>}
        <h2
          className={`text-3xl ${
            ishomev2 ? "text-red-600" : "text-white md:text-5xl"
          }`}
        >
          {title}
        </h2>
        <p
          className={`${
            ishomev2
              ? "font-bold text-3xl md:text-5xl text-black"
              : "text-base md:text-xl text-white"
          }`}
        >
          {description}
        </p>
        <Link href={buttonHref}>
          <CustomButton size="lg" variant={ishomev3 ? "third" : "opposithover"}>
            {buttonText}
          </CustomButton>
        </Link>
      </div>

      {/* Image Section */}
      <div
        className={`flex justify-center 
          ${ishomev3 ? "md:h-[600px] md:w-[500px]" : "md:h-[500px] md:w-[500px]"}
          ${isreverse ? "md:justify-start md:order-1" : "md:justify-end md:order-2"}
        `}
      >
        <Image
          src={image}
          alt={title}
          height={500}
          width={500}
          className={`w-auto object-contain ${
            ishomev3 ? "max-h-[600px]" : "max-h-[500px]"
          }`}
        />
      </div>
    </div>
  );
};

export default Slide;
