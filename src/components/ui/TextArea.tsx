"use client";

import React from "react";

interface InputFieldProps {
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  variantStyles?: "noborder" | "outlined" | "filled" | "rounded";
  size?: "sm" | "md" | "lg"; 
  error?: string;
  className?: string;
}

const variantMap: Record<string, string> = {
  noborder: "border-none bg-white focus:ring-0",
  outlined:
    "border border-gray-300 bg-white focus:ring-0",
  filled:
    "border border-gray-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-black",
  rounded:
    "border border-gray-300 rounded-full focus:ring-2 focus:ring-black",
};

const sizeMap: Record<string, string> = {
  sm: "text-sm px-2 py-1 md:px-3 md:py-2",
  md: "text-base px-3 py-2 md:px-4 md:py-3",
  lg: "text-lg px-4 py-3 md:px-5 md:py-4",
};

const TextArea: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  placeholder,
  required = true,
  variantStyles = "outlined",
  size = "md",
  error,
  className = "",
}) => {
  return (
    <div className="flex flex-col">
      <textarea
        id={name}
        name={name}
        defaultValue={value}
        placeholder={placeholder || label}
        required={required}
        className={`w-full focus:outline-none transition ${variantMap[variantStyles]} ${sizeMap[size]} ${
          error ? "border-red-500 focus:ring-red-500" : ""
        } ${className}`}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default TextArea;
