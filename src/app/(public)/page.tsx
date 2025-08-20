import Footer from "@/components/layouts/Footer";
import Headers from "@/components/layouts/Header";
import SliderProductComponent from "@/components/modules/home/SliderProductComponent";
import FavoriteAuthors from "@/components/modules/home/FavoriteAuthors";
import HeroSection from "@/components/modules/home/HeroSection";
import NewBooks from "@/components/modules/home/NewBooks";
import OfferBanner from "@/components/modules/home/OfferBanner";
import Products from "@/components/modules/home/PopulerBooks"
import StatisticsComponent from "@/components/modules/home/StatisticsComponent";
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
      <NewBooks layout={"homev1"}/>
      <StatisticsComponent/>
      <Footer/>
    </div>
  );
}
