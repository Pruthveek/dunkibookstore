import { Product, products } from "@/data/products";

// ✅ handle both string and number
export const parsePriceGBP = (price: string | number): number => {
  if (typeof price === "number") return price;
  if (typeof price === "string") {
    // Remove currency symbols/commas etc.
    const cleaned = price.replace(/[^\d.]/g, "");
    return parseFloat(cleaned || "0");
  }
  return 0;
};

export type Counts = {
  authors: Record<string, number>;
  colors: Record<string, number>;
  categories: Record<string, number>;
  availability: { inStock: number; outOfStock: number };
  price: { min: number; max: number };
};

export const buildCounts = (all = products): Counts => {
  const counts: Counts = {
    authors: {},
    colors: {},
    categories: {},
    availability: { inStock: 0, outOfStock: 0 },
    price: { min: Number.POSITIVE_INFINITY, max: 0 },
  };

  all.forEach((p) => {
    // authors
    counts.authors[p.author] = (counts.authors[p.author] || 0) + 1;

    // colors
    p.color.forEach((c) => {
      counts.colors[c] = (counts.colors[c] || 0) + 1;
    });

    // categories
    p.category.forEach((cat) => {
      counts.categories[cat] = (counts.categories[cat] || 0) + 1;
    });

    // availability
    if (p.stock > 0) counts.availability.inStock += 1;
    else counts.availability.outOfStock += 1;

    // price
    const num = parsePriceGBP(p.price);
    counts.price.min = Math.min(counts.price.min, num);
    counts.price.max = Math.max(counts.price.max, num);
  });

  if (counts.price.min === Number.POSITIVE_INFINITY) counts.price.min = 0;
  return counts;
};

export type SortKey =
  | "alpha-asc"
  | "alpha-desc"
  | "price-asc"
  | "price-desc";

export const sortProducts = (list: Product[], sort: SortKey): Product[] => {
  const cloned = [...list];
  switch (sort) {
    case "alpha-asc":
      return cloned.sort((a, b) => a.title.localeCompare(b.title));
    case "alpha-desc":
      return cloned.sort((a, b) => b.title.localeCompare(a.title));
    case "price-asc":
      return cloned.sort(
        (a, b) => parsePriceGBP(a.price) - parsePriceGBP(b.price)
      );
    case "price-desc":
      return cloned.sort(
        (a, b) => parsePriceGBP(b.price) - parsePriceGBP(a.price)
      );
    default:
      return cloned;
  }
};
