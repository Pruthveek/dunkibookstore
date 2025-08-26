"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckboxFilter from "./CheckboxFilter";
import type { Counts } from "@/lib/products";
import CustomButton from "@/components/ui/Buttons";

export type FiltersState = {
  availability: "in" | "out" | null; // null = all
  priceMin: number | null;
  priceMax: number | null;
  authors: Set<string>;
  colors: Set<string>;
  categories: Set<string>;
};

type Props = {
  counts: Counts;
  filters: FiltersState;
  onChange: (next: FiltersState) => void;
  onApply?: () => void; // optional Filter button hook
};

const FiltersSidebar: React.FC<Props> = ({ counts, filters, onChange, onApply }) => {
  const set = (patch: Partial<FiltersState>) => onChange({ ...filters, ...patch });
  const [openAvailability, setOpenAvailability] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);

  // helper to toggle items in a Set
  const toggleSet = (setName: keyof FiltersState, key: string) => {
    const currentSet = new Set(filters[setName] as Set<string>);
    if (currentSet.has(key)) {
      currentSet.delete(key);
    } else {
      currentSet.add(key);
    }
    set({ [setName]: currentSet } as Partial<FiltersState>);
  };

  return (
    <aside className="w-full shrink-0">
      {/* Availability */}
      <div className="border-b border-gray-300 py-2">
        <button
          onClick={() => setOpenAvailability(!openAvailability)}
          className="w-full flex justify-between items-center py-2 text-left "
        >
          Availability
          <span
            className={`ml-2 text-xl transition-transform duration-500 ease-in-out ${
              openAvailability ? "rotate-180" : "rotate-0"
            }`}
          >
            {openAvailability ? "−" : "+"}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {openAvailability && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mt-2 space-y-2 text-sm"
            >
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availability"
                  className="accent-black"
                  checked={filters.availability === null}
                  onChange={() => set({ availability: null })}
                />
                <span>All</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availability"
                  className="accent-black"
                  checked={filters.availability === "in"}
                  onChange={() => set({ availability: "in" })}
                />
                <span>In stock</span>
                <span className="ml-auto text-gray-500">{counts.availability.inStock}</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availability"
                  className="accent-black"
                  checked={filters.availability === "out"}
                  onChange={() => set({ availability: "out" })}
                />
                <span>Out of stock</span>
                <span className="ml-auto text-gray-500">{counts.availability.outOfStock}</span>
              </label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Price */}
      <div className="border-b border-gray-300 py-2">
        <button
          onClick={() => setOpenPrice(!openPrice)}
          className="w-full flex justify-between items-center py-2 text-left "
        >
          Price
          <span
            className={`ml-2 text-xl transition-transform duration-500 ease-in-out ${
              openPrice ? "rotate-180" : "rotate-0"
            }`}
          >
            {openPrice ? "−" : "+"}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {openPrice && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mt-2 text-sm"
            >
              <div className="flex items-center gap-2">
                <span>&pound;</span>
                <input
                  type="number"
                  placeholder={`${Math.floor(counts.price.min)}`}
                  className="w-20 border px-2 py-1"
                  value={filters.priceMin ?? ""}
                  onChange={(e) =>
                    set({
                      priceMin: e.target.value === "" ? null : Number(e.target.value),
                    })
                  }
                />
                <span>to</span>
                <span>&pound;</span>
                <input
                  type="number"
                  placeholder={`${Math.ceil(counts.price.max)}`}
                  className="w-20 border px-2 py-1"
                  value={filters.priceMax ?? ""}
                  onChange={(e) =>
                    set({
                      priceMax: e.target.value === "" ? null : Number(e.target.value),
                    })
                  }
                />
              </div>
              <CustomButton
                className="mt-3 w-full bg-black px-3 py-2 text-white"
                onClick={onApply}
                variant="secondary"
              >
                Filter
              </CustomButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Authors */}
      <CheckboxFilter
        title="Authors"
        items={Object.entries(counts.authors).map(([label, count]) => ({
          label,
          count,
        }))}
        selected={filters.authors}
        onToggle={(key) => toggleSet("authors", key)}
      />

      {/* Colors */}
      <CheckboxFilter
        title="Color"
        items={Object.entries(counts.colors).map(([label, count]) => ({
          label,
          count,
        }))}
        selected={filters.colors}
        onToggle={(key) => toggleSet("colors", key)}
      />

      {/* Categories */}
      <CheckboxFilter
        title="Categories"
        items={Object.entries(counts.categories).map(([label, count]) => ({
          label,
          count,
        }))}
        selected={filters.categories}
        onToggle={(key) => toggleSet("categories", key)}
      />
    </aside>
  );
};

export default FiltersSidebar;

