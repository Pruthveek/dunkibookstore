import React from "react";
import AuthorData from "@/data/authorData.json";
import BreadCrumb from "@/components/common/BreadCrumb";
import LimitedEditionComponent from "@/components/modules/home/LimitedEditionComponent";
import AuthorGrid from "@/components/common/home/AuthorGrid";
export default function page() {
  return (
    <section className="flex flex-col items-center">
      <BreadCrumb
        title="Authors list"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Authors list" }]}
      />
      <AuthorGrid authors={AuthorData.slice(4, 13)} />
      <LimitedEditionComponent/>
    </section>
    
  );
}
