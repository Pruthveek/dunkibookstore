"use client";

import Link from "next/link";
import Image from "next/image";

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
};

export default function MegaMenu({ images, categories }: MegaMenuProps) {
  return (
    <div className="bg-white shadow-xl p-8 w-full max-w-4xl mx-auto grid grid-cols-4 gap-10">
      {/* Left - Images */}
      <div className=" col-span-3 grid grid-cols-3 gap-4">
        {images.map((imgItem, index) => (
          <Link key={index} href={imgItem.link} className="text-center">
            <Image
              src={imgItem.img}
              alt={imgItem.alt}
              width={200}
              height={250}
              className="mx-auto object-contain"
            />
            <p className="mt-2 text-sm">{imgItem.label}</p>
          </Link>
        ))}
      </div>

      {/* Right - Categories */}
      <div className="col-span-1">
        <Link href={categories.link} >
          <h4 className="mb-2 pb-2 text-lg border-b border-gray-200">
            {categories.title}
          </h4>
        </Link>
        <ul className="flex flex-col gap-1">
          {categories.items.map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className="block px-4 py-2 hover:text-red-600 hover:pl-6 transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
