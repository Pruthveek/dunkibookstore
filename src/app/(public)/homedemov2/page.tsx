import Footer from "@/components/layouts/Footer";
import Headers from "@/components/layouts/Header";
import SliderProductComponent from "@/components/modules/home/SliderProductComponent";
import FeatureList from "@/components/modules/home/FeatureList";
import HeroSection from "@/components/modules/home/HeroSection";
import React from "react";
import SalesImageComponet from "@/components/modules/home/SalesImageComponet";
import OnlineBookCopy from "@/components/modules/home/OnlineBookCopy";
import BlogList from "@/components/modules/home/BlogList";

export default function Home() {
  return (
    <div>
      <Headers/>
      <HeroSection layout="homev2" />
      <FeatureList layout={"icon"}/>
      <SliderProductComponent title="Customer's Favourite" />
      <SalesImageComponet/>
      <SliderProductComponent title="Bestselling Books" />
      <OnlineBookCopy/>
      <BlogList title="Read Our Journal" buttontext={"View All Blog"}/>
      <Footer/>
    </div>
  );
}
