import React from "react";
import * as CiIcons from "react-icons/ci";
import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
  image?: string;
};

const iconMap: Record<string, keyof typeof CiIcons> = {
  CiCreditCard: "CiCreditCard1", // map your JSON key to actual icon
  CiDeliveryTruck: "CiDeliveryTruck",
  CiBookmark: "CiBookmark",
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  image,
}) => {
  const mappedIcon = icon ? iconMap[icon] || "CiCreditCard1" : "CiCreditCard1";
  const IconComponent = CiIcons[mappedIcon];

  return (
    <div
      className={`px-4 md:px-10 flex items-center justify-between md:justify-around gap-4 py-4 group h-25 ${
        image ? "bg-transparent" : "bg-[#FAF4EB]"
      }`}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        {image ? (
          <Image src={image} alt={title} width={60} height={60} />
        ) : (
          IconComponent && <IconComponent className="text-6xl" />
        )}
      </div>
      <div>
        <p className="text-lg md:text-xl">{title}</p>
        <p className="text-sm md:text-md text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
