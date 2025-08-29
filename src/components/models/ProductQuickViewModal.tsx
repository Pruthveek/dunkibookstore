"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CircleX } from "lucide-react";
import Image from "next/image";
import CustomButton from "@/components/ui/Buttons";
import { useAppDispatch } from "@/lib/store";
import { addToCart } from "@/lib/features/cartSlice";
import { AnimatePresence, motion } from "framer-motion";

interface ProductQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string | number;
    title: string;
    author: string;
    imageUrl: string;
    price: number;
    description?: string;
    color?: string[];
    productSlug: string;
  } | null;
}

export default function ProductQuickViewModal({
  isOpen,
  onClose,
  product,
}: ProductQuickViewModalProps) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (product) {
      setQuantity(1);
      if (product?.color?.length) {
        setSelectedColor(product.color[0]);
      }
    }
  }, [product]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: String(product.id),
        title: product.title,
        author: product.author,
        imageUrl: product.imageUrl,
        price: product.price,
        productSlug: product.productSlug,
        quantity,
        variant: selectedColor,
      })
    );
    onClose();
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-white overflow-hidden max-h-[90vh] flex flex-col sm:flex-row"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 text-gray-600 hover:text-black"
              aria-label="Close modal"
            >
              <CircleX size={24} />
            </button>

            {/* Left: Image */}
            <div className="flex w-full items-center justify-center p-4 sm:w-1/2">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={350}
                height={450}
                className="object-contain"
              />
            </div>

            {/* Right: Details */}
            <div className="flex w-full flex-col p-6 sm:w-1/2 overflow-y-auto">
              <h2 className="mb-2 text-xl font-semibold">{product.title}</h2>
              <p className="mb-2 text-gray-500">{product.author}</p>

              <p className="mb-3 text-lg font-bold text-red-600">
                £{product.price.toFixed(2)}
              </p>

              <p className="mb-4 text-sm text-gray-700">
                {product.description || "No description available."}
              </p>

              {Array.isArray(product.color) && product.color.length > 0 && (
                <div>
                  <label
                    htmlFor="color-select"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Color
                  </label>
                  <select
                    id="color-select"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="mb-3 w-full border border-gray-200 p-2 "
                  >
                    {product.color.map((colorOption) => (
                      <option key={colorOption} value={colorOption}>
                        {colorOption}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-3 border border-gray-200 px-3 py-1 ">
                  <button
                    className="px-2"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{quantity.toString().padStart(2, "0")}</span>
                  <button
                    className="px-2"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <CustomButton
                  onClick={handleAddToCart}
                  variant="secondary"
                  size="lg"
                  className="flex-1"
                >
                  Add to Cart
                </CustomButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
}
