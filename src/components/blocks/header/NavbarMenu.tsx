"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import DropdownMenu from "@/components/ui/DropdownMenu";
import menuData from "@/data/menuData.json";
import MegaMenu from "../../ui/MegaMenu";
import { MdKeyboardArrowDown } from "react-icons/md";

interface MenuItem {
  label: string;
  link?: string;
  submenu?: { label: string; link: string }[];
  megaMenu?: {
    images?: { img: string; alt: string; link: string; label: string }[];
    categories?: {
      title: string;
      link: string;
      items: { label: string; link: string }[];
    };
  };
}

export default function NavbarMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [menus, setMenus] = useState<MenuItem[]>([]);

  useEffect(() => {
    setMenus(menuData as MenuItem[]);
  }, []);

  return (
    <ul className="flex space-x-6 relative z-50">
      {menus.map((menu, index) => {
        const hasDropdown = menu.submenu || menu.megaMenu;
        return (
          <li
            key={menu.label}
            className="relative group"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <div className="text-xl flex items-center justify-center space-x-1 cursor-pointer">
              <Link href={menu.link || "#"} className="hover:text-red-600 inline-flex items-center group">
                {menu.label}
                {hasDropdown && (
                <MdKeyboardArrowDown className="w-5 h-5 text-gray-500 group-hover:text-red-600" />
              )}
              </Link>
              
            </div>

            {/* Submenu */}
            {menu.submenu && openIndex === index && (
              <div className="absolute top-5 left-0 mt-2 z-50">
                <DropdownMenu submenu={menu.submenu} />
              </div>
            )}

            {/* Mega Menu */}
            {menu.megaMenu && openIndex === index && (
              <div className="absolute top-5 left-[-300px]  mt-2 z-50 w-screen">
                <MegaMenu
                  images={menu.megaMenu.images || []}
                  categories={
                    menu.megaMenu.categories || {
                      title: "",
                      link: "",
                      items: [],
                    }
                  }
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
