"use client"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from 'next/link'
import { motion } from 'framer-motion';
const products = [
  { id: 1, name: 'Lộc Xuân Phát Tài 01', price: '250.000đ', imageUrl: '/Gift/1.webp', link: '#' },
  { id: 2, name: 'Lộc Xuân Phát Tài 02', price: '450.000đ', imageUrl: '/Gift/2.webp', link: '#' },
  { id: 3, name: 'Lộc Xuân Phát Tài 03', price: '850.000đ', imageUrl: '/Gift/3.webp', link: '#' },
  { id: 4, name: 'Lộc Xuân Phát Tài 04', price: '50.000đ', imageUrl: '/Gift/4.webp', link: '#' },
  { id: 5, name: 'Lộc Xuân Phát Tài 04', price: '50.000đ', imageUrl: '/Gift/1.webp', link: '#' },
]

export default function FeaturedProducts() {
  return (

    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 text-center mb-4">Sản Phẩm Nổi Bật</h2>
        <div className="md:hidden">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={product.id} className="basis-2/3 h-full flex">
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:opacity-5 rounded-2xl border "
                    >
                      <Link href={product.link}>
                        <div className='relative mt-4 h-[290px] overflow-hidden group mx-auto rounded-md flex flex-col'>
                          <div className='flex items-end justify-end px-4'>
                            <p className='bg-red-600 group-hover:bg-red-500 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-xs font-medium py-1 text-white mb-1'>
                              SALE
                            </p>
                          </div>
                          <Image
                            className='object-cover h-full m-0 p-0'
                            src={product.imageUrl}
                            alt={product.name}
                            width={350}
                            height={200}
                          />
                        </div>
                        <div className='px-4 pb-4 text-white w-full'>
                          <h1 className='md:text-xl font-semibold'>{product.name}</h1>
                        </div>
                      </Link>
                    </motion.div>
                  </>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-fr">
          {products.map((product, index) => (
            <>
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:opacity-5 rounded-2xl border "
              >
                <Link href={product.link}>
                  <div className='relative mt-4 h-[300px] overflow-hidden group mx-auto rounded-md flex flex-col'>
                    <div className='flex items-end justify-end px-4'>
                      <p className='bg-red-600 group-hover:bg-red-500 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-xs font-medium py-1 text-white mb-1'>
                        SALE
                      </p>
                    </div>
                    <div className='w-full h-full'>
                      <Image
                        className='group-hover:opacity-0 transition-opacity duration-500  object-cover h-full m-0 p-0'
                        src={product.imageUrl}
                        alt={product.name}
                        width={350}
                        height={200}
                      />
                      <Image
                        className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity object-cover duration-300  h-full  m-0 p-0'
                        src={product.imageUrl}
                        alt={product.name}
                        width={350}
                        height={200}
                        aria-hidden='true'
                      />
                    </div>
                  </div>
                </Link>
                <div className='p-4 text-white w-full'>
                  <h1 className='md:text-xl font-semibold'>{product.name}</h1>
                </div>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}