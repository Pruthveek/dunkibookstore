"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import menuData from "@/data/menuData.json";

const MobileMenu: React.FC = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <div className="fixed top-0 inset-x-0 bg-white shadow-md z-50 md:hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
      </div>

      <nav className="p-4 space-y-2">
        {menuData.map((item) => (
          <div key={item.label}>
            {item.submenu || item.megaMenu ? (
              <div>
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className="w-full flex justify-between items-center py-2 text-left"
                >
                  {item.label}
                  <ChevronDown
                    className={`ml-2 transition-transform ${
                      openSubmenu === item.label ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>
                <div
                  className={`pl-4 transition-all duration-300 overflow-hidden ${
                    openSubmenu === item.label ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {item.submenu?.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.link}
                      className="block py-1 text-sm text-gray-600 hover:text-black"
                    >
                      {sub.label}
                    </Link>
                  ))}

                  {item.megaMenu?.categories?.items?.map((cat) => (
                    <Link
                      key={cat.label}
                      href={cat.link}
                      className="block py-1 text-sm text-gray-600 hover:text-black"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={item.link || "#"}
                className="block py-2 text-gray-700 hover:text-black"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
