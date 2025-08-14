import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type NewBookBannerCardProps = {
  bgimage: string;
  title: string;
  heading: string;
  linkurl: string;
};

const NewBookBannerCard: React.FC<NewBookBannerCardProps> = ({
  bgimage,
  title,
  heading,
  linkurl,
}) => {
  return (
    <div className="relative h-[450px] md:h-[650px] overflow-hidden">
      <Image
        src={bgimage}
        alt={title}
        fill
        className="bg-cover bg-center"
        priority
      />

      <div className="absolute top-4 md:top-8 inset-0  flex flex-col  text-center text-white p-4">
        <p className="text-xs md:text-base">{title}</p>
        <p className="text-lg md:text-4xl  mb-2">{heading}</p>
        <Link
          href={linkurl}
          className="px-4 py-2 underline cursor-pointer transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default NewBookBannerCard;
