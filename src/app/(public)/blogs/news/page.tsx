import BreadCrumb from "@/components/layouts/BreadCrumb";
import BlogComponent from "@/components/modules/blog/BlogComponent";
export default function page() {
  return (
    <section className="flex flex-col items-center">
      <BreadCrumb
        title="News"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
      />
      <BlogComponent/>
    </section>
  );
}
