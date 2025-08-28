"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CircleX, Headset, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import OfferBar from "@/components/common/header/OfferBar";
import { HeaderIcons } from "@/components/common/header/Headericon";
import NavbarMenu from "@/components/common/header/NavbarMenu";
import menuData from "@/data/menuData.json";
import SearchBox from "@/components/common/header/SearchBox";

type HeaderProps = {
  variant?: "default" | "second" | "third";
  offerBarBg?: string;
  offerBarText?: string;
};

export default function Header({
  variant = "default",
  offerBarBg = "#282828",
  offerBarText = "white",
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* Desktop Header */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white">
        {variant === "default" && !isScrolled && (
          <div>
            <OfferBar
              message="Free express shipping with orders over $150"
              linkText="Shop Now"
              linkHref="/offers"
              bgColor={offerBarBg}
              textColor={offerBarText}
            />
            <div className="px-10 lg:px-20 flex justify-between items-center py-4">
              <Image
                src="/Images/logo1_130x@2x.png"
                alt="Logo"
                width={130}
                height={37}
              />
              <SearchBox placeholder="I'm looking for…" buttontext="Search" />
              <HeaderIcons />
              <button
                onClick={() => setSidebarOpen(true)}
                className="ml-3 lg:hidden"
              >
                <Menu size={28} />
              </button>
            </div>
            <div className="px-10 lg:px-20 py-6 flex items-center justify-between border-t border-gray-100">
              <NavbarMenu />
              <div className="hover:text-red-600 text-2xl inline-flex gap-2 items-center">
                <Headset /> (+01)-800-3456
              </div>
            </div>
          </div>
        )}

        {variant === "second" && !isScrolled && (
          <>
            <OfferBar
              message="Free express shipping with orders over $150"
              linkText="Shop Now"
              linkHref="/offers"
              bgColor={offerBarBg}
              textColor={offerBarText}
            />
            <div className="px-10 lg:px-20 flex justify-between items-center pt-6">
              <Image
                src="/Images/logo1_130x@2x.png"
                alt="Logo"
                width={130}
                height={37}
              />
              <NavbarMenu />
              <HeaderIcons />
            </div>
          </>
        )}

        {variant === "third" && !isScrolled && (
          <div>
            <div className="px-10 lg:px-20 flex justify-between items-center pt-4">
              <Image
                src="/Images/logo1_130x@2x.png"
                alt="Logo"
                width={130}
                height={37}
              />
              <SearchBox placeholder="I'm looking for…" buttontext="Search" />
              <HeaderIcons />
              <button
                onClick={() => setSidebarOpen(true)}
                className="ml-3 lg:hidden"
              >
                <Menu size={28} />
              </button>
            </div>
            <div className="px-10 lg:px-20 py-6 flex items-center justify-between border-t border-gray-100">
              <NavbarMenu />
              <div className="hover:text-red-600 text-2xl inline-flex gap-2 items-center">
                <Headset /> (+01)-800-3456
              </div>
            </div>
          </div>
        )}

        {/* Sticky Header - same for all variants */}
        <div
          className={`fixed top-0 left-0 right-0 py-2 bg-white shadow-md z-50 transition-all duration-300 transform ${
            isScrolled
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="px-10 lg:px-20 flex justify-between items-center py-3">
            <Image
              src="/Images/logo1_130x@2x.png"
              alt="Logo"
              width={130}
              height={37}
            />
            <NavbarMenu />
            <HeaderIcons />
            <button
              onClick={() => setSidebarOpen(true)}
              className="ml-3 lg:hidden"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header (always same) */}
      <div className="lg:hidden w-screen flex justify-between items-center px-4 py-3 border-b border-gray-300 fixed top-0 left-0 right-0 bg-white z-50">
        <Image
          src="/Images/logo1_130x@2x.png"
          alt="Logo"
          width={120}
          height={34}
        />
        <div className="flex items-center gap-3">
          <HeaderIcons />
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (unchanged) */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[60]"
              onClick={() => setSidebarOpen(false)}
            />
            {/* Top Drawer */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-[70] flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center gap-4 p-4 border-b border-gray-300">
                <SearchBox placeholder="I'm looking for…" />
                <button onClick={() => setSidebarOpen(false)}>
                  <CircleX size={20} />
                </button>
              </div>

              <nav className="px-10 space-y-2 overflow-y-auto flex-1">
                {menuData.map((item) => (
                  <div key={item.label}>
                    {item.submenu || item.megaMenu ? (
                      <div>
                        <div className="flex justify-between items-center text-xl">
                          <Link
                            href={item.link || "#"}
                            className="block py-2 text-xl"
                            onClick={() => setSidebarOpen(false)}
                          >
                            {item.label}
                          </Link>
                          <button
                            onClick={() => toggleSubmenu(item.label)}
                            className="flex justify-between items-center py-2 text-left "
                          >
                            <span
                              className={`ml-2 text-xl transition-transform duration-500 ease-in-out ${
                                openSubmenu === item.label
                                  ? "rotate-180"
                                  : "rotate-0"
                              }`}
                            >
                              {openSubmenu === item.label ? "−" : "+"}
                            </span>
                          </button>
                        </div>

                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            openSubmenu === item.label
                              ? "max-h-[1000px]"
                              : "max-h-0"
                          }`}
                        >
                          {item.submenu?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.link}
                              className="block py-1 text-md"
                              onClick={() => setSidebarOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}

                          {item?.megaMenu?.images?.map((imgItem, index) => (
                            <Link
                              key={index}
                              href={imgItem.link}
                              className=" block"
                              onClick={() => setSidebarOpen(false)}
                            >
                              <Image
                                src={imgItem.img}
                                alt={imgItem.alt}
                                width={300}
                                height={250}
                              />
                              <p className="mt-2 text-sm">{imgItem.label}</p>
                            </Link>
                          ))}

                          {item.megaMenu?.categories?.items?.map((cat) => (
                            <Link
                              key={cat.label}
                              href={cat.link}
                              className="block py-1 text-md"
                              onClick={() => setSidebarOpen(false)}
                            >
                              {cat.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.link || "#"}
                        className="block py-2 text-xl"
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div>
                  <button
                    onClick={() => toggleSubmenu("Account")}
                    className="w-full flex justify-between items-center py-2 text-left text-xl border-y border-gray-300"
                  >
                    Account
                    <span
                      className={`ml-2 text-xl transition-transform duration-500 ease-in-out ${
                        openSubmenu === "Account" ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {openSubmenu === "Account" ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openSubmenu === "Account" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <Link
                      href="/account/login"
                      className="block py-2 text-md"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/account/registar"
                      className="block py-2 text-md"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Create Account
                    </Link>
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
