import React from "react";
import FeatureCard from "@/components/common/home/FeatureCard";
import featureData from "@/data/featureData.json";

type FeatureListProps = {
  layout: "icon" | "image";
};

const FeatureList: React.FC<FeatureListProps> = ({ layout }) => {
  const isImage = layout === "image";

  return (
    <div className="section-container2  w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
      {isImage ? (
        featureData.shoppingFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))
      ) : (
        featureData.features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))
      )}
    </div>
  );
};

export default FeatureList;
