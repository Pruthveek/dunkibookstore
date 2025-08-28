import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  const { amount, currency, receipt } = await req.json();

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return NextResponse.json({ error: "Razorpay credentials missing" }, { status: 500 });
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);

  const order = await razorpay.orders.create({
    amount,
    currency,
    receipt,
  });

  return NextResponse.json(order);
}
