import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  onView: (id: string) => void;
}

export function ProductCard({ id, title, description, price, image, onView }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-60 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500">${price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => onView(id)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
} 