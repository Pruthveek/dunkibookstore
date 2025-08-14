import Link from 'next/link';
import React from 'react';

type OfferBarProps = {
  message?: string;
  linkText?: string;
  linkHref?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
};

export default function OfferBar({
  message = "Special Offer!",
  linkText = "Learn More",    
  linkHref = "/offers",
  bgColor = "#282828",
  textColor = "white",
  className = "",
}: OfferBarProps) {
  return (
    <div
      className={`text-center py-4 ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="text-base">
        {message}
        {linkText && (
          <Link
            href={linkHref}
            className="underline ml-2"
            style={{ color: textColor }}
          >
            {linkText}
          </Link>
        )}
      </span>
    </div>
  );
}
