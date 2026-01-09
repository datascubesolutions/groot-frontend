"use client";

import { ProductSection } from "@/components/sections/ProductSection";
import { productData } from "@/lib/constants/products";

export const PlatformPreviewSection = () => {
  return (
    <section className="bg-background">
      {productData.map((product, index) => (
        <ProductSection key={product.title} {...product} />
      ))}
    </section>
  );
};
