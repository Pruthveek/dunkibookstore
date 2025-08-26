"use client";

import React from "react";
import Image from "next/image";
import InputField from "@/components/ui/InputField";
import CustomButton from "@/components/ui/Buttons";

export default function JoinComunity() {
  return (
    <div className="relative flex items-center justify-center w-full h-[500px]">
      <Image
        src="/Images/aboutus/Untitled-1_9099b966-c624-43c5-8147-852578ddccad.jpg"
        alt="bgimage"
        fill
        className="object-cover"
      />
      <div className="relative max-w-7xl w-full grid md:grid-cols-2 p-6">
        <div>
          <div className="mb-6">
            <p className="text-3xl md:text-5xl mb-4">
              Join the community
            </p>
            <p className="text-[18px] mb-10">
              Enter your email address to receive regular updates, as well as
              news on upcoming events and specific offers.
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <InputField
                type="email"
                name="email"
                placeholder="email@gmail.com"
                variantStyles="noborder"
                className="w-full"
              />
            </div>
            <CustomButton variant="secondary" size="xl">
              Subscribe
            </CustomButton>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
