import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../ui/Buttons";
export default function OnlineBookCopy() {
  return (
    <div className="bg-[#FAF4EB] px-10 group">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center space-y-8 overflow-hidden ">
        <div className=" space-y-6">
          <p className="text-md md:text-xl text-red-600">Online Book Copy</p>
          <p className="text-xl md:text-4xl">
            We have The largest <br />
            Book library on the planet
          </p>
          <ul className="grid gris-cols-1 sm:grid-cols-2 space-y-4 list-disc list-inside">
            <li>Scientific Department</li>
            <li>Audio Books </li>
            <li>Technical Literature</li>
            <li>Rare Manuscripts</li>
            <li>Global Scholar Library</li>
            <li>Classic Literature</li>
          </ul>
          <Link href="/collections/all">
            <CustomButton size="lg" variant="secondary">
              Shop Now
            </CustomButton>
          </Link>
        </div>
        <div className="flex justify-center md:size-[350px] lg:size-[500px] group-hover:scale-110 ease-in-out duration-1000">
          <Image
            src="/Images/sthm.png"
            alt="sthm"
            height={500}
            width={500}
            className="max-h-[500px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
