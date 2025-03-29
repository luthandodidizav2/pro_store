import { getProductBySlug } from '@/lib/actions/productActions';
import { notFound } from 'next/navigation';
import React from 'react'
import {Badge} from '@/components/ui/Badge'
import {Button} from '@/components/ui/button'
import {Card,CardContent} from '@/components/ui/card'
import ProductImageCarousel from '@/components/shared/product/product-image';

const ProductDetailsPage = async({params}:{params:Promise<{slug:string}>}) => {
    const { slug } = await params;

    const product = await getProductBySlug(slug);
    if(!product){
        notFound();
    }

    
  return (
    <>
    <section className=''>
        <div className="grid grid-cols-1 md:grid-cols-5">
        {/* IMAGES COLUMN */}
        <div className="col-span-2">
            {/* Images */}
            <ProductImageCarousel images={product.images} />
        </div>
        {/* DETAILS COLUMN */}
        <div className="col-span-2">
            <div className="flex flex-col gap-6">
                <p className="">{product.brand} {product.category}</p>
                <h1 className="font-bold text-3xl">{product.name}</h1>
                <p>{product.rating} of {product.numReviews} Reviews</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                   <p className="text-2xl font-bold text-green-600"> {product.price}</p>
                </div>
            </div>
            <div className="mt-10">
                <p className="font-semibold">
                    Description
                </p>
                <p className="font-light">
                    {product.description}
                </p>
            </div>
        </div>
        {/* ACTION COLUMN */}
        <div className="">
            <Card>
                <CardContent className="p-4">
                    <div className="mb-2 flex justify-between">
                        <div className="">Price</div>
                        <div className="">{product.price}</div>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <div className="">Status</div>
                        <div className="">{product.stock > 0 ?(
                            <Badge variant={'outline'}>In Stock</Badge>
                        ):(<Badge>Out of Stock</Badge>) }</div>
                    </div>
                </CardContent>

            </Card>
        </div>

        </div>

    </section>
    </>
  )
}

export default ProductDetailsPage