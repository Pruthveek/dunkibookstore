import NavigationBanner from "@/components/common/NavigationBanner";
import AboutUsHeroSection from "@/components/modules/aboutus/AboutUsHeroSection";
import ClientTestimonial from "@/components/modules/aboutus/ClientTestimonial";
import JoinComunity from "@/components/modules/aboutus/JoinComunity";
import FeatureList from "@/components/modules/home/FeatureList";
export default function page() {
  return (
    <section className="flex flex-col items-center">
      <NavigationBanner
        title="About Us"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutUsHeroSection />
      <ClientTestimonial />
      <JoinComunity/>
      <FeatureList layout={"image"}/>
    </section>
  );
}
