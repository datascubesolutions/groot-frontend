/**
 * Platform Page
 *
 * Showcases the Decision Intelligence Platform and products
 */

import { PlatformHeroSection } from "@/components/sections/PlatformHeroSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { productData } from "@/lib/constants/products";

export const metadata = {
  title: "Platform - Decision Intelligence | Groot Analytics",
  description: "Powered by Math. Fueled by Curiosity. Transform complex business challenges into actionable intelligence through advanced analytics and decision science frameworks.",
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <PlatformHeroSection />
        <PlatformSection />

        {productData.map((product, index) => (
          <ProductSection
            key={product.title}
            {...product}
          />
        ))}
      </main>
    </div>
  );
}
