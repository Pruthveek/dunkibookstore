import NavigationBanner from "@/components/common/NavigationBanner";
import BlogComponent from "@/components/modules/blog/BlogComponent";
export default function page() {
  return (
    <section className="flex flex-col items-center">
      <NavigationBanner
        title="News"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
      />
      <BlogComponent/>
    </section>
  );
}
