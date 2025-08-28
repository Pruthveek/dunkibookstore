"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

export type CartItem = {
  variant?: string;
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  price: number; 
  productSlug: string;
  color?: string;
  size?: string;
  quantity: number;
};

export type CartState = {
  items: Record<string, CartItem>;
};

const initialState: CartState = {
  items: {},
};

const makeKey = (item: { id: string; color?: string; size?: string }) =>
  `${item.id}-${item.color ?? "default"} ?? variant-${item.size ?? "default"}`;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const key = makeKey(action.payload);
      if (state.items[key]) {
        state.items[key].quantity += action.payload.quantity;
      } else {
        state.items[key] = { ...action.payload };
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string; color?: string; size?: string }>) => {
      delete state.items[makeKey(action.payload)];
    },
    increaseQty: (state, action: PayloadAction<{ id: string; color?: string; size?: string }>) => {
      const key = makeKey(action.payload);
      if (state.items[key]) state.items[key].quantity += 1;
    },
    decreaseQty: (state, action: PayloadAction<{ id: string; color?: string; size?: string }>) => {
      const key = makeKey(action.payload);
      const item = state.items[key];
      if (!item) return;
      if (item.quantity > 1) item.quantity -= 1;
      else delete state.items[key];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) =>
  Object.values(state.cart.items);

export const selectCartCount = (state: RootState) =>
  Object.values(state.cart.items).reduce((sum, i) => sum + i.quantity, 0);

export const selectCartTotal = (state: RootState) =>
  Object.values(state.cart.items).reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

export default cartSlice.reducer;
