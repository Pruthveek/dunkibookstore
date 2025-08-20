import React from "react";
import Image from "next/image";
export default function GoogleMapSection() {
  return (
    <div className="section-container flex justify-center relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.513781082241!2d-122.35032608436974!3d47.6205099791859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154e3f3bca2b%3A0x8e7e7c8d49d5e7b!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1676158892143!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen={true}
        allow="fullscreen"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Image
        src="/Images/contactus/book-store_small.png"
        alt="mapicon"
        height={100}
        width={100}
        className="absolute top-40  left-50inset-0 animate-bounce"
      ></Image>
    </div>
  );
}
