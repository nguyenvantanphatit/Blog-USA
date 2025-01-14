"use client"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from 'next/link'
import { motion } from 'framer-motion';
import { ChevronsRight } from 'lucide-react';
const traditions = [
  {
    id: 1,
    title: 'Lì Xì',
    description: 'Tục lệ tặng phong bao màu đỏ chứa tiền mới, mang ý nghĩa may mắn và thịnh vượng.',
    image: '/Traditional/lixivip.webp',
    link: '#'
  },
  {
    id: 2,
    title: 'Cây Nêu',
    description: 'Cây tre được trang trí và dựng trước nhà để xua đuổi tà ma và mang lại may mắn.',
    image: '/Traditional/cayneu.webp',
    link: '#'
  },
  {
    id: 3,
    title: 'Gói Bánh Chưng',
    description: 'Món ăn truyền thống không thể thiếu trong dịp Tết, tượng trưng cho đất trời.',
    image: '/Traditional/goibanhchung.webp',
    link: '#'
  },
  {
    id: 4,
    title: 'Gói Bánh Chưng',
    description: 'Món ăn truyền thống không thể thiếu trong dịp Tết, tượng trưng cho đất trời.',
    image: '/Traditional/goibanhchung.webp',
    link: '#'
  },
  {
    id: 5,
    title: 'Lì Xì',
    description: 'Tục lệ tặng phong bao màu đỏ chứa tiền mới, mang ý nghĩa may mắn và thịnh vượng.',
    image: '/Traditional/lixivip.webp',
    link: '#'
  },
]

export default function TetTraditions() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 text-center mb-12">Phong Tục Tết Cổ Truyền</h2>
        {/* Hiển thị Carousel trên điện thoại */}
        <div className="md:hidden">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {traditions.map((tradition, index) => (
                <CarouselItem key={tradition.id} className="basis-2/3 h-full flex">
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-full h-full"
                    >
                      <Link key={tradition.id} href={tradition.link}>
                        <div className='relative rounded-2xl mt-4 h-[290px] group mx-auto dark:bg-black  bg-white dark:border-0 border overflow-hidden dark:text-white text-black '>
                          <figure className='w-full h-full rounded-md  overflow-hidden'>
                            <Image
                              src={tradition.image}
                              alt={tradition.title}
                              width={600}
                              height={600}
                              className='h-full w-full  scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300'
                            />
                          </figure>
                          <article className='flex items-center p-2 text-white space-y-2 absolute -bottom-2 group-hover:bottom-0 transition-all duration-300 '>
                            <h1 className='text-xl font-semibold w-full'>
                              {tradition.title}
                            </h1>
                          </article>
                        </div>
                      </Link>
                    </motion.div>
                  </>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-6 auto-rows-fr">
          {traditions.map((tradition, index) => (
            <>
              <motion.div
                key={tradition.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link key={tradition.id} href={tradition.link}>
                  <div className='relative rounded-2xl mt-4 h-[300px] group mx-auto dark:bg-black  bg-white dark:border-0 border overflow-hidden dark:text-white text-black '>
                    <figure className='w-full h-full rounded-md overflow-hidden'>
                      <Image
                        src={tradition.image}
                        alt={tradition.title}
                        width={600}
                        height={600}
                        className='h-full w-full  scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300'
                      />
                    </figure>
                    <article className='flex items-center p-2 text-white space-y-2 absolute -bottom-2 group-hover:bottom-0 transition-all duration-300 '>
                      <h1 className='text-xl font-semibold w-full'>
                        {tradition.title}
                      </h1>
                    </article>
                  </div>
                </Link>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
