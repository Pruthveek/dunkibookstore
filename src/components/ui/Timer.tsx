import React from "react";

const timerData = [
  { value: "00", label: "Days" },
  { value: "00", label: "Hour" },
  { value: "00", label: "Mint" },
  { value: "00", label: "Sec" },
];

type TimerProps = {
  variant?: "primary" | "secondary";
};

export default function Timer({ variant = "primary" }: TimerProps) {
  return (
    <div className="grid grid-cols-4 gap-2 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
      {timerData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center aspect-square w-full rounded-md shadow-sm
            ${
              variant === "primary"
                ? "bg-white text-black"
                : "bg-black text-white "
            }`}
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
            {item.value}
          </p>
          <span
            className={`text-[10px] sm:text-xs md:text-sm ${
              variant === "primary" ? "text-black" : "text-white"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
