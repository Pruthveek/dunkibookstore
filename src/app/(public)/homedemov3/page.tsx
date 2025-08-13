import Footer from "@/components/layouts/Footer";
import Headers from "@/components/layouts/Header";
import SliderProductComponent from "@/components/modules/SliderProductComponent";
import FavoriteAuthors from "@/components/modules/FavoriteAuthors";
import FeatureList from "@/components/modules/FeatureList";
import HeroSection from "@/components/modules/HeroSection";
import NewBooks from "@/components/modules/NewBooks";
import OfferBanner from "@/components/modules/OfferBanner";
import Products from "@/components/modules/PopulerBooks";
import StatisticsComponent from "@/components/modules/StatisticsComponent";
import React from "react";
import SalesImageComponet from "@/components/modules/SalesImageComponet";
import OnlineBookCopy from "@/components/modules/OnlineBookCopy";
import BlogList from "@/components/modules/BlogList";

export default function Home() {
  return (
    <div>
      <Headers />
      <HeroSection layout="homev3" />
      <FeatureList/>
      <SliderProductComponent title="Customer's Favourite" />
      <SalesImageComponet/>
      <SliderProductComponent title="Bestselling Books" />
      <OnlineBookCopy/>
      <BlogList title="Read Our Journal"/>
      <Footer />
    </div>
  );
}
