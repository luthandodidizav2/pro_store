import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

import {Product} from '@/types'

const ProductCard = ({ product }: { product: Product }) => {


  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex justify-center items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt="my image"
            height={300}
            width={300}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-sm">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-bold">{product.name}</h2>
        </Link>
        <div className="flex gap-4">
          <p className="">{product.rating} stars</p>
          {product.stock > 0 ? (
            <p className="font-bold">{product.price}</p>
          ) : (
            <p className="text-red-700">Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
