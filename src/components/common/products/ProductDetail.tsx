"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Box, ChevronLeft, ChevronRight, Timer } from "lucide-react";
import CustomButton from "@/components/ui/Buttons";

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [quantity, setQuantity] = useState(1);
  const sizes = ["S", "M", "XS"];
  const [selected, setSelected] = useState("S");

  // Refs for custom buttons
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="section-container2 mx-auto px-4 grid md:grid-cols-2 gap-10">
      {/* Left - Product Images */}
      <div >
        {/* Main Swiper */}
        
        <Swiper
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {product.images.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={img.original}
                alt={product.title}
                width={400}
                height={400}
                className="object-contain w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails with Custom Buttons */}
        <div className="relative group/arrow mt-2">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error – Swiper types don’t expose this
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error – Swiper types don’t expose this
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mySwiper"
          >
            {product.images.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={img.thumbnail}
                  alt="thumb"
                  width={200}
                  height={300}
                  className="cursor-pointer border"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Buttons */}
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous"
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white 
                       opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 hover:text-white cursor-pointer z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            ref={nextRef}
            type="button"
            aria-label="Next"
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white 
                       opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 hover:text-white cursor-pointer z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Right - Product Details */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title + Price */}
        <h2 className="text-3xl ">{product.title}</h2>
        <p className="text-xl mt-1">by {product.author}</p>
        <p className="text-xl  text-red-600 mt-2">{product.price}</p>
        <p className="text-md mt-1">
          Availability: {product.stock} left in stock
        </p>
        <p className="mt-3  leading-relaxed">{product.discription}</p>

        {/* Info Table */}
        <div className="mt-4 border border-gray-300 divide-y divide-gray-300 text-md">
          <div className="grid grid-cols-2 divide-x gap-10 p-2">
            <span className="text-xl">Name :</span>
            <span>{product.title}</span>
          </div>
          <div className="grid grid-cols-2 divide-x gap-10 p-2">
            <span className="text-xl">Author :</span>
            <span>{product.author}</span>
          </div>
          <div className="grid grid-cols-2 divide-x gap-10 p-2">
            <span className="text-xl">Categories :</span>
            <span>{product.category.join(", ")}</span>
          </div>
          <div className="grid grid-cols-2 divide-x gap-10 p-2">
            <span className="text-xl">Slug :</span>
            <span>{product.productSlug}</span>
          </div>
        </div>

        {/* Color Selector */}
        <div className="mt-5 flex items-center gap-4">
          <span className="text-xl ">Color :</span>
          <div className="flex gap-3 mt-2">
            {product.color.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                className="relative w-8 h-8 rounded-full border-1"
                style={{ backgroundColor: c.toLowerCase() }}
              >
                {selectedColor === c ? (
                  <Image
                    src="/Images/product/correct-success-tick-svgrepo-com.svg"
                    alt="pinterest"
                    fill
                    className="bg-center"
                  ></Image>
                ) : (
                  ""
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div className="mt-4 flex items-center gap-4">
          <span className="text-xl">Size :</span>
          <div className="flex gap-2 mt-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelected(s)}
                className={`w-8 h-8 flex justify-center items-center transition
              ${
                selected === s
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-gray-300"
              }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity + Add to Cart */}
        <div className="mt-6 flex gap-3">
          <div className="flex border w-[400px] items-center justify-between">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-2 py-2"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-2 py-2"
            >
              +
            </button>
          </div>
          <CustomButton variant="gray" size="xl" className="w-full">
            ADD TO CART
          </CustomButton>
        </div>
        <CustomButton variant="secondary" size="xl" className="w-full mt-3">
          BUY IT NOW
        </CustomButton>

        {/* Categories */}
        <p className="mt-4 text-md ">
          <span className="">Categories:</span> {product.category.join(", ")}
        </p>

        {/* Checkout Icons */}
        <div className="mt-4">
          <p className="text-md ">Guaranteed safe checkout:</p>
          <div className="flex gap-3 mt-2">
            {[
              "apple_pay-1721ebad.svg",
              "google_pay-34c30515.svg",
              "master-54b5a7ce.svg",
              "paypal-a7c68b85.svg",
              "shopify_pay-925ab76d.svg",
              "visa-65d650f7.svg",
            ].map((icon, i) => (
              <div key={i} className="relative w-10 h-10">
                <Image
                  src={`/Images/product/${icon}`}
                  alt="payment"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social Share */}
        <div className="flex gap-4 mt-2 text-xl ">
          <div className="flex items-center gap-3 mt-2">
            <p className="text-xl ">Share:</p>
            <div className="flex gap-2">
              {/* Facebook */}
              <div className="relative w-5 h-5">
                <Image
                  src="/Images/socialicon/facebook.png"
                  alt="facebook"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Twitter */}
              <div className="relative w-5 h-5">
                <Image
                  src="/Images/socialicon/twitter.png"
                  alt="twitter"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Pinterest */}
              <div className="relative w-5 h-5">
                <Image
                  src="/Images/socialicon/pinterest.png"
                  alt="pinterest"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Info */}
        <ul className="mt-4 text-md  space-y-2">
          <li className="flex gap-2 items-center">
            <Timer size={18} strokeWidth={1} /> Orders ship within 5 to 10
            business days.
          </li>
          <li className="flex gap-2 items-center">
            <Box size={18} strokeWidth={1} /> Hooray! This item ships free to
            the US
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
