import Link from "next/link";
import Image from "next/image";
import React from "react";

interface OfferBannerProps {
  bgImage: string;
  offerDescription: string;
  shopNowLink: string;
  offerTime: string;
  textColor: string;
}

const OfferBannerCard: React.FC<OfferBannerProps> = ({
  bgImage,
  offerDescription,
  shopNowLink,
  offerTime,
  textColor,
}) => {
  return (
    <div className={`${textColor}`}>
    <div className="relative group overflow-hidden h-full w-full px-6 py-10">
      <Link href={shopNowLink}>
        <Image
          src={bgImage}
          alt="bg-image"
          width={500}
          height={300}
          className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-110 z-0"
        />
      </Link>

      <div className="relative z-10 space-y-3">
        <h3 className="text-lg">{offerTime}</h3>
        <h2 className="text-3xl md:text-5xl ">{offerDescription}</h2>
        <Link href={shopNowLink} className="text-md underline">
          Shop Now
        </Link>
      </div>
    </div>
    </div>
  );
};

export default OfferBannerCard;
