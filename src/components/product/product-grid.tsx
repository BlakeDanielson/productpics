import { useState } from "react";
import { ProductCard } from "./product-card";
import { ProductModal } from "./product-modal";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  details?: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const handleViewProduct = (id: string) => {
    const product = products.find(p => p.id === id);
    if (product) {
      setSelectedProduct(product);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            onView={handleViewProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
} 