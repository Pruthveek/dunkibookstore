"use client";
import { Dropdown } from "@/components/ui/dropDown";
import { CircleX, Handbag, Search, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/lib/store";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "@/lib/features/cartSlice";
import CustomButton from "@/components/ui/Buttons";
import { useState } from "react";
import PaymentModal from "@/components/models/PaymentModel";
import SearchBox from "./SearchBox";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderIconsProps {
  variant?: "primary" | "secondary";
}

export function HeaderIcons({ variant = "primary" }: HeaderIconsProps) {
  const count = useAppSelector(selectCartCount);
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  const [openCart, setOpenCart] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
      {/* ✅ Show Search Icon Only for Primary Variant */}
      {variant === "primary" && (
        <div
          className="relative group cursor-pointer"
          onClick={() => setIsSearchOpen(true)}
        >
          <Search size={25} className="group-hover:text-red-600" />
        </div>
      )}

      {/* ✅ Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed w-screen h-screen inset-0 bg-black/90 z-[9999] flex flex-col p-4 shadow-lg"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="flex justify-center text-white hover:text-red-600"
            >
              <CircleX size={28} />
            </button>
            <div className="flex-1 flex justify-center items-center">
              <SearchBox
                placeholder="Search for products..."
                buttontext="Search"
                variant="secondary"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Cart Dropdown */}
      <div className="hidden md:block">
        <Dropdown
          trigger={
            <div className="relative group cursor-pointer">
              <Handbag size={25} className="group-hover:text-red-600" />
              <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-2 bg-black group-hover:bg-red-600 text-white rounded-full text-xs sm:text-sm w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center">
                {count > 0 ? count : 0}
              </span>
            </div>
          }
        >
          <div className="p-4 w-[260px] sm:w-[300px] md:w-[360px]">
            <h2 className="text-lg sm:text-xl text-black pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-gray-300">
              Shopping Cart
            </h2>

            {items.length === 0 ? (
              <p className="text-sm sm:text-base text-gray-600">
                Your cart is empty.
              </p>
            ) : (
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="max-h-[220px] sm:max-h-[300px] overflow-y-auto space-y-3 sm:space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id + item.variant}
                      className="flex gap-2 sm:gap-3"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={80}
                        height={100}
                        className="sm:w-[100px] sm:h-[120px] object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm sm:text-base">
                          {item.title} - {item.color} / {item.size}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {item.quantity} × &pound;
                          {Number(item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center border-y border-gray-300 py-2 sm:py-3 text-sm sm:text-base">
                  <span>Total:</span>
                  <span>&pound;{total.toFixed(2)}</span>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <CustomButton
                    variant="opposithover"
                    size="md"
                    className="w-full sm:w-full"
                    onClick={() => setIsPaymentModalOpen(true)}
                  >
                    Checkout
                  </CustomButton>
                  <Link href="/cart">
                    <CustomButton
                      variant="opposithover"
                      size="md"
                      className="w-full sm:w-full"
                    >
                      View Cart
                    </CustomButton>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Dropdown>
      </div>

      {/* ✅ Mobile Cart */}
      <div className="block md:hidden relative">
        <div
          className="relative group cursor-pointer"
          onClick={() => setOpenCart(true)}
        >
          <Handbag size={25} className="group-hover:text-red-600" />
          <span className="absolute -top-2 -right-2 bg-black group-hover:bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            {count > 0 ? count : 0}
          </span>
        </div>

        {openCart && (
          <div className="fixed inset-0 bg-white 450 flex flex-col p-4">
            <button
              onClick={() => setOpenCart(false)}
              className="absolute top-5 right-4 hover:text-red-600"
            >
              <CircleX size={20} />
            </button>

            <h2 className="text-xl font-semibold mb-4 border-b pb-3">
              Shopping Cart
            </h2>

            {items.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <>
                <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={item.id + item.variant}
                      className="flex gap-3 border-b pb-3"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={90}
                        height={110}
                        className="w-[90px] h-[110px] object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm">
                          {item.title} - {item.color} / {item.size}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {item.quantity} × &pound;
                          {Number(item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <CustomButton
                    variant="opposithover"
                    size="md"
                    className="w-full"
                    onClick={() => {
                      setOpenCart(false);
                      setIsPaymentModalOpen(true);
                    }}
                  >
                    Checkout
                  </CustomButton>
                  <Link href="/cart" onClick={() => setOpenCart(false)}>
                    <CustomButton
                      variant="opposithover"
                      size="md"
                      className="w-full"
                    >
                      View Cart
                    </CustomButton>
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* ✅ Account Dropdown */}
      <Dropdown
        trigger={
          <User size={25} className="hover:text-red-600 hidden lg:block" />
        }
      >
        <div className="p-4 w-[200px] sm:w-[220px] md:w-[240px]">
          <h2 className="text-lg sm:text-xl text-black pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-gray-300">
            Account
          </h2>
          <Link
            href="/account/login"
            className="block py-1 text-sm sm:text-base"
          >
            Login
          </Link>
          <Link
            href="/account/register"
            className="block py-1 text-sm sm:text-base"
          >
            Create Account
          </Link>
        </div>
      </Dropdown>

      {/* ✅ Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={total}
        currency="INR"
        orderId={`order_${Date.now()}`}
        customerName=""
        customerEmail=""
        customerPhone=""
        description={`Payment for ${items.length} item(s)`}
        onSuccess={() => setIsPaymentModalOpen(false)}
        onFailure={() => {}}
      />
    </div>
  );
}
