import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#222] text-white px-10 ">

      <div className=" mx-auto py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-xl  mb-4">About Info</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor inci ut labore et dolore.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Addresss: 123 Pall Mall, London England
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> Email: hello@example.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> Phone: (012) 345 6789
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg  mb-4">Information</h2>
          <ul className="space-y-2 text-sm">
            <li>Contact us</li>
            <li>About us</li>
            <li>Term & Conditions</li>
            <li>Gift Vouchers</li>
            <li>BestSellers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg  mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Shopping cart</li>
            <li>Wishlist</li>
            <li>Custom Link</li>
            <li>Help</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg  mb-4">Follow Us On</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube /> Youtube
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 py-4 space-y-4 flex flex-col items-center justify-center md:flex-row md:justify-between ">
        <div>Dunki | Built with Dunki by Team90Degree</div>
        <div>
            <Image src={"/Images/footer_img_large.png"} alt={"footer_img_large"} height={26} width={384}></Image>
        </div>
      </div>
    </footer>
  );
}
