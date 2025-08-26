"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ImageType = {
  img: string;
  alt: string;
  link: string;
  label: string;
};

type CategoryItem = {
  label: string;
  link: string;
};

type MegaMenuProps = {
  images: ImageType[];
  categories: {
    title: string;
    link: string;
    items: CategoryItem[];
  };
  isOpen?: boolean; // control visibility
};

export default function MegaMenu({ images, categories, isOpen = true }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white shadow-xl p-8 w-full max-w-4xl mx-auto grid grid-cols-4 gap-10 "
        >
          {/* Left - Images */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {images.map((imgItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.25 }}
              >
                <Link href={imgItem.link} className="text-center block">
                  <Image
                    src={imgItem.img}
                    alt={imgItem.alt}
                    width={200}
                    height={250}
                    className="mx-auto object-contain"
                  />
                  <p className="mt-2 text-sm">{imgItem.label}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right - Categories */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            className="col-span-1"
          >
            <Link href={categories.link}>
              <h4 className="mb-2 pb-2 text-lg border-b border-gray-300">
                {categories.title}
              </h4>
            </Link>
            <ul className="flex flex-col gap-1">
              {categories.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.2 }}
                >
                  <Link
                    href={item.link}
                    className="block px-4 py-2 hover:text-red-600 hover:pl-6 transition-all"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
