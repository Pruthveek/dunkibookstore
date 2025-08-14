"use client";

import React from "react";
import offerData from "@/data/offerData.json";
import OfferBannerCard from "../common/home/offerBannerCard";

type OfferDataTS = {
  id: number;
  bgImage: string;
  offerDescription: string;
  shopNowLink: string;
  offerTime: string;
  textColor: string;
};

export default function OfferBanner() {
  return (
    <div className="w-full h-[400px] md:h-[250px] grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 px-10  my-9">
      {offerData.map((offer: OfferDataTS) => (
        <OfferBannerCard
          key={offer.id}
          bgImage={offer.bgImage}
          offerDescription={offer.offerDescription}
          shopNowLink={offer.shopNowLink}
          offerTime={offer.offerTime}
          textColor={offer.textColor}
        />
      ))}
    </div>
  );
}
