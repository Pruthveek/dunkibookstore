// app/api/create-order/route.ts
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency, receipt, notes } = body;

    if (!amount || !currency || !receipt) {
      return NextResponse.json(
        { error: "Missing required fields: amount, currency, receipt" },
        { status: 400 }
      );
    }

    // ✅ Initialize Razorpay only at runtime
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID as string,
      key_secret: process.env.RAZORPAY_KEY_SECRET as string,
    });

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { error: "Razorpay credentials missing" },
        { status: 500 }
      );
    }

    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt,
      notes: notes || {},
    });

    return NextResponse.json(order);
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Failed to create order", details: error.message },
      { status: 500 }
    );
  }
}
