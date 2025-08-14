import React from "react";
import AuthorData from "@/data/authorData.json";
import NavigationBanner from "@/components/common/NavigationBanner";
import AuthorGrid from "@/components/common/home/AuthorGrid";
import LimitedEditionComponent from "@/components/modules/LimitedEditionComponent";
export default function page() {
  return (
    <section className="flex flex-col items-center">
      <NavigationBanner
        title="Create Account"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Create Account" }]}
      />
      <AuthorGrid authors={AuthorData.slice(4, 13)} />
      <LimitedEditionComponent/>
    </section>
    
  );
}
