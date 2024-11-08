import React from 'react'
import Link from 'next/link'
// import {product} from '@/lib/services/productService'
import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'


export default function ProductItem({ product }: { product: Product }) {
  return (
    <div>
      <figure>
        <Link href={`/products/${product.slug}`}></Link>
        <Image 
        src={product.image} 
        alt={product.name} 
        width={200} 
        height={200} />
      </figure>
    </div>
  )
}
