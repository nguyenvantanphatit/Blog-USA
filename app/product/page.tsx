import ProductGrid from '@/components/ProductGrid'
import { getProducts } from '@/lib/api';
import React from 'react'

export default async function Productpage() {
  const initialProducts = await getProducts();
  return (
    <>
        <ProductGrid initialProducts={initialProducts}/>
    </>
  )
}
