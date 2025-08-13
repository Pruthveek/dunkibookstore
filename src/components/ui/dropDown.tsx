"use client";
import React, { useRef, useState, useEffect } from "react";
interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
}
export const Dropdown: React.FC<DropdownProps> = ({ trigger, children, align = "right" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);
  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen((o) => !o)} className="cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div
          className={`absolute z-50 mt-12 min-w-[200px] bg-white
            ${align === "right" ? "right-0" : "left-0"}
          `}
        >
          {children}
        </div>
      )}
    </div>
  );
};