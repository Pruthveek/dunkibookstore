import Footer from "@/components/layouts/Footer";
import Headers from "@/components/layouts/Header";
import FeatureList from "@/components/modules/home/FeatureList";
import React from "react";
import CategoryHeroSection from "@/components/modules/home/CategoryHeroSection";
import SliderProductComponent from "@/components/modules/home/SliderProductComponent";
import OnlineBookCopy from "@/components/modules/home/OnlineBookCopy";
import BlogList from "@/components/modules/home/BlogList";
import BrandLogoSlider from "@/components/modules/home/BrandLogoSlider";
import brandLogos from "@/data/brandLogoData.json";

export default function Home() {
  return (
    <div>
      <Headers />
      <CategoryHeroSection />
      <FeatureList layout={"icon"}/>
      <SliderProductComponent title="Daily Deals" layout={"homev4"}/>
      <OnlineBookCopy/>
      <BlogList title={"Read Our Journal"} buttontext={"View More Blog"}/>
      <BrandLogoSlider logos={brandLogos} />
      <Footer />
    </div>
  );
}
