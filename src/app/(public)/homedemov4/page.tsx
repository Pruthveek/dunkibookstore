import Footer from "@/components/layouts/Footer";
import Headers from "@/components/layouts/Header";
import FeatureList from "@/components/modules/FeatureList";
import React from "react";
import CategoryHeroSection from "@/components/modules/CategoryHeroSection";
import SliderProductComponent from "@/components/modules/SliderProductComponent";
import OnlineBookCopy from "@/components/modules/OnlineBookCopy";
import BlogList from "@/components/modules/BlogList";
import BrandLogoSlider from "@/components/modules/BrandLogoSlider";
import brandLogos from "@/data/brandLogoData.json";

export default function Home() {
  return (
    <div>
      <Headers />
      <CategoryHeroSection />
      <FeatureList/>
      <SliderProductComponent title="Daily Deals" layout={"homev4"}/>
      <OnlineBookCopy/>
      <BlogList title={"Read Our Journal"} buttontext={"View More Blog"}/>
      <BrandLogoSlider logos={brandLogos} />
      <Footer />
    </div>
  );
}
