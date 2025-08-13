"use client";

import Link from "next/link";

interface DropdownMenuProps {
  submenu: { label: string; link: string }[];
}

export default function DropdownMenu({ submenu }: DropdownMenuProps) {
  return (
    <ul className="bg-white shadow-lg w-48">
      {submenu.map((item) => (
        <li key={item.label}>
          <Link
            href={item.link}
            className="block px-4 py-2 hover:text-red-600 hover:pl-6 transition-all"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
