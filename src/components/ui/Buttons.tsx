"use client";

import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" |"third" | "secondary" | "opposithover" | "active" | "ghost";
  size?: "sm" | "md" | "lg";
};

const baseStyles = " font-base transition duration-500 ease-in-out ";

const variantStyles = {
  primary: "bg-red-600 text-white hover:bg-white hover:text-black",
  third:"bg-black text-white hover:bg-white hover:text-black",
  secondary: "bg-black text-white hover:bg-red-600 hover:text-white",
  opposithover: "bg-red-600 text-white hover:bg-black",
  active: "bg-[#f1f1f1] active:bg-red-600 active:text-white",
  ghost: "bg-transparent text-gray-700 hover:text-red-600",
};

const sizeStyles = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-10 py-2.5",
};

const CustomButton: FC<CustomButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}) => {
  return (
    <>
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
    </>
  );
};

export default CustomButton;