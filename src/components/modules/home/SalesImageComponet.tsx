import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SalesImageComponent() {
  return (
    <div className="section-container2 grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-x-4">
      
      
      <div className=" col-span-3 relative w-full h-60 md:h-96 overflow-hidden cursor-pointer">
        <Link href="/collections/all"><Image
          src="/Images/chbnr.jpg"
          alt="bgimage1"
          fill
          className="hover:scale-110 ease-in-out duration-500"
        /></Link>
      </div>
      <div className="col-span-2 relative w-full h-60  md:h-96 overflow-hidden cursor-pointer">
        <Link href="/collections/all"><Image
          src="/Images/chb2_8cdf0738-7bb1-442e-b0d0-b40e1d298793.jpg"
          alt="bgimage2"
          fill
          className=" hover:scale-110 ease-in-out duration-500"
        /></Link>
      </div>
    </div>
  );
}
