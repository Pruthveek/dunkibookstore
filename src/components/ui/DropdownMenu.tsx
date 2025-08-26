"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownMenuProps {
  submenu: { label: string; link: string }[];
  isOpen?: boolean; // control visibility
}

export default function DropdownMenu({ submenu, isOpen = true }: DropdownMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-white shadow-lg w-48  overflow-hidden"
        >
          {submenu.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
            >
              <Link
                href={item.link}
                className="block px-4 py-2 hover:text-red-600 hover:pl-6 transition-all"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
