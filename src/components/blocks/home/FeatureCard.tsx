import React from "react";
import * as CiIcons from "react-icons/ci"; // Import all Ci icons

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  const IconComponent = (CiIcons as any)[icon] || CiIcons.CiCreditCard1;

  return (
    <div className="px-4 md:px-10 flex items-center justify-between md:justify-around gap-4 bg-[#FAF4EB] py-4 group h-25">
      <IconComponent className="text-6xl" />
      <div>
        <p className="text-lg md:text-xl font-semibold">{title}</p>
        <p className="text-sm md:text-md text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
