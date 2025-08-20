"use client";
import React, { useEffect, useState } from "react";
import StatisticsCard from "@/components/common/home/StatisticsCard";
import StatisticsData from "@/data/statisticsData.json";
export default function StatisticsComponent() {
  const [statisticsInfo, setStatisticsInfo] = useState<typeof StatisticsData>(
    []
  );
  useEffect(() => {
    setStatisticsInfo(StatisticsData);
  }, []);
  return (
    <section className="section-container2">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center space-y-4 my-10 ">
        {statisticsInfo.map((item, index) => (
          <StatisticsCard
            key={index}
            imageUrl={item.imageUrl}
            numbers={item.numbers}
            title={item.title}
          />
        ))}
      </div>{" "}
    </section>
  );
}
