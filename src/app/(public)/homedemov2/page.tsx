import Footer from "@/components/layouts/Footer";
import Headers from "@/components/layouts/Header";
import SliderProductComponent from "@/components/modules/SliderProductComponent";
import FeatureList from "@/components/modules/FeatureList";
import HeroSection from "@/components/modules/HeroSection";
import React from "react";
import SalesImageComponet from "@/components/modules/SalesImageComponet";
import OnlineBookCopy from "@/components/modules/OnlineBookCopy";
import BlogList from "@/components/modules/BlogList";

export default function Home() {
  return (
    <div>
      <Headers />
      <HeroSection layout="homev2" />
      <FeatureList/>
      <SliderProductComponent title="Customer's Favourite" />
      <SalesImageComponet/>
      <SliderProductComponent title="Bestselling Books" />
      <OnlineBookCopy/>
      <BlogList title="Read Our Journal" buttontext={"View All Blog"}/>
      <Footer />
    </div>
  );
}
