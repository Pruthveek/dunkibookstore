"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = { label: string; count?: number };

type Props = {
  title: string;
  items: Item[];
  selected: Set<string>;
  onToggle: (key: string) => void;
};

const CheckboxFilter: React.FC<Props> = ({ title, items, selected, onToggle }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-300 py-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-2 text-left"
      >
        {title}
        <span
          className={`ml-2 text-xl transition-transform duration-500 ease-in-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-2 space-y-2 text-sm"
          >
            {items.map((i) => (
              <label key={i.label} className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.has(i.label)}
                  onChange={() => onToggle(i.label)}
                  className="accent-black"
                />
                <span className="flex-1">{i.label}</span>
                {typeof i.count === "number" && (
                  <span className="text-gray-500">{i.count}</span>
                )}
              </label>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CheckboxFilter;
