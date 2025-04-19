"use client";

import { ProductGrid } from "./product-grid";

// Sample product data
const products = [
  {
    id: "1",
    title: "Professional Camera",
    description: "High-quality digital camera for professional photography.",
    price: 799.99,
    image: "https://placehold.co/600x400/222/fff?text=Camera",
    details: "This professional-grade camera features a 24.2MP sensor, 4K video recording, and advanced autofocus system for stunning photos and videos."
  },
  {
    id: "2",
    title: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones.",
    price: 249.99,
    image: "https://placehold.co/600x400/222/fff?text=Headphones",
    details: "Experience immersive sound with these wireless headphones featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design."
  },
  {
    id: "3",
    title: "Smartphone",
    description: "Latest model smartphone with advanced features.",
    price: 999.99,
    image: "https://placehold.co/600x400/222/fff?text=Smartphone",
    details: "Stay connected with this powerful smartphone featuring a 6.7-inch OLED display, triple camera system, and all-day battery life."
  },
  {
    id: "4",
    title: "Smartwatch",
    description: "Feature-rich smartwatch with health monitoring.",
    price: 349.99,
    image: "https://placehold.co/600x400/222/fff?text=Smartwatch",
    details: "Track your fitness goals and stay connected with this smartwatch featuring heart rate monitoring, GPS, and water resistance up to 50 meters."
  },
  {
    id: "5",
    title: "Wireless Earbuds",
    description: "Compact wireless earbuds with great sound quality.",
    price: 129.99,
    image: "https://placehold.co/600x400/222/fff?text=Earbuds",
    details: "Enjoy your music on the go with these wireless earbuds featuring touch controls, 24-hour battery life with the charging case, and sweat resistance."
  },
  {
    id: "6",
    title: "Laptop",
    description: "Powerful laptop for work and entertainment.",
    price: 1299.99,
    image: "https://placehold.co/600x400/222/fff?text=Laptop",
    details: "Boost your productivity with this high-performance laptop featuring a 15.6-inch display, Intel Core i7 processor, 16GB RAM, and 512GB SSD storage."
  },
  {
    id: "7",
    title: "Tablet",
    description: "Versatile tablet for productivity and entertainment.",
    price: 499.99,
    image: "https://placehold.co/600x400/222/fff?text=Tablet",
    details: "Enjoy the best of both worlds with this versatile tablet featuring a 10.9-inch Liquid Retina display, A14 Bionic chip, and compatibility with Apple Pencil."
  },
  {
    id: "8",
    title: "Bluetooth Speaker",
    description: "Portable bluetooth speaker with powerful sound.",
    price: 89.99,
    image: "https://placehold.co/600x400/222/fff?text=Speaker",
    details: "Take your music anywhere with this portable Bluetooth speaker featuring 360° sound, 12-hour battery life, and waterproof design."
  }
];

export function ProductShowcase() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Product Showcase</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest collection of premium tech products designed to enhance your digital experience.
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
} 