import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO ")
  console.log("Received request:", req.method, req.body);

  if (req.method !== "POST") {
    console.warn("Method not allowed:", req.method);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { amount, currency, receipt } = req.body;
  console.log("Request body:", { amount, currency, receipt });

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || "",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "",
    });

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("Razorpay credentials are missing");
      return res.status(500).json({ error: "Razorpay credentials are missing" });
    }

    const options = {
      amount,
      currency: currency || "INR",
      receipt: receipt || "receipt#1",
    };

    console.log("Creating Razorpay order with options:", options);

    const order = await razorpay.orders.create(options);

    console.log("Razorpay order created:", order);

    res.status(200).json(order);
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ error: error.message });
  }
}
