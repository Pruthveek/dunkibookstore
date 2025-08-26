import Footer from "@/components/layouts/Footer";
import SliderProductComponent from "@/components/modules/home/SliderProductComponent";
import FeatureList from "@/components/modules/home/FeatureList";
import HeroSection from "@/components/modules/home/HeroSection";
import React from "react";
import SalesImageComponet from "@/components/modules/home/SalesImageComponet";
import OnlineBookCopy from "@/components/modules/home/OnlineBookCopy";
import BlogList from "@/components/modules/home/BlogList";
import Header from "@/components/layouts/Header";

export default function Home() {
  return (
    <div>
      <Header 
  variant="second" 
  offerBarBg="#E7000B" 
  offerBarText="white" 
/>

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
