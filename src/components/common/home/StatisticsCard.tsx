import React from "react";
import Image from "next/image";
type StatisticsCardProps = {
  title: string;
  numbers: number;
  imageUrl: string;
};
const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  numbers,
  imageUrl,
}) => {
  return (
    <div className="flex items-center justify-between md:justify-center gap-4 border border-gray-100 bg-white p-4 group h-25 ">
      <div className="bg-red-400 p-2 rounded-full">
        <Image src={imageUrl} alt={title} height={50} width={50} className="group-hover:animate-wiggle group-hover:scale-125 " />
      </div>
      <div>
        <p className="text-xl font-semibold4">{numbers}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default StatisticsCard;
