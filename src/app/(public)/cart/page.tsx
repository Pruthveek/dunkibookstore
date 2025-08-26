"use client";
import { useAppSelector, useAppDispatch } from "@/lib/store";
import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "@/lib/features/cartSlice";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "@/lib/features/cartSlice";
import BreadCrumb from "@/components/layouts/BreadCrumb";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CustomButton from "@/components/ui/Buttons";

export default function CartPage() {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();

  return (
    <>
      <BreadCrumb
        title="Your Shopping Cart"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Your Shopping Cart" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        {items.length === 0 ? (
          <div className="text-center">
            <h1 className="text-3xl">Shopping Cart</h1>
            <h2 className="text-xl">Your cart is currently empty.</h2>
            <p>
              Continue browsing{" "}
              <Link href="/" className="hover:underline hover:text-red-600">
                here
              </Link>
            </p>
          </div>
        ) : (
          <>
            {/* CART TABLE */}
            <div className="overflow-x-auto ">
              <table className="w-full border-collapse border border-gray-300 text-left text-sm">
                <thead>
                  <tr className="border border-gray-300 bg-gray-50">
                    <th className="p-3 border border-gray-300">Image</th>
                    <th className="p-3 border border-gray-300">Product</th>
                    <th className="p-3 border border-gray-300">Price</th>
                    <th className="p-3 border border-gray-300">Quantity</th>
                    <th className="p-3 border border-gray-300">Total</th>
                    <th className="p-3 border border-gray-300">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.tr
                        key={item.id + (item.color ?? "") + (item.size ?? "")}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="border border-gray-300"
                      >
                        <td className="p-3 border border-gray-300">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={60}
                            height={90}
                            className="object-cover"
                          />
                        </td>
                        <td className="p-3 border border-gray-300">
                          <div>{item.title}</div>
                          <div className="text-xs text-gray-500">
                            {item.color} {item.size ? `/ ${item.size}` : ""}
                          </div>
                        </td>
                        <td className="p-3 border border-gray-300">
                          £{item.price.toFixed(2)}
                        </td>
                        <td className="p-3 border border-gray-300">
                          <div className="flex items-center border border-gray-300 w-24 justify-between">
                            <button
                              className="px-2 py-1"
                              onClick={() =>
                                dispatch(
                                  decreaseQty({
                                    id: item.id,
                                    color: item.color,
                                    size: item.size,
                                  })
                                )
                              }
                            >
                              -
                            </button>
                            <span className="px-2">{item.quantity}</span>
                            <button
                              className="px-2 py-1"
                              onClick={() =>
                                dispatch(
                                  increaseQty({
                                    id: item.id,
                                    color: item.color,
                                    size: item.size,
                                  })
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-3 border border-gray-300">
                          £{(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="p-3 border border-gray-300">
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() =>
                              dispatch(
                                removeFromCart({
                                  id: item.id,
                                  color: item.color,
                                  size: item.size,
                                })
                              )
                            }
                          >
                            ✕
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap justify-between gap-3">
              <Link href="/" className="w-full md:w-fit">
                <CustomButton variant="secondary" size="xl" className="w-full md:w-fit">
                  Continue Shopping
                </CustomButton>
              </Link>
              <div className="flex flex-wrap gap-3 w-full md:w-fit ">
                <CustomButton
                  variant="secondary"
                  size="xl"
                  onClick={() => dispatch(clearCart())}
                  className="w-full md:w-fit"
                >
                  Clear Cart
                </CustomButton>
              </div>
            </div>

            {/* DELIVERY + CART TOTALS */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-300 p-5">
                <h3 className="mb-2">Delivery Date</h3>
                <label className="block text-sm mb-2">
                  Pick a delivery date:
                </label>
                <input
                  type="date"
                  className="border border-gray-300 px-3 py-2 w-full"
                />
                <p className="text-xs text-gray-500 mt-2">
                  We do not deliver during the weekend.
                </p>
              </div>

              <div className="border border-gray-300 p-5">
                <h3 className="mb-4">Cart Totals</h3>
                <table className="w-full border border-gray-300 text-sm">
                  <tbody>
                    <tr className="border border-gray-300">
                      <td className="p-2 border border-gray-300">Subtotal</td>
                      <td className="p-2 border border-gray-300 text-right">
                        £{total.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border border-gray-300">
                      <td className="p-2 border border-gray-300">Total</td>
                      <td className="p-2 border border-gray-300 text-right">
                        £{total.toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <CustomButton
                  variant="secondary"
                  size="xl"
                  className="w-full mt-4"
                >
                  Proceed to Checkout
                </CustomButton>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="mt-8 border border-gray-300 p-5">
              <h3 className="mb-2">Special instructions for seller</h3>
              <textarea
                rows={3}
                className="w-full border border-gray-300 p-3"
                placeholder="Add any notes for the seller..."
              ></textarea>
            </div>
          </>
        )}
      </section>
    </>
  );
}
