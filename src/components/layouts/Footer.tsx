"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import footerDataJson from "@/data/footerData.json";

type FooterProps = {
  variant?: "variant1" | "variant2";
  bgColor?: string;
  textColor?: string;
};

const icons = {
  FaFacebookF: <FaFacebookF />,
  FaTwitter: <FaTwitter />,
  FaInstagram: <FaInstagram />,
  FaYoutube: <FaYoutube />,
  FaMapMarkerAlt: <FaMapMarkerAlt />,
  FaEnvelope: <FaEnvelope />,
  FaPhoneAlt: <FaPhoneAlt />,
} as const;

type Contact = {
  icon: keyof typeof icons;
  text: string;
};

type LinkItem = {
  label: string;
  url: string;
};

type SocialItem = {
  icon: keyof typeof icons;
  label: string;
  url: string;
};

type Newsletter = {
  description: string;
  placeholder: string;
  buttonText: string;
};

type Column = {
  title: string;
  links?: LinkItem[];
  socials?: SocialItem[];
  newsletter?: Newsletter;
};

type About = {
  title: string;
  description: string;
  contacts: Contact[];
};

type FooterVariant1 = {
  about: About;
  columns: Column[];
};

type FooterVariant2 = {
  columns: Column[];
};

type Bottom = {
  text: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type FooterData = {
  variant1: FooterVariant1;
  variant2: FooterVariant2;
  bottom: Bottom;
};

function hasAbout(d: FooterVariant1 | FooterVariant2): d is FooterVariant1 {
  return (d as FooterVariant1).about !== undefined;
}

const Footer: React.FC<FooterProps> = ({
  variant = "variant1",
  bgColor = "bg-[#222]",
  textColor = "text-white",
}) => {
  const footerData = footerDataJson as FooterData;
  const data =
    variant === "variant1" ? footerData.variant1 : footerData.variant2;
  const bottom = footerData.bottom;

  return (
    <footer
      className={`${bgColor} ${textColor} py-12 border-t border-gray-200 `}
    >
      <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {hasAbout(data) && (
          <div>
            <h3 className="text-2xl mb-4">{data.about.title}</h3>
            <p className="text-md mb-4">{data.about.description}</p>
            <ul className="space-y-2 text-md">
              {data.about.contacts.map((contact, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {icons[contact.icon]} <span>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.columns.map((col, idx) => (
          <div key={idx}>
            <h3 className="text-2xl mb-4">{col.title}</h3>

            {col.links && (
              <ul className="space-y-2 text-md">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.url}
                      className="hover:text-red-600 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {col.socials && (
              <div className="space-y-2 mt-4">
                {col.socials.map((social, i) => (
                  <Link
                    key={i}
                    href={social.url}
                    aria-label={social.label}
                    className="hover:text-red-600 text-md flex items-center gap-2"
                  >
                    {icons[social.icon]}{" "}
                    <span className="text-md">{social.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {col.newsletter && (
              <div className="mt-4 space-y-2 ">
                <p className="text-md mb-3">{col.newsletter.description}</p>
                <div className="flex border">
                  <input
                    type="email"
                    placeholder={col.newsletter.placeholder}
                    className="px-3 py-2 text-black rounded-l w-full text-md"
                  />
                  <button className="bg-black text-white px-4 py-2 text-md">
                    {col.newsletter.buttonText}
                  </button>
                </div>
                <p className="text-md mb-3">Secured Payment Gateways</p>
                <Image
                  src={bottom.image.src}
                  alt={bottom.image.alt}
                  width={bottom.image.width}
                  height={bottom.image.height}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-6"></div>

      {variant === "variant1" ? (
        <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-md">
          <p>{bottom.text}</p>
          <Image
            src={bottom.image.src}
            alt={bottom.image.alt}
            width={bottom.image.width}
            height={bottom.image.height}
          />
        </div>
      ) : (
        <div className="pt-6 text-center gap-4 text-md">
          <p>{bottom.text}</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
