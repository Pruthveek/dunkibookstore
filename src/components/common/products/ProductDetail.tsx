"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/lib/store";
import { addToCart } from "@/lib/features/cartSlice";
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
import PaymentModal from "@/components/models/PaymentModel";

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  const dispatch = useAppDispatch();

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [quantity, setQuantity] = useState(1);
  const sizes = ["S", "M", "XS"];
  const [selected, setSelected] = useState("S");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: String(product.productId),
        title: product.title,
        author: product.author,
        productSlug: product.productSlug,
        imageUrl: product.images[0]?.original ?? "/placeholder.png",
        price: Number(product.price),
        color: selectedColor,
        size: selected,
        quantity,
        variant: ""
      })
    );
  };

  return (
    <section className="section-container2 mx-4 md:mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      {/* LEFT - Product Images */}
      <div>
        <Swiper
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
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
        <div className="relative group/arrow mt-3 sm:mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
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
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/60 p-1.5 sm:p-2 rounded-full text-white 
                       opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 cursor-pointer z-10"
          >
            <ChevronLeft/>
          </button>
          <button
            ref={nextRef}
            type="button"
            aria-label="Next"
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/60 p-1.5 sm:p-2 rounded-full text-white 
                       opacity-0 group-hover/arrow:opacity-100 transition hover:bg-red-600 cursor-pointer z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* RIGHT - Product Details */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <h2 className="text-2xl sm:text-3xl">{product.title}</h2>
        <p className="text-lg sm:text-xl mt-1">by {product.author}</p>
        <p className="text-lg sm:text-xl text-red-600 mt-2 font-medium">
          &pound;{Number(product.price).toFixed(2)}
        </p>
        <p className="text-sm sm:text-base mt-1">
          Availability: {product.stock} left in stock
        </p>
        <p className="mt-3 text-sm sm:text-base leading-relaxed">
          {product.discription}
        </p>

        {/* Info Table */}
        <div className="mt-4 border border-gray-300 divide-y divide-gray-300 text-sm sm:text-md">
          {[
            ["Name :", product.title],
            ["Author :", product.author],
            ["Categories :", product.category.join(", ")],
            ["Slug :", product.productSlug],
          ].map(([label, value], i) => (
            <div
              key={i}
              className="grid grid-cols-2 divide-x gap-6 sm:gap-10 p-2 sm:p-3"
            >
              <span className="font-medium">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>

        {/* Color Selector */}
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <span className="text-base sm:text-lg font-medium">Color :</span>
          <div className="flex gap-2 sm:gap-3 mt-2">
            {product.color.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border ${
                  selectedColor === c ? "ring-2 ring-red-600" : ""
                }`}
                style={{ backgroundColor: c.toLowerCase() }}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <span className="text-base sm:text-lg font-medium">Size :</span>
          <div className="flex gap-2 mt-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelected(s)}
                className={`w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center transition
                ${
                  selected === s
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-gray-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity + Add to Cart */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="flex border w-full sm:w-[280px] md:w-[400px] items-center justify-between">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-2"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-2"
            >
              +
            </button>
          </div>
          <CustomButton
            variant="gray"
            size="xl"
            className="w-full"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </CustomButton>
        </div>

        <CustomButton
          variant="secondary"
          size="xl"
          className="w-full mt-3"
          onClick={() => setIsPaymentModalOpen(true)}
        >
          BUY IT NOW
        </CustomButton>

        {/* Categories */}
        <p className="mt-4 text-sm sm:text-base">
          <span className="font-medium">Categories:</span>{" "}
          {product.category.join(", ")}
        </p>

        {/* Checkout Icons */}
        <div className="mt-4">
          <p className="text-sm sm:text-base font-medium">
            Guaranteed safe checkout:
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            {[
              "apple_pay-1721ebad.svg",
              "google_pay-34c30515.svg",
              "master-54b5a7ce.svg",
              "paypal-a7c68b85.svg",
              "shopify_pay-925ab76d.svg",
              "visa-65d650f7.svg",
            ].map((icon, i) => (
              <div key={i} className="relative w-8 h-8 sm:w-10 sm:h-10">
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
        <div className="flex items-center gap-3 mt-4">
          <p className="text-sm sm:text-base font-medium">Share:</p>
          <div className="flex gap-2">
            {["facebook.png", "twitter.png", "pinterest.png"].map(
              (icon, i) => (
                <div key={i} className="relative w-5 h-5">
                  <Image
                    src={`/Images/socialicon/${icon}`}
                    alt={icon}
                    fill
                    className="object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Shipping Info */}
        <ul className="mt-4 text-sm sm:text-base space-y-2">
          <li className="flex gap-2 items-center">
            <Timer size={16} strokeWidth={1} /> Orders ship within 5 to 10
            business days.
          </li>
          <li className="flex gap-2 items-center">
            <Box size={16} strokeWidth={1} /> Hooray! This item ships free to
            the US
          </li>
        </ul>
      </motion.div>
      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={Number(product.price) * quantity}
        currency="INR"
        orderId={`order_${product.productId}_${Date.now()}`}
        customerName=""
        customerEmail=""
        customerPhone=""
        description={`Payment for ${product.title} (${quantity} item${quantity > 1 ? "s" : ""})`}
        onSuccess={() => setIsPaymentModalOpen(false)}
        onFailure={() => setIsPaymentModalOpen(false)}
      />
    </section>
  );
}
