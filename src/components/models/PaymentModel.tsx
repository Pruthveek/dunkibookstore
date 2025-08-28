"use client";

import React, { useEffect, useState } from "react";
import { CircleX, CreditCard, Shield } from "lucide-react";
import CustomButton from "@/components/ui/Buttons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store";
import { clearCart } from "@/lib/features/cartSlice";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  currency: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  description?: string;
  onSuccess: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;
  onFailure: (error: unknown) => void;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name?: string;
  email?: string;
  description?: string;
  order_id: string;
  handler: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;
  prefill?: { name?: string; email?: string; contact?: string };
  notes?: Record<string, string>;
  theme?: { color: string };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open: () => void };
  }
}

export default function PaymentModal({
  isOpen,
  onClose,
  amount,
  currency,
  orderId,
  customerName,
  customerEmail,
  customerPhone,
  description,
  onSuccess,
  onFailure,
}: PaymentModalProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const rezorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

  // Load Razorpay script dynamically
  const loadRazorpayScript = () => {
    return new Promise<void>((resolve, reject) => {
      if (typeof window === "undefined")
        return reject(new Error("Window not available"));
      if (window.Razorpay) return resolve();

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () =>
        reject(new Error("Failed to load Razorpay script"));
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      setLoading(true);

      // 1. Load Razorpay SDK
      await loadRazorpayScript();

      // 2. Create order from backend
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(amount * 100),
          currency,
          receipt: orderId,
        }),
      });

      const data = await res.json();
      if (!data.id) throw new Error("Order creation failed");

      // 3. Setup Razorpay options
      const options: RazorpayOptions = {
        key: rezorpayKey || "process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID",
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: "Dunki Bookstore",
        description: description || "Order payment",
        handler: (response) => {
          console.log("Payment success:", response);

          try {
            dispatch(clearCart());
            if (typeof window !== "undefined") {
              localStorage.removeItem("persist:root");
            }
          } catch (e) {
            console.error("Failed to clear cart:", e);
          }

          onSuccess(response);
          onClose();
          router.push("/");
        },
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone,
        },
        theme: { color: "#E7000B" },
      };

      // 4. Open Razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      onFailure(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className=" h-screen w-screen fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-gray-700 hover:text-black"
          aria-label="Close payment modal"
        >
          <CircleX size={22} />
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-96 flex-shrink-0">
          <Image
            src="/Images/PlaygroundImage1.jpg"
            alt="Secure payment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <CreditCard />
            <h2 className="text-lg font-semibold">Complete Payment</h2>
          </div>

          {/* Info */}
          <p className="text-sm text-gray-600 mb-2">
            You&apos;re about to pay{" "}
            <span className="text-red-600 font-medium">
              {currency} {amount.toFixed(2)}
            </span>
          </p>
          <div className="flex items-center gap-2 text-xs text-green-600 mb-4">
            <Shield size={14} />
            <span>Payments are secure and encrypted</span>
          </div>

          {/* Pay Button */}
          <CustomButton
            onClick={handlePayment}
            disabled={loading}
            className="w-full"
            variant="secondary"
            size="xl"
          >
            {loading ? "Processing..." : "Pay Now"}
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
