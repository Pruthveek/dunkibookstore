"use client";

import React from "react";
import Link from "next/link";
import InputField from "@/components/ui/InputField";
import CustomButton from "@/components/ui/Buttons";
import TextArea from "@/components/ui/TextArea";

interface Field {
  label: string;
  type: string;
  name: string;
  value?: string;
}

interface Textarea {
  label?: string;
  name: string;
  value?: string;
}
interface AuthFormProps {
  title?: string;
  subtitle?: string;
  fields: Field[];
  textarea?: Textarea[];
  submitLabel: string;
  onSubmit?: (e: React.FormEvent) => void;
  extraLink?: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
  variantStyles?: "noborder" | "outlined" | "filled" | "rounded";
  bg?: "withbg" | "withoutbg";
}

export default function AuthForm({
  title,
  subtitle,
  fields,
  textarea,
  submitLabel,
  onSubmit,
  extraLink,
  secondaryLink,
  variantStyles = "noborder",
  bg = "withbg",
}: AuthFormProps) {
  return (
    <div
      className={`${
        bg === "withbg"
          ? "flex justify-center items-center px-4 py-20"
          : "bg-transparent"
      }`}
    >
      <div
        className={` w-full max-w-2xl ${
          bg === "withbg" ? "bg-[#F3F3F3] p-10" : "bg-transparent"
        }`}
      >
        <h1 className="text-2xl sm:text-5xl mb-2 text-center">{title}</h1>
        <p className="text-sm sm:text-base text-center">{subtitle}</p>

        <form onSubmit={onSubmit} className="mt-6">
          {fields.map((field, idx) => (
            <InputField
              key={idx}
              label={field.label}
              type={field.type}
              name={field.name}
              value={field.value}
              variantStyles={variantStyles}
              className={`${bg === "withbg" ? "mb-6" : "mb-10"}`}
            />
          ))}
          {textarea?.map((textarea, idx) => (
            <TextArea
              key={idx}
              label={textarea.label}
              name={textarea.name}
              variantStyles={variantStyles}
              className={`${bg === "withbg" ? "mb-6" : "mb-10"}`}
            />
          ))}
          <Link href={"/"}><CustomButton size={"xl"} variant={"secondary"}>
            {submitLabel}
          </CustomButton></Link>
        </form>

        <div className="flex flex-col md:flex-row md:justify-between mt-4 text-sm">
          {secondaryLink && (
            <Link
              href={secondaryLink.href}
              className="text-base hover:text-red-600"
            >
              {secondaryLink.label}
            </Link>
          )}
          {extraLink && (
            <Link
              href={extraLink.href}
              className="text-base hover:text-red-600"
            >
              {extraLink.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
