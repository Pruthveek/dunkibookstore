"use client";
import React, { useMemo, useState } from "react";
import { products, type Product } from "@/data/products";
import FiltersSidebar, { type FiltersState } from "@/components/common/shop/filters/FiltersSidebar";
import SortBar from "@/components/common/shop/SortBar";
import Pagination from "@/components/common/shop/Pagination";
import { buildCounts, parsePriceGBP, sortProducts, type SortKey } from "@/lib/products";
import BreadCrumb from "@/components/layouts/BreadCrumb";
import CollectionSection from "@/components/modules/shop/CollectionSection";
import ProductCard from "@/components/common/home/productcard";
import ShopAtInstagram from "@/components/modules/home/ShopAtInstagram";
import OfferBanner from "@/components/modules/home/OfferBanner";

const MostViewed: React.FC = () => {
  const counts = useMemo(() => buildCounts(products), []);

  const [filters, setFilters] = useState<FiltersState>({
    availability: null,
    priceMin: null,
    priceMax: null,
    authors: new Set<string>(),
    colors: new Set<string>(),
    categories: new Set<string>(),
  });
  const [sort, setSort] = useState<SortKey>("alpha-asc");
  const [pageSize, setPageSize] = useState<number>(4);
  const [page, setPage] = useState<number>(1);
  const [layout, setLayout] = useState<"grid" | "list">("grid"); // 👈 NEW state

  const filtered = useMemo(() => {
    let list: Product[] = products;

    if (filters.availability === "in") list = list.filter((p) => p.stock > 0);
    if (filters.availability === "out") list = list.filter((p) => p.stock === 0);

    if (filters.priceMin !== null)
      list = list.filter((p) => parsePriceGBP(p.price) >= filters.priceMin!);
    if (filters.priceMax !== null)
      list = list.filter((p) => parsePriceGBP(p.price) <= filters.priceMax!);

    if (filters.authors.size) list = list.filter((p) => filters.authors.has(p.author));
    if (filters.colors.size) list = list.filter((p) => p.color.some((c) => filters.colors.has(c)));
    if (filters.categories.size) list = list.filter((p) => p.category.some((c) => filters.categories.has(c)));

    return sortProducts(list, sort);
  }, [filters, sort]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const current = Math.min(page, totalPages);
  const startIndex = (current - 1) * pageSize;
  const pageItems = filtered.slice(startIndex, startIndex + pageSize);

  const showingFrom = total ? startIndex + 1 : 0;
  const showingTo = Math.min(startIndex + pageSize, total);

  const handleApplyFilters = () => {
    setPage(1);
  };

  return (
    <section>
      <BreadCrumb
        title="MostViewed"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "MostViewed" }]}
      />
      <CollectionSection />

      <div className="section-container2 gap-4 grid grid-cols-1 md:grid-cols-4 py-10">
        {/* Sidebar */}
        <div className="col-span-4 md:col-span-1 md:order-last">
          <FiltersSidebar
            counts={counts}
            filters={filters}
            onChange={setFilters}
            onApply={handleApplyFilters}
          />
        </div>

        {/* Product Content */}
        <div className="col-span-4 md:col-span-3 md:order-first">
          <SortBar
            total={total}
            showingFrom={showingFrom}
            showingTo={showingTo}
            sort={sort}
            onSortChange={(v) => {
              setSort(v);
              setPage(1);
            }}
            pageSize={pageSize}
            onPageSize={(n) => {
              setPageSize(n);
              setPage(1);
            }}
            layout={layout}
            onLayoutChange={setLayout}
          />

          <div
            className={`${
              layout === "grid"
                ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col gap-6"
            }`}
          >
            {pageItems.map((p) => (
              <ProductCard
                key={p.productId}
                {...p}
                color={p.color}
                description={p.description}
                layout={layout === "list" ? "horizontal" : "vertical"}
              />
            ))}
          </div>

          <Pagination current={current} totalPages={totalPages} onPage={setPage} />
        </div>
      </div>
      <OfferBanner/>
      <ShopAtInstagram/>
    </section>
  );
};

export default MostViewed;
