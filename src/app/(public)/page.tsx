import Footer from "@/components/layouts/Footer";
import Headers from "@/components/layouts/Header";
import SliderProductComponent from "@/components/modules/SliderProductComponent";
import FavoriteAuthors from "@/components/modules/FavoriteAuthors";
import HeroSection from "@/components/modules/HeroSection";
import NewBooks from "@/components/modules/NewBooks";
import OfferBanner from "@/components/modules/OfferBanner";
import Products from "@/components/modules/PopulerBooks"
import StatisticsComponent from "@/components/modules/StatisticsComponent";
import React from "react";
export default function Home() {

  return (
    <div >
      <Headers/>
      <HeroSection/>
      <Products/>
      <OfferBanner/>
      <SliderProductComponent title="Deals Of The Week"/>
      <FavoriteAuthors/>
      <NewBooks/>
      <StatisticsComponent/>
      <Footer/>
    </div>
  );
}
