"use client";
import React from "react";
import type { SortKey } from "@/lib/products";
import { Grid2x2, Menu } from "lucide-react";

type Props = {
  total: number;
  showingFrom: number;
  showingTo: number;
  sort: SortKey;
  onSortChange: (v: SortKey) => void;
  pageSize: number;
  onPageSize: (n: number) => void;
  layout: "grid" | "list";
  onLayoutChange: (layout: "grid" | "list") => void;
};

const SortBar: React.FC<Props> = ({
  total,
  showingFrom,
  showingTo,
  sort,
  onSortChange,
  pageSize,
  onPageSize,
  layout,
  onLayoutChange,
}) => {
  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div className="hidden md:flex items-center gap-2">
        <button
          onClick={() => onLayoutChange("grid")}
          className={`cursor-pointer ${layout === "grid" ? " text-red-600" : "text-black"}`}
        >
          <Grid2x2 strokeWidth={1.5} />
        </button>
        <button
          onClick={() => onLayoutChange("list")}
          className={`cursor-pointer ${layout === "list" ? " text-red-600" : "text-black"}`}
        >
          <Menu strokeWidth={1.5} />
        </button>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span>Sort by :</span>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortKey)}
            className="px-3 py-2 outline-0"
          >
            <option value="alpha-asc">Alphabetically, A–Z</option>
            <option value="alpha-desc">Alphabetically, Z–A</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
          </select>
        </div>
        <div>
          Showing {showingFrom} – {showingTo} of {total} result
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span>Show :</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSize(parseInt(e.target.value))}
          className="px-3 py-2 outline-0"
        >
          {[4, 8, 12, 16].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortBar;
