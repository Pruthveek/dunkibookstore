"use client";
import React from "react";

type Props = {
  current: number;
  totalPages: number;
  onPage: (n: number) => void;
};

const Pagination: React.FC<Props> = ({ current, totalPages, onPage }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {/* Previous button */}
      <button
        className="flex items-center text-xl justify-center h-14 w-14  bg-gray-100  text-gray-600 transition cursor-pointer disabled:cursor-not-allowed"
        onClick={() => onPage(Math.max(1, current - 1))}
        disabled={current === 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {/* Page numbers */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPage(p)}
          className={`flex items-center justify-center h-14 w-14 cursor-pointer shadow-md text-sm font-medium transition
            ${
              p === current
                ? "bg-red-500  text-white shadow-sm"
                : "bg-gray-100 text-black hover:bg-gray-300"
            }`}
        >
          {p}
        </button>
      ))}

      {/* Next button */}
      <button
        className="flex items-center text-xl justify-center h-14 w-14  bg-gray-100 text-gray-600  transition cursor-pointer disabled:cursor-not-allowed"
        onClick={() => onPage(Math.min(totalPages, current + 1))}
        disabled={current === totalPages}
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;