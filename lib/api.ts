import axios, { AxiosInstance } from 'axios'
import { useUserStore } from "@/store/useUserStore"
import { ContactForm, Conversation, Message, User } from "@/types/types"

// const API_URL = 'https://web-api-ef36.onrender.com/api'
const API_URL = 'http://localhost:10001/api'

const apiPublic: AxiosInstance = axios.create({
  baseURL: API_URL,
})


const apiPrivate: AxiosInstance = axios.create({
  baseURL: API_URL,
})

apiPrivate.interceptors.request.use(
  (config) => {
    const token = useUserStore.getState().token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export const getAllBlogs = async () => {
  const { data } = await apiPublic.get('/blogs/admin/list')
  return data
}

export const getBlogDetails = async (slug: string) => {
  const { data } = await apiPublic.get(`/blogs/${slug}`)
  return data
}

export const getProducts = async () => {
  const { data } = await apiPublic.get('/products')
  return data
}

export const getProductDetails = async (slug: string) => {
  const { data } = await apiPublic.get(`/products/${slug}`)
  return data
}


export const searchProductsApi = async (searchParams: {
  query: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}) => {
  const { query, category, minPrice, maxPrice } = searchParams;

  try {
    const { data } = await apiPublic.get("/search", {
      params: {
        query,
        category,
        minPrice,
        maxPrice,
      },
    });
    return data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

export const postLogin = async (email: string, password: string) => {
  const { data } = await apiPrivate.post('/users/login', { email, password })
  return data
}

export const postRegister = async (email: string, username: string, password: string, isAdmin: boolean) => {
  const { data } = await apiPrivate.post('/users/register', { email, username, password, isAdmin })
  return data
}

export const postContactForm = async (ContactForm: ContactForm) => {
  const { data } = await apiPrivate.post('/contact-forms', ContactForm)
  return data
}

// Private API calls
export const fetchCurrentUser = async (): Promise<User> => {
  const { data } = await apiPrivate.get('/users/me')
  return data.user
}

export const createConversation = async (): Promise<Conversation> => {
  const { data } = await apiPrivate.post('/conversations')
  return data.conversation
}

export const postConversations = async (): Promise<Conversation[]> => {
  const { data } = await apiPrivate.post('/conversations')
  return data
}

export const fetchConversations = async (): Promise<Conversation[]> => {
  const { data } = await apiPrivate.get('/conversations')
  return data
}

export const fetchMessages = async (conversationId: number): Promise<Message[]> => {
  const { data } = await apiPrivate.get(`/messages/${conversationId}`)
  return data
}

export const sendMessage = async (conversationId: number, content: string): Promise<Message> => {
  const { data } = await apiPrivate.post('/messages', { conversationId, content })
  return data
}

export const addToCart = async (productId: number, quantity: number) => {
  const { data } = await apiPrivate.post('/carts', { productId, quantity })
  return data
}

export const getCart = async () => {
  const { data } = await apiPrivate.get('/carts')
  return data
}

export const deleteItemCart = async (id: number) => {
  const { data } = await apiPrivate.delete(`/carts/${id}`)
  return data
}


export const getWishlist = async () => {
  const { data } = await apiPrivate.get('/wishlist')
  return data
}

export const createWishlist = async (productId: number) => {
  const { data } = await apiPrivate.post('/wishlist', { productId })
  return data
}

export const deleteWishlist = async (productId: number) => {
  const { data } = await apiPrivate.delete(`/wishlist/${productId}`)
  return data
}


export const postOrder = async (customShippingAddress: string, paymentMethod: string) => {
  const { data } = await apiPrivate.post("/orders", { customShippingAddress, paymentMethod })
  return data
}

export const handleApiError = (error: any) => {
  console.error('API Error:', error)
  if (error.response) {
    console.error('Data:', error.response.data)
    console.error('Status:', error.response.status)
    console.error('Headers:', error.response.headers)
  } else if (error.request) {
    console.error('Request:', error.request)
  } else {
    console.error('Error:', error.message)
  }
  throw error
}

export const withErrorHandling = <T>(fn: (...args: any[]) => Promise<T>) => {
  return async (...args: any[]): Promise<T> => {
    try {
      return await fn(...args)
    } catch (error) {
      handleApiError(error)
      throw error
    }
  }
}
