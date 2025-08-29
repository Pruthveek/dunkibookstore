"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import InputField from "@/components/ui/InputField";
import CustomButton from "@/components/ui/Buttons";
import TextArea from "@/components/ui/TextArea";
import toast from "react-hot-toast";

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
  action?: string;
  method?: "GET" | "POST";
  successMessage?: string;
}

export default function AuthForm({
  title,
  subtitle,
  fields,
  textarea,
  submitLabel,
  extraLink,
  secondaryLink,
  variantStyles = "noborder",
  bg = "withbg",
  action,
  method = "POST",
  successMessage = "successfully",
}: AuthFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (status === "success") {
      toast.success(successMessage);
    }
    if (status === "error") {
      toast.error("Something went wrong. Please try again.");
    }
  }, [status, successMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(action || "", {
        method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className={`${
        bg === "withbg"
          ? "flex justify-center items-center px-4 py-20"
          : "bg-transparent"
      }`}
    >
      <div
        className={`w-full max-w-2xl ${
          bg === "withbg" ? "bg-[#F3F3F3] p-10" : "bg-transparent"
        }`}
      >
        {title && <h1 className="text-2xl sm:text-5xl mb-s text-center">{title}</h1>}
        {subtitle && <p className="text-sm sm:text-base text-center">{subtitle}</p>}

        <form onSubmit={handleSubmit} className="mt-6">
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

          <CustomButton type="submit" size="xl" variant="secondary" disabled={status === "loading"}>
            {submitLabel}
          </CustomButton>
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
