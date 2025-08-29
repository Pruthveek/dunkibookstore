import React from "react";
import contactData from "@/data/contectData.json";
import { MapPin, Mail, Smartphone } from "lucide-react";
import AuthForm from "@/components/common/auth/AuthForm";
import Link from "next/link";

const icons: Record<string, React.ElementType> = {
  MapPin,
  Mail,
  Smartphone,
};

export default function GetInTouch() {
  return (
    <div className="section-container p-6">
      <div className="md:flex justify-between items-center mb-6">
        <div className="text-3xl md:text-5xl">Let&apos;s get in touch</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-20">
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-2 mb-4">
            {contactData.map((item, index) => {
              const Icon = icons[item.icon] || MapPin;
              return (
                <div key={index}>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="px-4 md:px-10 flex items-center gap-6 py-4 group h-25 bg-[#F6F6F6]"
                  >
                    <Icon size={40} strokeWidth={1} className="text-red-600 " />
                    <div>
                      <p className="text-lg md:text-xl ">{item.title}</p>
                      <p className="text-sm md:text-md text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <p className="text-sm md:text-md">
            Opening time: Our store has re-opened for shopping, exchanges every
            day 11am to 7pm
          </p>
        </div>

        <div className="col-span-3">
          <AuthForm
            fields={[
              { label: "Name", type: "text", name: "name" },
              { label: "Email", type: "email", name: "email" },
            ]}
            textarea={[{ name: "message" }]}
            submitLabel="Send Message"
            bg="withoutbg"
            variantStyles="outlined"
            action="https://formspree.io/f/mldbzbkd"
            method="POST"
            successMessage="Message sent successfully"
          />
        </div>
      </div>
    </div>
  );
}
