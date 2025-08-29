import Head from "next/head";
import BreadCrumb from "@/components/layouts/BreadCrumb";
import PageNotFound from "@/components/modules/pagenotfound/pagenotfound";
export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Oops! This page doesn't exist." />
      </Head>
      <BreadCrumb
            title="404 Not Found"
            breadcrumb={[{ label: "Home", href: "/" }, { label: "404 Not found" }]}
          />
      <PageNotFound/>
    </>
  );
}
