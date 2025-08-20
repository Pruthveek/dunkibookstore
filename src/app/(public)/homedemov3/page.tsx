import Footer from "@/components/layouts/Footer";
import Headers from "@/components/layouts/Header";
import FeatureList from "@/components/modules/home/FeatureList";
import HeroSection from "@/components/modules/home/HeroSection";
import NewBooks from "@/components/modules/home/NewBooks";
import OfferBanner from "@/components/modules/home/OfferBanner";
import React from "react";
import AuthorOfTheMonth from "@/components/modules/home/AuthorOfTheMonth";
import NewReleaseBooks from "@/components/modules/home/NewReleaseBooks";
import ShopAtInstagram from "@/components/modules/home/ShopAtInstagram";

export default function Home() {
  return (
    <div>
      <Headers />
      <HeroSection layout="homev3" />
       <FeatureList layout={"icon"}/>
      <AuthorOfTheMonth/>
      <OfferBanner/>
      <NewReleaseBooks title={"New Release Books"}/>
      <NewBooks layout={"homev3"}/>
      <ShopAtInstagram/>
      <Footer />
    </div>
  );
}
