"use client";

import React from "react";
import Link from "next/link";
import InputField from "@/components/ui/InputField";
import CustomButton from "@/components/ui/Buttons";

interface Field {
  label: string;
  type: string;
  name: string;
  value?: string;
}

interface AuthFormProps {
  title: string;
  subtitle: string;
  fields: Field[];
  submitLabel: string;
  onSubmit: (e: React.FormEvent) => void;
  extraLink?: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
  variantStyles?: "noborder" | "outlined" | "filled" | "rounded";
}

export default function AuthForm({
  title,
  subtitle,
  fields,
  submitLabel,
  onSubmit,
  extraLink,
  secondaryLink,
  variantStyles = "noborder",
}: AuthFormProps) {
  return (
    <div className="flex justify-center items-center px-4 py-20">
      <div className="bg-[#F3F3F3] p-10 w-full max-w-2xl ">
        <h1 className="text-2xl sm:text-5xl mb-2 text-center">{title}</h1>
        <p className="text-sm sm:text-base text-center">{subtitle}</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {fields.map((field, idx) => (
            <InputField
              key={idx}
              label={field.label}
              type={field.type}
              name={field.name}
              value={field.value}
              variantStyles={variantStyles} 
            />
          ))}
          <CustomButton size={"xl"} variant={"secondary"}>{submitLabel}</CustomButton>
        </form>

        <div className="flex flex-col md:flex-row md:justify-between mt-4 text-sm">
          {secondaryLink && (
            <Link href={secondaryLink.href} className="text-base hover:text-red-600">
              {secondaryLink.label}
            </Link>
          )}
          {extraLink && (
            <Link href={extraLink.href} className="text-base hover:text-red-600">
              {extraLink.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
