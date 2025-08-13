import React from "react";
import Image from "next/image";

export default function SalesImageComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-x-4 px-10">
      <div className=" col-span-3 relative w-full h-40 md:h-96 overflow-hidden">
        <Image
          src="/Images/chbnr.jpg"
          alt="bgimage1"
          fill
          className="hover:scale-110 ease-in-out duration-1000"
        />
      </div>
      <div className="col-span-2 relative w-full h-40  md:h-96 overflow-hidden">
        <Image
          src="/Images/chb2_8cdf0738-7bb1-442e-b0d0-b40e1d298793.jpg"
          alt="bgimage2"
          fill
          className=" hover:scale-110 ease-in-out duration-1000"
        />
      </div>
    </div>
  );
}
