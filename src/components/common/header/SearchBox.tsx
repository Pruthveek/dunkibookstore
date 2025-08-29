"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import CustomButton from "@/components/ui/Buttons";
import { products } from "@/data/products";

type Product = {
  productId: number;
  title: string;
  author: string;
  imageUrl: string;
  price: number;
  productSlug: string;
};

interface SearchBoxProps {
  placeholder?: string;
  buttontext?: string;
  variant?: "primary"|"secondary";
}

const SearchBox = ({ placeholder = "Search...", buttontext = "Search" ,variant="primary"}: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  
  const handleInputChange = (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }

    const filtered = products.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.author.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
    setOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-md" ref={boxRef}>
      <div className={`flex items-center overflow-hidden py-1 px-2  ${variant==="secondary" ? "bg-transparent border-b border-gray-200 text-white" : "bg-white border border-gray-200 "}`}>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full outline-0"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <CustomButton
          variant="ghost"
          className={`inline-flex items-center gap-1  ${variant==="secondary" ? "text-white" : "text-black "}`}
          onClick={() => handleInputChange(query)}
        >
          <Search size={16} /> {buttontext}
        </CustomButton>
      </div>

      {open && results.length > 0 && (
        <div className="absolute left-0 w-full bg-white border border-gray-300 shadow-lg z-[9999] max-h-80 overflow-y-auto">
          <ul className="divide-y divide-dashed divide-gray-300">
            <li className="py-4 px-34">PRODUCTS</li>
            {results.map((item) => (
              <li key={item.productId}>
                <Link
                  href={`/products/${item.productSlug}`}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 transition"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={70}
                  />
                  <div>
                    <p className="text-sm text-gray-500">{item.author}</p>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm font-semibold">£{item.price}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {open && query && results.length === 0 && (
        <div className="absolute left-0 w-full bg-white border border-gray-300 p-3 text-sm text-gray-500 z-[9999] ">
          No products found for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
};

export default SearchBox;
