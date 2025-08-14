import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import NavigationBanner from "@/components/common/NavigationBanner";
import CustomButton from "@/components/ui/Buttons";
export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Oops! This page doesn't exist." />
      </Head>
      <NavigationBanner
            title="404 Not Found"
            breadcrumb={[{ label: "Home", href: "/" }, { label: "404 Not found" }]}
          />
      <section className="flex flex-col items-center text-center px-10 py-10 md:py-24 w-full">
        <div className="relative size-24 md:size-64">
        <Image src="/Images/error-404_copy_1024x1024.png" alt="404" fill className="bg-cover"></Image>
        </div>
        <p className="text-lg md:text-[40px] mb-2">Oops! That page can&apos;t be found.</p>
        <p className="text-[16px] mb-4 ">Sorry, But the page you are looking for doesn&apos;t exist!</p>
        <Link href="/"><CustomButton size={"xl"} variant={"secondary"} className="hidden sm:block">Go to home page</CustomButton>
        <CustomButton size={"sm"} variant={"secondary"} className="sm:hidden">Go to home page</CustomButton>
          </Link>
        
      </section>
    </>
  );
}
