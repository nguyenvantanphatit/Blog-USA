import { toast } from 'react-toastify'
import { addToCart } from '@/lib/api'
import { useCartStore } from '@/store/useCartStore'

interface Product {
  id: number
  name: string
  price: string
  imageUrl?: string 
  link?: string  
}

export const handleAddToCart = async (product: Product, quantity: number = 1) => {
  try {
    await addToCart(product.id, quantity)
    useCartStore.getState().addItem({
      id: product.id,
      price: product.price,
      quantity: quantity,
      product: {
        ...product,
        imageUrl: product?.imageUrl ?? ""
      },
    })
    toast.success('Đã thêm vào giỏ hàng')
  } catch (error) {
    console.error('Error adding to cart:', error)
    toast.error('Có lỗi xảy ra khi thêm vào giỏ hàng')
  }
}
