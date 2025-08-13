"use client";

import React, { useEffect, useState } from "react";
import OfferBar from "../blocks/header/OfferBar";
import Image from "next/image";
import SearchBox from "../blocks/header/SearchBox";
import { Headset } from "lucide-react";
import { HeaderIcons } from "../blocks/header/Headericon";
import NavbarMenu from "../blocks/header/NavbarMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hidden lg:block">
      {!isScrolled && (
        <>
          <OfferBar
            message="Free express shipping with orders over $150"
            linkText="Shop Now"
            linkHref="/offers"
            bgColor="#282828"
            textColor="white"
          />
          <div className="px-10 lg:px-20 flex justify-between items-center py-4">
            <Image
              src="/Images/logo1_130x@2x.png"
              alt="Banner"
              width={130}
              height={37}
            />
            <SearchBox />
            <HeaderIcons />
          </div>
          <div className="px-10 lg:px-20 py-6 flex items-center justify-between border-t border-gray-100">
            <NavbarMenu />
            <div className="hover:text-red-600 text-2xl inline-flex gap-2 items-center">
              <Headset /> (+01)-800-3456
            </div>
          </div>
        </>
      )}

      <div
        className={`fixed top-0 left-0 right-0 py-2 bg-white shadow-md z-50 transition-all duration-300 transform ${
          isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="px-10 lg:px-20 flex justify-between items-center py-3">
          <Image
            src="/Images/logo1_130x@2x.png"
            alt="Banner"
            width={130}
            height={37}
          />
          <NavbarMenu />
          <HeaderIcons />
        </div>
      </div>
    </header>
  );
}
