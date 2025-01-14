"use client"
import { deleteItemCart, getCart, postOrder } from '@/lib/api'
import { useCartStore } from '@/store/useCartStore'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
interface Product {
    id: number;
    name: string;
    price: string;
  }
  
  interface CartItem {
    id: number;
    quantity: number;
    price: string;
    Product: Product;
  }
  
  interface Cart {
    id: number;
    status: string;
    CartItems: CartItem[];
  }
  
export default function Cartpage() {

    const [lines, setCartLines] = useState<CartItem[]>([]);
    useEffect(() => {
      const initializeCart = async () => {
        try {
          const dataCart = await getCart();
          console.log("Cart loaded", dataCart);
          setCartLines(dataCart?.CartItems || []);
        } catch (error) {
          console.error('Error initializing cart:', error);
        }
      };
      initializeCart();
    }, []);

    const handleOrder = async () => {
      try {
        const orderData = await postOrder("HCM", "momo");
        console.log("Order placed successfully:", orderData);
      } catch (error) {
        console.error("Error placing order:", error);
      }
    };
    return ( 
        <>
         <button onClick={() => handleOrder()}>Order</button>
        </>
    )
}

