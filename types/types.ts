export interface User {
  id: number
  username: string
  isAdmin: boolean
  avatar?: string
  status?: string
}

export interface Conversation {
  id: number
  userId: number
  adminId: number
  user: User
  admin: User
  isNew: any
  lastMessage: any
  createdAt: any
}

export interface Message {
  id: number
  content: string
  senderId: number
  User: {
    id: number
    username: string
  }
}

export interface ContactForm {
  name : string;
  email : string;
  message: string;
}

export interface ProductImages {
  productId : string;
  imageUrl : string;
  order: string;
}

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: string
  categoryId: number
  imageUrl: string | undefined 
  quantity: number
  createdAt: string
  updatedAt: string
  Category: {
    id: number
    name: string
    createdAt: string
    updatedAt: string
  }
  Discounts: any[]
  ProductImages: ProductImages[];
}

