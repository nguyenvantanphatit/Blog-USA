"use client"
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, MoveUpRight, ShoppingCartIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Product } from '@/types/types'
import ProductPagination from './Pagination'
import { createWishlist } from '@/lib/api'
import { handleAddToCart } from '@/lib/cartUtils'
import { formatToVND } from '@/lib/convertVND'
import { Suspense } from 'react';

const convertCategoryName = (category: string): string => {
  const conversions: { [key: string]: string } = {
    'Đại Cát': 'dai-cat',
    'Đại Lộc': 'dai-loc',
  };
  return conversions[category] || category.toLowerCase().replace(/\s+/g, '-');
};

const SearchParamsWrapper = () => {
  const searchParams = useSearchParams();
  return null;
};

export default function ProductGrid({ initialProducts }: { initialProducts: Product[] }) {
  const router = useRouter()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts)
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return parseInt(params.get("page") || "1", 8);
    }
    return 1;
  })
  const [productsPerPage] = useState(8)
  const [sortOption, setSortOption] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const categoryFilterParam = params.get('categoryFilter')
    if (categoryFilterParam) {
      setCategoryFilter(categoryFilterParam)
    }
  }, [])

  useEffect(() => {
    let result = [...initialProducts]

    // Apply search filter
    if (searchTerm) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply category filter
    if (categoryFilter) {
      result = result.filter(product => convertCategoryName(product.Category.name) === categoryFilter)
    }

    // Apply sorting
    if (sortOption === 'price-asc') {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    } else if (sortOption === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortOption === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name))
    }

    setFilteredProducts(result)
  }, [initialProducts, searchTerm, sortOption, categoryFilter])


  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const smoothScrollToTop = () => {
    const startPosition = window.scrollY;
    const duration = 300;
    const startTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      window.scrollTo(0, startPosition * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push(`/product?page=${pageNumber}`, { scroll: true });
    smoothScrollToTop();
  };


  const handleSortChange = (value: string) => {
    setSortOption(value === 'all' ? '' : value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleCategoryChange = (value: string) => {
    const newCategoryFilter = value === 'all' ? '' : value;
    setCategoryFilter(newCategoryFilter);
    const newUrl = newCategoryFilter
      ? `/product?categoryFilter=${convertCategoryName(newCategoryFilter)}`
      : '/product';
    router.push(newUrl, { scroll: true });
  }
  console.log("product", filteredProducts)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsWrapper />
      <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 2xl:px-0">
          <nav className="flex my-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                  <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                  </svg>
                  <p className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">Products</p>
                </div>
              </li>
            </ol>
          </nav>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <Input
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="max-w-sm"
            />
            <div className="flex gap-4">
              <Select onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Price</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="dai-cat">Đại Cát</SelectItem>
                  <SelectItem value="dai-loc">Đại Lộc</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {currentProducts.sort((a, b) => a.id - b.id).map((product, index) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <ProductPagination
            currentPage={currentPage}
            totalProducts={filteredProducts.length}
            productsPerPage={productsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </Suspense>
  )
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isActive, setIsActive] = useState(false)
  const handleAddWishlist = async (productId: number) => {
    setIsActive((prevState) => !prevState)
    await createWishlist(productId)
  }
  console.log("product", product)
  return (
    <>
      <div
        key={product.id}
        className="group relative before:absolute before:inset-0 before:opacity-5 rounded-2xl border "
      >
        <div className='relative h-[320px] overflow-hidden group mx-auto rounded-t-2xl flex flex-col bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808]'>
          <motion.button
            className='absolute top-2 right-3 z-20 text-2xl text-white'
            onClick={() => handleAddWishlist(product.id)}
            animate={{ scale: isActive ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 1000, damping: 10 }}
          >
            <Heart className={isActive ? 'fill-black' : ''} />
          </motion.button>
          <Link href={`product/${product.slug}`}>
            <div className='w-full h-full'>
              <Image
                className='group-hover:opacity-0 transition-opacity duration-500 object-cover h-full m-0 p-0'
                src={product.ProductImages[0]?.imageUrl || "/placeholder.svg"}
                alt={product.name}
                width={350}
                height={200}
              />
              <Image
                className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity object-cover duration-300  h-full  m-0 p-0'
                src={product.ProductImages[0]?.imageUrl || "/placeholder.svg"}
                alt={product.name}
                width={350}
                height={200}
                aria-hidden='true'
              />
            </div>
          </Link>
        </div>
        <div className='p-3 text-black w-full'>
          <div className='flex flex-col md:flex-row justify-between'>
            <h1 className='font-semibold md:text-xl text-lg'>
              {product.name}
            </h1>
            <span className='font-medium text-xl text-base-dark'>{formatToVND(product.price)}</span>
          </div>
          <div className="flex items-center justify-between">
            <Button onClick={(e) => {
              e.preventDefault()
              handleAddToCart(product)
            }} className='rounded-full' variant="outline" size="icon">
              <ShoppingCartIcon className="h-4 w-4" />
            </Button>
            <Link href={`product/${product.slug}`}>
              <Button className='rounded-full' variant="outline" size="icon">
                <MoveUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

