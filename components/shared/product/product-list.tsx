import React from 'react'
import ProductCard from '@/components/shared/product/product-card';
import {Product} from '@/types'


const ProductList = ({data,title }:{data:Product[];title?:string}) => {
  return (
    <div className='my-10'>
      <h2 className="mb-4 font-bold">{title}</h2>
      {data.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {data.map((product:Product)=>{

            return (
              <ProductCard key={product.slug} product={product} />
            )
          })}
        </div>
      ) :(
        <div>No Products Found</div>
      )}
    </div>
  )
}

export default ProductList