import React from "react";
import FeatureCard from "../common/home/FeatureCard";
import featureData from "@/data/featureData.json";

const FeatureList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10">
      {featureData.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

export default FeatureList;
