import React from "react";

const timerData = [
  { value: "00", label: "Days" },
  { value: "00", label: "Hour" },
  { value: "00", label: "Mint" },
  { value: "00", label: "Sec" },
];

export default function Timer() {
  return (
    <div className="grid grid-cols-4 gap-2  w-full max-w-xs md:max-w-sm ">
      {timerData.map((item, index) => (
        <div
          key={index}
          className="grid justify-center items-center bg-white size-14 sm:size-16 md:size-20 rounded-sm shadow-sm"
        >
          <p className="text-center text-sm sm:text-base md:text-lg font-semibold">
            {item.value}
            <br />
            <span className="text-[10px] sm:text-xs text-gray-600">
              {item.label}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
