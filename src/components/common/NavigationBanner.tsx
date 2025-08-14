import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavigationBannerProps {
  title: string;
  breadcrumb: { label: string; href?: string }[];
}

export default function NavigationBanner({
  title,
  breadcrumb,
}: NavigationBannerProps) {
  return (
    <div className="relative w-full h-40 sm:h-72">
      <Image
        src="/Images/bg-breadcrumb.jpg"
        alt="navigation banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black">
        <h3 className="text-2xl sm:text-5xl mb-2">{title}</h3>
        <nav className="flex items-center text-sm sm:text-base">
          {breadcrumb.map((item, index) => (
            <span key={index} className="flex items-center">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-red-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < breadcrumb.length - 1 && <span className="mx-1">•</span>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
