"use client"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronsRight } from 'lucide-react';
const recipes = [
  {
    name: 'Bánh Chưng Truyền Thống Tết Nguyên Đán',
    image: '/Recipes/nau-1.jpg',
    prepTime: '4 giờ',
    difficulty: 'Trung bình',
    link: ''
  },
  {
    name: 'Gà Luộc Nguyên Con Truyền Thống',
    image: '/Recipes/nau-2.jpg',
    prepTime: '1 giờ',
    difficulty: 'Dễ',
    link: ''
  },
  {
    name: 'Nem Rán Ngày Tết',
    image: '/Recipes/nau-3.jpg',
    prepTime: '2 giờ',
    difficulty: 'Trung bình',
    link: ''
  },
  {
    name: 'Thịt Kho Hột Vịt Ngon Mềm',
    image: '/Recipes/nau-1.jpg',
    prepTime: '3 giờ',
    difficulty: 'Trung bình',
    link: ''
  },
  {
    name: 'Nem Rán Ngày Tết',
    image: '/Recipes/nau-3.jpg',
    prepTime: '2 giờ',
    difficulty: 'Trung bình',
    link: ''
  },
];


export default function TetRecipes() {
  return (
    <>
      <section className="relative pb-8 mt-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-800 text-center mb-4">Công Thức Nấu Ăn Ngày Tết</h2>
          <div className="md:hidden">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {recipes.map((recipe, index) => (
                  <CarouselItem key={index} className="basis-2/3 h-full flex">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-full h-full"
                    >
                      <Link key={index} href={recipe.link}>
                        <div className='relative rounded-2xl mt-4 h-[290px] group mx-auto dark:bg-black  bg-white dark:border-0 border overflow-hidden dark:text-white text-black '>
                          <figure className='w-full h-full rounded-md  overflow-hidden'>
                            <Image
                              src={recipe.image}
                              alt={recipe.name}
                              width={600}
                              height={600}
                              className='h-full w-full  scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300'
                            />
                          </figure>
                          <article className='flex items-center p-2 text-white space-y-2 absolute -bottom-2 group-hover:bottom-0 transition-all duration-300 '>
                            <h1 className='text-xl font-semibold w-full'>
                              {recipe.name}
                            </h1>
                          </article>
                        </div>
                      </Link>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-fr">
            {recipes.map((recipe, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link key={index} href={recipe.link}>
                  <div className='relative rounded-2xl mt-4 h-[290px] group mx-auto dark:bg-black  bg-white dark:border-0 border overflow-hidden dark:text-white text-black '>
                    <figure className='w-full h-full rounded-md  overflow-hidden'>
                      <Image
                        src={recipe.image}
                        alt={recipe.name}
                        width={600}
                        height={600}
                        className='h-full w-full  scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300'
                      />
                    </figure>
                    <article className='flex items-center p-2 text-white space-y-2 absolute -bottom-2 group-hover:bottom-0 transition-all duration-300 '>
                      <h1 className='text-xl font-semibold w-full'>
                        {recipe.name}
                      </h1>
                    </article>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
