import React from "react";
import Link from "next/link";

interface NavbarMenuProps {
  mobile?: boolean;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ mobile = false }) => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Blog", href: "/blog" },
    { label: "Offers", href: "/offers" },
  ];

  return (
    <nav className={mobile ? "flex flex-col gap-4" : "flex gap-8"}>
      {menuItems.map((item) => (
        <Link key={item.href} href={item.href} className="hover:text-red-600">
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarMenu;
