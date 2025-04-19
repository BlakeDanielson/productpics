import { ProductShowcase } from "@/src/components/product/product-showcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <header className="py-6">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">ProductPics</div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm font-medium hover:underline">Home</a>
              <a href="#" className="text-sm font-medium hover:underline">Products</a>
              <a href="#" className="text-sm font-medium hover:underline">About</a>
              <a href="#" className="text-sm font-medium hover:underline">Contact</a>
            </div>
          </nav>
        </header>
        <ProductShowcase />
      </div>
    </main>
  );
}
