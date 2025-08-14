"use client";

import React from "react";

interface InputFieldProps {
  label?: string;
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  variantStyles?: "noborder" | "outlined" | "filled" | "rounded";
  error?: string;
  className?: string;
}

const variantMap: Record<string, string> = {
  noborder: "border-none bg-white focus:ring-0 p-4 md:p-5",
  outlined: "border border-gray-300 bg-white focus:ring-2 focus:ring-black",
  filled: "border border-gray-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-black",
  rounded: "border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-black",
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  placeholder,
  required = true,
  variantStyles = "outlined",
  error,
  className = "",
}) => {
  return (
    <div className="flex flex-col">
      {/* {label && <label htmlFor={name} className="text-sm mb-1">{label}</label>} */}
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={value}
        placeholder={placeholder || label}
        required={required}
        className={`w-full text-base focus:outline-none transition ${variantMap[variantStyles]} ${error ? "border-red-500 focus:ring-red-500" : ""} ${className}`}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default InputField;
