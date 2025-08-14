import Footer from "@/components/layouts/Footer";
import Headers from "@/components/layouts/Header";
import FeatureList from "@/components/modules/FeatureList";
import HeroSection from "@/components/modules/HeroSection";
import NewBooks from "@/components/modules/NewBooks";
import OfferBanner from "@/components/modules/OfferBanner";
import React from "react";
import AuthorOfTheMonth from "@/components/modules/AuthorOfTheMonth";
import NewReleaseBooks from "@/components/modules/NewReleaseBooks";
import ShopAtInstagram from "@/components/modules/ShopAtInstagram";

export default function Home() {
  return (
    <div>
      <Headers />
      <HeroSection layout="homev3" />
      <FeatureList/>
      <AuthorOfTheMonth/>
      <OfferBanner/>
      <NewReleaseBooks title={"New Release Books"}/>
      <NewBooks layout={"homev3"}/>
      <ShopAtInstagram/>
      <Footer />
    </div>
  );
}
