import Head from "next/head";
import PageNotFound from "@/components/modules/pagenotfound/pagenotfound";
export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Oops! This page doesn't exist." />
      </Head>
      <PageNotFound/>
    </>
  );
}
