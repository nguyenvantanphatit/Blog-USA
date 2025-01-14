"use client"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from 'next/link'
import { ArrowRight, MoveUpRight, ShoppingCartIcon } from 'lucide-react'
import { motion } from 'framer-motion';
import { handleAddToCart } from '@/lib/cartUtils'

const giftIdeas = [
  { id: 7, name: 'Đại Cát Đại Lợi 01', price: '1.500.000đ', imageUrl: '/Gift/13.webp', link: "" },
  { id: 8, name: 'Đại Cát Đại Lợi 02', price: '350.000đ', imageUrl: '/Gift/14.webp', link: "" },
  { id: 9, name: 'Đại Cát Đại Lợi 03', price: '750.000đ', imageUrl: '/Gift/15.webp', link: "" },
  { id: 10, name: 'Đại Cát Đại Lợi 04', price: '450.000đ', imageUrl: '/Gift/16.webp', link: "" },
  { id: 11, name: 'Đại Cát Đại Lợi 01', price: '1.500.000đ', imageUrl: '/Gift/13.webp', link: "" },
]

export default function GiftIdeas() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 text-center mb-12">Ý Tưởng Quà Tặng</h2>
        <div className="md:hidden">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {giftIdeas.map((gift, index) => (
                <CarouselItem key={index} className="basis-2/3 h-full flex">
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:opacity-5 rounded-2xl border "
                    >
                      <Link href={gift.link}>
                        <div className='relative mt-4 h-[290px] overflow-hidden group mx-auto rounded-md flex flex-col'>
                          <div className='flex items-end justify-end px-4'>
                            <p className='bg-red-600 group-hover:bg-red-500 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-xs font-medium py-1 text-white mb-1'>
                              SALE
                            </p>
                          </div>
                          <Image
                            className='object-cover h-full m-0 p-0'
                            src={gift.imageUrl}
                            alt={gift.name}
                            width={350}
                            height={240}
                          />
                        </div>
                        <div className='px-4 pb-4 text-white w-full'>
                          <h1 className='md:text-xl font-semibold'>{gift.name}</h1>
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
          {giftIdeas.map((gift, index) => (
            <>
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:opacity-5 rounded-2xl border "
              >
                <Link href={gift.link}>
                  <div className='relative '>
                    <div className='relative mt-4 h-[300px] overflow-hidden group mx-auto rounded-md flex flex-col'>
                      <div className='flex items-end justify-end px-4'>
                        <p className='bg-red-600 group-hover:bg-red-500 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-xs font-medium py-1 text-white mb-1'>
                          SALE
                        </p>
                      </div>
                      <Image
                        className='group-hover:opacity-0 transition-opacity duration-500 object-cover h-full m-0 p-0'
                        src={gift.imageUrl}
                        alt={gift.name}
                        width={350}
                        height={240}
                      />
                      <Image
                        className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity object-cover duration-300 h-full m-0 p-0'
                        src={gift.imageUrl}
                        alt={gift.name}
                        width={350}
                        height={240}
                        aria-hidden='true'
                      />
                    </div>
                  </div>
                </Link>
                <div className='p-4 text-white w-full'>
                  <h1 className='md:text-xl font-semibold'>{gift.name}</h1>
                </div>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
