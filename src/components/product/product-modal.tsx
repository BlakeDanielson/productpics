import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { type Product } from "./product-grid";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[80vh] overflow-auto">
        <div className="relative h-80 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
          />
        </div>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>${product.price.toFixed(2)}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>{product.description}</p>
            {product.details && <p className="text-sm text-gray-700">{product.details}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button>Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
} 